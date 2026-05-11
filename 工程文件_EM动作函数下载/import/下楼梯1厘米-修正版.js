Blockly.Blocks['1773301243146'] = {
  init: function() {
    this.jsonInit({
      "type": "1773301243146",
      "message0": "下楼梯1厘米-修正版",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1773301243146'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\n\n\n-- 倒置版本\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 101, 94, 57, 125, 101, 120, 170, 100, 100, 107, 145, 77, 103, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 100, 100, 98, 46, 133, 110, 120, 170, 100, 106, 103, 153, 72, 109, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(80, 30, 100, 93, 98, 46, 127, 111, 120, 170, 100, 101, 122, 133, 120, 108, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 93, 98, 46, 127, 109, 120, 170, 100, 98, 144, 169, 10, 109, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80, 30, 100, 85, 155, 40, 165, 107, 120, 170, 100, 90, 110, 165, 57, 115, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80, 30, 100, 95, 160, 39, 183, 104, 120, 170, 100, 95, 128, 158, 95, 107, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80, 30, 100, 95, 160, 39, 185, 104, 120, 170, 100, 95, 129, 158, 103, 105, 0, 0, 100)\nMOTOwait()\n\n\n-- 后面得补一帧\nMOTOsetspeed(15)\nMOTOmove19(80, 30, 100, 95, 127, 39, 183, 97, 120, 170, 100, 95, 157, 154, 108, 101, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80, 30, 100, 95, 127, 39, 183, 97, 120, 170, 100, 94, 157, 154, 106, 91, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80, 30, 100, 95, 127, 39, 183, 97, 120, 170, 100, 93, 141, 153, 93, 91, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80, 30, 100, 90, 151, 66, 170, 83, 120, 170, 100, 95, 132, 140, 92, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80, 30, 100, 90, 123, 117, 100, 91, 120, 170, 100, 95, 106, 143, 75, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80, 30, 100, 93, 93, 55, 123, 86, 120, 170, 100, 93, 106, 143, 75, 92, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 100, 99, 92, 56, 123, 100, 120, 170, 100, 100, 106, 144, 75, 99, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1773301243146'] = function(block) {
  let code = "base_action.action('下楼梯1厘米-修正版')\n";
  return code;
}

