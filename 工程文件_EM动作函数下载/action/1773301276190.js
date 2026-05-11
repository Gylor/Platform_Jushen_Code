Blockly.Blocks['1773301276190'] = {
  init: function() {
    this.jsonInit({
      "type": "1773301276190",
      "message0": "向前快走3步-后仰10平手",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1773301276190'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(25,25,25,75,75,90,80,70,25,25,25,75,75,90,80,70,0,0,0)\nMOTOsetspeed(45)\nMOTOmove19(60, 10, 190, 99, 83, 54, 122, 90, 140, 190, 10, 98, 117, 146, 75, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 10, 190, 99, 105, 99, 103, 100, 140, 190, 10, 101, 119, 134, 91, 94, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(70)\nMOTOmove19(60, 10, 190, 99, 100, 74, 121, 100, 140, 190, 10, 101, 124, 137, 91, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(60, 10, 190, 99, 100, 61, 126, 104, 140, 190, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(60, 10, 190, 99, 81, 66, 109, 102, 140, 190, 10, 101, 95, 101, 97, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(60, 10, 190, 99, 76, 63, 110, 100, 140, 190, 10, 101, 100, 126, 79, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(60, 10, 190, 99, 90, 73, 106, 100, 140, 190, 10, 101, 100, 139, 74, 94, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(60, 10, 190, 99, 105, 99, 103, 100, 140, 190, 10, 101, 119, 134, 89, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(60, 10, 190, 99, 100, 74, 121, 100, 140, 190, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(60, 10, 190, 99, 100, 61, 126, 104, 140, 190, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(60, 10, 190, 99, 81, 66, 111, 102, 140, 190, 10, 101, 95, 101, 97, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(60, 10, 190, 99, 76, 63, 111, 100, 140, 190, 10, 101, 100, 126, 79, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(60, 10, 190, 99, 90, 73, 106, 100, 140, 190, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(60, 10, 190, 99, 105, 99, 103, 100, 140, 190, 10, 101, 119, 134, 89, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(60, 10, 190, 99, 100, 74, 121, 100, 140, 190, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(60, 10, 190, 99, 100, 61, 126, 104, 140, 190, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(60, 10, 190, 99, 81, 66, 111, 102, 140, 190, 10, 101, 95, 101, 97, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(60, 10, 190, 99, 76, 63, 111, 100, 140, 190, 10, 101, 100, 126, 79, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(60, 10, 190, 99, 90, 73, 106, 100, 140, 190, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(65)\nMOTOmove19(60, 10, 190, 96, 85, 70, 110, 100, 140, 190, 10, 102, 119, 146, 75, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60, 10, 190, 99, 83, 54, 122, 90, 140, 190, 10, 98, 117, 146, 75, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(60, 10, 190, 100, 83, 55, 124, 100, 140, 190, 10, 100, 117, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1773301276190'] = function(block) {
  let code = "base_action.action('向前快走3步-后仰10平手')\n";
  return code;
}

