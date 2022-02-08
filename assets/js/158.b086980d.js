(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{1195:function(t,e,a){t.exports=a.p+"assets/img/tornado-1.6a1fe8b7.png"},1723:function(t,e,a){"use strict";a.r(e);var n=a(42),r=Object(n.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"tornado-4-2-1-移植指南-openeuler-20-03-lts-sp1"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tornado-4-2-1-移植指南-openeuler-20-03-lts-sp1"}},[t._v("#")]),t._v(" tornado 4.2.1 移植指南（openEuler 20.03 LTS SP1）")]),t._v(" "),n("h1",{attrs:{id:"介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),n("h2",{attrs:{id:"简要介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#简要介绍"}},[t._v("#")]),t._v(" 简要介绍")]),t._v(" "),n("p",[t._v("Tornado是一个Python Web框架和异步网络库，最初由FriendFeed开发。 通过使用非阻塞网络I / O，Tornado可以扩展到成千上万的开放连接，非常适合长时间轮询，WebSocket和需要与每个用户建立长期连接的其他应用程序。\n本案例使用x86_64架构虚拟机，通过评估工具x2openEuler评估tornado 4.2.1软件移植到openEuler操作系统的兼容性，并根据评估结果完成软件移植。")]),t._v(" "),n("p",[t._v("语言：C++/Python")]),t._v(" "),n("p",[t._v("一句话描述：一个Python Web框架和异步网络库")]),t._v(" "),n("p",[t._v("开源协议：Apache")]),t._v(" "),n("h2",{attrs:{id:"建议的版本"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#建议的版本"}},[t._v("#")]),t._v(" 建议的版本")]),t._v(" "),n("p",[t._v("建议使用版本为tornado 4.2.1。")]),t._v(" "),n("blockquote",[n("p",[t._v("说明:\n本文档适用于tornado 4.2.1，其他版本的tornado移植步骤也可参考本文档。")])]),t._v(" "),n("h1",{attrs:{id:"环境要求"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#环境要求"}},[t._v("#")]),t._v(" 环境要求")]),t._v(" "),n("h2",{attrs:{id:"操作系统要求"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#操作系统要求"}},[t._v("#")]),t._v(" 操作系统要求")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"left"}},[t._v("操作系统")]),t._v(" "),n("th",{staticStyle:{"text-align":"left"}},[t._v("版本")])])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("openEuler")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("20.03 LTS SP1")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("CentOS")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("7.6")])])])]),t._v(" "),n("h2",{attrs:{id:"安装操作系统"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装操作系统"}},[t._v("#")]),t._v(" 安装操作系统")]),t._v(" "),n("p",[t._v("如果是全新安装操作系统，安装方式建议不要使用最小化安装，否则很多软件包需要手动安装，可选择“Server with GUI”安装方式。\n安装openEuler操作系统请参考："),n("a",{attrs:{href:"https://bbs.huaweicloud.com/forum/thread-116157-1-1.html#",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://openeuler.org/zh/docs/20.03_LTS_SP1/docs/Installation/installation.html。"),n("OutboundLink")],1)]),t._v(" "),n("h1",{attrs:{id:"兼容性评估"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#兼容性评估"}},[t._v("#")]),t._v(" 兼容性评估")]),t._v(" "),n("h2",{attrs:{id:"获取tornado的rpm包"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#获取tornado的rpm包"}},[t._v("#")]),t._v(" 获取tornado的RPM包")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("wget http://mirror.centos.org/centos/7/os/x86_64/Packages/python-tornado-4.2.1-5.el7.x86_64.rpm\n")])])]),n("h4",{attrs:{id:"下载工具"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#下载工具"}},[t._v("#")]),t._v(" 下载工具")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("wget https://repo.oepkgs.net/openEuler/rpm/openEuler-20.03-LTS-SP1/extras-tgz/noarch/x2openEuler-1.0-1.noarch.rpm\n\n用户指南：\nhttps://gitee.com/openeuler/docs/blob/stable2-20.03_LTS_SP1/docs/zh/docs/thirdparty_migration/x2openEuleruseguide.md\n")])])]),n("h4",{attrs:{id:"部署工具"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#部署工具"}},[t._v("#")]),t._v(" 部署工具")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("rpm -ivh x2openEuler-1.0-1.noarch.rpm\n")])])]),n("blockquote",[n("p",[t._v("注意：安装rpm时需要使用root用户，且目前需要网络（用于下载安装依赖）\n注意：根据提示安装依赖包如bzip2-devel等")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("su x2openEuler\nx2openEuler redis-db -init\n")])])]),n("blockquote",[n("p",[t._v("依次录入redis数据库的ip:127.0.0.1\n端口：6379\n数据库索引号（0-16）：0\n密码（工具会对密码加密处理）：如果redis密码没有设置或者为空时，直接回车即可")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("x2openEuler init source_centos7.6-openEuler20.03-LTS-SP1.tar.gz\n")])])]),n("blockquote",[n("p",[t._v("备注：x2openEuler使用rpm安装完成后会在/opt/x2openEuler目录下带有source_centos7.6-openEuler20.03-LTS-SP1.tar.gz这个默认资源包\n需要支持centos8.2到openEuler20.03-LTS-SP1的评估，则需获取对应的静态资源包导入，如对应的资源包为source_centos8.2-openEuler20.03-LTS-SP1.tar.gz，导入此包命令："),n("code",[t._v("x2openEuler init source_centos8.2-openEuler20.03-LTS-SP1.tar.gz")]),t._v("，请示情况选择对应的资源包")])]),t._v(" "),n("h4",{attrs:{id:"扫描软件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#扫描软件"}},[t._v("#")]),t._v(" 扫描软件")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("x2openEuler scan python-tornado-4.2.1-5.el7.x86_64.rpm\n注意要分析的移植文件需要有能够让x2openEuler用户可以读取的权限\n扫描完成后会在/opt/x2openEuler/output目录生成html格式的报告\n")])])]),n("h2",{attrs:{id:"查看评估结果"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查看评估结果"}},[t._v("#")]),t._v(" 查看评估结果")]),t._v(" "),n("p",[t._v("软件兼容性评估报告分三块内容展示软件兼容性，分别是依赖包兼容性、C/C++接口兼容性、java接口兼容性，依赖包兼容性反映了软件包安装过程中的直接依赖，非100%表明无法正确安装；接口兼容性反映的是单个软件运行过程中对其他软件包、动态库或系统接口的调用变化，非100%表明在某个功能调用时可能会触发异常，未调用到时可能表现正常；部分结果建议人工复核，最终软件包使用建优先级建议 openEuler已移植包>openEuler上人工重编译包>centos软件包。")]),t._v(" "),n("img",{attrs:{src:a(1195)}}),t._v(" "),n("p",[t._v("结果：通过报告可知外部接口兼容性100%，依赖包兼容性人工复核后通过，经评估tornado4.2.1软件包在openEuler 20.03 LTS SP1系统上兼容，可安装此软件包至openEuler 20.03 LTS SP1系统进行验证。")]),t._v(" "),n("h1",{attrs:{id:"安装tornado"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装tornado"}},[t._v("#")]),t._v(" 安装tornado")]),t._v(" "),n("h2",{attrs:{id:"rpm安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#rpm安装"}},[t._v("#")]),t._v(" rpm安装")]),t._v(" "),n("p",[t._v("由于兼容性报告显示兼容，尝试直接用下载的rpm包安装。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('[root@localhost ~]# yum install python-tornado-4.2.1-5.el7.x86_64.rpm -y\nLast metadata expiration check: 0:11:53 ago on Mon 22 Mar 2021 01:25:06 PM CST.\nDependencies resolved.\n================================================================================\n Package                              Arch   Version         Repository    Size\n================================================================================\nInstalling:\n python-tornado                       x86_64 4.2.1-5.el7     @commandline 641 k\nInstalling dependencies:\n python2-backports                    x86_64 1.0-17.oe1      everything   9.2 k\n python2-backports-ssl_match_hostname noarch 3.7.0.1-2.oe1   everything    16 k\n python2-ipaddress                    noarch 1.0.23-1.oe1    everything    41 k\n python3-pycurl                       x86_64 7.43.0.3-1.oe1  OS            65 k\n\nTransaction Summary\n================================================================================\nInstall  5 Packages\n\nTotal size: 772 k\nTotal download size: 131 k\nInstalled size: 4.1 M\nDownloading Packages:\n(1/4): python2-backports-1.0-17.oe1.x86_64.rpm   53 kB/s | 9.2 kB     00:00\n(2/4): python2-backports-ssl_match_hostname-3.7  63 kB/s |  16 kB     00:00\n(3/4): python2-ipaddress-1.0.23-1.oe1.noarch.rp 126 kB/s |  41 kB     00:00\n(4/4): python3-pycurl-7.43.0.3-1.oe1.x86_64.rpm 113 kB/s |  65 kB     00:00\n--------------------------------------------------------------------------------\nTotal                                           226 kB/s | 131 kB     00:00\nwarning: /var/cache/dnf/OS-fcb43ce6e8cef091/packages/python3-pycurl-7.43.0.3-1.oe1.x86_64.rpm: Header V3 RSA/SHA1 Signature, key ID b25e7f66: NOKEY\nOS                                               14 kB/s | 2.1 kB     00:00\nImporting GPG key 0xB25E7F66:\n Userid     : "private OBS (key without passphrase) <defaultkey@localobs>"\n Fingerprint: 12EA 74AC 9DF4 8D46 C69C A0BE D557 065E B25E 7F66\n From       : http://repo.openeuler.org/openEuler-20.03-LTS-SP1/OS/x86_64/RPM-GPG-KEY-openEuler\nKey imported successfully\nRunning transaction check\nTransaction check succeeded.\nRunning transaction test\nTransaction test succeeded.\nRunning transaction\n  Preparing        :                                                        1/1\n  Installing       : python2-ipaddress-1.0.23-1.oe1.noarch                  1/5\n  Installing       : python2-backports-1.0-17.oe1.x86_64                    2/5\n  Installing       : python2-backports-ssl_match_hostname-3.7.0.1-2.oe1.n   3/5\n  Installing       : python3-pycurl-7.43.0.3-1.oe1.x86_64                   4/5\n  Installing       : python-tornado-4.2.1-5.el7.x86_64                      5/5\n  Running scriptlet: python-tornado-4.2.1-5.el7.x86_64                      5/5\n  Verifying        : python3-pycurl-7.43.0.3-1.oe1.x86_64                   1/5\n  Verifying        : python2-backports-1.0-17.oe1.x86_64                    2/5\n  Verifying        : python2-backports-ssl_match_hostname-3.7.0.1-2.oe1.n   3/5\n  Verifying        : python2-ipaddress-1.0.23-1.oe1.noarch                  4/5\n  Verifying        : python-tornado-4.2.1-5.el7.x86_64                      5/5\nInstalled:\n  python-tornado-4.2.1-5.el7.x86_64\n  python2-backports-1.0-17.oe1.x86_64\n  python2-backports-ssl_match_hostname-3.7.0.1-2.oe1.noarch\n  python2-ipaddress-1.0.23-1.oe1.noarch\n  python3-pycurl-7.43.0.3-1.oe1.x86_64\n\nComplete!\n')])])]),n("p",[t._v("安装成功。")]),t._v(" "),n("h1",{attrs:{id:"运行和验证"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#运行和验证"}},[t._v("#")]),t._v(" 运行和验证")]),t._v(" "),n("h2",{attrs:{id:"检查版本"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#检查版本"}},[t._v("#")]),t._v(" 检查版本")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('[root@localhost ~]# python\nPython 2.7.18 (default, Dec  8 2020, 03:37:36)\n[GCC 7.3.0] on linux2\nType "help", "copyright", "credits" or "license" for more information.\n>>> import tornado\n>>> tornado.version\n\'4.2.1\'\n')])])]),n("h2",{attrs:{id:"使用tornado"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用tornado"}},[t._v("#")]),t._v(" 使用tornado")]),t._v(" "),n("p",[t._v("编写一个handlers来响应一个标准的http请求。(代码来自tornado官网"),n("a",{attrs:{href:"https://bbs.huaweicloud.com/forum/thread-115816-1-1.html#",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.tornadoweb.org/en/stable/"),n("OutboundLink")],1),t._v(")")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("vim hello.py\n")])])]),n("p",[t._v("编辑内容如下:")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('import tornado.ioloop\nimport tornado.web\n\nclass MainHandler(tornado.web.RequestHandler):\n    def get(self):\n        self.write("Hello, world")\n\ndef make_app():\n    return tornado.web.Application([\n        (r"/", MainHandler),\n    ])\n\nif __name__ == "__main__":\n    app = make_app()\n    app.listen(8888)\n    tornado.ioloop.IOLoop.current().start()\n')])])]),n("p",[t._v("编辑后保存退出，在终端输入如下命令：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("python hello.py\n")])])]),n("p",[t._v("打开另外一个终端，输入如下命令。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("curl http://localhost:8888\n")])])]),n("p",[t._v("系统回显如下，则表示安装成功。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("Hello, world\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);