Blockly.Blocks['1773385414820'] = {
  init: function() {
    this.jsonInit({
      "type": "1773385414820",
      "message0": "小右转-镜像版2（2）",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1773385414820'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,75,65,65,65,65,20,20,20,75,65,65,65,65,0,0,0)\n\n\n-- 对称写法\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 85, 100, 97, 57, 132, 103, 120, 170, 85, 104, 132, 153, 93, 99, 0, 0, 100)\nMOTOwait()\n\n\n-- 对称写法\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 85, 100, 97, 57, 132, 103, 120, 170, 85, 104, 132, 153, 93, 99, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 98, 120, 170, 100, 100, 107, 145, 76, 102, 0, 0, 100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1773385414820'] = function(block) {
  let code = "base_action.action('小右转-镜像版2（2）')\n";
  return code;
}

