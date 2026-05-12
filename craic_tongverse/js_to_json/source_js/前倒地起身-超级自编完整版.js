Blockly.Blocks['1773303192461'] = {
  init: function() {
    this.jsonInit({
      "type": "1773303192461",
      "message0": "前倒地起身-超级自编完整版",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1773303192461'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,0,0,0)\n\n\n-- standup\nMOTOsetspeed(25)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(94, 88, 107, 100, 93, 55, 124, 100, 102, 113, 85, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(93, 87, 187, 100, 93, 55, 124, 100, 101, 113, 17, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(79, 83, 165, 40, 87, 55, 124, 95, 119, 123, 38, 150, 106, 144, 72, 98, 0, 0, 99)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(78, 86, 165, 39, 94, 53, 44, 100, 118, 122, 38, 150, 102, 145, 156, 98, 0, 0, 98)\nMOTOwait()\n\n\n-- pre\nMOTOsetspeed(20)\nMOTOmove19(77, 85, 190, 20, 94, 52, 44, 99, 116, 122, 10, 180, 101, 144, 156, 98, 0, 0, 98)\nMOTOwait()\n\n\n-- √\nMOTOsetspeed(10)\nMOTOmove19(56, 42, 190, 20, 93, 48, 54, 60, 132, 167, 10, 180, 101, 149, 147, 139, 0, 0, 93)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(76, 85, 190, 43, 122, 82, 68, 60, 117, 122, 10, 156, 73, 92, 148, 137, 0, 0, 93)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(76, 85, 190, 57, 129, 141, 49, 60, 117, 122, 10, 142, 56, 50, 150, 135, 0, 0, 93)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(76, 85, 190, 58, 147, 150, 56, 60, 117, 122, 10, 146, 43, 50, 138, 139, 0, 0, 93)\nMOTOwait()\n\n\n-- nodao\nMOTOsetspeed(10)\nMOTOmove19(76, 85, 190, 87, 127, 150, 56, 88, 117, 122, 10, 111, 60, 50, 135, 107, 0, 0, 93)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(76, 85, 190, 88, 116, 150, 54, 90, 117, 122, 10, 111, 83, 50, 147, 108, 0, 0, 93)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(76, 85, 190, 97, 113, 150, 51, 100, 117, 122, 10, 99, 83, 50, 146, 99, 0, 0, 93)\nMOTOwait()\n\n\n-- standup\nMOTOsetspeed(20)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1773303192461'] = function(block) {
  let code = "base_action.action('前倒地起身-超级自编完整版')\n";
  return code;
}

