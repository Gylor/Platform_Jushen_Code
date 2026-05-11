Blockly.Blocks['1773301143060'] = {
  init: function() {
    this.jsonInit({
      "type": "1773301143060",
      "message0": "抱快递慢走",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1773301143060'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(65, 11, 189, 100, 93, 55, 124, 100, 140, 189, 13, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65, 11, 189, 90, 91, 48, 129, 88, 140, 189, 13, 94, 107, 146, 76, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 11, 189, 86, 125, 95, 110, 90, 140, 189, 13, 94, 107, 146, 76, 87, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 11, 189, 86, 113, 37, 156, 88, 140, 189, 13, 94, 107, 146, 77, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65, 11, 189, 107, 100, 56, 124, 111, 140, 189, 13, 112, 129, 155, 93, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 11, 189, 106, 95, 54, 123, 113, 140, 189, 13, 114, 75, 105, 90, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 11, 189, 106, 93, 54, 123, 111, 140, 189, 13, 114, 87, 163, 44, 112, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65, 11, 189, 88, 71, 45, 107, 90, 140, 189, 13, 93, 100, 144, 76, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 11, 189, 86, 110, 95, 100, 90, 140, 189, 13, 94, 107, 146, 77, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65, 11, 189, 90, 91, 48, 129, 88, 140, 189, 13, 94, 107, 146, 76, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65, 11, 189, 100, 93, 55, 124, 100, 140, 189, 13, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1773301143060'] = function(block) {
  let code = "base_action.action('抱快递慢走')\n";
  return code;
}

Blockly.Blocks['1773301149192'] = {
  init: function() {
    this.jsonInit({
      "type": "1773301149192",
      "message0": "box_forward_s_v3",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1773301149192'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65,0,0,0)\n\n\n-- 偷平手\nMOTOsetspeed(10)\nMOTOmove19(60, 10, 190, 100, 93, 55, 124, 100, 140, 190, 10, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 10, 190, 90, 81, 48, 129, 88, 140, 190, 10, 94, 117, 146, 76, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 10, 190, 86, 115, 95, 110, 90, 140, 190, 10, 94, 117, 146, 76, 87, 0, 0, 100)\nMOTOwait()\n\n\n-- Good\nMOTOsetspeed(30)\nMOTOmove19(60, 10, 190, 86, 109, 74, 127, 88, 140, 190, 10, 94, 117, 146, 77, 89, 0, 0, 100)\nMOTOwait()\n\n\n-- Good\nMOTOsetspeed(10)\nMOTOmove19(60, 10, 190, 110, 78, 56, 115, 110, 140, 190, 10, 112, 139, 155, 93, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 10, 190, 110, 78, 56, 115, 110, 140, 190, 10, 116, 110, 99, 123, 108, 0, 0, 100)\nMOTOwait()\n\n\n-- resume\nMOTOsetspeed(10)\nMOTOmove19(60, 10, 190, 100, 83, 55, 124, 100, 140, 190, 10, 100, 117, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- resume\nMOTOsetspeed(5)\nMOTOmove19(60, 10, 190, 100, 93, 55, 124, 100, 140, 190, 10, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1773301149192'] = function(block) {
  let code = "base_action.action('box_forward_s_v3')\n";
  return code;
}

Blockly.Blocks['1773301152734'] = {
  init: function() {
    this.jsonInit({
      "type": "1773301152734",
      "message0": "box_stand",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1773301152734'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65,0,0,0)\n\n\n-- 偷平手\nMOTOsetspeed(10)\nMOTOmove19(60, 10, 190, 100, 93, 55, 124, 100, 140, 190, 10, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1773301152734'] = function(block) {
  let code = "base_action.action('box_stand')\n";
  return code;
}

Blockly.Blocks['1773301156120'] = {
  init: function() {
    this.jsonInit({
      "type": "1773301156120",
      "message0": "box_turnright_q_v1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1773301156120'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 189, 95, 160, 64, 179, 102, 140, 189, 13, 104, 117, 88, 147, 105, 0, 0, 100)\nMOTOwait()\n\n\n-- 标准站立\nMOTOsetspeed(20)\nMOTOmove19(65, 10, 189, 100, 90, 55, 124, 100, 140, 189, 13, 100, 111, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1773301156120'] = function(block) {
  let code = "base_action.action('box_turnright_q_v1')\n";
  return code;
}

Blockly.Blocks['1773301159394'] = {
  init: function() {
    this.jsonInit({
      "type": "1773301159394",
      "message0": "抱快递小右移-超紧",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1773301159394'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(60,30,30,45,65,65,65,65,145,30,30,45,65,65,65,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 10, 189, 100, 93, 55, 124, 100, 145, 190, 13, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(60,20,20,85,85,95,85,85,145,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(60, 10, 189, 90, 93, 54, 124, 100, 145, 190, 13, 101, 107, 146, 76, 110, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(60, 10, 189, 94, 93, 54, 124, 85, 145, 190, 13, 95, 107, 146, 76, 95, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOrigid16(60,20,20,85,55,55,55,85,145,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(60, 10, 189, 100, 93, 55, 124, 100, 145, 190, 13, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1773301159394'] = function(block) {
  let code = "base_action.action('抱快递小右移-超紧')\n";
  return code;
}

Blockly.Blocks['1773301162584'] = {
  init: function() {
    this.jsonInit({
      "type": "1773301162584",
      "message0": "抱快递小左移-超紧",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1773301162584'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(60,30,30,45,65,65,65,65,145,30,30,45,65,65,65,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 11, 189, 100, 90, 55, 124, 100, 145, 189, 13, 100, 110, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(60,20,20,85,85,95,85,85,145,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(60, 11, 189, 99, 90, 54, 124, 90, 145, 189, 13, 110, 110, 146, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\nMOTOrigid16(60,20,20,85,85,95,85,85,145,20,20,85,55,55,55,85,0,0,0)\n\n\n-- 1\nMOTOsetspeed(20)\nMOTOmove19(60, 11, 189, 107, 90, 54, 124, 110, 145, 189, 13, 115, 110, 146, 76, 115, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(60,20,20,85,55,55,55,85,145,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(60, 11, 189, 100, 90, 55, 124, 100, 145, 189, 13, 100, 110, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1773301162584'] = function(block) {
  let code = "base_action.action('抱快递小左移-超紧')\n";
  return code;
}

Blockly.Blocks['1773301166045'] = {
  init: function() {
    this.jsonInit({
      "type": "1773301166045",
      "message0": "抱快递右移",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1773301166045'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,85,95,85,85,0,0,0)\n\n\n-- 0\nMOTOsetspeed(10)\nMOTOmove19(65, 11, 189, 100, 90, 55, 124, 100, 140, 189, 13, 100, 110, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(8)\nMOTOmove19(65, 11, 189, 100, 90, 55, 124, 106, 140, 189, 13, 100, 111, 145, 76, 112, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 11, 189, 98, 90, 55, 124, 108, 140, 189, 13, 111, 111, 145, 76, 103, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65, 11, 189, 100, 90, 55, 124, 88, 140, 189, 13, 100, 111, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\n\n\n-- 0\nMOTOsetspeed(10)\nMOTOmove19(65, 11, 189, 100, 90, 55, 124, 100, 140, 189, 13, 100, 110, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1773301166045'] = function(block) {
  let code = "base_action.action('抱快递右移')\n";
  return code;
}

Blockly.Blocks['1773301172032'] = {
  init: function() {
    this.jsonInit({
      "type": "1773301172032",
      "message0": "抱快递右转2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1773301172032'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 189, 100, 93, 55, 124, 100, 140, 189, 13, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(24)\nMOTOmove19(65, 10, 189, 95, 123, 55, 154, 95, 140, 189, 13, 105, 137, 145, 106, 105, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(24)\nMOTOmove19(65, 10, 189, 100, 93, 55, 124, 100, 140, 189, 13, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 189, 100, 93, 55, 124, 100, 140, 189, 13, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1773301172032'] = function(block) {
  let code = "base_action.action('抱快递右转2')\n";
  return code;
}

Blockly.Blocks['1773301175324'] = {
  init: function() {
    this.jsonInit({
      "type": "1773301175324",
      "message0": "抱快递左移",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1773301175324'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,45,65,65,65,65,30,30,30,45,65,65,65,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(65, 11, 189, 100, 90, 55, 124, 100, 140, 189, 13, 100, 110, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(65, 11, 189, 90, 90, 54, 124, 90, 140, 189, 13, 110, 110, 146, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\nMOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,55,55,55,85,0,0,0)\n\n\n-- 1\nMOTOsetspeed(20)\nMOTOmove19(65, 11, 189, 106, 90, 54, 124, 110, 140, 189, 13, 115, 110, 146, 76, 115, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(20,20,20,85,55,55,55,85,20,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(65, 11, 189, 100, 90, 55, 124, 100, 140, 189, 13, 100, 110, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1773301175324'] = function(block) {
  let code = "base_action.action('抱快递左移')\n";
  return code;
}

Blockly.Blocks['1773301180230'] = {
  init: function() {
    this.jsonInit({
      "type": "1773301180230",
      "message0": "抱快递左转",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1773301180230'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(24)\nMOTOmove19(65, 10, 189, 95, 63, 55, 94, 95, 140, 189, 13, 105, 77, 145, 46, 105, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 189, 95, 63, 55, 94, 93, 140, 189, 13, 105, 77, 145, 46, 107, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 189, 100, 90, 55, 124, 100, 140, 189, 13, 100, 111, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(600)\n";
  return code;
}

Blockly.Python['1773301180230'] = function(block) {
  let code = "base_action.action('抱快递左转')\n";
  return code;
}

Blockly.Blocks['1773301183412'] = {
  init: function() {
    this.jsonInit({
      "type": "1773301183412",
      "message0": "后倒地起身-修正版",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1773301183412'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(35, 130, 20, 101, 131, 126, 170, 100, 165, 70, 180, 99, 69, 74, 30, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(21, 105, 21, 101, 131, 126, 170, 100, 179, 95, 180, 99, 69, 74, 30, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(92, 16, 46, 100, 80, 150, 60, 100, 108, 184, 154, 100, 120, 50, 140, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(92, 18, 58, 100, 73, 150, 40, 100, 108, 182, 142, 100, 127, 50, 160, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(92, 23, 114, 100, 124, 150, 62, 100, 108, 176, 81, 100, 76, 50, 137, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1773301183412'] = function(block) {
  let code = "base_action.action('后倒地起身-修正版')\n";
  return code;
}

Blockly.Blocks['1773301188182'] = {
  init: function() {
    this.jsonInit({
      "type": "1773301188182",
      "message0": "结束轻微后仰",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1773301188182'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,0,0,0)\nMOTOsetspeed(5)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1773301188182'] = function(block) {
  let code = "base_action.action('结束轻微后仰')\n";
  return code;
}

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

Blockly.Blocks['1773301198072'] = {
  init: function() {
    this.jsonInit({
      "type": "1773301198072",
      "message0": "配送-放快递",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1773301198072'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOmove19(65, 10, 188, 100, 90, 55, 127, 100, 140, 190, 14, 100, 110, 145, 73, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65, 10, 149, 100, 104, 132, 70, 100, 140, 190, 50, 100, 93, 69, 130, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(10)\nMOTOmove19(65, 10, 149, 100, 149, 150, 58, 100, 140, 190, 50, 100, 52, 50, 142, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(65, 10, 149, 100, 149, 150, 58, 100, 140, 190, 50, 100, 52, 50, 142, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80, 30, 149, 100, 149, 150, 58, 100, 120, 170, 50, 100, 52, 50, 142, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 149, 100, 126, 148, 61, 100, 120, 170, 50, 100, 72, 50, 138, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80, 30, 149, 100, 93, 55, 124, 100, 120, 170, 50, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 张\n\n\n-- SPEED 30\n";
  return code;
}

Blockly.Python['1773301198072'] = function(block) {
  let code = "base_action.action('配送-放快递')\n";
  return code;
}

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

Blockly.Blocks['1773301207483'] = {
  init: function() {
    this.jsonInit({
      "type": "1773301207483",
      "message0": "前倒地起身-超级自编完整版",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1773301207483'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,0,0,0)\n\n\n-- standup\nMOTOsetspeed(25)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(94, 88, 107, 100, 93, 55, 124, 100, 102, 113, 85, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(93, 87, 187, 100, 93, 55, 124, 100, 101, 113, 17, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(79, 83, 165, 40, 87, 55, 124, 95, 119, 123, 38, 150, 106, 144, 72, 98, 0, 0, 99)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(78, 86, 165, 39, 94, 53, 44, 100, 118, 122, 38, 150, 102, 145, 156, 98, 0, 0, 98)\nMOTOwait()\n\n\n-- pre\nMOTOsetspeed(20)\nMOTOmove19(77, 85, 190, 20, 94, 52, 44, 99, 116, 122, 10, 180, 101, 144, 156, 98, 0, 0, 98)\nMOTOwait()\n\n\n-- √\nMOTOsetspeed(10)\nMOTOmove19(56, 42, 190, 20, 93, 48, 54, 60, 132, 167, 10, 180, 101, 149, 147, 139, 0, 0, 93)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(76, 85, 190, 43, 122, 82, 68, 60, 117, 122, 10, 156, 73, 92, 148, 137, 0, 0, 93)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(76, 85, 190, 57, 129, 141, 49, 60, 117, 122, 10, 142, 56, 50, 150, 135, 0, 0, 93)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(76, 85, 190, 58, 147, 150, 56, 60, 117, 122, 10, 146, 43, 50, 138, 139, 0, 0, 93)\nMOTOwait()\n\n\n-- nodao\nMOTOsetspeed(10)\nMOTOmove19(76, 85, 190, 87, 127, 150, 56, 88, 117, 122, 10, 111, 60, 50, 135, 107, 0, 0, 93)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(76, 85, 190, 88, 116, 150, 54, 90, 117, 122, 10, 111, 83, 50, 147, 108, 0, 0, 93)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(76, 85, 190, 97, 113, 150, 51, 100, 117, 122, 10, 99, 83, 50, 146, 99, 0, 0, 93)\nMOTOwait()\n\n\n-- standup\nMOTOsetspeed(20)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1773301207483'] = function(block) {
  let code = "base_action.action('前倒地起身-超级自编完整版')\n";
  return code;
}

Blockly.Blocks['1773301216374'] = {
  init: function() {
    this.jsonInit({
      "type": "1773301216374",
      "message0": "轻微后仰看字牌",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1773301216374'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(80, 30, 100, 100, 93, 62, 124, 100, 120, 170, 100, 100, 107, 136, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1773301216374'] = function(block) {
  let code = "base_action.action('轻微后仰看字牌')\n";
  return code;
}

Blockly.Blocks['1773301220219'] = {
  init: function() {
    this.jsonInit({
      "type": "1773301220219",
      "message0": "书架-放二层3",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1773301220219'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(65, 11, 189, 100, 93, 55, 124, 100, 140, 189, 13, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65, 11, 189, 90, 91, 48, 129, 88, 140, 189, 13, 94, 107, 146, 76, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 11, 189, 86, 125, 95, 110, 90, 140, 189, 13, 94, 107, 146, 76, 87, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 11, 189, 86, 113, 37, 156, 88, 140, 189, 13, 94, 107, 146, 77, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65, 11, 189, 107, 100, 56, 124, 111, 140, 189, 13, 112, 129, 155, 93, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 11, 189, 106, 95, 54, 123, 113, 140, 189, 13, 114, 75, 105, 90, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 11, 189, 106, 93, 54, 123, 111, 140, 189, 13, 114, 87, 163, 44, 112, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65, 11, 189, 88, 71, 45, 107, 90, 140, 189, 13, 93, 100, 144, 76, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 11, 189, 86, 110, 95, 100, 90, 140, 189, 13, 94, 107, 146, 77, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65, 11, 189, 90, 91, 48, 129, 88, 140, 189, 13, 94, 107, 146, 76, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65, 11, 189, 100, 93, 55, 124, 100, 140, 189, 13, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(30)\nMOTOmove19(82, 90, 173, 100, 90, 55, 127, 100, 118, 103, 24, 100, 110, 145, 73, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(82, 89, 96, 100, 90, 55, 127, 100, 117, 103, 107, 100, 110, 145, 73, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 3\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1773301220219'] = function(block) {
  let code = "base_action.action('书架-放二层3')\n";
  return code;
}

Blockly.Blocks['1773301224279'] = {
  init: function() {
    this.jsonInit({
      "type": "1773301224279",
      "message0": "书架-放一层",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1773301224279'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\n\n\n-- √√\nMOTOsetspeed(30)\nMOTOmove19(64, 10, 150, 100, 93, 55, 124, 100, 140, 190, 52, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 抱着慢走半步\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 135, 100, 93, 55, 124, 100, 140, 190, 65, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65, 10, 135, 90, 91, 48, 129, 88, 140, 190, 65, 94, 107, 146, 76, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 135, 86, 125, 95, 110, 90, 140, 190, 65, 94, 107, 146, 76, 87, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 135, 86, 113, 37, 156, 88, 140, 190, 65, 94, 107, 146, 77, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65, 10, 135, 107, 100, 56, 124, 111, 140, 190, 65, 112, 129, 155, 93, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 135, 106, 95, 54, 123, 113, 140, 190, 65, 114, 75, 105, 90, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65, 10, 135, 100, 93, 55, 124, 100, 140, 190, 65, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 抱着慢走半步\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 135, 100, 93, 55, 124, 100, 140, 190, 65, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65, 10, 135, 90, 91, 48, 129, 88, 140, 190, 65, 94, 107, 146, 76, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 135, 86, 125, 95, 110, 90, 140, 190, 65, 94, 107, 146, 76, 87, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 135, 86, 113, 37, 156, 88, 140, 190, 65, 94, 107, 146, 77, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65, 10, 135, 107, 100, 56, 124, 111, 140, 190, 65, 112, 129, 155, 93, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 135, 106, 95, 54, 123, 113, 140, 190, 65, 114, 75, 105, 90, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65, 10, 135, 100, 93, 55, 124, 100, 140, 190, 65, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 135, 99, 93, 140, 40, 99, 140, 190, 65, 99, 106, 58, 162, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(64, 46, 134, 99, 93, 140, 40, 99, 140, 152, 65, 99, 106, 58, 162, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(64, 46, 92, 99, 93, 140, 40, 99, 140, 152, 112, 99, 106, 58, 162, 99, 0, 0, 100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1773301224279'] = function(block) {
  let code = "base_action.action('书架-放一层')\n";
  return code;
}

Blockly.Blocks['1773301228975'] = {
  init: function() {
    this.jsonInit({
      "type": "1773301228975",
      "message0": "推抹布-贴胸准高慢延-11次",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1773301228975'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,45,65,65,65,65,30,30,30,45,65,65,65,65,0,0,0)\n\n\n-- 站立\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- meopen\nMOTOsetspeed(30)\nMOTOmove19(86, 88, 103, 100, 93, 55, 124, 100, 119, 100, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- me斜\nMOTOsetspeed(30)\nMOTOmove19(85, 71, 160, 100, 93, 55, 124, 100, 119, 125, 45, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- me合并对-参考手\nMOTOsetspeed(30)\nMOTOmove19(57, 10, 150, 100, 93, 55, 124, 100, 143, 190, 51, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(500)\n\n\n-- me抬高抹布\nMOTOsetspeed(10)\nMOTOmove19(57, 10, 156, 100, 93, 55, 124, 100, 143, 190, 44, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(57,40,153,40,40,40,40,40,143,40,48,40,40,40,40,40,0,0,0)\n\n\n-- 右移1\nMOTOsetspeed(15)\nMOTOmove19(57, 10, 156, 100, 93, 55, 124, 100, 143, 190, 44, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(57, 10, 156, 90, 93, 54, 124, 100, 143, 190, 44, 110, 107, 146, 76, 110, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(15)\nMOTOmove19(57, 10, 156, 94, 93, 54, 124, 85, 143, 190, 44, 105, 107, 146, 76, 95, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(15)\nMOTOmove19(57, 10, 156, 85, 93, 54, 124, 85, 143, 190, 44, 94, 107, 146, 76, 90, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(57, 10, 156, 100, 93, 55, 124, 100, 143, 190, 44, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(57, 10, 156, 100, 93, 55, 124, 100, 143, 190, 44, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(57,40,153,40,40,40,40,40,143,40,48,40,40,40,40,40,0,0,0)\n\n\n-- 右移2\nMOTOsetspeed(30)\nMOTOmove19(57, 10, 156, 100, 93, 55, 124, 100, 143, 190, 44, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(57, 10, 156, 90, 93, 54, 124, 100, 143, 190, 44, 110, 107, 146, 76, 110, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(57, 10, 156, 94, 93, 54, 124, 85, 143, 190, 44, 105, 107, 146, 76, 95, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(57, 10, 156, 85, 93, 54, 124, 85, 143, 190, 44, 94, 107, 146, 76, 90, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(57, 10, 156, 100, 93, 55, 124, 100, 143, 190, 44, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(57, 10, 156, 100, 93, 55, 124, 100, 143, 190, 44, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(57,40,153,40,40,40,40,40,143,40,48,40,40,40,40,40,0,0,0)\n\n\n-- 右移3\nMOTOsetspeed(30)\nMOTOmove19(57, 10, 156, 100, 93, 55, 124, 100, 143, 190, 44, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(57, 10, 156, 90, 93, 54, 124, 100, 143, 190, 44, 110, 107, 146, 76, 110, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(57, 10, 156, 94, 93, 54, 124, 85, 143, 190, 44, 105, 107, 146, 76, 95, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(57, 10, 156, 85, 93, 54, 124, 85, 143, 190, 44, 94, 107, 146, 76, 90, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(57, 10, 156, 100, 93, 55, 124, 100, 143, 190, 44, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(57,40,153,40,40,40,40,40,143,40,48,40,40,40,40,40,0,0,0)\n\n\n-- 右移4\nMOTOsetspeed(30)\nMOTOmove19(57, 10, 156, 100, 93, 55, 124, 100, 143, 190, 44, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(57, 10, 156, 90, 93, 54, 124, 100, 143, 190, 44, 110, 107, 146, 76, 110, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(57, 10, 156, 94, 93, 54, 124, 85, 143, 190, 44, 105, 107, 146, 76, 95, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(57, 10, 156, 85, 93, 54, 124, 85, 143, 190, 44, 94, 107, 146, 76, 90, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(57, 10, 156, 100, 93, 55, 124, 100, 143, 190, 44, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(57,40,153,40,40,40,40,40,143,40,48,40,40,40,40,40,0,0,0)\n\n\n-- 右移5\nMOTOsetspeed(30)\nMOTOmove19(57, 10, 156, 100, 93, 55, 124, 100, 143, 190, 44, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(57, 10, 156, 90, 93, 54, 124, 100, 143, 190, 44, 110, 107, 146, 76, 110, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(57, 10, 156, 94, 93, 54, 124, 85, 143, 190, 44, 105, 107, 146, 76, 95, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(57, 10, 156, 85, 93, 54, 124, 85, 143, 190, 44, 94, 107, 146, 76, 90, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(57, 10, 156, 100, 93, 55, 124, 100, 143, 190, 44, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 右移6\nMOTOsetspeed(10)\nMOTOmove19(57, 10, 156, 100, 93, 55, 124, 100, 143, 190, 44, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(57, 10, 156, 90, 93, 54, 124, 100, 143, 190, 44, 110, 107, 146, 76, 110, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(15)\nMOTOmove19(57, 10, 156, 94, 93, 54, 124, 85, 143, 190, 44, 105, 107, 146, 76, 95, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(15)\nMOTOmove19(57, 10, 156, 85, 93, 54, 124, 85, 143, 190, 44, 94, 107, 146, 76, 90, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(57, 10, 156, 100, 93, 55, 124, 100, 143, 190, 44, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(57,40,153,40,40,40,40,40,143,40,48,40,40,40,40,40,0,0,0)\n\n\n-- 右移7\nMOTOsetspeed(30)\nMOTOmove19(57, 10, 156, 100, 93, 55, 124, 100, 143, 190, 44, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(57, 10, 156, 90, 93, 54, 124, 100, 143, 190, 44, 110, 107, 146, 76, 110, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(57, 10, 156, 94, 93, 54, 124, 85, 143, 190, 44, 105, 107, 146, 76, 95, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(57, 10, 156, 85, 93, 54, 124, 85, 143, 190, 44, 94, 107, 146, 76, 90, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(57, 10, 156, 100, 93, 55, 124, 100, 143, 190, 44, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(57,40,153,40,40,40,40,40,143,40,48,40,40,40,40,40,0,0,0)\n\n\n-- 右移8\nMOTOsetspeed(30)\nMOTOmove19(57, 10, 156, 100, 93, 55, 124, 100, 143, 190, 44, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(57, 10, 156, 90, 93, 54, 124, 100, 143, 190, 44, 110, 107, 146, 76, 110, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(57, 10, 156, 94, 93, 54, 124, 85, 143, 190, 44, 105, 107, 146, 76, 95, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(57, 10, 156, 85, 93, 54, 124, 85, 143, 190, 44, 94, 107, 146, 76, 90, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(57, 10, 156, 100, 93, 55, 124, 100, 143, 190, 44, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(57,40,153,40,40,40,40,40,143,40,48,40,40,40,40,40,0,0,0)\n\n\n-- 右移9\nMOTOsetspeed(30)\nMOTOmove19(57, 10, 156, 100, 93, 55, 124, 100, 143, 190, 44, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(57, 10, 156, 90, 93, 54, 124, 100, 143, 190, 44, 110, 107, 146, 76, 110, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(57, 10, 156, 94, 93, 54, 124, 85, 143, 190, 44, 105, 107, 146, 76, 95, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(57, 10, 156, 85, 93, 54, 124, 85, 143, 190, 44, 94, 107, 146, 76, 90, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(57, 10, 156, 100, 93, 55, 124, 100, 143, 190, 44, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(57,40,153,40,40,40,40,40,143,40,48,40,40,40,40,40,0,0,0)\n\n\n-- 右移10\nMOTOsetspeed(15)\nMOTOmove19(57, 10, 156, 100, 93, 55, 124, 100, 143, 190, 44, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(57, 10, 156, 90, 93, 54, 124, 100, 143, 190, 44, 110, 107, 146, 76, 110, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(15)\nMOTOmove19(57, 10, 156, 94, 93, 54, 124, 85, 143, 190, 44, 105, 107, 146, 76, 95, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(15)\nMOTOmove19(57, 10, 156, 85, 93, 54, 124, 85, 143, 190, 44, 94, 107, 146, 76, 90, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(57, 10, 156, 100, 93, 55, 124, 100, 143, 190, 44, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 右移11\nMOTOsetspeed(15)\nMOTOmove19(57, 10, 156, 100, 93, 55, 124, 100, 143, 190, 44, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(57, 10, 156, 90, 93, 54, 124, 100, 143, 190, 44, 110, 107, 146, 76, 110, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(15)\nMOTOmove19(57, 10, 156, 94, 93, 54, 124, 85, 143, 190, 44, 105, 107, 146, 76, 95, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(15)\nMOTOmove19(57, 10, 156, 85, 93, 54, 124, 85, 143, 190, 44, 94, 107, 146, 76, 90, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(57, 10, 156, 100, 93, 55, 124, 100, 143, 190, 44, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(57, 10, 156, 100, 93, 55, 124, 100, 143, 190, 44, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(57,40,153,40,40,40,40,40,143,40,48,40,40,40,40,40,0,0,0)\n\n\n-- me抬高抹布\nMOTOsetspeed(30)\nMOTOmove19(57, 10, 156, 100, 93, 55, 124, 100, 143, 190, 44, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- me合并对-参考手\nMOTOsetspeed(30)\nMOTOmove19(57, 10, 150, 100, 93, 55, 124, 100, 143, 190, 51, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(85, 71, 160, 100, 93, 55, 124, 100, 119, 125, 45, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(86, 88, 103, 100, 93, 55, 124, 100, 119, 100, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1773301228975'] = function(block) {
  let code = "base_action.action('推抹布-贴胸准高慢延-11次')\n";
  return code;
}

Blockly.Blocks['1773301235973'] = {
  init: function() {
    this.jsonInit({
      "type": "1773301235973",
      "message0": "无用-test上楼梯3",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1773301235973'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(37, 22, 157, 99, 92, 56, 123, 100, 147, 189, 46, 100, 106, 144, 75, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(37, 22, 157, 93, 93, 55, 123, 86, 147, 189, 46, 93, 106, 143, 75, 92, 0, 0, 100)\nMOTOwait()\n\n\n-- x\nMOTOsetspeed(15)\nMOTOmove19(37, 22, 157, 90, 123, 117, 100, 91, 147, 189, 46, 95, 106, 143, 75, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(37, 22, 157, 90, 118, 136, 67, 91, 147, 189, 46, 95, 106, 143, 75, 89, 0, 0, 100)\nMOTOwait()\n\n\n-- x\nMOTOsetspeed(15)\nMOTOmove19(37, 22, 157, 90, 151, 66, 170, 83, 147, 189, 46, 95, 132, 140, 92, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(37, 22, 157, 90, 160, 75, 174, 95, 147, 189, 46, 95, 132, 140, 92, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(37, 22, 157, 95, 127, 39, 183, 97, 147, 189, 46, 95, 157, 154, 108, 101, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(37, 22, 157, 95, 160, 39, 185, 104, 147, 189, 46, 95, 129, 158, 103, 105, 0, 0, 100)\nMOTOwait()\n\n\n-- 脚尖重心\nMOTOsetspeed(15)\nMOTOmove19(37, 22, 157, 95, 160, 39, 183, 104, 147, 189, 46, 95, 128, 158, 95, 107, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(37, 22, 157, 85, 155, 40, 165, 107, 147, 189, 46, 90, 110, 165, 57, 115, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(37, 22, 157, 93, 98, 46, 127, 109, 147, 189, 46, 98, 144, 169, 10, 109, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(37, 22, 157, 93, 98, 46, 127, 111, 147, 189, 46, 101, 122, 133, 120, 108, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(37, 22, 157, 93, 98, 46, 127, 111, 147, 189, 46, 100, 79, 101, 102, 108, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(37, 22, 157, 100, 98, 46, 133, 110, 147, 189, 46, 104, 87, 128, 83, 108, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(37, 22, 157, 101, 94, 57, 125, 101, 147, 189, 46, 100, 107, 145, 77, 103, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\n";
  return code;
}

Blockly.Python['1773301235973'] = function(block) {
  let code = "base_action.action('无用-test上楼梯3')\n";
  return code;
}

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

Blockly.Blocks['1773301248163'] = {
  init: function() {
    this.jsonInit({
      "type": "1773301248163",
      "message0": "向后慢走1步-修正前掌",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1773301248163'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 35, 100, 90, 91, 48, 129, 88, 120, 165, 100, 94, 107, 146, 76, 90, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 35, 90, 86, 90, 95, 84, 90, 120, 165, 90, 94, 107, 146, 78, 87, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 35, 110, 88, 71, 53, 105, 85, 120, 165, 110, 93, 100, 144, 79, 91, 0, 0, 100)\nMOTOwait()\n\n\n-- √\nMOTOsetspeed(10)\nMOTOmove19(80, 35, 110, 106, 93, 53, 124, 111, 120, 165, 110, 111, 77, 154, 44, 112, 0, 0, 100)\nMOTOwait()\n\n\n-- √\nMOTOsetspeed(30)\nMOTOmove19(80, 35, 90, 106, 95, 53, 122, 113, 120, 165, 90, 112, 109, 120, 114, 113, 0, 0, 100)\nMOTOwait()\n\n\n-- √\nMOTOsetspeed(30)\nMOTOmove19(80, 35, 90, 107, 100, 56, 121, 109, 120, 165, 90, 111, 129, 147, 105, 108, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 35, 90, 86, 113, 37, 158, 90, 120, 165, 90, 94, 107, 147, 76, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 35, 90, 86, 110, 95, 100, 90, 120, 165, 90, 94, 107, 146, 77, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80, 35, 100, 90, 91, 48, 129, 88, 120, 165, 100, 94, 107, 146, 76, 90, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1773301248163'] = function(block) {
  let code = "base_action.action('向后慢走1步-修正前掌')\n";
  return code;
}

Blockly.Blocks['1773301256209'] = {
  init: function() {
    this.jsonInit({
      "type": "1773301256209",
      "message0": "向后慢走1步-修正前掌-抱箱",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1773301256209'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 189, 100, 93, 55, 124, 100, 140, 189, 13, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65, 10, 189, 90, 91, 48, 129, 88, 140, 189, 13, 94, 107, 146, 76, 90, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 189, 86, 90, 95, 84, 90, 140, 189, 13, 94, 107, 146, 78, 87, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 189, 88, 71, 53, 105, 85, 140, 189, 13, 93, 100, 144, 79, 91, 0, 0, 100)\nMOTOwait()\n\n\n-- √\nMOTOsetspeed(10)\nMOTOmove19(65, 10, 189, 106, 93, 53, 124, 111, 140, 189, 13, 111, 77, 154, 44, 112, 0, 0, 100)\nMOTOwait()\n\n\n-- √\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 189, 106, 95, 53, 122, 113, 140, 189, 13, 112, 109, 120, 114, 113, 0, 0, 100)\nMOTOwait()\n\n\n-- √\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 189, 107, 100, 56, 121, 109, 140, 189, 13, 111, 129, 147, 105, 108, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65, 10, 189, 86, 113, 37, 158, 90, 140, 189, 13, 94, 107, 147, 76, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 189, 86, 110, 95, 100, 90, 140, 189, 13, 94, 107, 146, 77, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65, 10, 189, 90, 91, 48, 129, 88, 140, 189, 13, 94, 107, 146, 76, 90, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65, 10, 189, 100, 93, 55, 124, 100, 140, 189, 13, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1773301256209'] = function(block) {
  let code = "base_action.action('向后慢走1步-修正前掌-抱箱')\n";
  return code;
}

Blockly.Blocks['1773301260663'] = {
  init: function() {
    this.jsonInit({
      "type": "1773301260663",
      "message0": "向后慢走3步",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1773301260663'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65,0,0,0)\n\n\n--  --- 动作倒置开始 ---\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 35, 100, 90, 91, 48, 129, 88, 120, 165, 100, 94, 107, 146, 76, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80, 35, 90, 86, 110, 95, 100, 90, 120, 165, 90, 94, 107, 146, 77, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 35, 110, 88, 71, 45, 107, 90, 120, 165, 110, 93, 100, 144, 76, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 35, 110, 106, 93, 54, 123, 111, 120, 165, 110, 114, 87, 163, 44, 112, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 35, 110, 106, 95, 54, 123, 113, 120, 165, 110, 114, 75, 105, 90, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 35, 90, 107, 100, 56, 124, 111, 120, 165, 90, 112, 129, 155, 93, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 35, 90, 86, 113, 37, 156, 88, 120, 165, 90, 94, 107, 146, 77, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 35, 90, 86, 125, 95, 110, 90, 120, 165, 90, 94, 107, 146, 76, 87, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 35, 110, 88, 71, 45, 107, 90, 120, 165, 110, 93, 100, 144, 76, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 35, 110, 106, 93, 54, 123, 111, 120, 165, 110, 114, 87, 163, 44, 112, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 35, 110, 106, 95, 54, 123, 113, 120, 165, 110, 114, 75, 105, 90, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 35, 90, 107, 100, 56, 124, 111, 120, 165, 90, 112, 129, 155, 93, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 35, 90, 86, 113, 37, 156, 88, 120, 165, 90, 94, 107, 146, 77, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 35, 90, 86, 125, 95, 110, 90, 120, 165, 90, 94, 107, 146, 76, 87, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 35, 110, 88, 71, 45, 107, 90, 120, 165, 110, 93, 100, 144, 76, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 35, 110, 106, 93, 54, 123, 111, 120, 165, 110, 114, 87, 163, 44, 112, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 35, 110, 106, 95, 54, 123, 113, 120, 165, 110, 114, 75, 105, 90, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 35, 90, 107, 100, 56, 124, 111, 120, 165, 90, 112, 129, 155, 93, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 35, 90, 86, 113, 37, 156, 88, 120, 165, 90, 94, 107, 146, 77, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 35, 90, 86, 125, 95, 110, 90, 120, 165, 90, 94, 107, 146, 76, 87, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 35, 100, 90, 91, 48, 129, 88, 120, 165, 100, 94, 107, 146, 76, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1773301260663'] = function(block) {
  let code = "base_action.action('向后慢走3步')\n";
  return code;
}

Blockly.Blocks['1773301267371'] = {
  init: function() {
    this.jsonInit({
      "type": "1773301267371",
      "message0": "向后走2cm-稳定",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1773301267371'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 35, 100, 90, 91, 48, 129, 88, 120, 165, 100, 94, 107, 146, 76, 90, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 35, 90, 88, 96, 85, 101, 91, 120, 165, 90, 94, 107, 146, 78, 87, 0, 0, 100)\nMOTOwait()\n\n\n-- √\nMOTOsetspeed(30)\nMOTOmove19(80, 35, 110, 89, 90, 51, 115, 87, 120, 165, 110, 93, 100, 144, 79, 91, 0, 0, 100)\nMOTOwait()\n\n\n-- √\nMOTOsetspeed(10)\nMOTOmove19(80, 35, 110, 106, 93, 53, 124, 111, 120, 165, 110, 113, 93, 134, 73, 114, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 35, 110, 106, 93, 53, 124, 111, 120, 165, 110, 112, 93, 118, 90, 112, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1773301267371'] = function(block) {
  let code = "base_action.action('向后走2cm-稳定')\n";
  return code;
}

Blockly.Blocks['1773301271191'] = {
  init: function() {
    this.jsonInit({
      "type": "1773301271191",
      "message0": "向后走2cm-稳定-抱箱",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1773301271191'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 189, 100, 93, 55, 124, 100, 140, 189, 13, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65, 10, 189, 90, 91, 48, 129, 88, 140, 189, 13, 94, 107, 146, 76, 90, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 189, 88, 96, 85, 101, 91, 140, 189, 13, 94, 107, 146, 78, 87, 0, 0, 100)\nMOTOwait()\n\n\n-- √\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 189, 89, 90, 51, 115, 87, 140, 189, 13, 93, 100, 144, 79, 91, 0, 0, 100)\nMOTOwait()\n\n\n-- √\nMOTOsetspeed(10)\nMOTOmove19(65, 10, 189, 106, 93, 53, 124, 111, 140, 189, 13, 113, 93, 134, 73, 114, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65, 10, 189, 106, 93, 53, 124, 111, 140, 189, 13, 112, 93, 118, 90, 112, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65, 10, 189, 100, 93, 55, 124, 100, 140, 189, 13, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1773301271191'] = function(block) {
  let code = "base_action.action('向后走2cm-稳定-抱箱')\n";
  return code;
}

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

Blockly.Blocks['1773301279964'] = {
  init: function() {
    this.jsonInit({
      "type": "1773301279964",
      "message0": "向前走2cm-稳定",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1773301279964'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 35, 100, 90, 91, 48, 129, 88, 120, 165, 100, 94, 107, 146, 76, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 35, 90, 86, 125, 95, 110, 90, 120, 165, 90, 94, 107, 146, 76, 87, 0, 0, 100)\nMOTOwait()\n\n\n-- Good\nMOTOsetspeed(30)\nMOTOmove19(80, 35, 90, 86, 119, 74, 127, 88, 120, 165, 90, 94, 107, 146, 77, 89, 0, 0, 100)\nMOTOwait()\n\n\n-- Good\nMOTOsetspeed(10)\nMOTOmove19(80, 35, 90, 110, 88, 56, 115, 110, 120, 165, 90, 112, 129, 155, 93, 110, 0, 0, 100)\nMOTOwait()\n\n\n-- Good\nMOTOsetspeed(30)\nMOTOmove19(80, 35, 90, 110, 88, 56, 115, 110, 120, 165, 90, 113, 104, 120, 99, 109, 0, 0, 100)\nMOTOwait()\n\n\n-- resume\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1773301279964'] = function(block) {
  let code = "base_action.action('向前走2cm-稳定')\n";
  return code;
}

Blockly.Blocks['1773301283358'] = {
  init: function() {
    this.jsonInit({
      "type": "1773301283358",
      "message0": "小右移",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1773301283358'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,45,65,65,65,65,30,30,30,45,65,65,65,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(80, 36, 100, 90, 93, 54, 124, 100, 120, 175, 100, 101, 107, 146, 76, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80, 30, 100, 94, 93, 54, 124, 85, 120, 176, 100, 95, 107, 146, 76, 95, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOrigid16(20,20,20,85,55,55,55,85,20,20,20,85,85,95,85,85,0,0,0)\nMOTOrigid16(20,20,20,85,55,55,55,85,20,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1773301283358'] = function(block) {
  let code = "base_action.action('小右移')\n";
  return code;
}

Blockly.Blocks['1773301287430'] = {
  init: function() {
    this.jsonInit({
      "type": "1773301287430",
      "message0": "小右转",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1773301287430'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,75,65,65,65,65,20,20,20,75,65,65,65,65,0,0,0)\n\n\n-- 1\nMOTOsetspeed(24)\nMOTOmove19(80, 30, 85, 95, 110, 55, 140, 100, 120, 170, 85, 101, 117, 156, 75, 107, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 85, 95, 110, 55, 140, 100, 120, 170, 85, 101, 117, 156, 75, 107, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 98, 120, 170, 100, 100, 107, 145, 76, 102, 0, 0, 100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1773301287430'] = function(block) {
  let code = "base_action.action('小右转')\n";
  return code;
}

Blockly.Blocks['1773301291897'] = {
  init: function() {
    this.jsonInit({
      "type": "1773301291897",
      "message0": "小左移",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1773301291897'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,45,65,65,65,65,30,30,30,45,65,65,65,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(80, 55, 100, 99, 93, 54, 124, 90, 120, 175, 100, 110, 107, 146, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(80, 55, 100, 95, 93, 54, 124, 105, 120, 175, 100, 106, 107, 146, 76, 115, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,55,55,55,85,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(80, 25, 100, 106, 93, 54, 124, 110, 120, 145, 100, 115, 107, 146, 76, 115, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(20,20,20,85,55,55,55,85,20,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1773301291897'] = function(block) {
  let code = "base_action.action('小左移')\n";
  return code;
}

Blockly.Blocks['1773301295731'] = {
  init: function() {
    this.jsonInit({
      "type": "1773301295731",
      "message0": "小左转",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1773301295731'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,75,65,65,65,65,20,20,20,75,65,65,65,65,0,0,0)\nMOTOsetspeed(24)\nMOTOmove19(80, 30, 115, 96, 68, 47, 107, 99, 120, 170, 115, 100, 103, 143, 68, 103, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 115, 96, 68, 47, 107, 99, 120, 170, 115, 100, 103, 143, 68, 103, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 98, 120, 170, 100, 100, 107, 145, 76, 102, 0, 0, 100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1773301295731'] = function(block) {
  let code = "base_action.action('小左转')\n";
  return code;
}

Blockly.Blocks['1773321035874'] = {
  init: function() {
    this.jsonInit({
      "type": "1773321035874",
      "message0": "推抹布-消摩擦完美版-加循环-14次",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1773321035874'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,45,65,65,65,65,30,30,30,45,65,65,65,65,0,0,0)\n\n\n-- 站立\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- meopen\nMOTOsetspeed(30)\nMOTOmove19(86, 88, 103, 100, 93, 55, 124, 100, 119, 100, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- me斜\nMOTOsetspeed(30)\nMOTOmove19(85, 71, 160, 100, 93, 55, 124, 100, 119, 125, 45, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- me合并对-参考手\nMOTOsetspeed(30)\nMOTOmove19(61, 10, 160, 100, 93, 55, 124, 100, 143, 190, 41, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- me抬高抹布\nMOTOsetspeed(30)\nMOTOmove19(57, 10, 164, 100, 93, 55, 124, 100, 143, 190, 37, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(57,40,164,40,40,40,40,40,143,40,37,40,40,40,40,40,0,0,0)\n\n\n-- 右移一次\nMOTOsetspeed(15)\nMOTOmove19(57, 10, 164, 100, 93, 55, 124, 100, 143, 190, 37, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(57, 10, 164, 90, 93, 54, 124, 100, 143, 190, 37, 110, 107, 146, 76, 110, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(15)\nMOTOmove19(57, 10, 164, 94, 93, 54, 124, 85, 143, 190, 37, 105, 107, 146, 76, 95, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(15)\nMOTOmove19(57, 10, 164, 85, 93, 54, 124, 85, 143, 190, 37, 94, 107, 146, 76, 90, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(57, 10, 164, 100, 93, 55, 124, 100, 143, 190, 37, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(57,40,164,40,40,40,40,40,143,40,37,40,40,40,40,40,0,0,0)\n\n\n-- 右移二次\nMOTOsetspeed(30)\nMOTOmove19(57, 10, 164, 100, 93, 55, 124, 100, 143, 190, 37, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(57, 10, 164, 90, 93, 54, 124, 100, 143, 190, 37, 110, 107, 146, 76, 110, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(57, 10, 164, 94, 93, 54, 124, 85, 143, 190, 37, 105, 107, 146, 76, 95, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(57, 10, 164, 85, 93, 54, 124, 85, 143, 190, 37, 94, 107, 146, 76, 90, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(57, 10, 164, 100, 93, 55, 124, 100, 143, 190, 37, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(57,40,164,40,40,40,40,40,143,40,37,40,40,40,40,40,0,0,0)\n\n\n-- 右移三次\nMOTOsetspeed(30)\nMOTOmove19(57, 10, 164, 100, 93, 55, 124, 100, 143, 190, 37, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(57, 10, 164, 90, 93, 54, 124, 100, 143, 190, 37, 110, 107, 146, 76, 110, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(57, 10, 164, 94, 93, 54, 124, 85, 143, 190, 37, 105, 107, 146, 76, 95, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(57, 10, 164, 85, 93, 54, 124, 85, 143, 190, 37, 94, 107, 146, 76, 90, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(57, 10, 164, 100, 93, 55, 124, 100, 143, 190, 37, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(57,40,164,40,40,40,40,40,143,40,37,40,40,40,40,40,0,0,0)\n\n\n-- 右移四次\nMOTOsetspeed(30)\nMOTOmove19(57, 10, 164, 100, 93, 55, 124, 100, 143, 190, 37, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(57, 10, 164, 90, 93, 54, 124, 100, 143, 190, 37, 110, 107, 146, 76, 110, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(57, 10, 164, 94, 93, 54, 124, 85, 143, 190, 37, 105, 107, 146, 76, 95, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(57, 10, 164, 85, 93, 54, 124, 85, 143, 190, 37, 94, 107, 146, 76, 90, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(57, 10, 164, 100, 93, 55, 124, 100, 143, 190, 37, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(57,40,164,40,40,40,40,40,143,40,37,40,40,40,40,40,0,0,0)\n\n\n-- 右移五次\nMOTOsetspeed(30)\nMOTOmove19(57, 10, 164, 100, 93, 55, 124, 100, 143, 190, 37, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(57, 10, 164, 90, 93, 54, 124, 100, 143, 190, 37, 110, 107, 146, 76, 110, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(57, 10, 164, 94, 93, 54, 124, 85, 143, 190, 37, 105, 107, 146, 76, 95, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(57, 10, 164, 85, 93, 54, 124, 85, 143, 190, 37, 94, 107, 146, 76, 90, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(57, 10, 164, 100, 93, 55, 124, 100, 143, 190, 37, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 右移一次-再来\nMOTOsetspeed(15)\nMOTOmove19(57, 10, 164, 100, 93, 55, 124, 100, 143, 190, 37, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(57, 10, 164, 90, 93, 54, 124, 100, 143, 190, 37, 110, 107, 146, 76, 110, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(15)\nMOTOmove19(57, 10, 164, 94, 93, 54, 124, 85, 143, 190, 37, 105, 107, 146, 76, 95, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(15)\nMOTOmove19(57, 10, 164, 85, 93, 54, 124, 85, 143, 190, 37, 94, 107, 146, 76, 90, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(57, 10, 164, 100, 93, 55, 124, 100, 143, 190, 37, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(57,40,164,40,40,40,40,40,143,40,37,40,40,40,40,40,0,0,0)\n\n\n-- 右移二次-再来\nMOTOsetspeed(30)\nMOTOmove19(57, 10, 164, 100, 93, 55, 124, 100, 143, 190, 37, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(57, 10, 164, 90, 93, 54, 124, 100, 143, 190, 37, 110, 107, 146, 76, 110, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(57, 10, 164, 94, 93, 54, 124, 85, 143, 190, 37, 105, 107, 146, 76, 95, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(57, 10, 164, 85, 93, 54, 124, 85, 143, 190, 37, 94, 107, 146, 76, 90, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(57, 10, 164, 100, 93, 55, 124, 100, 143, 190, 37, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(57,40,164,40,40,40,40,40,143,40,37,40,40,40,40,40,0,0,0)\n\n\n-- 右移三次-再来\nMOTOsetspeed(30)\nMOTOmove19(57, 10, 164, 100, 93, 55, 124, 100, 143, 190, 37, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(57, 10, 164, 90, 93, 54, 124, 100, 143, 190, 37, 110, 107, 146, 76, 110, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(57, 10, 164, 94, 93, 54, 124, 85, 143, 190, 37, 105, 107, 146, 76, 95, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(57, 10, 164, 85, 93, 54, 124, 85, 143, 190, 37, 94, 107, 146, 76, 90, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(57, 10, 164, 100, 93, 55, 124, 100, 143, 190, 37, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(57,40,164,40,40,40,40,40,143,40,37,40,40,40,40,40,0,0,0)\n\n\n-- 右移四次-再来\nMOTOsetspeed(30)\nMOTOmove19(57, 10, 164, 100, 93, 55, 124, 100, 143, 190, 37, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(57, 10, 164, 90, 93, 54, 124, 100, 143, 190, 37, 110, 107, 146, 76, 110, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(57, 10, 164, 94, 93, 54, 124, 85, 143, 190, 37, 105, 107, 146, 76, 95, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(57, 10, 164, 85, 93, 54, 124, 85, 143, 190, 37, 94, 107, 146, 76, 90, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(57, 10, 164, 100, 93, 55, 124, 100, 143, 190, 37, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(57,40,164,40,40,40,40,40,143,40,37,40,40,40,40,40,0,0,0)\n\n\n-- 右移五次-再来\nMOTOsetspeed(30)\nMOTOmove19(57, 10, 164, 100, 93, 55, 124, 100, 143, 190, 37, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(57, 10, 164, 90, 93, 54, 124, 100, 143, 190, 37, 110, 107, 146, 76, 110, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(57, 10, 164, 94, 93, 54, 124, 85, 143, 190, 37, 105, 107, 146, 76, 95, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(57, 10, 164, 85, 93, 54, 124, 85, 143, 190, 37, 94, 107, 146, 76, 90, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(57, 10, 164, 100, 93, 55, 124, 100, 143, 190, 37, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 右移11\nMOTOsetspeed(15)\nMOTOmove19(57, 10, 164, 100, 93, 55, 124, 100, 143, 190, 37, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(57, 10, 164, 90, 93, 54, 124, 100, 143, 190, 37, 110, 107, 146, 76, 110, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(15)\nMOTOmove19(57, 10, 164, 94, 93, 54, 124, 85, 143, 190, 37, 105, 107, 146, 76, 95, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(15)\nMOTOmove19(57, 10, 164, 85, 93, 54, 124, 85, 143, 190, 37, 94, 107, 146, 76, 90, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(57, 10, 164, 100, 93, 55, 124, 100, 143, 190, 37, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(57,40,164,40,40,40,40,40,143,40,37,40,40,40,40,40,0,0,0)\n\n\n-- 右移12\nMOTOsetspeed(30)\nMOTOmove19(57, 10, 164, 100, 93, 55, 124, 100, 143, 190, 37, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(57, 10, 164, 90, 93, 54, 124, 100, 143, 190, 37, 110, 107, 146, 76, 110, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(57, 10, 164, 94, 93, 54, 124, 85, 143, 190, 37, 105, 107, 146, 76, 95, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(57, 10, 164, 85, 93, 54, 124, 85, 143, 190, 37, 94, 107, 146, 76, 90, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(57, 10, 164, 100, 93, 55, 124, 100, 143, 190, 37, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(57,40,164,40,40,40,40,40,143,40,37,40,40,40,40,40,0,0,0)\n\n\n-- 右移13\nMOTOsetspeed(30)\nMOTOmove19(57, 10, 164, 100, 93, 55, 124, 100, 143, 190, 37, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(57, 10, 164, 90, 93, 54, 124, 100, 143, 190, 37, 110, 107, 146, 76, 110, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(57, 10, 164, 94, 93, 54, 124, 85, 143, 190, 37, 105, 107, 146, 76, 95, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(57, 10, 164, 85, 93, 54, 124, 85, 143, 190, 37, 94, 107, 146, 76, 90, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(57, 10, 164, 100, 93, 55, 124, 100, 143, 190, 37, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(57,40,164,40,40,40,40,40,143,40,37,40,40,40,40,40,0,0,0)\n\n\n-- 右移14\nMOTOsetspeed(30)\nMOTOmove19(57, 10, 164, 100, 93, 55, 124, 100, 143, 190, 37, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(57, 10, 164, 90, 93, 54, 124, 100, 143, 190, 37, 110, 107, 146, 76, 110, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(57, 10, 164, 94, 93, 54, 124, 85, 143, 190, 37, 105, 107, 146, 76, 95, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(57, 10, 164, 85, 93, 54, 124, 85, 143, 190, 37, 94, 107, 146, 76, 90, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(57, 10, 164, 100, 93, 55, 124, 100, 143, 190, 37, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(57,40,164,40,40,40,40,40,143,40,37,40,40,40,40,40,0,0,0)\n\n\n-- 抬高态\nMOTOsetspeed(10)\nMOTOmove19(57, 10, 164, 100, 93, 55, 124, 100, 143, 190, 37, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 倒置回去\nMOTOsetspeed(10)\nMOTOmove19(61, 10, 160, 100, 93, 55, 124, 100, 143, 190, 41, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(85, 71, 160, 100, 93, 55, 124, 100, 119, 125, 45, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(86, 88, 103, 100, 93, 55, 124, 100, 119, 100, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1773321035874'] = function(block) {
  let code = "base_action.action('推抹布-消摩擦完美版-加循环-14次')\n";
  return code;
}

Blockly.Blocks['1773385414820'] = {
  init: function() {
    this.jsonInit({
      "type": "1773385414820",
      "message0": "小右转-镜像版2（2）",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1773385414820'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,75,65,65,65,65,20,20,20,75,65,65,65,65,0,0,0)\n\n\n-- 对称写法\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 85, 100, 97, 57, 132, 103, 120, 170, 85, 104, 132, 153, 93, 99, 0, 0, 100)\nMOTOwait()\n\n\n-- 对称写法\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 85, 100, 97, 57, 132, 103, 120, 170, 85, 104, 132, 153, 93, 99, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 98, 120, 170, 100, 100, 107, 145, 76, 102, 0, 0, 100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1773385414820'] = function(block) {
  let code = "base_action.action('小右转-镜像版2（2）')\n";
  return code;
}

