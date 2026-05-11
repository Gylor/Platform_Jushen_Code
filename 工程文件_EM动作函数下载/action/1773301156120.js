Blockly.Blocks['1773301156120'] = {
  init: function() {
    this.jsonInit({
      "type": "1773301156120",
      "message0": "box_turnright_q_v1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1773301156120'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 189, 95, 160, 64, 179, 102, 140, 189, 13, 104, 117, 88, 147, 105, 0, 0, 100)\nMOTOwait()\n\n\n-- 标准站立\nMOTOsetspeed(20)\nMOTOmove19(65, 10, 189, 100, 90, 55, 124, 100, 140, 189, 13, 100, 111, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1773301156120'] = function(block) {
  let code = "base_action.action('box_turnright_q_v1')\n";
  return code;
}

