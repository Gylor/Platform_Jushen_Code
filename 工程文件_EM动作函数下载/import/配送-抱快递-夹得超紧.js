Blockly.Blocks['1773301193938'] = {
  init: function() {
    this.jsonInit({
      "type": "1773301193938",
      "message0": "配送-抱快递-夹得超紧",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1773301193938'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\n\n\n-- 张\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 149, 100, 93, 55, 124, 100, 120, 170, 50, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80, 30, 149, 100, 126, 148, 61, 100, 120, 170, 50, 100, 72, 50, 138, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 149, 100, 149, 150, 58, 100, 120, 170, 50, 100, 52, 50, 142, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 开夹\nMOTOsetspeed(20)\nMOTOmove19(60, 10, 149, 100, 149, 150, 58, 100, 145, 190, 50, 100, 52, 50, 142, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(60, 10, 149, 100, 149, 150, 58, 100, 145, 190, 50, 100, 52, 50, 142, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(10)\nMOTOmove19(60, 10, 149, 100, 104, 132, 70, 100, 145, 190, 50, 100, 93, 69, 130, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60, 10, 188, 100, 90, 55, 127, 100, 145, 190, 14, 100, 110, 145, 73, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1773301193938'] = function(block) {
  let code = "base_action.action('配送-抱快递-夹得超紧')\n";
  return code;
}

