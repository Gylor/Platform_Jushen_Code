Blockly.Blocks['1773303183672'] = {
  init: function() {
    this.jsonInit({
      "type": "1773303183672",
      "message0": "配送-放快递",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1773303183672'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOmove19(65, 10, 188, 100, 90, 55, 127, 100, 140, 190, 14, 100, 110, 145, 73, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65, 10, 149, 100, 104, 132, 70, 100, 140, 190, 50, 100, 93, 69, 130, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(10)\nMOTOmove19(65, 10, 149, 100, 149, 150, 58, 100, 140, 190, 50, 100, 52, 50, 142, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(65, 10, 149, 100, 149, 150, 58, 100, 140, 190, 50, 100, 52, 50, 142, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80, 30, 149, 100, 149, 150, 58, 100, 120, 170, 50, 100, 52, 50, 142, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 149, 100, 126, 148, 61, 100, 120, 170, 50, 100, 72, 50, 138, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80, 30, 149, 100, 93, 55, 124, 100, 120, 170, 50, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 张\n\n\n-- SPEED 30\n";
  return code;
}

Blockly.Python['1773303183672'] = function(block) {
  let code = "base_action.action('配送-放快递')\n";
  return code;
}

