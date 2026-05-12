# 机器人控制模型增量训练 — 系统设计文档

> **适用项目**: `工程文件_EM动作函数下载` (乐聚机器人动作函数工程)
> **核心思路**: 用已有规则生成基础模型 → 边跑边纠错 → 每错一次学一次 → 机器人越跑越聪明
> **前置条件**: PC 端 Python 3.8+、PyTorch、项目根目录即本文档所在目录

---

## 一、系统总体架构

```
┌──────────────────────────────────────────────┐
│                  机器人端 (Lua)                 │
│                                              │
│  ┌─────────┐    ┌──────────┐    ┌─────────┐  │
│  │ 传感器采集 │───→│ WiFi/串口 │───→│ 动作执行  │  │
│  │lib.lua   │    │ 发送模块  │    │Actionlib │  │
│  └─────────┘    └────┬─────┘    └────┬────┘  │
│                      │               ▲       │
└──────────────────────┼───────────────┼───────┘
                       │               │
       传感器数据 [Tag位姿,颜色,状态]  动作编号 (整数)
                       │               │
┌──────────────────────┼───────────────┼───────┐
│                   PC 端 (Python)              │
│                      ▼               │       │
│  ┌──────────┐   ┌──────────┐   ┌──────────┐  │
│  │ 模型推理服务 │──→│ 后处理/映射 │──→│ 返回动作ID │  │
│  │ model_    │   │ action_   │   │          │  │
│  │ server.py │   │ mapper.py │   │          │  │
│  └──────────┘   └──────────┘   └──────────┘  │
│       ▲                                       │
│       │  纠错触发                              │
│  ┌──────────┐   ┌──────────┐                 │
│  │ 纠错训练脚本 │←──│ 错误日志   │                 │
│  │ correct_ │   │error.txt │                 │
│  │ and_train│   └──────────┘                 │
│  └──────────┘                                │
└──────────────────────────────────────────────┘
```

**数据流说明**:

1. **推理路径**: 机器人采集传感器 → 发送到 PC 模型服务 → 模型预测动作编号 → 返回给机器人 → Lua 执行动作
2. **纠错路径**: 人工发现错误 → 按记录键保存当前传感器数据 → PC 端运行纠错脚本 → 增量训练更新模型

---

## 二、传感器输入向量设计

### 2.1 输入向量定义 (基于真实 Tag 码导航系统)

本项目实际使用 **AR Tag 码视觉定位** 作为核心导航方式（见 [robot_common.py](file:///home/zhang/桌面/机器人/Platform_Jushen_Code/jushen_code_CRAIC/test/src/robot_common.py) 中的 `align_to_tag()` 和 `STRATEGY_TABLE`）。传感器向量基于 Tag 码返回的位姿信息 + 颜色方块位置 + 机器人状态：

| 维度 | 含义 | 数据来源 | 取值范围 | 说明 |
|------|------|---------|---------|------|
| 0 | Tag_X | `marker[1]` | -2.0 ~ 2.0 (米) | Tag 码前后距离（正=前方，负=后方） |
| 1 | Tag_Y | `marker[2]` | -2.0 ~ 2.0 (米) | Tag 码左右偏移（正=右侧，负=左侧） |
| 2 | Tag_Theta | `marker[3] + 90` | -180 ~ 180 (度) | Tag 码相对角度（0=正对） |
| 3 | Tag_ID | `marker[0]` | 0 ~ 9 | 当前看到的 Tag 码 ID（-1=未看到） |
| 4 | Block_X | 颜色识别 | 0 ~ 640 (像素) | 目标颜色方块在图像中的 X 坐标 |
| 5 | Block_Y | 颜色识别 | 0 ~ 480 (像素) | 目标颜色方块在图像中的 Y 坐标 |
| 6 | Block_Area | 颜色识别 | 0 ~ 10000 (像素²) | 目标颜色方块的轮廓面积 |
| 7 | Hand_Has_Box | 状态变量 | 0 / 1 | 是否手持方块（0=空手，1=抱箱） |

> **设计依据**: 此向量直接对应 [robot_common.py](file:///home/zhang/桌面/机器人/Platform_Jushen_Code/jushen_code_CRAIC/test/src/robot_common.py) 中 `STRATEGY_TABLE` 的判断维度 `(x, y, theta)` 和 `BOX_CONFIG` 的颜色方块定位 `(x, y, area)`，以及 `HandHaveBox` 状态标志。

### 2.2 Lua 端传感器采集函数 (新增)

在现有 `TempLib.lua` 末尾追加，不修改原有代码：

```lua
-- ===== 以下为模型推理新增函数 =====

function collectSensorVector()
    local vec = {}
    -- Tag 码位姿 (从 AR 识别结果获取)
    vec[1] = getTagX()          -- Tag 前后距离 (米)
    vec[2] = getTagY()          -- Tag 左右偏移 (米)
    vec[3] = getTagTheta()      -- Tag 相对角度 (度)
    vec[4] = getTagID()         -- 当前 Tag ID (-1=无)
    -- 颜色方块位置 (从摄像头获取)
    vec[5] = getColourOfAxis(0,0,0,'X')   -- 黑色方块 X 坐标
    vec[6] = getColourOfAxis(0,0,0,'Y')   -- 黑色方块 Y 坐标
    vec[7] = getColourOfAreaSize(0,0,0)   -- 黑色方块面积
    -- 机器人状态
    vec[8] = getHandState()     -- 手持状态 (0/1)
    return vec
end
```

---

## 三、动作空间设计

### 3.1 动作标签映射（基于真实动作幅度区间）

以下动作映射来源于 [action.py](file:///home/zhang/桌面/机器人/Platform_Jushen_Code/jushen_code_CRAIC/test/src/action.py) 中的 `ACTION_MAP`，第三列为实际移动幅度（厘米/度）：

| 动作ID | 动作Key | 中文名称 | 幅度 | 类型 | 适用状态 |
|--------|---------|---------|------|------|---------|
| 0 | `stand` | 站立/停止 | 0 | 停止 | 通用 |
| 1 | `forward_q` | 向前快走3步 | **14 cm** | 大步前进 | 空手 |
| 2 | `forward` | 向前慢走1步 | **7 cm** | 中步前进 | 空手 |
| 3 | `forward_s` | 向前微调 | **2 cm** | 精调前进 | 空手 |
| 4 | `back` | 向后慢走1步 | **10 cm** | 中步后退 | 空手 |
| 5 | `back_s` | 向后微调 | **2 cm** | 精调后退 | 空手 |
| 6 | `left` | 向左平移1步 | **5 cm** | 中步左移 | 空手 |
| 7 | `left_s` | 小左移 | **2 cm** | 精调左移 | 空手 |
| 8 | `right` | 向右平移1步 | **5 cm** | 中步右移 | 空手 |
| 9 | `right_s` | 小右移 | **2 cm** | 精调右移 | 空手 |
| 10 | `turnleft` | 向左转动1步 | **22°** | 大步左转 | 空手 |
| 11 | `turnleft_s` | 小左转 | **7°** | 精调左转 | 空手 |
| 12 | `turnright` | 向右转动1步 | **17°** | 大步右转 | 空手 |
| 13 | `turnright_s` | 小右转 | **2°** | 精调右转 | 空手 |
| 14 | `box_forward_q` | 抱箱快走3步 | ~14 cm | 大步前进 | 抱箱 |
| 15 | `box_forward` | 抱快递慢走 | ~7 cm | 中步前进 | 抱箱 |
| 16 | `box_forward_s` | 抱箱微调前进 | **2 cm** | 精调前进 | 抱箱 |
| 17 | `box_back` | 抱箱后退 | ~10 cm | 中步后退 | 抱箱 |
| 18 | `box_back_s` | 抱箱微调后退 | **2 cm** | 精调后退 | 抱箱 |
| 19 | `box_left` | 抱快递左移 | **5 cm** | 中步左移 | 抱箱 |
| 20 | `box_left_s` | 抱箱微调左移 | **2 cm** | 精调左移 | 抱箱 |
| 21 | `box_right` | 抱快递右移 | **5 cm** | 中步右移 | 抱箱 |
| 22 | `box_right_s` | 抱箱微调右移 | **2 cm** | 精调右移 | 抱箱 |
| 23 | `box_turnleft` | 抱快递左转 | **16°** | 中步左转 | 抱箱 |
| 24 | `box_turnright` | 抱快递右转2 | ~17° | 中步右转 | 抱箱 |
| 25 | `box_turnright_q` | 抱箱猛烈右转 | ~22° | 大步右转 | 抱箱 |

> **动作总数**: 26 个（0~25），覆盖空手和抱箱两种状态下的全部导航动作。
> **幅度来源**: 标注 **粗体** 的数值来自 [action.py](file:///home/zhang/桌面/机器人/Platform_Jushen_Code/jushen_code_CRAIC/test/src/action.py) `ACTION_MAP` 第三列；标注 `~` 的为根据同类动作推算的近似值。

### 3.2 动作映射文件 (action_mapper.py)

```python
# 动作ID → 动作Key + 幅度 + 类型
ACTION_ID_MAP = {
    0:  ("stand",             0,   "停止"),
    1:  ("forward_q",         14,  "空手-大步前进"),
    2:  ("forward",           7,   "空手-中步前进"),
    3:  ("forward_s",         2,   "空手-精调前进"),
    4:  ("back",              10,  "空手-中步后退"),
    5:  ("back_s",            2,   "空手-精调后退"),
    6:  ("left",              5,   "空手-中步左移"),
    7:  ("left_s",            2,   "空手-精调左移"),
    8:  ("right",             5,   "空手-中步右移"),
    9:  ("right_s",           2,   "空手-精调右移"),
    10: ("turnleft",          22,  "空手-大步左转"),
    11: ("turnleft_s",        7,   "空手-精调左转"),
    12: ("turnright",         17,  "空手-大步右转"),
    13: ("turnright_s",       2,   "空手-精调右转"),
    14: ("box_forward_q",     14,  "抱箱-大步前进"),
    15: ("box_forward",       7,   "抱箱-中步前进"),
    16: ("box_forward_s",     2,   "抱箱-精调前进"),
    17: ("box_back",          10,  "抱箱-中步后退"),
    18: ("box_back_s",        2,   "抱箱-精调后退"),
    19: ("box_left",          5,   "抱箱-中步左移"),
    20: ("box_left_s",        2,   "抱箱-精调左移"),
    21: ("box_right",         5,   "抱箱-中步右移"),
    22: ("box_right_s",       2,   "抱箱-精调右移"),
    23: ("box_turnleft",      16,  "抱箱-中步左转"),
    24: ("box_turnright",     17,  "抱箱-中步右转"),
    25: ("box_turnright_q",   22,  "抱箱-大步右转"),
}

NUM_ACTIONS = len(ACTION_ID_MAP)

# 动作Key → 动作ID 反向映射
ACTION_KEY_TO_ID = {v[0]: k for k, v in ACTION_ID_MAP.items()}
```

---

## 四、动作触发区间规则（核心）

### 4.1 规则来源

以下规则直接来源于 [robot_common.py](file:///home/zhang/桌面/机器人/Platform_Jushen_Code/jushen_code_CRAIC/test/src/robot_common.py) 中的 `STRATEGY_TABLE`，该表定义了 Tag 码导航时每个动作的触发条件。每条规则包含：**触发维度**、**数值区间**、**触发的动作**。

```
STRATEGY_TABLE 原始定义:
('x',     val < tar - 0.27,   back/box_back,        太近-大步后退)
('x',     val < tar - 0.10,   back/box_back,        太近-中步后退)
('x',     val < tar - 0.02,   back_s/box_back_s,    太近-精调后退)
('theta', val > tar + 13,     turnleft/box_turnleft,    大偏-大步左转)
('theta', val < tar - 13,     turnright/box_turnright,  大偏-大步右转)
('y',     val > tar + 0.05,   left/box_left,        侧偏-中步左移)
('y',     val < tar - 0.05,   right/box_right,      侧偏-中步右移)
('x',     val > tar + 0.14,   forward_q/box_forward_q,  太远-大步前进)
('theta', val > tar + tol,    turnleft_s/box_turnleft,  微调-精调左转)
('theta', val < tar - tol,    turnright_s/box_turnright,微调-精调右转)
('y',     val > tar + tol,    left_s/box_left_s,    微调-精调左移)
('y',     val < tar - tol,    right_s/box_right_s,  微调-精调右移)
('x',     val > tar + 0.08,   forward/box_forward,  微调-中步前进)
('x',     val > tar + tol,    forward_s/box_forward_s,  精调-微步前进)
```

### 4.2 区间规则数值化

将上述策略表转化为可量化的区间规则（假设目标位姿 `tar_x=0, tar_y=0, tar_theta=0`, 容差 `tol_x=0.02, tol_y=0.02, tol_theta=3`）：

| 规则编号 | 触发条件 | 空手动作ID | 抱箱动作ID | 动作幅度 | 说明 |
|---------|---------|-----------|-----------|---------|------|
| R1 | `Tag_X < -0.27` | 4 (back, 10cm) | 17 (box_back, 10cm) | 10 cm | 太近-大步后退 |
| R2 | `-0.27 ≤ Tag_X < -0.10` | 4 (back, 10cm) | 17 (box_back, 10cm) | 10 cm | 太近-中步后退 |
| R3 | `-0.10 ≤ Tag_X < -0.02` | 5 (back_s, 2cm) | 18 (box_back_s, 2cm) | 2 cm | 太近-精调后退 |
| R4 | `Tag_Theta > 13` | 10 (turnleft, 22°) | 23 (box_turnleft, 16°) | 22°/16° | 大偏-大步左转 |
| R5 | `Tag_Theta < -13` | 12 (turnright, 17°) | 24 (box_turnright, 17°) | 17° | 大偏-大步右转 |
| R6 | `Tag_Y > 0.05` | 6 (left, 5cm) | 19 (box_left, 5cm) | 5 cm | 侧偏-中步左移 |
| R7 | `Tag_Y < -0.05` | 8 (right, 5cm) | 21 (box_right, 5cm) | 5 cm | 侧偏-中步右移 |
| R8 | `Tag_X > 0.14` | 1 (forward_q, 14cm) | 14 (box_forward_q, 14cm) | 14 cm | 太远-大步前进 |
| R9 | `3 < Tag_Theta ≤ 13` | 11 (turnleft_s, 7°) | 23 (box_turnleft, 16°) | 7°/16° | 微偏-精调左转 |
| R10 | `-13 ≤ Tag_Theta < -3` | 13 (turnright_s, 2°) | 24 (box_turnright, 17°) | 2°/17° | 微偏-精调右转 |
| R11 | `0.02 < Tag_Y ≤ 0.05` | 7 (left_s, 2cm) | 20 (box_left_s, 2cm) | 2 cm | 微偏-精调左移 |
| R12 | `-0.05 ≤ Tag_Y < -0.02` | 9 (right_s, 2cm) | 22 (box_right_s, 2cm) | 2 cm | 微偏-精调右移 |
| R13 | `0.08 < Tag_X ≤ 0.14` | 2 (forward, 7cm) | 15 (box_forward, 7cm) | 7 cm | 微远-中步前进 |
| R14 | `0.02 < Tag_X ≤ 0.08` | 3 (forward_s, 2cm) | 16 (box_forward_s, 2cm) | 2 cm | 微远-精调前进 |
| R15 | 所有维度在容差内 | 0 (stand) | 0 (stand) | 0 | 已对齐-停止 |

> **关键设计**: 每个区间规则精确对应一个动作及其实际移动幅度。例如 R8（Tag_X > 0.14m）触发 `forward_q`（14cm），意味着机器人会大步前进 14cm 来缩小与目标的距离。

---

## 五、PC 端 Python 模块设计

### 5.1 模块列表与职责

| 模块 | 职责 | 输入 | 输出 |
|------|------|------|------|
| `generate_data.py` | 基于区间规则生成训练数据 | 区间规则表 | `robot_X.npy`, `robot_Y.npy` |
| `train_base.py` | 训练初始模型 (全量) | `robot_X/Y.npy`, 超参数 | `robot_base.pth` |
| `model_server.py` | 模型推理服务 (TCP) | 传感器向量 JSON | 动作ID JSON |
| `correct_and_train.py` | 纠错+增量训练 | `robot_error.txt` | 更新后的 `robot_base.pth` |
| `action_mapper.py` | 动作ID映射工具 | action_id | 动作Key + 幅度 |

### 5.2 generate_data.py 规则设计（基于真实区间）

```python
"""
基于 STRATEGY_TABLE 真实区间规则自动生成训练数据。
每条规则对应 robot_common.py 中 Tag 码导航的一个触发条件，
生成带噪声的数据让模型学会在正确的区间选择正确的动作。
"""

import numpy as np

def generate_by_rules(num_per_rule=1000):
    """
    15条规则 × 1000条/规则 = 15000条基础数据
    覆盖空手(hand=0)和抱箱(hand=1)两种状态
    """
    X, Y = [], []

    def add_samples(tag_x_range, tag_y_range, tag_theta_range,
                    tag_id, block_x_range, block_y_range, block_area_range,
                    hand_state, label):
        """在指定区间内生成 num_per_rule 条带噪声样本"""
        for _ in range(num_per_rule):
            x = [
                np.random.uniform(*tag_x_range),        # Tag_X (米)
                np.random.uniform(*tag_y_range),        # Tag_Y (米)
                np.random.uniform(*tag_theta_range),    # Tag_Theta (度)
                tag_id,                                  # Tag_ID
                np.random.uniform(*block_x_range),      # Block_X (像素)
                np.random.uniform(*block_y_range),      # Block_Y (像素)
                np.random.uniform(*block_area_range),   # Block_Area
                hand_state,                              # Hand_Has_Box
            ]
            X.append(x)
            Y.append(label)

    # ==========================================
    # 空手状态规则 (hand_state = 0)
    # ==========================================

    # R1: Tag_X < -0.27 → 大步后退 back (ID=4, 10cm)
    add_samples((-2.0, -0.27), (-0.5, 0.5), (-30, 30),
                1, (0, 640), (0, 480), (0, 5000), 0, 4)

    # R2: -0.27 ≤ Tag_X < -0.10 → 中步后退 back (ID=4, 10cm)
    add_samples((-0.27, -0.10), (-0.3, 0.3), (-20, 20),
                1, (0, 640), (0, 480), (0, 5000), 0, 4)

    # R3: -0.10 ≤ Tag_X < -0.02 → 精调后退 back_s (ID=5, 2cm)
    add_samples((-0.10, -0.02), (-0.15, 0.15), (-10, 10),
                1, (0, 640), (0, 480), (0, 5000), 0, 5)

    # R4: Tag_Theta > 13 → 大步左转 turnleft (ID=10, 22°)
    add_samples((-0.5, 1.5), (-0.5, 0.5), (13, 90),
                1, (0, 640), (0, 480), (0, 5000), 0, 10)

    # R5: Tag_Theta < -13 → 大步右转 turnright (ID=12, 17°)
    add_samples((-0.5, 1.5), (-0.5, 0.5), (-90, -13),
                1, (0, 640), (0, 480), (0, 5000), 0, 12)

    # R6: Tag_Y > 0.05 → 中步左移 left (ID=6, 5cm)
    add_samples((-0.2, 1.0), (0.05, 0.5), (-15, 15),
                1, (0, 640), (0, 480), (0, 5000), 0, 6)

    # R7: Tag_Y < -0.05 → 中步右移 right (ID=8, 5cm)
    add_samples((-0.2, 1.0), (-0.5, -0.05), (-15, 15),
                1, (0, 640), (0, 480), (0, 5000), 0, 8)

    # R8: Tag_X > 0.14 → 大步前进 forward_q (ID=1, 14cm)
    add_samples((0.14, 2.0), (-0.3, 0.3), (-15, 15),
                1, (0, 640), (0, 480), (0, 5000), 0, 1)

    # R9: 3 < Tag_Theta ≤ 13 → 精调左转 turnleft_s (ID=11, 7°)
    add_samples((-0.2, 1.0), (-0.3, 0.3), (3, 13),
                1, (0, 640), (0, 480), (0, 5000), 0, 11)

    # R10: -13 ≤ Tag_Theta < -3 → 精调右转 turnright_s (ID=13, 2°)
    add_samples((-0.2, 1.0), (-0.3, 0.3), (-13, -3),
                1, (0, 640), (0, 480), (0, 5000), 0, 13)

    # R11: 0.02 < Tag_Y ≤ 0.05 → 精调左移 left_s (ID=7, 2cm)
    add_samples((-0.2, 0.5), (0.02, 0.05), (-8, 8),
                1, (0, 640), (0, 480), (0, 5000), 0, 7)

    # R12: -0.05 ≤ Tag_Y < -0.02 → 精调右移 right_s (ID=9, 2cm)
    add_samples((-0.2, 0.5), (-0.05, -0.02), (-8, 8),
                1, (0, 640), (0, 480), (0, 5000), 0, 9)

    # R13: 0.08 < Tag_X ≤ 0.14 → 中步前进 forward (ID=2, 7cm)
    add_samples((0.08, 0.14), (-0.15, 0.15), (-8, 8),
                1, (0, 640), (0, 480), (0, 5000), 0, 2)

    # R14: 0.02 < Tag_X ≤ 0.08 → 精调前进 forward_s (ID=3, 2cm)
    add_samples((0.02, 0.08), (-0.10, 0.10), (-5, 5),
                1, (0, 640), (0, 480), (0, 5000), 0, 3)

    # R15: 所有维度在容差内 → 停止 stand (ID=0)
    add_samples((-0.02, 0.02), (-0.02, 0.02), (-3, 3),
                1, (0, 640), (0, 480), (0, 5000), 0, 0)

    # ==========================================
    # 抱箱状态规则 (hand_state = 1)
    # 区间条件相同，但动作ID不同
    # ==========================================

    # R1_box: Tag_X < -0.27 → box_back (ID=17, 10cm)
    add_samples((-2.0, -0.27), (-0.5, 0.5), (-30, 30),
                1, (0, 640), (0, 480), (0, 5000), 1, 17)

    # R2_box: -0.27 ≤ Tag_X < -0.10 → box_back (ID=17)
    add_samples((-0.27, -0.10), (-0.3, 0.3), (-20, 20),
                1, (0, 640), (0, 480), (0, 5000), 1, 17)

    # R3_box: -0.10 ≤ Tag_X < -0.02 → box_back_s (ID=18, 2cm)
    add_samples((-0.10, -0.02), (-0.15, 0.15), (-10, 10),
                1, (0, 640), (0, 480), (0, 5000), 1, 18)

    # R4_box: Tag_Theta > 13 → box_turnleft (ID=23, 16°)
    add_samples((-0.5, 1.5), (-0.5, 0.5), (13, 90),
                1, (0, 640), (0, 480), (0, 5000), 1, 23)

    # R5_box: Tag_Theta < -13 → box_turnright (ID=24, 17°)
    add_samples((-0.5, 1.5), (-0.5, 0.5), (-90, -13),
                1, (0, 640), (0, 480), (0, 5000), 1, 24)

    # R6_box: Tag_Y > 0.05 → box_left (ID=19, 5cm)
    add_samples((-0.2, 1.0), (0.05, 0.5), (-15, 15),
                1, (0, 640), (0, 480), (0, 5000), 1, 19)

    # R7_box: Tag_Y < -0.05 → box_right (ID=21, 5cm)
    add_samples((-0.2, 1.0), (-0.5, -0.05), (-15, 15),
                1, (0, 640), (0, 480), (0, 5000), 1, 21)

    # R8_box: Tag_X > 0.14 → box_forward_q (ID=14, 14cm)
    add_samples((0.14, 2.0), (-0.3, 0.3), (-15, 15),
                1, (0, 640), (0, 480), (0, 5000), 1, 14)

    # R9_box: 3 < Tag_Theta ≤ 13 → box_turnleft (ID=23, 16°)
    add_samples((-0.2, 1.0), (-0.3, 0.3), (3, 13),
                1, (0, 640), (0, 480), (0, 5000), 1, 23)

    # R10_box: -13 ≤ Tag_Theta < -3 → box_turnright (ID=24, 17°)
    add_samples((-0.2, 1.0), (-0.3, 0.3), (-13, -3),
                1, (0, 640), (0, 480), (0, 5000), 1, 24)

    # R11_box: 0.02 < Tag_Y ≤ 0.05 → box_left_s (ID=20, 2cm)
    add_samples((-0.2, 0.5), (0.02, 0.05), (-8, 8),
                1, (0, 640), (0, 480), (0, 5000), 1, 20)

    # R12_box: -0.05 ≤ Tag_Y < -0.02 → box_right_s (ID=22, 2cm)
    add_samples((-0.2, 0.5), (-0.05, -0.02), (-8, 8),
                1, (0, 640), (0, 480), (0, 5000), 1, 22)

    # R13_box: 0.08 < Tag_X ≤ 0.14 → box_forward (ID=15, 7cm)
    add_samples((0.08, 0.14), (-0.15, 0.15), (-8, 8),
                1, (0, 640), (0, 480), (0, 5000), 1, 15)

    # R14_box: 0.02 < Tag_X ≤ 0.08 → box_forward_s (ID=16, 2cm)
    add_samples((0.02, 0.08), (-0.10, 0.10), (-5, 5),
                1, (0, 640), (0, 480), (0, 5000), 1, 16)

    # R15_box: 所有维度在容差内 → stand (ID=0)
    add_samples((-0.02, 0.02), (-0.02, 0.02), (-3, 3),
                1, (0, 640), (0, 480), (0, 5000), 1, 0)

    # ==========================================
    # 无 Tag 码时的颜色趋近规则
    # ==========================================
    # 当 Tag_ID = -1 (看不到码)，依靠颜色方块位置导航

    # 方块在图像中心 → 前进
    add_samples((-1.0, 1.0), (-0.5, 0.5), (-30, 30),
                -1, (270, 370), (200, 280), (500, 5000), 0, 2)

    # 方块偏左 → 左转
    add_samples((-1.0, 1.0), (-0.5, 0.5), (-30, 30),
                -1, (0, 200), (0, 480), (200, 5000), 0, 10)

    # 方块偏右 → 右转
    add_samples((-1.0, 1.0), (-0.5, 0.5), (-30, 30),
                -1, (440, 640), (0, 480), (200, 5000), 0, 12)

    # 方块面积很大 → 已接近，停止
    add_samples((-0.5, 0.5), (-0.3, 0.3), (-15, 15),
                -1, (220, 420), (160, 320), (5000, 10000), 0, 0)

    X = np.array(X, dtype=np.float32)
    Y = np.array(Y, dtype=np.int64)

    # 打乱数据
    indices = np.random.permutation(len(X))
    return X[indices], Y[indices]


if __name__ == "__main__":
    import os
    os.makedirs("training_data", exist_ok=True)
    X, Y = generate_by_rules(num_per_rule=1000)
    np.save("training_data/robot_X.npy", X)
    np.save("training_data/robot_Y.npy", Y)
    print(f"生成 {len(X)} 条训练数据")
    print(f"X shape: {X.shape}, Y shape: {Y.shape}")
    print(f"动作分布: {np.bincount(Y)}")
```

### 5.3 train_base.py 模型训练

```python
"""
训练基础模型
输入: training_data/robot_X.npy, robot_Y.npy
输出: robot_base.pth
"""

import numpy as np
import torch
import torch.nn as nn
import torch.optim as optim

class SimpleMLP(nn.Module):
    def __init__(self, input_dim=8, hidden_dim=128, output_dim=26):
        super().__init__()
        self.net = nn.Sequential(
            nn.Linear(input_dim, hidden_dim),
            nn.ReLU(),
            nn.Dropout(0.2),
            nn.Linear(hidden_dim, hidden_dim),
            nn.ReLU(),
            nn.Dropout(0.2),
            nn.Linear(hidden_dim, hidden_dim // 2),
            nn.ReLU(),
            nn.Linear(hidden_dim // 2, output_dim),
        )

    def forward(self, x):
        return self.net(x)


def train():
    X = np.load("training_data/robot_X.npy")
    Y = np.load("training_data/robot_Y.npy")

    X_t = torch.tensor(X, dtype=torch.float32)
    Y_t = torch.tensor(Y, dtype=torch.long)

    dataset = torch.utils.data.TensorDataset(X_t, Y_t)
    loader = torch.utils.data.DataLoader(dataset, batch_size=128, shuffle=True)

    model = SimpleMLP(input_dim=8, hidden_dim=128, output_dim=26)
    optimizer = optim.Adam(model.parameters(), lr=0.001)
    criterion = nn.CrossEntropyLoss()

    for epoch in range(50):
        total_loss = 0
        for bx, by in loader:
            optimizer.zero_grad()
            loss = criterion(model(bx), by)
            loss.backward()
            optimizer.step()
            total_loss += loss.item()
        if epoch % 10 == 0:
            print(f"Epoch {epoch}: loss={total_loss/len(loader):.4f}")

    torch.save(model.state_dict(), "robot_base.pth")
    print("模型已保存: robot_base.pth")


if __name__ == "__main__":
    train()
```

### 5.4 model_server.py TCP 推理服务

```python
"""
TCP 模型推理服务
- 监听端口: 8888
- 协议: JSON over TCP, 每帧以 \n 结尾
- 请求: {"type":"sensor","data":[d0..d7]}
- 响应: {"type":"action","action_id":N}
"""

import socket, json
import torch
import numpy as np
from train_base import SimpleMLP

MODEL_PATH = "robot_base.pth"

class ModelServer:
    def __init__(self, host="0.0.0.0", port=8888):
        self.model = SimpleMLP(input_dim=8, hidden_dim=128, output_dim=26)
        self.model.load_state_dict(torch.load(MODEL_PATH, weights_only=True))
        self.model.eval()
        self.host = host
        self.port = port

    def predict(self, sensor_vec):
        x = torch.tensor(sensor_vec, dtype=torch.float32).unsqueeze(0)
        with torch.no_grad():
            logits = self.model(x)
            action_id = torch.argmax(logits, dim=1).item()
        return action_id

    def run(self):
        sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        sock.bind((self.host, self.port))
        sock.listen(1)
        print(f"模型服务已启动: {self.host}:{self.port}")
        while True:
            conn, addr = sock.accept()
            self.handle(conn)

    def handle(self, conn):
        buf = b""
        while True:
            data = conn.recv(1024)
            if not data:
                break
            buf += data
            while b'\n' in buf:
                line, buf = buf.split(b'\n', 1)
                response = self.process(line.decode())
                conn.sendall((json.dumps(response) + '\n').encode())

    def process(self, raw):
        try:
            msg = json.loads(raw)
            if msg.get("type") == "sensor":
                action_id = self.predict(msg["data"])
                return {"type": "action", "action_id": action_id}
        except:
            pass
        return {"type": "error", "msg": "invalid request"}


if __name__ == "__main__":
    server = ModelServer()
    server.run()
```

### 5.5 correct_and_train.py 纠错脚本

```python
"""
纠错 + 增量训练脚本
"""

import numpy as np
import torch
import torch.nn as nn
import torch.optim as optim
import subprocess
import sys
import os
from train_base import SimpleMLP

DATA_DIR = "training_data"
ERROR_FILE = "robot_error.txt"
X_FILE = os.path.join(DATA_DIR, "robot_X.npy")
Y_FILE = os.path.join(DATA_DIR, "robot_Y.npy")
MODEL_PATH = "robot_base.pth"

ACTION_NAMES = {
    0: "停止/站立",    1: "向前快走3步(14cm)", 2: "向前慢走1步(7cm)",
    3: "向前微调(2cm)", 4: "向后慢走1步(10cm)", 5: "向后微调(2cm)",
    6: "向左平移(5cm)", 7: "小左移(2cm)",      8: "向右平移(5cm)",
    9: "小右移(2cm)",   10: "左转(22°)",       11: "小左转(7°)",
    12: "右转(17°)",    13: "小右转(2°)",      14: "抱箱快走(14cm)",
    15: "抱箱慢走(7cm)",16: "抱箱微调前(2cm)", 17: "抱箱后退(10cm)",
    18: "抱箱微调后(2cm)",19: "抱箱左移(5cm)", 20: "抱箱微调左(2cm)",
    21: "抱箱右移(5cm)",22: "抱箱微调右(2cm)", 23: "抱箱左转(16°)",
    24: "抱箱右转(17°)",25: "抱箱猛右转(22°)",
}

def load_error_data():
    errors = []
    if not os.path.exists(ERROR_FILE):
        return errors
    with open(ERROR_FILE, "r") as f:
        for line in f:
            line = line.strip()
            if not line:
                continue
            parts = line.split("|")
            sensor = list(map(float, parts[0].split(",")))
            wrong_id = int(parts[1]) if len(parts) > 1 else -1
            errors.append((sensor, wrong_id))
    return errors

def interactive_correct(errors):
    new_X, new_Y = [], []
    for i, (sensor, wrong_id) in enumerate(errors):
        print(f"\n=== 错误记录 #{i+1} ===")
        print(f"Tag位姿: X={sensor[0]:.3f}m Y={sensor[1]:.3f}m "
              f"Theta={sensor[2]:.1f}° ID={int(sensor[3])}")
        print(f"方块: X={sensor[4]:.0f}px Y={sensor[5]:.0f}px "
              f"面积={sensor[6]:.0f}  手持={'是' if sensor[7] else '否'}")
        print(f"模型错误输出: {wrong_id} ({ACTION_NAMES.get(wrong_id, '未知')})")
        print("\n请选择正确动作:")
        for aid, name in ACTION_NAMES.items():
            print(f"  {aid:2d} → {name}")
        try:
            correct = int(input("正确动作: ").strip())
        except:
            correct = 0
        new_X.append(sensor)
        new_Y.append(correct)
        print(f"  已记录: {ACTION_NAMES.get(correct, '停止')}")
    return new_X, new_Y

def append_to_dataset(new_X, new_Y):
    os.makedirs(DATA_DIR, exist_ok=True)
    if os.path.exists(X_FILE):
        X = np.load(X_FILE).tolist()
        Y = np.load(Y_FILE).tolist()
    else:
        X, Y = [], []
    added = 0
    for x, y in zip(new_X, new_Y):
        rounded = [round(v, 3) for v in x]
        if rounded not in X:
            X.append(rounded)
            Y.append(y)
            added += 1
    np.save(X_FILE, np.array(X, dtype=np.float32))
    np.save(Y_FILE, np.array(Y, dtype=np.int64))
    return added

def incremental_train():
    X = np.load(X_FILE)
    Y = np.load(Y_FILE)
    model = SimpleMLP(input_dim=8, hidden_dim=128, output_dim=26)
    model.load_state_dict(torch.load(MODEL_PATH, weights_only=True))
    model.train()
    X_t = torch.tensor(X, dtype=torch.float32)
    Y_t = torch.tensor(Y, dtype=torch.long)
    dataset = torch.utils.data.TensorDataset(X_t, Y_t)
    loader = torch.utils.data.DataLoader(dataset, batch_size=64, shuffle=True)
    optimizer = optim.Adam(model.parameters(), lr=0.0005)
    criterion = nn.CrossEntropyLoss()
    for epoch in range(10):
        for bx, by in loader:
            optimizer.zero_grad()
            loss = criterion(model(bx), by)
            loss.backward()
            optimizer.step()
    torch.save(model.state_dict(), MODEL_PATH)
    return True

def restart_server():
    subprocess.run(["pkill", "-f", "model_server.py"], check=False)
    subprocess.Popen(["python", "model_server.py"],
                     stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    print("模型服务已自动重启")

if __name__ == "__main__":
    errors = load_error_data()
    if not errors:
        print("没有错误记录，无需纠错。")
        sys.exit(0)
    print(f"发现 {len(errors)} 条错误记录。进入纠错模式...")
    new_X, new_Y = interactive_correct(errors)
    added = append_to_dataset(new_X, new_Y)
    print(f"\n新增 {added} 条数据 (已自动去重)，数据集总量: {len(np.load(X_FILE))}")
    print("开始增量训练...")
    if incremental_train():
        print(f"训练完成，{len(errors)} 条错误已修正。")
        os.remove(ERROR_FILE)
    restart_server()
```

---

## 六、区间规则与动作幅度对照总表

| 区间条件 | 空手动作 | 幅度 | 抱箱动作 | 幅度 |
|---------|---------|------|---------|------|
| `Tag_X < -0.27` | `back` | 10 cm | `box_back` | 10 cm |
| `-0.27 ≤ Tag_X < -0.10` | `back` | 10 cm | `box_back` | 10 cm |
| `-0.10 ≤ Tag_X < -0.02` | `back_s` | 2 cm | `box_back_s` | 2 cm |
| `Tag_Theta > 13°` | `turnleft` | 22° | `box_turnleft` | 16° |
| `Tag_Theta < -13°` | `turnright` | 17° | `box_turnright` | 17° |
| `Tag_Y > 0.05` | `left` | 5 cm | `box_left` | 5 cm |
| `Tag_Y < -0.05` | `right` | 5 cm | `box_right` | 5 cm |
| `Tag_X > 0.14` | `forward_q` | 14 cm | `box_forward_q` | 14 cm |
| `3° < Tag_Theta ≤ 13°` | `turnleft_s` | 7° | `box_turnleft` | 16° |
| `-13° ≤ Tag_Theta < -3°` | `turnright_s` | 2° | `box_turnright` | 17° |
| `0.02 < Tag_Y ≤ 0.05` | `left_s` | 2 cm | `box_left_s` | 2 cm |
| `-0.05 ≤ Tag_Y < -0.02` | `right_s` | 2 cm | `box_right_s` | 2 cm |
| `0.08 < Tag_X ≤ 0.14` | `forward` | 7 cm | `box_forward` | 7 cm |
| `0.02 < Tag_X ≤ 0.08` | `forward_s` | 2 cm | `box_forward_s` | 2 cm |
| 容差内 | `stand` | 0 | `stand` | 0 |

---

## 七、文件清单与目录结构

```
工程文件_EM动作函数下载/
├── 【现有文件 - 不修改】
│   ├── main.lua / TempMain.lua
│   ├── lib.lua / TempLib.lua
│   ├── Actionlib.lua / TempActionlib.lua
│   ├── CustomAction.lua
│   ├── Musics.lua
│   └── src/ action/ custom/ import/
│
├── 【新增 - Python模块】
│   ├── action_mapper.py           ← 动作ID映射表 (26个动作+幅度)
│   ├── generate_data.py           ← 基于真实区间规则生成训练数据
│   ├── train_base.py              ← 训练基础模型 (8→128→26)
│   ├── model_server.py            ← TCP推理服务
│   └── correct_and_train.py       ← 纠错+增量训练
│
├── 【新增 - 数据/模型目录】
│   ├── training_data/
│   │   ├── robot_X.npy            ← 传感器数据 (N×8)
│   │   └── robot_Y.npy            ← 动作标签 (N,)
│   ├── robot_base.pth             ← 训练好的模型
│   └── robot_error.txt            ← 错误日志
│
└── Model/
    ├── ML增量训练设计文档.md        ← 本文档
    └── 项目结构分析文档.md
```

---

## 八、操作流程速查

### 一次性准备

```bash
# 步骤1: 基于真实区间规则生成训练数据 (~34000条)
python generate_data.py

# 步骤2: 训练初始模型
python train_base.py
# → robot_base.pth

# 步骤3: 启动推理服务
python model_server.py &
```

### 日常纠错

```
发现错误动作 → 按下错误记录键
    → 传感器数据写入 robot_error.txt
    → python correct_and_train.py
    → 交互式选择正确动作
    → 自动增量训练 + 重启服务
```

---

## 九、关键设计原则

1. **区间规则来源于真实代码**: 所有触发区间直接取自 [robot_common.py](file:///home/zhang/桌面/机器人/Platform_Jushen_Code/jushen_code_CRAIC/test/src/robot_common.py) 的 `STRATEGY_TABLE`
2. **动作幅度精确对应**: 每个动作的移动距离/角度来自 [action.py](file:///home/zhang/桌面/机器人/Platform_Jushen_Code/jushen_code_CRAIC/test/src/action.py) 的 `ACTION_MAP`
3. **空手/抱箱双状态**: 模型输入包含手持状态（维度7），输出覆盖空手（ID 0~13）和抱箱（ID 14~25）两套动作
4. **无 Tag 降级**: 当 Tag_ID = -1 时，模型依靠颜色方块位置进行导航
5. **通信超时降级**: PC 模型不可用时，Lua 自动切换回按键控制模式