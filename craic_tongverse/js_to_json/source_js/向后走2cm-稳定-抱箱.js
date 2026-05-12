Blockly.Blocks['1773303450807'] = {
  init: function() {
    this.jsonInit({
      "type": "1773303450807",
      "message0": "向后走2cm-稳定-抱箱",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1773303450807'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 189, 100, 93, 55, 124, 100, 140, 189, 13, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65, 10, 189, 90, 91, 48, 129, 88, 140, 189, 13, 94, 107, 146, 76, 90, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 189, 88, 96, 85, 101, 91, 140, 189, 13, 94, 107, 146, 78, 87, 0, 0, 100)\nMOTOwait()\n\n\n-- √\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 189, 89, 90, 51, 115, 87, 140, 189, 13, 93, 100, 144, 79, 91, 0, 0, 100)\nMOTOwait()\n\n\n-- √\nMOTOsetspeed(10)\nMOTOmove19(65, 10, 189, 106, 93, 53, 124, 111, 140, 189, 13, 113, 93, 134, 73, 114, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65, 10, 189, 106, 93, 53, 124, 111, 140, 189, 13, 112, 93, 118, 90, 112, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65, 10, 189, 100, 93, 55, 124, 100, 140, 189, 13, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1773303450807'] = function(block) {
  let code = "base_action.action('向后走2cm-稳定-抱箱')\n";
  return code;
}

