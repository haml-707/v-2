(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1058:function(s,t,e){s.exports=e.p+"assets/img/QEMU1.76d25cd5.png"},1059:function(s,t,e){s.exports=e.p+"assets/img/QEMU2.98fda0a5.png"},1060:function(s,t,e){s.exports=e.p+"assets/img/QEMU3.58724635.png"},1061:function(s,t,e){s.exports=e.p+"assets/img/QEMU4.56e5bcb2.png"},1062:function(s,t,e){s.exports=e.p+"assets/img/QEMU5.a962dc1c.png"},1063:function(s,t,e){s.exports=e.p+"assets/img/QEMU6.6e0d74b0.png"},1064:function(s,t,e){s.exports=e.p+"assets/img/QEMU7.230cdb66.png"},1065:function(s,t,e){s.exports=e.p+"assets/img/QEMU8.d930ad61.png"},1066:function(s,t,e){s.exports=e.p+"assets/img/QEMU9.9f115cb8.png"},1067:function(s,t,e){s.exports=e.p+"assets/img/QEMU10.9624c385.png"},1068:function(s,t,e){s.exports=e.p+"assets/img/QEMU11.246f5610.png"},1069:function(s,t,e){s.exports=e.p+"assets/img/QEMU12.314d1fb8.png"},1070:function(s,t,e){s.exports=e.p+"assets/img/QEMU13.fbcda59b.png"},1071:function(s,t,e){s.exports=e.p+"assets/img/QEMU14.91c90810.png"},1072:function(s,t,e){s.exports=e.p+"assets/img/QEMU15.329cd415.png"},1073:function(s,t,e){s.exports=e.p+"assets/img/QEMU16.5e16e2ff.png"},1074:function(s,t,e){s.exports=e.p+"assets/img/QEMU17.7078b34c.png"},1075:function(s,t,e){s.exports=e.p+"assets/img/QEMU18.d1ba780a.png"},1076:function(s,t,e){s.exports=e.p+"assets/img/QEMU19.644c3f79.png"},1077:function(s,t,e){s.exports=e.p+"assets/img/QEMU20.8065ff2b.png"},1078:function(s,t,e){s.exports=e.p+"assets/img/QEMU21.c3a34e17.png"},1079:function(s,t,e){s.exports=e.p+"assets/img/QEMU22.17cafc0e.png"},1080:function(s,t,e){s.exports=e.p+"assets/img/QEMU23.e36e98cf.png"},1081:function(s,t,e){s.exports=e.p+"assets/img/QEMU24.09de7938.png"},1082:function(s,t,e){s.exports=e.p+"assets/img/QEMU25.7051f0e0.png"},1690:function(s,t,e){"use strict";e.r(t);var r=e(42),a=Object(r.a)({},(function(){var s=this,t=s.$createElement,r=s._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[r("p",[r("em",[s._v("作者：罗宇哲，中国科学院软件研究所智能软件研究中心")])]),s._v(" "),r("p",[s._v("本文介绍了一个自动搭建openEuler虚拟机QEMU运行环境的脚本使用方法，本脚本能下载并安装各种依赖项，自动下载并编译安装QEMU4.1.1和busybox 1.25.1，下载并安装对Linux 4.19.1进行ARM64交叉编译并用gdb进行调试的环境，该环境能帮助我们理解openEuler内核的运行，以及下载和QEMU环境下安装openEuler1.0版。本脚本参考了前辈[1]在ARM32位环境下对Linux Kernel的交叉编译脚本，特此感谢！我们修改了QEMU、busybox和Linux kernel的版本和根文件系统搭建的方法，增加了依赖项，并将ARM交叉编译环境和gdb改为了64位，而且增加了openEuler的相关内容。")]),s._v(" "),r("h2",{attrs:{id:"一、openeuler虚拟机运行环境搭建"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、openeuler虚拟机运行环境搭建"}},[s._v("#")]),s._v(" 一、openEuler虚拟机运行环境搭建")]),s._v(" "),r("p",[s._v("环境准备：在VMware 15.1.0 或VirtualBox 6.10上搭建Ubuntu 18.04虚拟机，建议分配硬盘大小120G，内存大小2G以上。")]),s._v(" "),r("p",[s._v("自动搭建脚本码云地址：https://gitee.com/luo_yu_zhe/openEulerInstallation")]),s._v(" "),r("p",[r("strong",[s._v("运行脚本之间请手动更改下载源为国内源！否则下载较慢，更改源的方式参考[3]。")])]),s._v(" "),r("h6",{attrs:{id:"脚本运行流程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#脚本运行流程"}},[s._v("#")]),s._v(" 脚本运行流程")]),s._v(" "),r("ol",[r("li",[s._v("sudo ./prepare.sh")]),s._v(" "),r("li",[s._v("source ~/.bashrc")]),s._v(" "),r("li",[s._v("sudo ./build.sh, 做完这一步ARM64交叉编译环境、linux kernel 4.19.1、busybox和QEMU以及依赖项应该都装好了。")]),s._v(" "),r("li",[s._v("sudo ./start-qemu.sh进行无gdb调试linux kernel 4.19.1 或者sudo./start-qemu-gdb.sh之后另开一个窗口， aarch64-linux-gnu-gdb进入gdb界面，再输入 target remote localhost:1234进入调试阶段，在gdb窗口输入c就可以切换到qemu窗口运行。")])]),s._v(" "),r("p",[s._v("sudo ./start-qemu.sh后：")]),s._v(" "),r("img",{attrs:{src:e(1058)}}),s._v(" "),r("p",[s._v("开启gdb运行后：")]),s._v(" "),r("img",{attrs:{src:e(1059)}}),s._v(" "),r("h6",{attrs:{id:"prepare-sh-脚本功能介绍"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#prepare-sh-脚本功能介绍"}},[s._v("#")]),s._v(" Prepare.sh 脚本功能介绍")]),s._v(" "),r("p",[s._v("该脚本用于下载并解压64位ARM交叉编译工具、QEMU-4.1.1和openEuler镜像，此外，它还会通过apt install 安装依赖项。该脚本会检查压缩包是否存在，若存在不会重复下载解压。")]),s._v(" "),r("p",[s._v("下载openEuler镜像：")]),s._v(" "),r("img",{attrs:{src:e(1060)}}),s._v(" "),r("p",[s._v("下载并解压交叉编译gcc，设置环境变量：")]),s._v(" "),r("img",{attrs:{src:e(1061)}}),s._v(" "),r("p",[s._v("安装依赖项：")]),s._v(" "),r("img",{attrs:{src:e(1062)}}),s._v(" "),r("p",[s._v("下载并安装QEMU-4.1.1:")]),s._v(" "),r("img",{attrs:{src:e(1063)}}),s._v(" "),r("p",[s._v("下载QEMU UEFI启动固件并生成img文件，大小可以分配：")]),s._v(" "),r("img",{attrs:{src:e(1064)}}),s._v(" "),r("h6",{attrs:{id:"build-sh脚本功能介绍"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#build-sh脚本功能介绍"}},[s._v("#")]),s._v(" Build.sh脚本功能介绍")]),s._v(" "),r("p",[s._v("下载并编译linux kernel 4.19.1，下载并编译busybox\n1.25.1，制作根文件系统。架构和版本可以通过文件开头的参数进行设置。")]),s._v(" "),r("p",[s._v("下载并编译Linux内核4.19.1版：")]),s._v(" "),r("img",{attrs:{src:e(1065)}}),s._v(" "),r("p",[s._v("把编译好的Image文件copy到目标文件夹：")]),s._v(" "),r("img",{attrs:{src:e(1066)}}),s._v(" "),r("p",[s._v("下载并解压busybox:")]),s._v(" "),r("img",{attrs:{src:e(1067)}}),s._v(" "),r("p",[s._v("编译安装busybox:")]),s._v(" "),r("img",{attrs:{src:e(1068)}}),s._v(" "),r("p",[s._v("制作根文件系统：")]),s._v(" "),r("img",{attrs:{src:e(1069)}}),s._v(" "),r("h6",{attrs:{id:"qemu启动脚本介绍"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#qemu启动脚本介绍"}},[s._v("#")]),s._v(" qemu启动脚本介绍")]),s._v(" "),r("p",[s._v("start-qemu.sh: qemu普通启动。")]),s._v(" "),r("img",{attrs:{src:e(1070)}}),s._v(" "),r("p",[s._v("start-qemu-gdb.sh:带gdb 启动。")]),s._v(" "),r("img",{attrs:{src:e(1071)}}),s._v(" "),r("p",[s._v("start-euleros.sh :用qemu启动euleros镜像。")]),s._v(" "),r("img",{attrs:{src:e(1072)}}),s._v(" "),r("p",[s._v("采用gdb模式启动的时候首先运行sudo./start-qemu-gdb.sh命令，然后重新启动一个terminal，运行aarch64-linux-gnu-gdb，输入端口号然后按c。")]),s._v(" "),r("p",[s._v("qemu常见选项[2]：")]),s._v(" "),r("p",[s._v("-hda file、-hdb file、-hdc file和-hdd file。")]),s._v(" "),r("p",[s._v("把文件当成hard disk 0、hard disk 1、hard disk 2和hard disk 3。")]),s._v(" "),r("p"),s._v(" "),r("p",[s._v("-append cmdline")]),s._v(" "),r("p",[s._v('将cmdline作为kernel command line，所谓kernel command line就是在kernel启动的时候，用cmdline对内核进行配置。比如"root=/dev/hda"，将/dev/hda设置成根文件系统。')]),s._v(" "),r("p",[s._v("-M machine")]),s._v(" "),r("p",[s._v("选择模拟的机器(我们可以输入-M?提到一个模拟的机器列表)")]),s._v(" "),r("p",[s._v("-fda file/-fdb file")]),s._v(" "),r("p",[s._v("使用file作为软盘镜像.我们也可以通过将/dev/fd0作为文件名来使用主机软盘。")]),s._v(" "),r("p",[s._v("-cdrom file")]),s._v(" "),r("p",[s._v("使用文件作为CD-ROM镜像(但是我们不可以同时使用'-hdc'和'-cdrom').我们可以通过使用'/dev/cdrom'作为文件名来使用主机的CD-ROM。")]),s._v(" "),r("p",[s._v("-boot [a|c|d]")]),s._v(" "),r("p",[s._v("由软盘(a),硬盘(c)或是CD-ROM(d).在默认的情况下由硬盘启动.")]),s._v(" "),r("p",[s._v("-snapshot")]),s._v(" "),r("p",[s._v("写入临时文件而不是写入磁盘镜像文件.在这样的情况下,并没有写回我们所使用的磁盘镜像文件.然而我们却可以通过按下C-a s来强制写回磁盘镜像文件。")]),s._v(" "),r("p",[s._v("-m megs")]),s._v(" "),r("p",[s._v("设置虚拟内存尺寸为megs M字节.在默认的情况下为128M。")]),s._v(" "),r("p",[s._v("-smp n")]),s._v(" "),r("p",[s._v("模拟一个有n个CPU的SMP系统.为PC机为目标,最多可以支持255个CPU。")]),s._v(" "),r("p",[s._v("-nographic")]),s._v(" "),r("p",[s._v("在通常情况下,Qemu使用SDL来显示VGA输出。使用这个选项,我们可以禁止所有的图形输出,这样Qemu只是一个简单的命令行程序。模拟的串口将会重定向到命令行。所以，我们仍然可以在Qemu平台上使用串口命令来调试Linux内核。")]),s._v(" "),r("h2",{attrs:{id:"二、openeuler-系统安装说明"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、openeuler-系统安装说明"}},[s._v("#")]),s._v(" 二、openEuler 系统安装说明")]),s._v(" "),r("h5",{attrs:{id:"_1-qemu安装openeuler镜像"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-qemu安装openeuler镜像"}},[s._v("#")]),s._v(" 1.QEMU安装openEuler镜像")]),s._v(" "),r("p",[s._v("运行完sudo ./prepare.sh后，运行sudo./start_euleros.sh,运行该脚本会执行一下命令：")]),s._v(" "),r("p",[s._v("qemu-system-aarch64 -machine virt -cpu cortex-a57 -m 1024 -bios ./QEMU_EFI.fd\n-cdrom openEuler-1.0-aarch64-dvd.iso -hda ./qemu_Euler.img -serial stdio")]),s._v(" "),r("p",[s._v("QEMU会读入openEuler的镜像文件然后进入安装流程。选择安装openEuler后，选择安装模式（"),r("strong",[s._v("选择test media选项")]),s._v("），之后分别配置每个前面有”[!]”这个标记的选项，主要有installation destination, root password和user password等，注意选择的时候是先输入选项对应的数字，确定之后按回车，然后再按c（continue）继续安装。以下是一个选择的流程，选项前面有[x]代表选中了该选项：")]),s._v(" "),r("h6",{attrs:{id:"a-选择-use-text-mode-选项"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#a-选择-use-text-mode-选项"}},[s._v("#")]),s._v(" A.选择 Use text mode 选项")]),s._v(" "),r("img",{attrs:{src:e(1073)}}),s._v(" "),r("h6",{attrs:{id:"b-选择root-password选项并配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#b-选择root-password选项并配置"}},[s._v("#")]),s._v(" B.选择Root password选项并配置")]),s._v(" "),r("img",{attrs:{src:e(1074)}}),s._v(" "),r("p",[s._v("配置完之后我们可以发现大部分之前有[!]的选项之前都变成了[x]。")]),s._v(" "),r("h6",{attrs:{id:"配置安装目的地"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#配置安装目的地"}},[s._v("#")]),s._v(" 配置安装目的地")]),s._v(" "),r("p",[s._v("选择大小：")]),s._v(" "),r("img",{attrs:{src:e(1075)}}),s._v(" "),r("p",[s._v("选择使用空间：")]),s._v(" "),r("p",[s._v("VMware：")]),s._v(" "),r("img",{attrs:{src:e(1076)}}),s._v(" "),r("p",[s._v("VirtualBox：")]),s._v(" "),r("img",{attrs:{src:e(1077)}}),s._v(" "),r("p",[s._v("选择Partition方式：")]),s._v(" "),r("p",[s._v("VMware：")]),s._v(" "),r("img",{attrs:{src:e(1078)}}),s._v(" "),r("p",[s._v("VirtualBox：")]),s._v(" "),r("img",{attrs:{src:e(1079)}}),s._v(" "),r("h6",{attrs:{id:"配置用户账户-输入b完成配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#配置用户账户-输入b完成配置"}},[s._v("#")]),s._v(" 配置用户账户，输入b完成配置")]),s._v(" "),r("img",{attrs:{src:e(1080)}}),s._v(" "),r("h6",{attrs:{id:"e-安装完成"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#e-安装完成"}},[s._v("#")]),s._v(" E.安装完成")]),s._v(" "),r("p",[s._v("到这一步需要按一下回车然后输入之前设定的用户名和密码才行。")]),s._v(" "),r("img",{attrs:{src:e(1081)}}),s._v(" "),r("img",{attrs:{src:e(1082)}}),s._v(" "),r("p",[s._v("然后就和linux的操作基本一样了~有一个问题是每次运行都要安装一次，所以装好之后最好能保存一个虚拟机快照。")]),s._v(" "),r("h2",{attrs:{id:"参考文献"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[s._v("#")]),s._v(" 参考文献")]),s._v(" "),r("p",[s._v("[1]https://github.com/xianjimli/qemu-arm-linux.git")]),s._v(" "),r("p",[s._v("[2]https://blog.csdn.net/ustc_dylan/article/details/5385691")]),s._v(" "),r("p",[s._v("[3]https://blog.csdn.net/qq_35451572/article/details/79516563")])])}),[],!1,null,null,null);t.default=a.exports}}]);