(window.webpackJsonp=window.webpackJsonp||[]).push([[284],{1683:function(a,t,s){"use strict";s.r(t);var e=s(42),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"a-tune是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#a-tune是什么"}},[a._v("#")]),a._v(" A-Tune是什么？")]),a._v(" "),s("p",[a._v("A-Tune是一款基于AI的操作系统性能调优引擎。A-Tune利用AI技术，使操作系统“懂”业务，简化IT系统调优工作的同时，让应用程序发挥出色性能。\n本次项目，主要尝试熟悉A-Tune离线动态调优的流程，目的是为一款应用实现调优。")]),a._v(" "),s("h1",{attrs:{id:"一、安装a-tune"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、安装a-tune"}},[a._v("#")]),a._v(" 一、安装A-Tune")]),a._v(" "),s("p",[a._v("OS: openEuler 20.03 LTS SP1，从仓库源码安装：")]),a._v(" "),s("ol",[s("li",[a._v("安装依赖系统软件包")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yum "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -y golang-bin python3 perf sysstat hwloc-gui\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[a._v("安装python依赖包")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# A-Tune服务的依赖包")]),a._v("\nyum "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -y python3-dict2xml python3-flask-restful python3-pandas python3-scikit-optimize python3-xgboost python3-pyyaml\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 数据库依赖包")]),a._v("\nyum "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -y python3-sqlalchemy python3-cryptography\nyum "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -y python3-psycopg2\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[a._v("下载源码、编译、安装")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://gitee.com/openeuler/A-Tune.git\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" A-Tune\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" models\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" collector-install\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v("\n")])])]),s("h1",{attrs:{id:"二、开始使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、开始使用"}},[a._v("#")]),a._v(" 二、开始使用")]),a._v(" "),s("h2",{attrs:{id:"配置a-tune服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置a-tune服务"}},[a._v("#")]),a._v(" 配置A-Tune服务")]),a._v(" "),s("p",[a._v("修改/etc/atuned/atuned.cnf中的network和disk配置选项为对应的指定网卡和磁盘。\n"),s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210417193945263.png",alt:"在这里插入图片描述"}})]),a._v(" "),s("h2",{attrs:{id:"管理a-tune服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#管理a-tune服务"}},[a._v("#")]),a._v(" 管理A-Tune服务")]),a._v(" "),s("p",[a._v("加载并启动atuned和atune-engine服务：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("systemctl daemon-reload\nsystemctl start atuned\nsystemctl start atune-engine\n")])])]),s("blockquote",[s("p",[a._v("注意：这三条命令执行需要一定时间，且不会有任何输出显示。重启后需要重新启动服务。")])]),a._v(" "),s("p",[a._v("查看atuned或atune-engine服务状态：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("systemctl status atuned\nsystemctl status atune-engine\n")])])]),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210417194614472.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzIxNDQwOA==,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}}),a._v(" "),s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210417194522940.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzIxNDQwOA==,size_16,color_FFFFFF,t_70",alt:""}})]),a._v(" "),s("h2",{attrs:{id:"atune-adm命令行工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#atune-adm命令行工具"}},[a._v("#")]),a._v(" atune-adm命令行工具")]),a._v(" "),s("ol",[s("li",[a._v("list命令 - 列出系统当前支持的profile，以及当前处于active状态的profile。\n例：")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("atune-adm list\n")])])]),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210417194836656.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzIxNDQwOA==,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),a._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[a._v("profile命令 - 激活profile，使其处于active状态。\n例：")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("atune-adm profile web-nginx-http-long-connection\n")])])]),s("p",[a._v("激活web-nginx-http-long-connection对应的profile配置。")]),a._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[a._v("analysis命令 - 在线静态调优。实时采集系统的信息进行负载类型的识别，并自动执行对应的优化。\n接口语法：")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("atune-adm analysis "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("OPTIONS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),s("ol",{attrs:{start:"4"}},[s("li",[a._v("tuning命令 - 离线动态调优。使用指定的项目文件对所选参数进行动态空间的搜索，找到当前环境配置下的最优解。\n接口语法：")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("atune-adm tuning "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("OPTIONS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("PROJECT_YAML"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("p",[a._v("离线动态调优是本次任务的重点。")]),a._v(" "),s("h1",{attrs:{id:"三、a-tune离线调优示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、a-tune离线调优示例"}},[a._v("#")]),a._v(" 三、A-Tune离线调优示例")]),a._v(" "),s("p",[a._v("示例位于A-Tune/examples/tuning目录，这里以对gcc编译器的优化为例。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("PATH")]),a._v("-TO-A-Tune"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("/examples/tuning/gcc_compile\n")])])]),s("ol",[s("li",[a._v("准备环境")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sh")]),a._v(" prepare.sh\n")])])]),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210418133402328.png",alt:"在这里插入图片描述"}})]),a._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[a._v("下载stream.c（内存带宽测试程序）")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" http://www.cs.virginia.edu/stream/FTP/Code/stream.c\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[a._v("开始调优")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("atune-adm tuning --project gcc_compile --detail gcc_compile_client.yaml\n")])])]),s("p",[a._v("调优结果：\n"),s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210418133945119.png",alt:"在这里插入图片描述"}}),a._v("\n内存带宽提升121%，编译后的可以执行文件大小减小17%。")]),a._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[a._v("保存结果")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("atune-adm tuning --restore --project gcc_compile\n")])])]),s("p",[a._v("无输出。")]),a._v(" "),s("h1",{attrs:{id:"四、a-tune离线调优应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、a-tune离线调优应用"}},[a._v("#")]),a._v(" 四、A-Tune离线调优应用")]),a._v(" "),s("p",[a._v("离线动态调优包含三个输入文件：client.yaml、server.yaml和benchmark。")]),a._v(" "),s("ul",[s("li",[a._v("client.yaml: 存放在客户端的文件，包含调优的评价指标等信息。")]),a._v(" "),s("li",[a._v("server.yaml: 存放在服务端的文件，包含调优的可调节参数等信息。")]),a._v(" "),s("li",[a._v("benchmark: 存放在客户端的文件，通过运行该文件以获取评价指标的具体数值。")])]),a._v(" "),s("p",[a._v("这里以gcc离线动态调优为例，说明这三个文件。")]),a._v(" "),s("h2",{attrs:{id:"client-yaml"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#client-yaml"}},[a._v("#")]),a._v(" client.yaml")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210418211719224.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzIxNDQwOA==,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}}),a._v("\n其中包含：")]),a._v(" "),s("ul",[s("li",[a._v("调优算法选择(line 2)")]),a._v(" "),s("li",[a._v("迭代次数(line 3)")]),a._v(" "),s("li",[a._v("随机迭代次数(line 4)")]),a._v(" "),s("li",[a._v("benchmark执行命令(line 6)")]),a._v(" "),s("li",[a._v("评价指标1相关信息(line 8 - 13)")]),a._v(" "),s("li",[a._v("评价指标2相关信息(line 14 - end)")])]),a._v(" "),s("p",[a._v("另外，还可以在client.yaml中添加"),s("strong",[a._v("参数选择")]),a._v("：")]),a._v(" "),s("p",[a._v("参数选择是在进行离线动态调优前执行的步骤，其目的是在进行离线动态调优前缩减参数空间，在给出的参数空间中选择出对性能影响最大的参数并进行调优。")]),a._v(" "),s("p",[a._v("实现方法是在client.yaml中添加如下参数：")]),a._v(" "),s("ul",[s("li",[a._v("feature_filter_engine: 参数选择算法")]),a._v(" "),s("li",[a._v("feature_filter_cycle: 参数选择轮数")]),a._v(" "),s("li",[a._v("feature_filter_iters: 参数选择的迭代次数")]),a._v(" "),s("li",[a._v("feature_filter_count: 每轮选择出的参数")]),a._v(" "),s("li",[a._v("split_count: 调优参数取值范围中均匀选取的参数个数")])]),a._v(" "),s("h2",{attrs:{id:"server-yaml"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#server-yaml"}},[a._v("#")]),a._v(" server.yaml")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210418212213431.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzIxNDQwOA==,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),a._v(" "),s("ul",[s("li",[a._v("应用启动命令(line 3)")]),a._v(" "),s("li",[a._v("应用停止命令(line 4)")]),a._v(" "),s("li",[a._v("可调参数等内容(line 5 - end)")])]),a._v(" "),s("h2",{attrs:{id:"benchmark文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#benchmark文件"}},[a._v("#")]),a._v(" benchmark文件")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210418212600100.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzIxNDQwOA==,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),a._v(" "),s("p",[a._v("benchmark文件用于在调优执行时，会根据client.yaml中提供的命令执行此文件。")]),a._v(" "),s("h2",{attrs:{id:"执行优化并保存结果"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#执行优化并保存结果"}},[a._v("#")]),a._v(" 执行优化并保存结果")]),a._v(" "),s("p",[a._v("执行优化：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("atune-adm tuning --project "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("PROJECT_NAME"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" --detail "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("client.yaml"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("p",[a._v("保存结果：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("atune-adm tuning --restore --project "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("PROJECT_NAME"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);