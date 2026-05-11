Blockly.Blocks['1773301152734'] = {
  init: function() {
    this.jsonInit({
      "type": "1773301152734",
      "message0": "box_stand",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1773301152734'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65,0,0,0)\n\n\n-- 偷平手\nMOTOsetspeed(10)\nMOTOmove19(60, 10, 190, 100, 93, 55, 124, 100, 140, 190, 10, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1773301152734'] = function(block) {
  let code = "base_action.action('box_stand')\n";
  return code;
}

