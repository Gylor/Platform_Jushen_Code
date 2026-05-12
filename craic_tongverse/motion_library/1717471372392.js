Blockly.Blocks['1717471372392'] = {
  init: function() {
    this.jsonInit({
      "type": "1717471372392",
      "message0": "WD",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717471372392'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,65,85,95,85,35,20,20,20,65,55,55,55,35,0,0,0)\nMOTOsetspeed(70)\nMOTOmove19(66, 10, 183, 98, 106, 56, 134, 99, 128, 188, 17, 100, 94, 144, 67, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(40)\n";
  return code;
}

Blockly.Python['1717471372392'] = function(block) {
  let code = "base_action.action('WD')\n";
  return code;
}

