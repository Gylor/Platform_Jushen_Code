Blockly.Blocks['1773301180230'] = {
  init: function() {
    this.jsonInit({
      "type": "1773301180230",
      "message0": "抱快递左转",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1773301180230'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(24)\nMOTOmove19(65, 10, 189, 95, 63, 55, 94, 95, 140, 189, 13, 105, 77, 145, 46, 105, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 189, 95, 63, 55, 94, 93, 140, 189, 13, 105, 77, 145, 46, 107, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 189, 100, 90, 55, 124, 100, 140, 189, 13, 100, 111, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(600)\n";
  return code;
}

Blockly.Python['1773301180230'] = function(block) {
  let code = "base_action.action('抱快递左转')\n";
  return code;
}

