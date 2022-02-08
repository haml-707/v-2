(window.webpackJsonp=window.webpackJsonp||[]).push([[293],{1705:function(e,r,o){"use strict";o.r(r);var t=o(42),n=Object(t.a)({},(function(){var e=this,r=e.$createElement,o=e._self._c||r;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"开源社区实习记-我把-openeuler-移植到了-windows-wsl"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#开源社区实习记-我把-openeuler-移植到了-windows-wsl"}},[e._v("#")]),e._v(" 开源社区实习记 - 我把 openEuler 移植到了 Windows WSL")]),e._v(" "),o("p",[o("img",{attrs:{src:"https://gitee.com/ouyanghaitao/images/raw/master/1.png",alt:"1"}})]),e._v(" "),o("h2",{attrs:{id:"初入华为-确定目标"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#初入华为-确定目标"}},[e._v("#")]),e._v(" 初入华为，确定目标")]),e._v(" "),o("p",[e._v("我叫王海涛，哈尔滨工业大学（深圳）校区计算机专业的大三学生。")]),e._v(" "),o("p",[e._v("为了准备第一届全国大学生操作系统比赛，我的老师建议参加一些RISC-V相关的比赛，提前熟悉RISC-V，为从零写内核做好准备。于是我在2020年寒假期间参加了“2020 openEuler 高校开发者大赛”，选择的题目是“为openEuler-RISC-V添加Grub的引导启动方式”。从安装openEuler、注册gitee账号，再到用QEMU模拟RISC-V、学习Grub，这个比赛让我学到了操作系统启动流程相关的硬核知识，也让我开始了解openEuler开源社区。")]),e._v(" "),o("p",[e._v("带着对openEuler社区的好奇以及对华为公司实习的向往，在2021年1月份，我向负责华为四大开源社区运营的华为计算开源开发与运营部投递了简历。经历了3个月的漫长等待，终于如愿以偿收到了华为实习的Offer，获得了深度参与openEuler社区开发、运营的机会。")]),e._v(" "),o("p",[e._v("在社区实习几天后，我发现在学校深受大家欢迎的WSL居然还不支持openEuler。WSL即Windows Subsystem for Linux，是 Microsoft 原生的虚拟化方案，能用更快的速度、更少的磁盘，运行各种 Linux发行版，目前主流的Linux发行版都支持：")]),e._v(" "),o("p",[o("img",{attrs:{src:"https://gitee.com/ouyanghaitao/images/raw/master/2.png",alt:"2"}})]),e._v(" "),o("p",[e._v("于是我心想，要不我来补上这块空缺吧。和导师沟通后，导师非常支持我的想法。就这样，我的第一个实习任务就确定了—— 将openEuler发行版移植到Windows WSL。")]),e._v(" "),o("h2",{attrs:{id:"提前完成-准备发布"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#提前完成-准备发布"}},[e._v("#")]),e._v(" 提前完成？准备发布？")]),e._v(" "),o("p",[e._v("阅读了WSL相关文档后，我确定Windows WSL可以导入任意的Linux发行版，对于openEuler 而言是没有任何限制的。")]),e._v(" "),o("p",[e._v("首先是需要一个Linux发行版的根文件系统，使用WSL命令直接将这个文件系统导入即可。为了得到 Linux 发行版的根文件系统，微软建议使用发行版的docker官方镜像，启动容器后使用命令docker export导出容器镜像的快照作为所需的根文件系统。")]),e._v(" "),o("p",[e._v("在openEuler官网下载板块，我发现每个openEuler发行版都有对应的docker镜像。我下载了"),o("a",{attrs:{href:"https://repo.openeuler.org/openEuler-20.03-LTS-SP1/docker_img/x86_64/",target:"_blank",rel:"noopener noreferrer"}},[e._v("openEuler 20.03 LTS SP1"),o("OutboundLink")],1),e._v(" 的docker镜像，跟着文档一步一步操作，第二天就在WSL上启动了openEuler。")]),e._v(" "),o("p",[e._v("满心欢喜的我跟着微软的 WSL 发布文档继续边学习边实践，又用了两三天成功地编译好了安装包。这样在windows下，双击安装包就能安装openEuler 的 WSL 版本。")]),e._v(" "),o("p",[e._v("安装包编译完成后，我想把项目代码上传到openEuler社区做存档。这时候我遇到了一个问题：提交代码需要挂靠到某一个SIG下。")]),e._v(" "),o("p",[e._v("但是目前并没有WSL相关的SIG，于是我阅读了openEuler官网SIG申请流程，发现如果要成立新的SIG，需要通过社区TC委员会的邮件列表发起申请。于是，我写下了人生第一封开源社区的邮件，向TC委员会提问是否需要创建WSL SIG。很快便收到TC答复，明确不需要新建一个WSL SIG，加入OS-builder SIG即可。后来便参加了OS-builder SIG 双周例会，介绍了当前移植工作以及遇到的问题，并且在OS-builder SIG以及社区帮助下，成功在OS-builder下建立了WSL仓库。")]),e._v(" "),o("p",[e._v("中间还有个有趣的小插曲，在社区发邮件期间，民族棋 SIG 的 Maintainer，同时也是为中学生做树莓派科普的袁老师找到我，说看到了我热情洋溢的邮件，问能不能代表同学们采访一下 WSL 项目，说实话当时的我实在是受宠若惊但又内心狂喜。在采访中，首先介绍了openEuler移植到WSL的进展，以及一些Linux入门的知识，其次按照袁老师的建议分享了自己高考考上哈工大（深圳）的经验与心得，同时也分享了多姿多彩的大学生活（"),o("a",{attrs:{href:"https://gitee.com/yuandj/siger/blob/master/%E7%AC%AC10%E6%9C%9F%20%E5%8D%97%E5%BE%81%E5%8C%97%E6%88%98%EF%BC%88%E4%B8%8A12%EF%BC%89.md#%E4%B8%80%E5%B0%81%E9%9D%A2%E6%95%85%E4%BA%8B%E9%98%B3%E5%85%89%E6%B5%B7%E6%B6%9B",target:"_blank",rel:"noopener noreferrer"}},[e._v("采访链接"),o("OutboundLink")],1),e._v("）。")]),e._v(" "),o("p",[e._v("在和导师沟通后我了解到，代码如果要提交到openEuler社区，必须要经过测试。如何测试呢？带着问题，我参与了QA（Quality Assurance）SIG，以及release-management SIG的例会，并在两个SIG的成员建议下，使用了最新的mugen测试框架，搭配integration-test的测试脚本，对移植的系统进行测试。在测试期间，顺便发现了一个测试脚本的bug，修补后提交了PR 。这个bug很简单，就是grep命令与后面的文件名黏在一起了，加个空格隔开就行，但是蚊子腿再小也是肉，第一次找到bug内心还是小有成就滴。")]),e._v(" "),o("p",[e._v("测试结束后，基本操作系统的功能即os-basic文件夹下的测试用例都通过了，不过还有一半的测试用例都没有通过。深入分析报错的log后发现，由于WSL缺少部分原生Linux的功能，导致了很多功能无法开启，相关测试也就无法通过。比如，WSL不支持systemctl，而大部分测试脚本都需要使用systemctl来开启系统功能再进行测试，自然WSL无法通过这些测试，所以测试只好暂时告一段落。虽然这部分测试没有通过，但我使用移植后的openEuler一段时间后没有发现问题，应该不影响正常使用。")]),e._v(" "),o("p",[e._v("将测试后的代码提交到wsl仓库，等待PR合入时，我便想同步将安装包提交到Microsoft Store。")]),e._v(" "),o("h2",{attrs:{id:"为了发布-寻求帮助"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#为了发布-寻求帮助"}},[e._v("#")]),e._v(" 为了发布，寻求帮助")]),e._v(" "),o("p",[e._v("为了在微软商城发布openEuler的安装包，我需要解决一些技术之外的问题，社区是寻求帮助的最佳途径。")]),e._v(" "),o("p",[e._v("比如，虽然安装包的搞定了，但是安装后在开始菜单显示的logo，效果不如Ubuntu的好。因为openEuler的logo，由蓝色的字母E以及底部的黑色字体openEuler组成。这带来两个问题，一是带文字图标在微软的开始菜单会显得比较小；另一个是我开了windows深色模式，黑色字体在深色背景下根本看不清楚。")]),e._v(" "),o("p",[e._v("简单粗暴的解决办法也很好想，我找到logo的矢量图，把字删掉，然后放大就行。但是身边的同事提醒我，去掉文字的logo还有法律效力吗？我能随便去掉一个已注册商标的文字部分，然后拿去发布吗？带着问题，我询问了社区的其他成员，最后辗转找到华为法务部的一位律师姐姐，向她请教logo的法律问题后，她给我了一个商标检索报告截图，告诉我去掉文字的logo也有法律效力。每次想起这个logo，都提醒我在开源社区开发也要注意法务合规。")]),e._v(" "),o("p",[e._v("解决了Logo问题后，便可以准备提交到微软商城了。WSL文档里提到，如果要发布，需要写邮件给WSL团队，经过他们的测试后，才能发布，于是我便第一时间写了一封英文邮件给WSL团队。")]),e._v(" "),o("p",[e._v("等了两个星期，WSL团队没有回复。我只好再发一封邮件，运气不错的是，这次等了几天后，WSL团队终于回复我了，说前段时间正处于微软一年中专门开会的月份，很忙，所以没看到邮件。并且表示，WSL移植好后可以直接提交，无需测试。")]),e._v(" "),o("p",[e._v("文档里说，如果要将软件安装包发布到微软商城，需要注册一个微软合作中心账户，这个账户分公司账户和个人账户。前者需要提交创办公司的官方证明文件，微软审核通过后才能发布软件，后者则无需微软审核。在公司与个人账户的选择之间，我想先试试能不能创建公司账号。虽然openEuler不是公司，只是一个社区，但是毕竟公司账号能支持更多人登录，且能发布特定功能的APP，权限更高。于是我在社区，找到了社区基础设施SIG的Maintainer，在他的帮助下，使用了openEuler的一个公共邮箱注册微软账号。在验证完邮箱后，微软合作中心提示，employment verification失败，需要提供openeuler.io这个域名是由我们注册的证明。于是我又向社区基础设施SIG要证明材料，得到几个管理员界面的截图后，按照微软文档里面的说明提交了材料，又开始了新的漫长的等待。")]),e._v(" "),o("p",[e._v("又是两周，微软还是没有回复。在微软合作中心的论坛中，发现有几个人卡在了相同的验证阶段，他们发帖称自己按照文档提交了证明材料后，微软拖了很久都没回应，短的几个星期，慢的几个月。但在他们发帖表示微软拖延后，都有微软的管理员立即跟进，人工帮助他们解决了验证问题。学到这招后我便在讨论区提交了support，希望有客服也来帮助我通过验证。")]),e._v(" "),o("p",[e._v("几天后，果然有从美国打来的电话与我沟通。但是我们讨论了一下午，她都没有解决我的问题。后来发现，我问题分类找错了，原因是与账号相关的问题有好几个，彼此之间都很相似。")]),e._v(" "),o("p",[e._v("在漫长的发布过程中，我学到了如果合作伙伴没有第一时间答复，应该想办法去主动沟通、推进，比如去论坛上发帖，去帮助中心找人工客服，向相关团队发邮件等。")]),e._v(" "),o("h2",{attrs:{id:"喜提发布-收获满满"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#喜提发布-收获满满"}},[e._v("#")]),e._v(" 喜提发布，收获满满")]),e._v(" "),o("p",[e._v("人工客服无法解决我的问题，我只好继续等待我的证明材料能被微软工作人员处理。运气不错的是，过了一个星期左右，微软发邮件告诉我，除了截图以外，要提供创办公司的PDF官方证明，可是openEuler是一个开源社区而不是商业公司，没有官方证明。于是经过openEuler 社区的讨论，我们决定先用个人账户发布。")]),e._v(" "),o("p",[e._v("这次使用另一个openEuler的邮箱来创建了一个微软的个人账户，由于不需要繁琐的验证，我很顺利地，提交了应用上传的所需信息。但是发布时，我却怎么也无法提交安装包，一直提示错签名不对。在翻看YouTube上微软发布软件的介绍，以及在Stack Overflow上搜索相应问题时，我发现签名需要提供开发者账号的Windows publisher ID，即CN开头的一串号码。使用这个号码来作为Visual Studio签名安装包的Publisher common name，签名后的安装包能正确被微软合作中心成功识别，于是我便成功将安装包提交到了微软合作伙伴中心。而这一点，我翻遍了微软开发文档都没找到相关提醒。")]),e._v(" "),o("p",[e._v("让人意外的是，这次没有等几个星期，而是在三天后我就收到了微软的修改建议。我按照微软要求，修改privacy链接，加上openEuler不支持Windows 10 S申明后，重新提交了应用上传请求，本以为仍需要等待一段时间才能发布，没想到数日后，商城居然可以搜到openEuler ！发布成功了！")]),e._v(" "),o("p",[o("img",{attrs:{src:"https://gitee.com/ouyanghaitao/images/raw/master/3.png",alt:"3"}})]),e._v(" "),o("p",[e._v("上面是 openEuler 在 Microsoft Store 的截图，感兴趣的朋友可以通过"),o("a",{attrs:{href:"https://www.microsoft.com/zh-cn/p/openeuler/9ngf0q0xp03d?rtc=1&activetab=pivot:overviewtab",target:"_blank",rel:"noopener noreferrer"}},[e._v("链接1"),o("OutboundLink")],1),e._v("来安装。需要注意的是，在安装WSL 任何发行版之前，需要先启用 WSL 这个功能，具体可以参考"),o("a",{attrs:{href:"https://gitee.com/openeuler/wsl",target:"_blank",rel:"noopener noreferrer"}},[e._v("链接2"),o("OutboundLink")],1),e._v("。")]),e._v(" "),o("p",[e._v("三个月的工作终于是告一段落了。在这期间，我写下了人生第一封英文邮件给微软，写下了第一封给开源社区的邮件，第一次与社区成员沟通讨论openEuler，在这个过程中，我感觉自己已经融入到了openEuler这个大家庭中。")]),e._v(" "),o("p",[e._v("同时在华为实习工作中，工作氛围很好，同事之间互助友爱。于是我决定延长实习，从原计划7月结束实习，延长到9月底结束。希望在后续的三个月实习时间里，我能学到更多，也能为openEuler做更多贡献！")]),e._v(" "),o("p",[e._v("最后附上我总结的关于移植openEuler到WSL的技术文档，里面介绍了如何在WSL里安装openEuler，以及移植的过程：\nhttps://gitee.com/openeuler/wsl 。如果有任何问题，欢迎在openEuler社区wsl仓库提 Issue，https://gitee.com/openeuler/wsl/issues 。")]),e._v(" "),o("p",[e._v("如果你想参与 openEuler 开发，可以搜索微信小程序 “openEuler”，里面有 80 多个 SIG 例会时间、议题以及 openEuler 的线上和线下的 Meetup 。你可以选择你感兴趣议题参与例会，在会议中和社区成员进行详细的沟通，也可以到现场来参与 Meetup 活动。")]),e._v(" "),o("p",[e._v("欢迎为 openEuler 社区添砖加瓦！")])])}),[],!1,null,null,null);r.default=n.exports}}]);