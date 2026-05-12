#!/usr/bin/env python3
import socket
import sys
import os

base_path = os.path.dirname(os.path.abspath(__file__))
# 2. 构造 robot_common 的绝对路径
robot_common_path = os.path.join(base_path, 'robot_common')

# 3. 使用 insert(0, ...) 将其插入到搜索路径的最前面（最高优先级）
if robot_common_path not in sys.path:
    sys.path.insert(0, robot_common_path)

# 4. 现在再导入，百分之百加载的是当前文件夹下的 voice_map
from voice_map import VOICE_CONTROL_MAP


def main():
    socket_path = "/tmp/robot_control.sock"
    print("\033[1;32m🎤 语音/指令控制台已启动...\033[0m")

    while True:
        try:
            cmd = input("\033[1;36m请输入指令关键词 >> \033[0m").strip()
            if not cmd: continue

            if cmd in VOICE_CONTROL_MAP or cmd == "exit":
                client = socket.socket(socket.AF_UNIX, socket.SOCK_STREAM)
                try:
                    client.connect(socket_path)
                    client.sendall(cmd.encode())
                    print(f"✅ 发送成功: {cmd}")
                except:
                    print("❌ 错误: 主程序可能没开")
                finally:
                    client.close()
            else:
                print(f"⚠️ '{cmd}' 不在映射表中")
        except KeyboardInterrupt: break

if __name__ == "__main__":
    main()