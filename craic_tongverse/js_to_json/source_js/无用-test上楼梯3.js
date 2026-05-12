Blockly.Blocks['1773303237878'] = {
  init: function() {
    this.jsonInit({
      "type": "1773303237878",
      "message0": "无用-test上楼梯3",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1773303237878'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(37, 22, 157, 99, 92, 56, 123, 100, 147, 189, 46, 100, 106, 144, 75, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(37, 22, 157, 93, 93, 55, 123, 86, 147, 189, 46, 93, 106, 143, 75, 92, 0, 0, 100)\nMOTOwait()\n\n\n-- x\nMOTOsetspeed(15)\nMOTOmove19(37, 22, 157, 90, 123, 117, 100, 91, 147, 189, 46, 95, 106, 143, 75, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(37, 22, 157, 90, 118, 136, 67, 91, 147, 189, 46, 95, 106, 143, 75, 89, 0, 0, 100)\nMOTOwait()\n\n\n-- x\nMOTOsetspeed(15)\nMOTOmove19(37, 22, 157, 90, 151, 66, 170, 83, 147, 189, 46, 95, 132, 140, 92, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(37, 22, 157, 90, 160, 75, 174, 95, 147, 189, 46, 95, 132, 140, 92, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(37, 22, 157, 95, 127, 39, 183, 97, 147, 189, 46, 95, 157, 154, 108, 101, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(37, 22, 157, 95, 160, 39, 185, 104, 147, 189, 46, 95, 129, 158, 103, 105, 0, 0, 100)\nMOTOwait()\n\n\n-- 脚尖重心\nMOTOsetspeed(15)\nMOTOmove19(37, 22, 157, 95, 160, 39, 183, 104, 147, 189, 46, 95, 128, 158, 95, 107, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(37, 22, 157, 85, 155, 40, 165, 107, 147, 189, 46, 90, 110, 165, 57, 115, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(37, 22, 157, 93, 98, 46, 127, 109, 147, 189, 46, 98, 144, 169, 10, 109, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(37, 22, 157, 93, 98, 46, 127, 111, 147, 189, 46, 101, 122, 133, 120, 108, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(37, 22, 157, 93, 98, 46, 127, 111, 147, 189, 46, 100, 79, 101, 102, 108, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(37, 22, 157, 100, 98, 46, 133, 110, 147, 189, 46, 104, 87, 128, 83, 108, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(37, 22, 157, 101, 94, 57, 125, 101, 147, 189, 46, 100, 107, 145, 77, 103, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\n";
  return code;
}

Blockly.Python['1773303237878'] = function(block) {
  let code = "base_action.action('无用-test上楼梯3')\n";
  return code;
}

