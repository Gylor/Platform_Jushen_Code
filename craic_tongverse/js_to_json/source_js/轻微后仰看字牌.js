Blockly.Blocks['1773303202456'] = {
  init: function() {
    this.jsonInit({
      "type": "1773303202456",
      "message0": "轻微后仰看字牌",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1773303202456'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(80, 30, 100, 100, 93, 62, 124, 100, 120, 170, 100, 100, 107, 136, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1773303202456'] = function(block) {
  let code = "base_action.action('轻微后仰看字牌')\n";
  return code;
}

