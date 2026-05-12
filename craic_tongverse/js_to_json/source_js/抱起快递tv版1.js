Blockly.Blocks['1775527736350'] = {
  init: function() {
    this.jsonInit({
      "type": "1775527736350",
      "message0": "抱起快递tv版1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1775527736350'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\n\n\n-- 张\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 149, 100, 93, 55, 124, 100, 120, 170, 50, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80, 30, 149, 100, 126, 148, 61, 100, 120, 170, 50, 100, 72, 50, 138, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 关键位置帧\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 149, 100, 149, 150, 40, 100, 120, 170, 50, 100, 52, 50, 161, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 开夹\nMOTOsetspeed(20)\nMOTOmove19(60, 10, 149, 100, 149, 150, 40, 100, 145, 190, 50, 100, 52, 50, 161, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 开夹2\nMOTOsetspeed(25)\nMOTOmove19(60, 10, 149, 100, 149, 150, 40, 100, 145, 190, 50, 100, 52, 50, 161, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\n\n\n-- back\nMOTOsetspeed(10)\nMOTOmove19(60, 10, 149, 100, 104, 132, 70, 100, 145, 190, 50, 100, 93, 69, 130, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60, 10, 188, 100, 90, 55, 127, 100, 145, 190, 14, 100, 110, 145, 73, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1775527736350'] = function(block) {
  let code = "base_action.action('抱起快递tv版1')\n";
  return code;
}

