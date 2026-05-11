Blockly.Blocks['1773301202072'] = {
  init: function() {
    this.jsonInit({
      "type": "1773301202072",
      "message0": "配送-书籍箱子放快递",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1773301202072'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(65, 10, 188, 100, 90, 55, 127, 100, 140, 190, 14, 100, 110, 145, 73, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(52, 106, 189, 100, 90, 55, 127, 100, 140, 83, 12, 100, 110, 145, 73, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(50, 105, 100, 100, 90, 55, 127, 100, 150, 83, 99, 100, 110, 145, 73, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1773301202072'] = function(block) {
  let code = "base_action.action('配送-书籍箱子放快递')\n";
  return code;
}

