Blockly.Blocks['1773301162584'] = {
  init: function() {
    this.jsonInit({
      "type": "1773301162584",
      "message0": "抱快递小左移-超紧",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1773301162584'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(60,30,30,45,65,65,65,65,145,30,30,45,65,65,65,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 11, 189, 100, 90, 55, 124, 100, 145, 189, 13, 100, 110, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(60,20,20,85,85,95,85,85,145,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(60, 11, 189, 99, 90, 54, 124, 90, 145, 189, 13, 110, 110, 146, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\nMOTOrigid16(60,20,20,85,85,95,85,85,145,20,20,85,55,55,55,85,0,0,0)\n\n\n-- 1\nMOTOsetspeed(20)\nMOTOmove19(60, 11, 189, 107, 90, 54, 124, 110, 145, 189, 13, 115, 110, 146, 76, 115, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(60,20,20,85,55,55,55,85,145,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(60, 11, 189, 100, 90, 55, 124, 100, 145, 189, 13, 100, 110, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1773301162584'] = function(block) {
  let code = "base_action.action('抱快递小左移-超紧')\n";
  return code;
}

