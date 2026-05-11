Blockly.Blocks['1773301159394'] = {
  init: function() {
    this.jsonInit({
      "type": "1773301159394",
      "message0": "抱快递小右移-超紧",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1773301159394'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(60,30,30,45,65,65,65,65,145,30,30,45,65,65,65,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 10, 189, 100, 93, 55, 124, 100, 145, 190, 13, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(60,20,20,85,85,95,85,85,145,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(60, 10, 189, 90, 93, 54, 124, 100, 145, 190, 13, 101, 107, 146, 76, 110, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(60, 10, 189, 94, 93, 54, 124, 85, 145, 190, 13, 95, 107, 146, 76, 95, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOrigid16(60,20,20,85,55,55,55,85,145,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(60, 10, 189, 100, 93, 55, 124, 100, 145, 190, 13, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1773301159394'] = function(block) {
  let code = "base_action.action('抱快递小右移-超紧')\n";
  return code;
}

