# 语音映射表：[语音关键词] : [动作Key/跳转目标, 指令类型]
VOICE_CONTROL_MAP = {
    # 动作类
    "向前慢走一步": ["forward", "action"],
    "向后慢走一步": ["back", "action"],
    "向左平移一步": ["left", "action"],
    "向右平移一步": ["right", "action"],
    "向左转动一步": ["turnleft", "action"],
    "向右转动一步": ["turnright", "action"],
    "前倒地起身":   ["forward_up", "action"],
    "后倒地起身":   ["back_up", "action"],

    # 跳转类
    "跳转到第一关":       ["task1", "jump"],
    "跳转到第二关":       ["task2", "jump"],
    "跳转到第三关":       ["task3", "jump"],
    "跳转到第四关":       ["task4", "jump"],

    # 系统类
    "暂停":         ["暂停", "sys"],
    "继续":         ["继续", "sys"],
    
}

