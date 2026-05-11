Blockly.Blocks['1773301256209'] = {
  init: function() {
    this.jsonInit({
      "type": "1773301256209",
      "message0": "向后慢走1步-修正前掌-抱箱",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1773301256209'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 189, 100, 93, 55, 124, 100, 140, 189, 13, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65, 10, 189, 90, 91, 48, 129, 88, 140, 189, 13, 94, 107, 146, 76, 90, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 189, 86, 90, 95, 84, 90, 140, 189, 13, 94, 107, 146, 78, 87, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 189, 88, 71, 53, 105, 85, 140, 189, 13, 93, 100, 144, 79, 91, 0, 0, 100)\nMOTOwait()\n\n\n-- √\nMOTOsetspeed(10)\nMOTOmove19(65, 10, 189, 106, 93, 53, 124, 111, 140, 189, 13, 111, 77, 154, 44, 112, 0, 0, 100)\nMOTOwait()\n\n\n-- √\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 189, 106, 95, 53, 122, 113, 140, 189, 13, 112, 109, 120, 114, 113, 0, 0, 100)\nMOTOwait()\n\n\n-- √\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 189, 107, 100, 56, 121, 109, 140, 189, 13, 111, 129, 147, 105, 108, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65, 10, 189, 86, 113, 37, 158, 90, 140, 189, 13, 94, 107, 147, 76, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 189, 86, 110, 95, 100, 90, 140, 189, 13, 94, 107, 146, 77, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65, 10, 189, 90, 91, 48, 129, 88, 140, 189, 13, 94, 107, 146, 76, 90, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65, 10, 189, 100, 93, 55, 124, 100, 140, 189, 13, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1773301256209'] = function(block) {
  let code = "base_action.action('向后慢走1步-修正前掌-抱箱')\n";
  return code;
}

