import os
import re

def extract_lua_code(file_content):
    """
    专门提取 Blockly.Lua 部分中的 let code 字符串内容
    """
    # 逻辑：先定位到 Blockly.Lua 的区域，再抓取该区域内的第一个双引号内容
    lua_section = re.search(r"Blockly\.Lua\[.*?\]\s*=\s*function\(block\)\s*\{(.*?)\}", file_content, re.DOTALL)
    if not lua_section:
        return None
    
    # 在 Lua 区域内寻找 let code = "..."
    code_match = re.search(r'let code\s*=\s*"(.*?)";', lua_section.group(1), re.DOTALL)
    if code_match:
        # 将字符串字面量的 \n 转换为真实的换行符进行后续解析
        return code_match.group(1).replace('\\n', '\n')
    return None

def process_move_logic(lua_code):
    """
    将提取出的 Lua 指令转换为符合要求的 JSON 字典数据
    """
    move_pattern = re.compile(r"MOTOmove19\((.*?)\)")
    speed_pattern = re.compile(r"MOTOsetspeed\((\d+)\)")
    
    lines = lua_code.split('\n')
    extracted_actions = []
    current_speed = 20 

    for line in lines:
        # 更新当前速度
        speed_match = speed_pattern.search(line)
        if speed_match:
            current_speed = int(speed_match.group(1))
            
        # 提取坐标
        move_match = move_pattern.search(line)
        if move_match:
            nums = [int(n.strip()) for n in move_match.group(1).split(',')]
            # 核心转换：原19位->新1位，原1-16位->新2-17位
            new_pos = [0] * 17
            new_pos[0] = nums[18] 
            for i in range(16):
                new_pos[i+1] = nums[i]
            extracted_actions.append({"pos": new_pos, "speed": current_speed})

    if not extracted_actions:
        return None

    # 构建 JSON 字符串（严格控制格式）
    def fmt_list(lst): return "[" + ", ".join(map(str, lst)) + "]"

    output = "{\n"
    output += f'    "initial_positions": {fmt_list(extracted_actions[0]["pos"])},\n'
    output += '    "sequence": [\n'
    
    seq_items = extracted_actions[1:]
    for i, action in enumerate(seq_items):
        comma = "," if i < len(seq_items) - 1 else ""
        output += f'    {{"positions": {fmt_list(action["pos"])}, "num_pt": {action["speed"]}}}{comma}\n'
        
    output += "    ]\n}"
    return output

# --- 主程序逻辑 ---
source_dir = "source_js"
dest_dir = "destination_json"

# 确保目标目录存在
if not os.path.exists(dest_dir):
    os.makedirs(dest_dir)

print(f"开始批量转换...")

for filename in os.listdir(source_dir):
    if filename.endswith(".js"):
        src_path = os.path.join(source_dir, filename)
        
        try:
            with open(src_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # 1. 提取 Lua 块中的 code 字符串
            lua_code = extract_lua_code(content)
            
            if lua_code:
                # 2. 转换坐标和速度格式
                json_data = process_move_logic(lua_code)
                
                if json_data:
                    # 3. 写入目标文件 (同名 .json)
                    new_filename = os.path.splitext(filename)[0] + ".json"
                    dest_path = os.path.join(dest_dir, new_filename)
                    with open(dest_path, 'w', encoding='utf-8') as f:
                        f.write(json_data)
                    print(f"[成功] {filename} -> {new_filename}")
                else:
                    print(f"[跳过] {filename} (未提取到有效的动作序列)")
            else:
                print(f"[警告] {filename} (未找到 Blockly.Lua 块或代码内容)")
                
        except Exception as e:
            print(f"[错误] 处理 {filename} 时出错: {e}")

print(f"\n转换完成！结果保存在 {dest_dir} 文件夹中。")