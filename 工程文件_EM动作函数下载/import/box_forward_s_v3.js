Blockly.Blocks['1773301149192'] = {
  init: function() {
    this.jsonInit({
      "type": "1773301149192",
      "message0": "box_forward_s_v3",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1773301149192'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65,0,0,0)\n\n\n-- 偷平手\nMOTOsetspeed(10)\nMOTOmove19(60, 10, 190, 100, 93, 55, 124, 100, 140, 190, 10, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 10, 190, 90, 81, 48, 129, 88, 140, 190, 10, 94, 117, 146, 76, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 10, 190, 86, 115, 95, 110, 90, 140, 190, 10, 94, 117, 146, 76, 87, 0, 0, 100)\nMOTOwait()\n\n\n-- Good\nMOTOsetspeed(30)\nMOTOmove19(60, 10, 190, 86, 109, 74, 127, 88, 140, 190, 10, 94, 117, 146, 77, 89, 0, 0, 100)\nMOTOwait()\n\n\n-- Good\nMOTOsetspeed(10)\nMOTOmove19(60, 10, 190, 110, 78, 56, 115, 110, 140, 190, 10, 112, 139, 155, 93, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 10, 190, 110, 78, 56, 115, 110, 140, 190, 10, 116, 110, 99, 123, 108, 0, 0, 100)\nMOTOwait()\n\n\n-- resume\nMOTOsetspeed(10)\nMOTOmove19(60, 10, 190, 100, 83, 55, 124, 100, 140, 190, 10, 100, 117, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- resume\nMOTOsetspeed(5)\nMOTOmove19(60, 10, 190, 100, 93, 55, 124, 100, 140, 190, 10, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1773301149192'] = function(block) {
  let code = "base_action.action('box_forward_s_v3')\n";
  return code;
}

