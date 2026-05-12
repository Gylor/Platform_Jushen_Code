# Aelos跨平台具身智能创意挑战赛_2026CRAIC

本项目包含 Aelos 机器人参加 2026 年 CRAIC（具身智能创意挑战赛）的完整代码库，涵盖虚拟仿真环节和实际机器人控制两个部分。

## 项目结构

```
platform_jushen_code/
├── craic_tongverse/          # 虚拟仿真环节代码
│   ├── code/                 # 核心代码
│   ├── craic_scene/          # 场景文件
│   ├── motion_library/       # 自定义动作库
│   ├── js_to_json/           # js文件转json工具
│   └── README.md             # 仿真环节说明文档
├── jushen_code_CRAIC/        # 实际机器人控制代码
│   └── test/                 # 测试代码目录
│       ├── src/              # 主要代码目录
│       ├── debug/            # 调试工具
│       ├── ASR/              # 语音本地识别模型
│       └── README.md         # 机器人控制说明文档
├── 工程文件_EM动作函数下载/   # 动作函数文件
│   ├── action/               # 动作文件
│   ├── custom/               # 自定义动作
│   └── import/               # 导入动作
└── README.md                 # 项目总览文档
```

## 主要模块说明

### 1. craic_tongverse (虚拟仿真环节)

用于在 TongVerse 仿真环境中运行的代码，包含：
- **start.py** - 程序启动入口，加载场景和机器人
- **voice.py** - 语音（文本命令）控制模块
- **robot_common/** - 公共方法库（动作映射、坐标转换、导航等）
- **craic_scene/** - 仿真场景资源文件
- **motion_library/** - 自定义动作库（JSON格式）

### 2. jushen_code_CRAIC (实际机器人控制)

用于控制真实 Aelos 机器人的代码，包含：
- **robot_logic.py** - 主程序入口，状态机任务逻辑
- **robot_common.py** - 通用工具（Tag码识别、颜色识别、方块操作）
- **action.py** - 动作定义和映射
- **robot_voice.py** - 语音控制模块
- **debug/** - 调试工具（颜色调试、Tag码测试、摄像头拍摄）

### 3. 工程文件_EM动作函数下载

包含从 edu 软件导出的动作函数文件，用于机器人动作执行。

## 快速开始

### 虚拟仿真环境
```bash
# 进入容器
docker exec -it TongVerse-edu bash

# 运行主程序
python /TongVerse/craic_tongverse/code/start.py
```

### 实际机器人控制
```bash
# 进入代码目录
cd ~/jushen_code_CRAIC/test/src

# 运行主程序
python robot_logic.py

# 启动语音控制（可选）
python robot_voice.py
```

## 文档资源

- [虚拟仿真环节说明](craic_tongverse/README.md)
- [实际机器人控制说明](jushen_code_CRAIC/test/README.md)
- [比赛程序说明文档](craic_tongverse/比赛程序说明文档-虚拟仿真环节-Aelos跨平台具身智能创意挑战赛_2026CRAIC.pdf)

## 注意事项

1. **环境依赖**：确保安装了必要的 Python 库（rapidocr_onnxruntime, onnxruntime 等）
2. **串口连接**：执行 Python 程序时需断开 edu 串口连接
3. **动作下载**：运行前需在 edu 中下载全部动作函数到机器人
4. **路径配置**：仿真环境中需正确配置场景和动作库路径

---

*Aelos跨平台具身智能创意挑战赛_2026CRAIC*