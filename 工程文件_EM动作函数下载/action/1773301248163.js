Blockly.Blocks['1773301248163'] = {
  init: function() {
    this.jsonInit({
      "type": "1773301248163",
      "message0": "向后慢走1步-修正前掌",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1773301248163'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 35, 100, 90, 91, 48, 129, 88, 120, 165, 100, 94, 107, 146, 76, 90, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 35, 90, 86, 90, 95, 84, 90, 120, 165, 90, 94, 107, 146, 78, 87, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 35, 110, 88, 71, 53, 105, 85, 120, 165, 110, 93, 100, 144, 79, 91, 0, 0, 100)\nMOTOwait()\n\n\n-- √\nMOTOsetspeed(10)\nMOTOmove19(80, 35, 110, 106, 93, 53, 124, 111, 120, 165, 110, 111, 77, 154, 44, 112, 0, 0, 100)\nMOTOwait()\n\n\n-- √\nMOTOsetspeed(30)\nMOTOmove19(80, 35, 90, 106, 95, 53, 122, 113, 120, 165, 90, 112, 109, 120, 114, 113, 0, 0, 100)\nMOTOwait()\n\n\n-- √\nMOTOsetspeed(30)\nMOTOmove19(80, 35, 90, 107, 100, 56, 121, 109, 120, 165, 90, 111, 129, 147, 105, 108, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 35, 90, 86, 113, 37, 158, 90, 120, 165, 90, 94, 107, 147, 76, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 35, 90, 86, 110, 95, 100, 90, 120, 165, 90, 94, 107, 146, 77, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80, 35, 100, 90, 91, 48, 129, 88, 120, 165, 100, 94, 107, 146, 76, 90, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1773301248163'] = function(block) {
  let code = "base_action.action('向后慢走1步-修正前掌')\n";
  return code;
}

