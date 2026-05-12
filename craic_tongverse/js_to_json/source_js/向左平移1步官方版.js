Blockly.Blocks['1775128970170'] = {
  init: function() {
    this.jsonInit({
      "type": "1775128970170",
      "message0": "向左平移1步官方版",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1775128970170'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,45,65,65,65,65,30,30,30,45,65,65,65,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(80, 55, 100, 90, 93, 54, 124, 90, 120, 175, 100, 110, 107, 146, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(80, 55, 100, 95, 93, 54, 124, 105, 120, 175, 100, 106, 107, 146, 76, 115, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,55,55,55,85,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(80, 25, 100, 106, 93, 54, 124, 110, 120, 145, 100, 115, 107, 146, 76, 115, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(20,20,20,85,55,55,55,85,20,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1775128970170'] = function(block) {
  let code = "base_action.action('向左平移1步官方版')\n";
  return code;
}

