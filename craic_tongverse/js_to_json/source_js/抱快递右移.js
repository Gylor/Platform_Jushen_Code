Blockly.Blocks['1773303150882'] = {
  init: function() {
    this.jsonInit({
      "type": "1773303150882",
      "message0": "抱快递右移",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1773303150882'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,85,95,85,85,0,0,0)\n\n\n-- 0\nMOTOsetspeed(10)\nMOTOmove19(65, 11, 189, 100, 90, 55, 124, 100, 140, 189, 13, 100, 110, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(8)\nMOTOmove19(65, 11, 189, 100, 90, 55, 124, 106, 140, 189, 13, 100, 111, 145, 76, 112, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 11, 189, 98, 90, 55, 124, 108, 140, 189, 13, 111, 111, 145, 76, 103, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65, 11, 189, 100, 90, 55, 124, 88, 140, 189, 13, 100, 111, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\n\n\n-- 0\nMOTOsetspeed(10)\nMOTOmove19(65, 11, 189, 100, 90, 55, 124, 100, 140, 189, 13, 100, 110, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1773303150882'] = function(block) {
  let code = "base_action.action('抱快递右移')\n";
  return code;
}

