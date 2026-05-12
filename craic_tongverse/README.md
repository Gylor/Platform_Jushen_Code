# 虚拟仿真环节-比赛程序说明文档-Aelos跨平台具身智能创意挑战赛_2026CRAIC


## 一、文件夹介绍

### 代码结构
```
craic_tongverse/
├── code/                     # 核心代码
│   ├── start.py              # 程序启动入口
│   ├── voice.py              # 语音(即文本命令)控制
│   └── robot_common/         # 公共方法
├── craic_scene/              # 场景文件
├── motion_library/           # 自定义动作库
├── js_to_json/               # js文件转json工具
│   └── convert.py            # 转换就运行这个
├── docs/                     # readme文档图片
└── README.md                 # 项目说明文档
```


## 二、前置准备

### 1.docker环境准备

下载docker镜像

进入下载的tongverse-aelos目录

运行脚本，启动容器
LICENSE_KEY=XXXX-XXXX-XXXX-XXXX bash run.sh

进入容器
docker exec -it TongVerse-edu bash

下载vscode

vscode点击左下角，点击“附加到正在运行的容器”(没看到就下载插件)，选择容器/TongVerse-edu，即可在vscode中打开容器


### 2.文件夹准备

把给定的craic_tongverse文件夹放在/TongVerse目录下，不建议更改放置目录

### 3.场景文件准备

将craic_scene文件拷贝到/TongVerse/data/scene目录下，即：/TongVerse/data/scene/craic_scene

### 4.动作文件准备

用给定文件夹内的motion_library替换原有的/TongVerse/data/motion_library目录，因为给定的文件夹内有很多新增的自定义动作，原有的motion_library是没有的，所以需要替换

### 5.安装和验证库

先输入测试命令
```
/isaac-sim/kit/python/bin/python3 -c "import rapidocr; print('\n--- [SUCCESS] 视觉库环境已完美就绪 ---')"
```
如果没有任何报错并打印出“就绪”，说明环境正常，后面步骤跳过

如果报错，再安装以下rapidocr库：


精准注入 Python 扩展包，使用 --no-deps 确保不发生“依赖污染”：
```
# 1. 安装 RapidOCR 核心代码 (不带依赖安装)
/isaac-sim/kit/python/bin/python3 -m pip install \
    rapidocr_onnxruntime==1.3.22 \
    --no-deps \
    --target /isaac-sim/kit/python/lib/python3.10/site-packages

# 2. 补齐 RapidOCR 运行必需的纯 Python 插件 (这些不含 Numpy，安全)
/isaac-sim/kit/python/bin/python3 -m pip install \
    pyclipper \
    shapely==1.8.5.post1 \
    colorlog \
    PyYAML \
    --target /isaac-sim/kit/python/lib/python3.10/site-packages
```
由于代码中通常使用 import rapidocr，而安装包名为 rapidocr_onnxruntime，需要建立软链接：
```
cd /isaac-sim/kit/python/lib/python3.10/site-packages
# 如果之前建过，建议先删掉再建一次确保指向正确
rm -rf rapidocr 
ln -s rapidocr_onnxruntime rapidocr
```

然后再次运行那个验证命令
```
/isaac-sim/kit/python/bin/python3 -c "import rapidocr; print('\n--- [SUCCESS] 视觉库环境已完美就绪 ---')"
```

注意：不要直接运行 pip install rapidocr，它会通过依赖关系强行安装 numpy>=2.0

### 6.额外提示

/TongVerse/data被挂载到了/PR2/data目录下，这两个目录是同步的，修改其中一个，另一个也会被修改

场景文件位置：/TongVerse/data/scene （提示：这个和/PR2/data/scene是一致的同步的，内容完全同步）
动作库位置：/TongVerse/data/motion_library（提示：这个和/PR2/data/motion_library是一致的同步的，内容完全同步）



## 三、运行方式【重要】

运行主程序，运行这个就能看到场景和机器人加载出来。然后按下回车开始任务。记得按下回车！不然机器人不会动！
```
python /TongVerse/craic_tongverse/code/start.py
```



运行语音(用文本代替语音)控制。这个是可选的，不一定非得运行这个。语音命令词在robot_common里的voice_map.py
```
python /TongVerse/craic_tongverse/code/voice.py
```

额外提示：

注意：是python，不是python3，不然可能报错


## 四、js_to_json使用方法

js文件从edu软件的工程文件的import文件夹里获取
把要转换的js文件放在source_js里，然后运行python convert.py，就可以看到destination_json生成了json文件。
注意：17个关节的值是准确的，但是代表速度的"num_pt"的值不准确，需自行修改。

