Blockly.Blocks['1773303213560'] = {
  init: function() {
    this.jsonInit({
      "type": "1773303213560",
      "message0": "书架-放二层3",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1773303213560'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(65, 11, 189, 100, 93, 55, 124, 100, 140, 189, 13, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65, 11, 189, 90, 91, 48, 129, 88, 140, 189, 13, 94, 107, 146, 76, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 11, 189, 86, 125, 95, 110, 90, 140, 189, 13, 94, 107, 146, 76, 87, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 11, 189, 86, 113, 37, 156, 88, 140, 189, 13, 94, 107, 146, 77, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65, 11, 189, 107, 100, 56, 124, 111, 140, 189, 13, 112, 129, 155, 93, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 11, 189, 106, 95, 54, 123, 113, 140, 189, 13, 114, 75, 105, 90, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 11, 189, 106, 93, 54, 123, 111, 140, 189, 13, 114, 87, 163, 44, 112, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65, 11, 189, 88, 71, 45, 107, 90, 140, 189, 13, 93, 100, 144, 76, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 11, 189, 86, 110, 95, 100, 90, 140, 189, 13, 94, 107, 146, 77, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65, 11, 189, 90, 91, 48, 129, 88, 140, 189, 13, 94, 107, 146, 76, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65, 11, 189, 100, 93, 55, 124, 100, 140, 189, 13, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(30)\nMOTOmove19(82, 90, 173, 100, 90, 55, 127, 100, 118, 103, 24, 100, 110, 145, 73, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(82, 89, 96, 100, 90, 55, 127, 100, 117, 103, 107, 100, 110, 145, 73, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 3\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1773303213560'] = function(block) {
  let code = "base_action.action('书架-放二层3')\n";
  return code;
}

