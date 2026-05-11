Blockly.Blocks['1773301279964'] = {
  init: function() {
    this.jsonInit({
      "type": "1773301279964",
      "message0": "向前走2cm-稳定",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1773301279964'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 35, 100, 90, 91, 48, 129, 88, 120, 165, 100, 94, 107, 146, 76, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 35, 90, 86, 125, 95, 110, 90, 120, 165, 90, 94, 107, 146, 76, 87, 0, 0, 100)\nMOTOwait()\n\n\n-- Good\nMOTOsetspeed(30)\nMOTOmove19(80, 35, 90, 86, 119, 74, 127, 88, 120, 165, 90, 94, 107, 146, 77, 89, 0, 0, 100)\nMOTOwait()\n\n\n-- Good\nMOTOsetspeed(10)\nMOTOmove19(80, 35, 90, 110, 88, 56, 115, 110, 120, 165, 90, 112, 129, 155, 93, 110, 0, 0, 100)\nMOTOwait()\n\n\n-- Good\nMOTOsetspeed(30)\nMOTOmove19(80, 35, 90, 110, 88, 56, 115, 110, 120, 165, 90, 113, 104, 120, 99, 109, 0, 0, 100)\nMOTOwait()\n\n\n-- resume\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1773301279964'] = function(block) {
  let code = "base_action.action('向前走2cm-稳定')\n";
  return code;
}

