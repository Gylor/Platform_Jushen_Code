Blockly.Blocks['1775128975891'] = {
  init: function() {
    this.jsonInit({
      "type": "1775128975891",
      "message0": "向左转动1步官方版",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1775128975891'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(24)\nMOTOmove19(80, 30, 115, 95, 63, 55, 94, 95, 120, 170, 115, 105, 77, 145, 46, 105, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(24)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1775128975891'] = function(block) {
  let code = "base_action.action('向左转动1步官方版')\n";
  return code;
}

