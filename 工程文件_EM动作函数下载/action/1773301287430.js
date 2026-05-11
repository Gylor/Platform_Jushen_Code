Blockly.Blocks['1773301287430'] = {
  init: function() {
    this.jsonInit({
      "type": "1773301287430",
      "message0": "小右转",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1773301287430'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,75,65,65,65,65,20,20,20,75,65,65,65,65,0,0,0)\n\n\n-- 1\nMOTOsetspeed(24)\nMOTOmove19(80, 30, 85, 95, 110, 55, 140, 100, 120, 170, 85, 101, 117, 156, 75, 107, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 85, 95, 110, 55, 140, 100, 120, 170, 85, 101, 117, 156, 75, 107, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 98, 120, 170, 100, 100, 107, 145, 76, 102, 0, 0, 100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1773301287430'] = function(block) {
  let code = "base_action.action('小右转')\n";
  return code;
}

