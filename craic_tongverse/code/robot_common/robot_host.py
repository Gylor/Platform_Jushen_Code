import numpy as np
import cv2
import time
from scipy.spatial.transform import Rotation as R
from PIL import Image, ImageDraw, ImageFont
from rapidocr import RapidOCR

from pr2.motion_generator import action_register
from robot_common.action_map import ACTION_MAP
from robot_common.coordinate_converter import transformer
import math
# --- 文件最上方 (Import 之后) ---
import time

# 1. 必须在这里初始化，确保模块加载时它就存在
start_time = time.time()

# ==========================================
# ⚙️ 静态工具：加载动作库
# ==========================================
def register_all_actions():
    """遍历 ACTION_MAP 进行注册"""
    for key, (json_path, _, _) in ACTION_MAP.items():
        if json_path and isinstance(json_path, str):
            print(f"--人- 正在加载动作: {key} ---")
            try:
                action_register.register_action(key, json_path, '')
            except KeyError:
                print(f"⚠️ 警告：动作 {key} 已经存在。")

# ==========================================
# 🤖 终极机器人宿主：RobotHost
# ==========================================
class RobotHost:
    def __init__(self, env, robot):
        self.env = env
        self.robot = robot
        self.db = action_register.action_database
        # 预加载 OCR 引擎，提升后续调用速度
        self.ocr_engine = RapidOCR()

    # ------------------------------------------
    # 🏃 核心执行与状态 (Base Actions)
    # ------------------------------------------
    # @property
    # def pose(self):
    #     """实时获取位姿 (x, y, z, yaw)"""
    #     positions, orientations = self.robot.get_root_poses_w()
    #     pos = positions[0].cpu().numpy()
    #     quat = orientations[0].cpu().numpy()
    #     # Isaac Sim [w, x, y, z] -> Scipy [x, y, z, w]
    #     quat_xyzw = [quat[1], quat[2], quat[3], quat[0]]
    #     yaw = R.from_quat(quat_xyzw).as_euler('xyz', degrees=True)[2]
    #     return pos[0], pos[1], pos[2], yaw

    import math

    @property
    def pose(self):
        """全局位姿出口 (严格模式)"""
        try:
            res = self.robot.get_root_poses_w()
            # 1. 严格检查：如果没有获取到 tensor 或数据为空，返回 None
            if res is None or res[0] is None or res[1] is None:
                return None
            
            positions, orientations = res
            # 2. 检查 tensor 形状，确保至少有一个机器人数据
            if positions.shape[0] == 0:
                return None

            pos = positions[0].cpu().numpy()
            quat = orientations[0].cpu().numpy() # [w, x, y, z]
            
            # 3. 提取原始 Yaw
            quat_xyzw = [quat[1], quat[2], quat[3], quat[0]]
            raw_yaw = R.from_quat(quat_xyzw).as_euler('xyz', degrees=True)[2]

            # 4. 调用转换器
            new_x, new_y, new_yaw = transformer.forward(pos[0], pos[1], raw_yaw)
            
            return float(new_x), float(new_y), float(pos[2]), float(new_yaw)
            
        except Exception as e:
            # 5. 打印具体的报错原因，方便调试 Segfault 
            self.log(f"❌ [RobotHost] 获取位姿失败: {e}")
            return None

    def do(self, cmd_key: str, times: int = 1, wait_steps: int = 25):
        """执行动作序列并自动打印状态"""
        # 1. 检查动作是否存在
        if cmd_key not in ACTION_MAP:
            self.log(f"⚠️ 警告：动作 '{cmd_key}' 不在 ACTION_MAP 中。")
            return

        json_file = ACTION_MAP[cmd_key][0]

        # 2. 安全获取动作数据
        if cmd_key not in self.db:
            self.log(f"❌ 错误：'{cmd_key}' 未注册到动作库。")
            return
            
        # 明确定义 sequence
        motion_data = self.db[cmd_key]
        sequence = motion_data.motion_sequence

        for i in range(times):
            self.log(f"🚀 执行: {cmd_key:<10} (文件: {json_file}) | 进度: ({i+1}/{times})")
            
            # 3. 复制队列进行执行
            current_seq = sequence.copy()
            last_action = np.zeros((self.env.num_robots, self.env.num_actions))
            
            # 执行动作序列
            while current_seq:
                last_action[0, :] = current_seq.popleft()
                self.env.step(last_action)
            
            # 4. 动作后的稳定阶段
            for _ in range(wait_steps):
                self.env.step(last_action)
            
            # 强制同步一帧，防止数据读取滞后
            self.env.step() 
            
            # 打印状态
            self.print_status()

    def print_status(self):
        x, y, z, yaw = self.pose
        self.log(f"📍 Pos: ({x:6.3f}, {y:6.3f}) | Yaw: {yaw:7.2f}°")
        self.log("-" * 45)

    def wait(self, steps=30):
        """原 wait 函数"""
        for _ in range(steps):
            self.env.step()

    def move_cmd(self, cmd: str = 'F'):
        """兼容旧接口"""
        self.do(cmd, 1)

    # ------------------------------------------
    # 👁️ 视觉方法 (Vision - 原封不动并入)
    # ------------------------------------------
    def show_obs(self):
        """原 show_obs"""
        if self.robot.has_camera:
            obs = self.robot.get_obs(annotator_type='rgb')
            bgr = cv2.cvtColor(obs, cv2.COLOR_RGB2BGR)
            cv2.imshow("Sim RGB", bgr)
            cv2.waitKey(1)
        else:
            self.log("No camera detected on robot.")

    def get_hsv_range(self, color):
        """原 get_hsv_range"""
        color = color.lower()
        ranges = {
            "red": [(np.array([0, 100, 100]), np.array([10, 255, 255])),
                    (np.array([160, 100, 100]), np.array([180, 255, 255]))],
            "black": [(np.array([0, 0, 0]), np.array([180, 255, 50]))],
            "yellow": [(np.array([20, 100, 100]), np.array([30, 255, 255]))],
            "blue": [(np.array([120, 100, 100]), np.array([125, 255, 255]))],
            "purple": [(np.array([130, 100, 100]), np.array([160, 255, 255]))],
            "pink": [(np.array([160, 100, 150]), np.array([170, 255, 255]))],
            "orange": [(np.array([10, 100, 100]), np.array([25, 255, 255]))],
            "green": [(np.array([50, 100, 100]), np.array([85, 255, 255]))],
            "aqua": [(np.array([85, 150, 150]), np.array([95, 255, 255]))],
        }
        if color not in ranges:
            raise ValueError(f"Unsupported color: {color}")
        return ranges[color]

    def detect_objects(self, color='red'):
        """原 detect_objects"""
        frame = self.robot.get_obs(annotator_type='rgb')
        bgr = cv2.cvtColor(frame, cv2.COLOR_RGB2BGR)
        hsv = cv2.cvtColor(bgr, cv2.COLOR_BGR2HSV)
        cx, cy, detected_area, success = 0, 0, 0., False
        for lower, upper in self.get_hsv_range(color):
            mask = cv2.inRange(hsv, lower, upper)
            contours, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
            for cnt in contours:
                area = cv2.contourArea(cnt)
                if area > 40:
                    M = cv2.moments(cnt)
                    if M["m00"] != 0:
                        cx = int(M["m10"] / M["m00"])
                        cy = int(M["m01"] / M["m00"])
                    detected_area = area
                    cv2.drawContours(bgr, [cnt], -1, (0, 255, 0), 2)
                    success = True
                    break  
        return cx, cy, detected_area, success

    def display_pose(self, verbose=False):
        """原 display_pose"""
        pos, orient = self.robot.get_root_poses_w()
        quat = orient[0].cpu().numpy()
        quat_xyzw = [quat[1], quat[2], quat[3], quat[0]] # 修正顺序
        euler_deg = R.from_quat(quat_xyzw).as_euler('xyz', degrees=True)
        self.log(f"Position: {pos}", f"Quaternion: {quat_xyzw}")
        if verbose:
            self.log(f"Euler Angles: {euler_deg}")

    def reset_start_time(self):
        """提供一个手动校准/重置时间的方法"""
        global start_time
        start_time = time.time()

    def get_time_stamp(self):
        """计算相对于 start_time 的 [分:秒]"""
        global start_time
        if start_time == 0:
            return "0:00"
        
        elapsed = time.time() - start_time
        minutes = int(elapsed // 60)
        seconds = int(elapsed % 60)
        # 如果需要显示毫秒，可以用 f"{minutes}:{seconds:02d}.{int((elapsed%1)*1000):03d}"
        return f"{minutes}:{seconds:02d}"

    def log(self,message):
        """
        带时间戳的清行打印函数
        支持自动处理开头的换行符，并清除终端当前行的旧内容
        """
        ts = self.get_time_stamp()
        # \r 回到行首, \033[K 清除光标到行尾
        prefix = "\r\033[K" 
        
        # 兼容非字符串输入 (比如 log(123) 或 log(pose_data))
        msg_str = str(message)
        
        if msg_str.startswith('\n'):
            # 提取前面的所有换行符，确保打印在正确的位置
            newlines = ""
            while msg_str.startswith('\n'):
                newlines += "\n"
                msg_str = msg_str[1:]
            
            # 先打换行，再接清行指令和内容
            print(f"{newlines}{prefix}[{ts}] {msg_str}")
        else:
            # 正常打印，prefix 保证了如果上一行是进度条/动态数据，会被完全擦除
            print(f"{prefix}[{ts}] {msg_str}")

            # --- 测试示例 ---
            # log("系统启动成功")
            # time.sleep(1.5)
            # log("\n检测到任务牌") # 会多空一行
            # log("正在对齐中...") # 如果接下来有快速刷新的 log，会原地显得很干净

    def log_big(self, message, color='yellow'):
        """
        醒目打印函数
        :param message: 打印的内容
        :param color: 颜色名称 (支持 yellow, red, green, blue, purple, cyan)
        """
        # 颜色映射表
        color_map = {
            'red': '\033[1;31m',
            'green': '\033[1;32m',
            'yellow': '\033[1;33m',
            'blue': '\033[1;34m',
            'purple': '\033[1;35m',
            'cyan': '\033[1;36m',
            'white': '\033[1;37m'
        }
        
        # 获取颜色转义符，默认为黄色
        clr = color_map.get(color.lower(), color_map['yellow'])
        reset = "\033[0m"
        
        stars = "🌟" * 25
        self.log(f"\n{stars}")
        self.log(f"\n {clr}{message}{reset}\n")
        self.log(f"{stars}\n")


    def Text_Recognition(self):
        engine = RapidOCR()
        obs = self.robot.get_obs(annotator_type = 'rgb')
        bgr = cv2.cvtColor(obs, cv2.COLOR_RGB2BGR)
        
        # RapidOCR 的返回是一个 list
        result, elapse = engine(bgr) 
        
        message = ""
        
        # 检查是否有识别结果
        if result:
            for line in result:
                # line 的结构通常是 [[坐标], "文本内容", 置信度]
                # 我们取索引为 1 的内容
                text = line[1]
                message += str(text)
                
        self.log_big(message)
        return message

    def Board_Recognition(self):
        """
        解析任务牌，提取书籍类别和箱子颜色
        """
        # 1. 必须弯腰才能看清任务牌
        self.log("\n🔍 Adjusting pose to recognize task board...")
        for _ in range(60): self.env.step() # 给物理引擎足够的稳定时间
        
        # 2. 调用 OCR
        message = self.Text_Recognition()
        
        # 3. 关键字库
        book_map = {
            "工具": "tool_book",
            "文学": "literature_book",
            "儿童": "children_book"
        }
        box_map = {
            "蓝色": "blue",
            "黄色": "yellow",
            "绿色": "green",
        }

        target_book = "unknown_book"
        goal_box = "unknown_box"

        # 4. 匹配逻辑
        if message:
            for key, val in book_map.items():
                if key in message:
                    target_book = val
                    break
            for key, val in box_map.items():
                if key in message:
                    goal_box = val
                    break

        # 5. 打印并恢复
        self.log(f"🎯 Task Parsed -> Book: {target_book}, Box: {goal_box}")
        for _ in range(40): self.env.step()
        
        return target_book, goal_box

    # ------------------------------------------
    # 🧠 策略方法 (Strategy - 重构为内部调用)
    # ------------------------------------------
    def auto_steering(self, wc=0.5, left_cmd='ml_1', right_cmd='mr_1', num:int=-1):
        while True:
            self.env.step()
            _, _, _, z_angle = self.pose
            dz = z_angle + 90 * num
            if dz > wc:
                self.show_obs()
                self.do(right_cmd)
            elif dz < -wc:
                self.show_obs()
                self.do(left_cmd)
            else:
                self.log(f"auto_steering: aligned (z_angle: {z_angle:.2f})")
                break

    def approach_target(self, color='orange', min_area=80, max_area=5000, align_cmds=('turnleft', 'turnright'), forward_cmd='forward'):
        self.show_obs()
        area_threshold = min_area + 50
        while True:
            cx, _, area, _ = self.detect_objects(color)
            if 0 < cx < 128 - 10:
                self.do(align_cmds[0])
            elif cx > 128 + 10:
                self.do(align_cmds[1])
            if area > max_area:
                break
            elif area > area_threshold:
                self.do(forward_cmd)
            else:
                area_threshold -= 10
                if area_threshold < min_area: break
            self.show_obs()

    def execute_task_pipeline(self, target_color='red'):
        self.wait(30)
        self.auto_steering()
        # 这里你可以继续组合之前的任务逻辑

    # ------------------------------------------
    # 🧭 导航与移动增强 (Navigation Plus)
    # ------------------------------------------
    
    def get_robot_yaw(self):
        """[原 get_robot_yaw] 获取机器人当前 yaw 角（度）"""
        return self.pose[3] # 直接利用已有的 pose 属性

    def align_heading(self, target_yaw: float = 90.0, tolerance: float = 4.0):
        """[原 align_heading] 将机器人朝向调整为目标角度"""
        LEFT_CMD = 'turnleft'
        RIGHT_CMD = 'turnright'

        self.log(f"🚩 开始对齐任务 -> 目标角度: {target_yaw}° (容差: ±{tolerance}°)")

        while True:
            self.env.step()
            current_yaw = self.get_robot_yaw()
            delta = current_yaw - target_yaw
            
            # 角度环处理（处理 -180 到 180 的跳变）
            if delta > 180: delta -= 360
            elif delta < -180: delta += 360

            self.log(f"🔄 当前: {current_yaw:7.2f}° | 目标: {target_yaw:7.2f}° | 偏差: {delta:7.2f}°")

            if abs(delta) <= tolerance:
                self.log(f"✅ 对齐完成！最终角度: {current_yaw:.2f}°")
                break
                
            # 根据偏差方向选择转向指令
            self.do(RIGHT_CMD if delta > 0 else LEFT_CMD)

    def go_to(self, steps=3, cmd='F'):
        """[原 go_to] 移动若干步并等待稳定"""
        self.do(cmd, times=steps)
        self.wait(5)

    def rotate_search(self, color='red', max_attempts=12, cmd='turnleft'):
        """[原 rotate_search] 旋转查找指定颜色目标"""
        self.show_obs()
        for i in range(max_attempts):
            _, _, _, found = self.detect_objects(color)
            if found:
                self.log(f"🎯 [Search] 发现目标颜色: {color}")
                return True
            self.log(f"🔍 [Search] 正在扫描... ({i+1}/{max_attempts})")
            self.do(cmd)
            self.show_obs()
        self.log("❌ [Search] 未能发现目标")
        return False

    def approach_until_close(self, color='red', min_area=3000, cmd='F'):
        """[原 approach_until_close] 接近目标物体直到面积达到阈值"""
        while True:
            _, _, area, found = self.detect_objects(color)
            if not found:
                self.log("⚠️ [Approach] 目标丢失。")
                return False
            if area >= min_area:
                self.log(f"✅ [Approach] 面积 {area:.1f} 已达标。")
                return True
            self.do(cmd)
            self.wait(3)

    def go_to_pose(self, target_pos: np.ndarray, threshold=0.1):
        """[原 go_to_pose] 移动到目标坐标（仅 XY 平面）"""
        x, y, _, _ = self.pose
        current_pos = np.array([x, y])
        dist = np.linalg.norm(target_pos - current_pos)
        self.log(f"🏁 [GoToPose] 距离目标: {dist:.3f}")
        
        if dist < threshold:
            self.log("✨ 已在目标位置附近")
            return

        while dist > threshold:
            self.do('forward')
            self.wait(5)
            x, y, _, _ = self.pose
            current_pos = np.array([x, y])
            dist = np.linalg.norm(target_pos - current_pos)
            self.log(f"📏 剩余距离: {dist:.3f}")

    import math

    def align_to_pose_old(self, cfg, has_box=False):
        """
        智能对齐函数
        :param cfg: ((目标X, 目标Y, 目标Yaw), (容差X, 容差Y, 容差Yaw))
        :param has_box: 是否抱箱子状态。如果是，则执行对应的抱箱子专用动作。
        """
        (tar_x, tar_y, tar_theta), (tol_x, tol_y, tol_theta) = cfg
        RED, BLUE, GREEN, RESET = "\033[1;31m", "\033[1;34m", "\033[1;32m", "\033[0m"

        # --- 动作映射配置 (解耦动作名称) ---
        # 如果以后动作名变了，只需在这里修改映射关系
        ACTION_NAMES = {
            False: { # 未抱箱子状态
                'turnright': 'turnright',
                'turnleft':  'turnleft',
                'forward':   'forward',
                'back':      'back',
                'left':      'left',
                'right':     'right'
            },
            True: { # 抱箱子状态 (单独列举，不依赖 box_ 前缀)
                'turnright': 'box_turnright',
                'turnleft':  'box_turnleft',
                'forward':   'box_forward',
                'back':      'box_back',
                'left':      'box_left',
                'right':     'box_right'
            }
        }

        while True:
            pose_data = self.pose
            if pose_data is None:
                self.wait(1); continue
                
            cur_x, cur_y, _, cur_yaw = pose_data
            
            # 1. 角度偏差计算 (归一化 [-180, 180])
            angle_diff = (cur_yaw - tar_theta + 180) % 360 - 180

            # 2. 世界位移差
            dx = tar_x - cur_x
            dy = tar_y - cur_y
            
            # 3. 投影到机器人局部坐标系 (北-X, 西-Y)
            rad = math.radians(cur_yaw)
            c, s = math.cos(rad), math.sin(rad)
            head_err = dx * c + dy * s    # 目标在机器人前方距离
            side_err = -dx * s + dy * c   # 目标在机器人左侧距离

            action_triggered = False
            action_key = None # 用于索引映射表的 key
            label = ""

            # 4. 优先级策略
            if abs(angle_diff) > tol_theta:
                label = "角度纠偏"
                action_key = 'turnright' if angle_diff > 0 else 'turnleft'
                action_triggered = True
            elif abs(side_err) > tol_y:
                label = "侧边对齐"
                action_key = 'left' if side_err > 0 else 'right'
                action_triggered = True
            elif abs(head_err) > tol_x:
                label = "头前对齐"
                action_key = 'forward' if head_err > 0 else 'back'
                action_triggered = True

            # 5. 执行动作
            if action_triggered:
                # 根据 has_box 状态选择对应的动作名称
                func_to_run = ACTION_NAMES[has_box].get(action_key)
                
                self.log(f"{BLUE}[智能对齐] {label:<6} | 状态:{'抱箱' if has_box else '空载'} | 执行:{func_to_run:<12} | "
                    f"头差:{head_err*100:+.1f}cm 侧差:{side_err*100:+.1f}cm 偏航:{angle_diff:+.1f}°{RESET}")

                self.do(func_to_run, 1)
                for _ in range(15): self.env.step() 
            else:
                self.log(f"\n{GREEN}✅ 目标位姿已达成! (X:{cur_x:.2f}, Y:{cur_y:.2f}, Yaw:{cur_yaw:.1f}°){RESET}")
                break
                
        return True

    def align_to_pose(self, cfg, has_box=False):
        """
        智能对齐函数 (已加入非抱箱状态下的细微调方向逻辑)
        """
        (tar_x, tar_y, tar_theta), (tol_x, tol_y, tol_theta) = cfg
        RED, BLUE, GREEN, YELLOW, RESET = "\033[1;31m", "\033[1;34m", "\033[1;32m", "\033[1;33m", "\033[0m"

        # 细微调方向的触发阈值（当偏差小于 tol_theta 但大于此值时执行微调）
        # 如果你的 tol_theta 已经是 5度，可以设置微调阈值为 1.5度
        fine_tune_tol = 2.0 

        ACTION_NAMES = {
            False: { # 未抱箱子状态
                'turnright': 'turnright',
                'turnleft':  'turnleft',
                'turnright_s': 'turnright_s', # 👈 新增：细微向右
                'turnleft_s':  'turnleft_s',  # 👈 新增：细微向左
                'forward':   'forward',
                'back':      'back',
                'left':      'left',
                'right':     'right'
            },
            True: { # 抱箱子状态
                'turnright': 'box_turnright',
                'turnleft':  'box_turnleft',
                'forward':   'box_forward',
                'back':      'box_back',
                'left':      'box_left',
                'right':     'box_right'
            }
        }

        while True:
            # 引入全局暂停检查：如果 robot_voice.py 发了暂停，这里会卡住不动
            # 注意：需确保 stop_flag 在此作用域可见，或者通过 self 引用
            # while getattr(self, 'stop_flag', False): self.env.step(); time.sleep(0.01)

            pose_data = self.pose
            if pose_data is None:
                self.wait(1); continue
                
            cur_x, cur_y, _, cur_yaw = pose_data
            angle_diff = (cur_yaw - tar_theta + 180) % 360 - 180
            dx, dy = tar_x - cur_x, tar_y - cur_y
            
            rad = math.radians(cur_yaw)
            c, s = math.cos(rad), math.sin(rad)
            head_err = dx * c + dy * s    
            side_err = -dx * s + dy * c   

            action_triggered = False
            action_key = None 
            label = ""

            # --- 优先级逻辑修改 ---
            
            # 1. 大幅度角度纠偏 (优先级最高)
            if abs(angle_diff) > tol_theta:
                label = "角度大调"
                action_key = 'turnright' if angle_diff > 0 else 'turnleft'
                action_triggered = True
            
            # 2. 侧边对齐
            elif abs(side_err) > tol_y:
                label = "侧边对齐"
                action_key = 'left' if side_err > 0 else 'right'
                action_triggered = True
            
            # 3. 头前对齐
            elif abs(head_err) > tol_x:
                label = "头前对齐"
                action_key = 'forward' if head_err > 0 else 'back'
                action_triggered = True
            
            # 4. 细微角度纠偏 (仅限非抱箱状态，且在所有平移完成后进行最后精修)
            elif not has_box and abs(angle_diff) > fine_tune_tol:
                label = "细微调向"
                action_key = 'turnright_s' if angle_diff > 0 else 'turnleft_s'
                action_triggered = True

            # --- 执行动作 ---
            if action_triggered:
                func_to_run = ACTION_NAMES[has_box].get(action_key)
                
                # 容错处理：如果映射表中没有定义微调动作，回退到普通动作
                if func_to_run is None:
                    func_to_run = ACTION_NAMES[has_box].get(action_key.replace('_s', ''))

                color = YELLOW if "细微" in label else BLUE
                self.log(f"{color}[智能对齐] {label:<6} | 状态:{'抱箱' if has_box else '空载'} | 执行:{func_to_run:<12} | "
                    f"头差:{head_err*100:+.1f}cm 侧差:{side_err*100:+.1f}cm 偏航:{angle_diff:+.1f}°{RESET}")

                self.do(func_to_run, 1)
                for _ in range(15): self.env.step() 
            else:
                self.log(f"\n{GREEN}✅ 目标位姿已达成! (X:{cur_x:.2f}, Y:{cur_y:.2f}, Yaw:{cur_yaw:.1f}°){RESET}")
                break
                
        return True

    # ------------------------------------------
    # 🛠️ 核心数学与图像工具 (Utility Functions)
    # ------------------------------------------

    def to_xyzw(self, quat_wxyz):
        """[原 to_xyzw] 将 Isaac Sim 的 WXYZ 转换为 Scipy 的 XYZW"""
        return [quat_wxyz[1], quat_wxyz[2], quat_wxyz[3], quat_wxyz[0]]

    def quaternion_to_euler(self, quat_xyzw, degrees=True):
        """[原 quaternion_to_euler]"""
        r = R.from_quat(quat_xyzw)
        return r.as_euler('xyz', degrees=degrees)

    def get_yaw_from_quaternion(self, quat_xyzw):
        """[原 get_yaw_from_quaternion]"""
        return self.quaternion_to_euler(quat_xyzw)[2]

    def normalize_angle(self, angle):
        """[原 normalize_angle] 归一化角度到 [-180, 180]"""
        while angle > 180: angle -= 360
        while angle < -180: angle += 360
        return angle

    def angle_diff(self, a, b):
        """[原 angle_diff] 计算角度差"""
        return self.normalize_angle(a - b)

    def clamp(self, val, min_val, max_val):
        """[原 clamp] 限制值范围"""
        return max(min_val, min(max_val, val))

    def calc_center(self, contour):
        """[原 calc_center] 计算轮廓中心"""
        M = cv2.moments(contour)
        if M["m00"] == 0: return None
        cx = int(M["m10"] / M["m00"])
        cy = int(M["m01"] / M["m00"])
        return (cx, cy)

    def draw_text(self, img, text, position=(10, 30), color=(0, 255, 0)):
        """[原 draw_text]"""
        cv2.putText(img, text, position, cv2.FONT_HERSHEY_SIMPLEX, 0.7, color, 2, cv2.LINE_AA)

    def stack_images(self, images, scale=0.5):
        """[原 stack_images] 用于调试时并排看多个摄像头或 Mask 画面"""
        resized = [cv2.resize(img, (0, 0), fx=scale, fy=scale) for img in images]
        return cv2.hconcat(resized)