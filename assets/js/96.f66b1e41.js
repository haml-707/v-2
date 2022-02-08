(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{1033:function(e,s,t){e.exports=t.p+"assets/img/code1.bcc88608.png"},1034:function(e,s,t){e.exports=t.p+"assets/img/code2.bdb953b3.png"},1035:function(e,s,t){e.exports=t.p+"assets/img/code3.01542c35.png"},1686:function(e,s,t){"use strict";t.r(s);var r=t(42),a=Object(r.a)({},(function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h3",{attrs:{id:"_1-1-概述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-概述"}},[e._v("#")]),e._v(" 1.1 概述")]),e._v(" "),r("p",[e._v("近日，国外研究团队Qualys披露出sudo堆溢出漏洞(CVE-2021-3156), 攻击者可以通过“sudoedit -s”和以单个反斜杠字符结尾的命令行参数将特权提升到 root 用户。")]),e._v(" "),r("h3",{attrs:{id:"_1-2-漏洞详情"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-漏洞详情"}},[e._v("#")]),e._v(" 1.2 漏洞详情")]),e._v(" "),r("p",[e._v('1）技术分析\n在sudo解析命令行参数的方式中发现了基于堆的缓冲区溢出。任何本地用户(普通用户和系统用户，sudoers和非sudoers)都可以利用此漏洞，从而无需进行身份验证就能从普通账号权限提升获取到root权限。此漏洞带来的最大威胁是对数据机密性和完整性以及系统可用性的威胁。\n该漏洞在2011年7月被引入(commit 8255ed69)，当执行sudoedit –s / 时，sudo的src/parse_args.c文件的parse_args函数会把字符“/” 设置为""。\n'),r("img",{attrs:{src:t(1033)}})]),e._v(" "),r("p",[e._v("漏洞代码位于plugins/sudoers/sudoers.c文件的set_cmnd函数中，关键代码如下：\n"),r("img",{attrs:{src:t(1034)}})]),e._v(" "),r("p",[e._v('如果参数以单个反斜杠字符结尾 ("sudoedit –s /"会执行这段代码逻辑)，则情况如下：')]),e._v(" "),r("ol",[r("li",[e._v('在905行，"from[0]"是\\ , "from[1]"是空的终止符 (不是空格字符)')]),e._v(" "),r("li",[e._v('在906行，"from"指针加1并指向空的终止符\n3）在907行，空的终止符被拷贝到"user_args"缓冲区中，"from"指针再次加1，并指向空的终止符的下一个字符(此时已越界)。\n4）再次进行906-908行的while循环，并把已越界的字符拷贝到"user_args"缓冲区中。')])]),e._v(" "),r("p",[e._v('2）漏洞修复方法：\n修复在user_args中转义反斜杠时的缓冲区溢出问题；并且除非在"运行模式并且通过shell命令执行"的情况下,不要尝试转义反斜杠。同时拒绝不安全的-H和-P参数：执行sudoedit –H或sudoedit –P，会输出"usage:"开头的错误信息。\n'),r("img",{attrs:{src:t(1035)}})]),e._v(" "),r("p",[e._v("3）排查方法：\n以非root用户登录系统并执行命令： sudoedit -s /")]),e._v(" "),r("ul",[r("li",[e._v('如果输出以"sudoedit:"开头的错误信息，表明存在漏洞。')]),e._v(" "),r("li",[e._v('如果输出以"usage:"开头的错误信息，表明补丁已生效。')])]),e._v(" "),r("h3",{attrs:{id:"_1-3-影响性分析"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-影响性分析"}},[e._v("#")]),e._v(" 1.3 影响性分析")]),e._v(" "),r("p",[e._v("受影响版本：从1.8.2到1.8.31p2的所有版本\n从1.9.0到1.9.5p1的所有稳定版本\nopenEuler使用的是1.9.2版本。")]),e._v(" "),r("h3",{attrs:{id:"_1-4-缓解措施"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-缓解措施"}},[e._v("#")]),e._v(" 1.4   缓解措施")]),e._v(" "),r("p",[e._v('使用 systemtap 进行临时缓解，使sudoedit命令不可用：\n首先，安装所需的 systemtap 软件包、依赖包以及sudo的debuginfo软件包。\nyum install systemtap kernel-devel-"$(uname -r)"\ndebuginfo-install sudo\n然后，创建以下 systemtap 脚本，并将文件命名为 sudoedit-block.stap:\nprobe process("/usr/bin/sudo").function("main") {\ncommand = cmdline_args(0,0,"");'),r("br"),e._v('\nif (strpos(command, "edit") >= 0) {'),r("br"),e._v("\nraise(9);"),r("br"),e._v("\n}\n}")]),e._v(" "),r("p",[e._v("最终，使用root权限执行以下脚本：\nnohup stap -g sudoedit-block.stap &")]),e._v(" "),r("p",[e._v("该脚本将使易受攻击的sudoedit二进制文件停止工作。sudo命令仍将照常工作。上述更改在重启后失效，每次重启后必须重新执行。\n一旦安装了补丁，就可以通过取消systemtap进程来删除systemtap脚本, 使sudoedit重新可用。\n例如使用：# kill -s SIGTERM 26285 (其中26285是systemtap进程的PID)")]),e._v(" "),r("h3",{attrs:{id:"_1-5-漏洞修复方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-漏洞修复方法"}},[e._v("#")]),e._v(" 1.5 漏洞修复方法")]),e._v(" "),r("p",[e._v("•\t下载openEuler发布最新的sudo软件包："),r("br"),e._v("\n漏洞SA：https://www.openeuler.org/zh/security/safety-bulletin/detail.html?id=openEuler-SA-2021-1002"),r("br"),e._v("\n20.03-LTS："),r("br"),e._v(" "),r("a",{attrs:{href:"https://repo.openeuler.org/openEuler-20.03-LTS/update/aarch64/Packages",target:"_blank",rel:"noopener noreferrer"}},[e._v("aach64架构软件包"),r("OutboundLink")],1),r("br"),e._v(" "),r("a",{attrs:{href:"https://repo.openeuler.org/openEuler-20.03-LTS/update/x86_64/Packages",target:"_blank",rel:"noopener noreferrer"}},[e._v("x86架构软件包"),r("OutboundLink")],1),r("br"),e._v("\n20.03-LTS-SP1："),r("br"),e._v(" "),r("a",{attrs:{href:"https://repo.openeuler.org/openEuler-20.03-LTS-SP1/update/aarch64/Packages/",target:"_blank",rel:"noopener noreferrer"}},[e._v("aach64架构软件包"),r("OutboundLink")],1),r("br"),e._v(" "),r("a",{attrs:{href:"https://repo.openeuler.org/openEuler-20.03-LTS-SP1/update/x86_64/Packages/",target:"_blank",rel:"noopener noreferrer"}},[e._v("x86架构软件包"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("•\t升级sudo软件包\nrpm -Uvh sudo-*.rpm")]),e._v(" "),r("p",[e._v("•\t升级完成之后查看sudo软件包是否升级成功。\nrpm -qi sudo\n20.03-LTS在：sudo-1.9.2-2版本修复。\n20.03-LTS-SP1在：sudo-1.9.2-3版本修复。")]),e._v(" "),r("h3",{attrs:{id:"_1-6-接口变更"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-接口变更"}},[e._v("#")]),e._v(" 1.6 接口变更")]),e._v(" "),r("p",[e._v('不再支持sudoedit -H，sudoedit –P命令。\n执行sudoedit –H 和sudoedit –P命令，都会输出"usage:"开头的错误信息。')])])}),[],!1,null,null,null);s.default=a.exports}}]);