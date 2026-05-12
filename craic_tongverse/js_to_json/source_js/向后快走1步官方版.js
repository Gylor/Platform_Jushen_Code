Blockly.Blocks['1775128955804'] = {
  init: function() {
    this.jsonInit({
      "type": "1775128955804",
      "message0": "向后快走1步官方版",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1775128955804'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(25,25,25,55,65,90,80,50,25,25,25,55,65,90,80,50,0,0,0)\nMOTOsetspeed(45)\nMOTOmove19(80, 30, 100, 99, 93, 55, 124, 89, 120, 170, 100, 98, 107, 145, 78, 93, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(58)\nMOTOmove19(80, 30, 120, 99, 113, 100, 99, 100, 120, 170, 120, 101, 100, 141, 77, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(68)\nMOTOmove19(80, 30, 120, 99, 95, 70, 109, 100, 120, 170, 120, 101, 100, 141, 77, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(78)\nMOTOmove19(80, 30, 120, 99, 90, 60, 117, 105, 120, 170, 120, 101, 95, 118, 91, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(78)\nMOTOmove19(80, 30, 80, 99, 100, 59, 123, 101, 120, 170, 80, 101, 87, 100, 101, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(78)\nMOTOmove19(80, 30, 80, 99, 100, 59, 123, 101, 120, 170, 80, 101, 105, 130, 91, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(78)\nMOTOmove19(80, 30, 80, 99, 105, 82, 109, 101, 120, 170, 80, 101, 110, 140, 83, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(70)\nMOTOmove19(80, 30, 120, 97, 113, 100, 99, 100, 120, 170, 120, 101, 103, 145, 78, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(70)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 97, 120, 170, 100, 100, 107, 145, 76, 103, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1775128955804'] = function(block) {
  let code = "base_action.action('向后快走1步官方版')\n";
  return code;
}

