Blockly.Blocks['1773303287789'] = {
  init: function() {
    this.jsonInit({
      "type": "1773303287789",
      "message0": "小左转",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1773303287789'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,75,65,65,65,65,20,20,20,75,65,65,65,65,0,0,0)\nMOTOsetspeed(24)\nMOTOmove19(80, 30, 115, 96, 68, 47, 107, 99, 120, 170, 115, 100, 103, 143, 68, 103, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 115, 96, 68, 47, 107, 99, 120, 170, 115, 100, 103, 143, 68, 103, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 98, 120, 170, 100, 100, 107, 145, 76, 102, 0, 0, 100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1773303287789'] = function(block) {
  let code = "base_action.action('小左转')\n";
  return code;
}

