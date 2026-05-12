Blockly.Blocks['1773303225133'] = {
  init: function() {
    this.jsonInit({
      "type": "1773303225133",
      "message0": "书架-放一层",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1773303225133'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\n\n\n-- √√\nMOTOsetspeed(30)\nMOTOmove19(64, 10, 150, 100, 93, 55, 124, 100, 140, 190, 52, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 抱着慢走半步\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 135, 100, 93, 55, 124, 100, 140, 190, 65, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65, 10, 135, 90, 91, 48, 129, 88, 140, 190, 65, 94, 107, 146, 76, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 135, 86, 125, 95, 110, 90, 140, 190, 65, 94, 107, 146, 76, 87, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 135, 86, 113, 37, 156, 88, 140, 190, 65, 94, 107, 146, 77, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65, 10, 135, 107, 100, 56, 124, 111, 140, 190, 65, 112, 129, 155, 93, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 135, 106, 95, 54, 123, 113, 140, 190, 65, 114, 75, 105, 90, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65, 10, 135, 100, 93, 55, 124, 100, 140, 190, 65, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 抱着慢走半步\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 135, 100, 93, 55, 124, 100, 140, 190, 65, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65, 10, 135, 90, 91, 48, 129, 88, 140, 190, 65, 94, 107, 146, 76, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 135, 86, 125, 95, 110, 90, 140, 190, 65, 94, 107, 146, 76, 87, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 135, 86, 113, 37, 156, 88, 140, 190, 65, 94, 107, 146, 77, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65, 10, 135, 107, 100, 56, 124, 111, 140, 190, 65, 112, 129, 155, 93, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 135, 106, 95, 54, 123, 113, 140, 190, 65, 114, 75, 105, 90, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65, 10, 135, 100, 93, 55, 124, 100, 140, 190, 65, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 135, 99, 93, 140, 40, 99, 140, 190, 65, 99, 106, 58, 162, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(64, 46, 134, 99, 93, 140, 40, 99, 140, 152, 65, 99, 106, 58, 162, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(64, 46, 92, 99, 93, 140, 40, 99, 140, 152, 112, 99, 106, 58, 162, 99, 0, 0, 100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1773303225133'] = function(block) {
  let code = "base_action.action('书架-放一层')\n";
  return code;
}

