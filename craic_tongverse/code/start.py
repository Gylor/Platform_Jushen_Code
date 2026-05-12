#!/usr/bin/python
# -*- coding: utf-8 -*-
import os
import sys

import time
import select
import termios
import tty
import numpy as np

import pr2
import omni.isaac.core.utils.stage as stage_utils
import omni.isaac.core.utils.prims as prim_utils
from pxr import Sdf
from pr2.envs import Env
from pr2.pathcfg import DataPath, load_config
from robot_common.robot_host import RobotHost, register_all_actions
from robot_common.coordinate_converter import transformer
from pr2.object import UsdObjectConfig 


current_dir = os.path.dirname(os.path.abspath(__file__))
common_path = os.path.join(current_dir, 'robot_common')
if common_path not in sys.path:
    sys.path.insert(0, common_path) # 使用 insert(0, ...) 确保优先级最高
from voice_map import VOICE_CONTROL_MAP


# 开始的任务关卡
current_stage = os.environ.get("STAGE", "base_to_task1")


def base_to_task1(bot):
    bot.align_to_pose([(0.30, 0.0, 0), (0.05, 0.05, 8)])
    bot.align_to_pose([(0.35, 0.45, 90), (0.05, 0.05, 8)])
    return "task1"

def task1(bot):
    bot.align_to_pose([(0.35, 0.30, 90), (0.04, 0.04, 8)])
    # bot.align_to_pose([(0.35, 0.50, 90), (0.03, 0.04, 4)])
    bot.align_to_pose([(0.35, 0.60, 90), (0.03, 0.02, 4)])
    bot.log_big("开始清洁桌面")
    bot.align_to_pose([(0.20, 0.60, 90), (0.03, 0.02, 4)])
    bot.do('push_rag1', 1); bot.do('push_rag2', 6); bot.do('push_rag3', 1)
    return "task1_to_task2" 

def task1_to_task2(bot):
    bot.do('right', 2)
    return "task2" 

def task2(bot): 
    bot.align_to_pose([(0.75, 0.60, 90), (0.04, 0.06, 8)])
    bot.align_to_pose([(0.75, 0.77, 90), (0.03, 0.03, 8)])
    bot.do('pick_cube', 1)
    bot.align_to_pose([(0.73, 0.60, 0), (0.02, 0.05, 5)], has_box=True)
    bot.do('box_forward', 1)
    # bot.do('box_right_forward_s',1)
    bot.do('up_stair', 1)
    bot.do('put_box_level1', 1)
    bot.log_big("收纳完成")
    bot.do('back_s', 3); 
    bot.do('back', 2); 
    return "task2_to_task3"

def task2_to_task3(bot):
    return "task3"

def task3(bot):
    bot.align_to_pose([(0.80, 0.00, 0), (0.05, 0.05, 8)])
    bot.do('forward', 4) 
    bot.do('wanyao', 1) 
    bot.wait(100) 
    # 获取识别结果
    target_book, target_box = bot.Board_Recognition()
    bot.log(f"--- 任务已确认：去拿 {target_book} 放进 {target_box} 箱 ---")
    
    # 将结果挂载到 bot 实例上，供后续关卡使用
    bot.current_target_book = target_book
    bot.current_target_box = target_box
    
    bot.do('stand', 1) 
    return "task3_to_task4"

def task3_to_task4(bot):
    # 过渡段：移动到任务4的准备区域
    bot.align_to_pose([(1.07, -0.400, 0), (0.06, 0.06, 8)])
    return "task4"

def task4(bot):
    # 使用 getattr 确保即使没跑 task3，直接跑 task4 也有默认值
    book_name = getattr(bot, 'current_target_book', "tool_book")
    box_name = getattr(bot, 'current_target_box', "blue")

    # --- 步骤 1：取书 ---
    book_y = BOOK_Y_MAP.get(book_name, -0.542)
    bot.log(f"🚀 准备前往拿取：{book_name}，目标 Y: {book_y}")
    
    # 修正了之前的 boox_y 拼写错误
    bot.align_to_pose([(1.07, book_y, 0), (0.03, 0.03, 8)])
    bot.do('pick_cube', 1)
    bot.do('box_back', 1)

    # --- 步骤 2：放书 ---
    box_y = BOX_Y_MAP.get(box_name, -0.892)
    bot.log(f"🚀 准备前往投放：{box_name}，目标 Y: {box_y}")
    
    # 修正了之前的 goal_y 变量名不一致问题
    bot.align_to_pose([(0.20, box_y, 180), (0.03, 0.05, 8)], has_box=True)
    bot.do('giveup_cube', 1)
    bot.log_big("送达完毕")
    return "exit"

# ==========================================
# 2. 环境注入 (添加场景处理)
# ==========================================

# 1. 建立全局映射表
BOOK_Y_MAP = {
    "tool_book": -0.542,
    "literature_book": -0.892,
    "children_book": -1.242
}

BOX_Y_MAP = {
    "green": -0.542,
    "blue": -0.892,
    "yellow": -1.242
}

def env_in(start_stage):
    stage_utils.create_new_stage()
    cfg = load_config(f"{DataPath.cfg}/default_env_cfg.yaml")
    env = Env(cfg)
    
    # --- 加载主场景 ---
    stage_utils.add_reference_to_stage(
        usd_path="/PR2/data/scene/craic_scene/scene.usd", 
        prim_path="/World/Scene"
    )

    # --- ✨ 批量添加任务资产 (任务牌、多颜色箱子、多类型书籍) ---
    asset_base = "../craic_scene/materials/Assets/"
    
    # 1. 导入任务牌，示例为sign_5
    env.add_obj_from_usd(UsdObjectConfig("sign_5", asset_base + "sign5.usd", "sign", (0.24, -0.64, 0.0), (0, 0, 0, 1), 0.1))
    
    # 2. 批量导入收纳箱 (绿、蓝、黄)
    boxes = [
        ("green_box", (-0.292, 0.651, 0.0)), 
        ("blue_box", (-0.642, 0.651, 0.0)), 
        ("yellow_box", (-0.992, 0.651, 0.0))
    ]
    for name, pos in boxes:
        env.add_obj_from_usd(UsdObjectConfig(name, asset_base + f"{name}.usd", "box", pos, (0, 0, 0, 1), 0.1))
    
    # 3. 批量导入书籍 (工具书、文学书、童书)
    books = [
        ("tool_book", (-0.292, -0.552, 0.035)), 
        ("literature_book", (-0.642, -0.552, 0.035)), 
        ("children_book", (-0.992, -0.552, 0.035))
    ]
    for name, pos in books:
        # 特殊处理：children_book 不设置 scale (使用模型默认比例)，其他使用 0.05
        current_scale = None if name == "children_book" else 0.05
        env.add_obj_from_usd(UsdObjectConfig(name, asset_base + f"{name}.usd", "book", pos, (0, 0, 0, 1), current_scale))

    # --- ✨ 补光处理 (保持明亮且稳定的 DomeLight) ---
    if not prim_utils.is_prim_path_valid("/World/SkyLight"):
        prim_utils.create_prim("/World/SkyLight", "DomeLight")
        sky_prim = stage_utils.get_current_stage().GetPrimAtPath("/World/SkyLight")
        sky_prim.CreateAttribute("intensity", Sdf.ValueTypeNames.Float).Set(700.0)

    # --- 机器人配置与加载 ---
    robot_cfg = load_config(f"/PR2/data/config/craic_scene_biped_aelos_cfg.yaml")
    
    STAGE_START_CONFIG = {
        "base_to_task1": ([0.0, 0.0, 0.20], 0.0),
        "task1":         ([0.35, 0.30, 0.20], 90.0),
        "task2":         ([0.54, 0.62, 0.20], 90.0),  #yuan 0.52,0,60
        "task3":         ([0.80, 0.00, 0.20], 0.0),
        "task4":         ([0.92, -0.542, 0.20], 0.0),
    }
    
    exp_pos_data, exp_yaw = STAGE_START_CONFIG.get(start_stage, STAGE_START_CONFIG["base_to_task1"])
    sim_pos_2d, sim_quat = transformer.inverse(exp_pos_data[0], exp_pos_data[1], exp_yaw)
    
    robot_cfg["root_state_cfg"]["init_state_pos"] = [sim_pos_2d[0], sim_pos_2d[1], exp_pos_data[2]]
    robot_cfg["root_state_cfg"]["init_state_orient"] = sim_quat

    env.load_robot(robot_cfg)
    env.reset()
    
    # 预热渲染管线
    import omni.kit.app
    for _ in range(30):
        omni.kit.app.get_app().update()
        env.step()
        
    return env, env.get_robot()

# ==========================================
# 3. 后续调度保持不变
# ==========================================
def wait_for_voice_command(target_cmd, bot):
    """
    通用等待函数：
    target_cmd: 预期的启动指令 (如 'release_task1')
    """
    global current_stage, pending_command, stop_flag, is_jump_mode
    
    bot.log(f"\n\033[1;33m🔄 [等待中] 请在‘语音’控制终端输入指令以启动任务（执行清洁桌面任务/执行收纳任务/识别任务板） (预期: {target_cmd})...\033[0m")
    
    while True:
        # 1. 检查是否有新指令
        if pending_command:
            cmd = pending_command
            pending_command = None # 消费信号
            
            if cmd in VOICE_CONTROL_MAP:
                target, cmd_type = VOICE_CONTROL_MAP[cmd]
                
                # 情况A：正是我们要的启动指令
                if target == target_cmd:
                    bot.log(f"🎙️ 指令匹配成功: 执行 {target}！")
                    return True # 跳出等待，开始后续动作
                
                # 情况B：系统类指令 (暂停/继续)
                elif cmd_type == "sys":
                    if target == "暂停": stop_flag = True
                    elif target == "继续": stop_flag = False
                    bot.log(f"⚙️ 系统指令: {target} (当前暂停状态: {stop_flag})")
                
                # 情况C：强制跳转指令 (比如人在第一关，突然想去第三关)
                elif cmd_type == "jump":
                    current_stage = target
                    is_jump_mode = True
                    bot.log(f"🎯 收到跳转指令，立即前往: {target}")
                    return "JUMPED" # 特殊标识，告知外层函数立即退出
                
                # 情况D：单步动作指令
                elif cmd_type == "action":
                    bot.do(target)
            else:
                bot.log(f"⏳ 收到未知指令: {cmd}，继续等待...")

        # 2. 维持物理仿真，防止环境卡死
        bot.env.step()
        time.sleep(0.05)


def wait_for_enter(env, bot, msg):
    bot.log(f"\n\033[1;36m{msg}\033[0m")
    fd = sys.stdin.fileno()
    old_settings = termios.tcgetattr(fd)
    try:
        tty.setcbreak(fd)
        while True:
            env.step()
            bot.show_obs()
            if select.select([sys.stdin], [], [], 0.0)[0]:
                if sys.stdin.read(1) in ['\n', '\r']:
                    break
            time.sleep(0.01)
    finally:
        termios.tcsetattr(fd, termios.TCSADRAIN, old_settings)

import socket
import threading
import os
import sys
import time



# ... (前面的 import 和任务函数 base_to_task1, task1 等保持不变) ...

# ==========================================
# 1. 独立的状态管理 (不依赖 common)
# ==========================================
pending_command = None       # 存放来自 robot_voice.py 的最新指令
stop_flag = False            # 暂停标志
is_jump_mode = False

def socket_listener():
    """独立线程：监听 robot_voice.py 发来的信号"""
    global pending_command
    socket_path = "/tmp/robot_control.sock"
    if os.path.exists(socket_path): os.remove(socket_path)
    
    server = socket.socket(socket.AF_UNIX, socket.SOCK_STREAM)
    server.bind(socket_path)
    server.listen(1)
    
    while True:
        conn, _ = server.accept()
        data = conn.recv(1024)
        if data:
            # 收到指令，存入全局变量
            pending_command = data.decode().strip()
        conn.close()

# ==========================================
# 2. 主循环
# ==========================================
import sys
import threading
import time
import os

def main():
    global current_stage, pending_command, stop_flag, is_jump_mode
    
    # 1. 启动语音监听线程 (后台持续运行)
    threading.Thread(target=socket_listener, daemon=True).start()

    # 2. 初始化环境 (直接传入阶段名)
    try:
        env, robot = env_in(current_stage)
        register_all_actions()
        bot = RobotHost(env, robot)
        # 确保时间戳从这里开始算
        bot.reset_start_time() 
    except Exception as e:
        print(f"❌ 环境加载失败: {e}")
        if 'pr2' in globals(): pr2.app.close()
        return

    # 3. 状态映射 (函数绑定)
    stage_map = {
        "base_to_task1": base_to_task1,
        "task1": task1,
        "task1_to_task2": task1_to_task2,
        "task2": task2,
        "task2_to_task3": task2_to_task3,
        "task3": task3,
        "task3_to_task4": task3_to_task4,
        "task4": task4,
    }

    # 4. 初始状态设定
    bot.do('stand')
    
    try:
        # --- 仪式感启动 A: 等待按键 ---
        wait_for_enter(env, bot, f"\n\033[1;36m🖱️ 视角已解锁 [当前起点:{current_stage}]\033[0m\n按下【回车】开始任务...")

        # 2. 用户按下回车后，立即重置计时起点
        bot.reset_start_time() 

        # 3. 打印第一条带 0:00 时间戳的日志
        bot.log("🚀 计时开始，任务流水启动")

        while not env.is_stopped:
            if current_stage == "exit": break

            # --- B. 处理来自 robot_voice.py 的语音指令 ---
            if pending_command:
                cmd = pending_command
                pending_command = None 
                bot.log(f"\n\033[1;33m[语音信号] 收到指令: {cmd}\033[0m")

                if cmd in VOICE_CONTROL_MAP:
                    target, cmd_type = VOICE_CONTROL_MAP[cmd]
                    
                    if cmd_type == "sys":
                        if target == "暂停": stop_flag = True
                        elif target == "继续": stop_flag = False
                    
                    elif cmd_type == "jump":
                        stop_flag = False 
                        current_stage = target
                        is_jump_mode = True
                        env.step()
                        continue # 立即跳转，跳过本轮后续执行
                    
                    elif cmd_type == "action":
                        bot.log(f"执行语音动作: {target}")
                        bot.do(target)

            # --- C. 暂停状态拦截 ---
            if stop_flag:
                # 暂停时依然需要维持仿真步进，否则画面会卡死
                env.step()
                time.sleep(0.01)
                continue

            # --- D. 任务流水调度 (核心逻辑) ---
            func = stage_map.get(current_stage)
            if func:
                # 打印当前进度，使用 \r 覆盖避免刷屏
                print(f"\r\033[1;34m[当前阶段]: {current_stage:<20}\033[0m", end="")
                sys.stdout.flush()

                # 执行任务函数
                result = func(bot)
                
                if isinstance(result, str):
                    bot.log(f"\n✅ 阶段完成 -> 跳转至: {result}")
                    current_stage = result
                    is_jump_mode = False # 完成后恢复正常模式
                else:
                    env.step()
            else:
                env.step()
                
            time.sleep(0.001)

        # --- E. 结束逻辑 ---
        if current_stage == "exit":
            bot.log("\n\n🌟 任务全部完成！恭喜！")
            wait_for_enter(env, bot, "按下【回车】正式关闭程序并退出...")

    except KeyboardInterrupt:
        print("\n\n\033[1;33m⚠️ 检测到手动中断 (Ctrl+C)...\033[0m")
    except Exception as e:
        # 这里使用原生 print 确保报错可见
        print(f"\n\n\033[1;31m❌ 运行过程发生致命异常: {e}\033[0m")
        import traceback
        traceback.print_exc()
    finally:
        print("\n🌟 正在释放资源并关闭 Simulation App...")
        # 清理 Socket 文件，防止下次启动报 Address already in use
        if os.path.exists("/tmp/robot_control.sock"): 
            os.remove("/tmp/robot_control.sock")
        
        pr2.app.close()
        print("✅ 已安全退出。")

if __name__ == "__main__":
    # 过滤掉 Isaac Sim 传进来的额外命令行参数
    sys.argv = [sys.argv[0]]
    main()