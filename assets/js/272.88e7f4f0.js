(window.webpackJsonp=window.webpackJsonp||[]).push([[272],{1658:function(e,t,r){"use strict";r.r(t);var a=r(42),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"libfuzzer学习"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#libfuzzer学习"}},[e._v("#")]),e._v(" LibFuzzer学习")]),e._v(" "),r("blockquote",[r("p",[e._v("本文章来自于"),r("a",{attrs:{href:"https://summer.iscas.ac.cn/",target:"_blank",rel:"noopener noreferrer"}},[e._v("开源软件供应链点亮计划"),r("OutboundLink")],1),e._v("的openEuler社区项目\n项目名称："),r("a",{attrs:{href:"https://gitee.com/openeuler-competition/summer2021-112",target:"_blank",rel:"noopener noreferrer"}},[e._v("No.112 qemu设备fuzz测试完善"),r("OutboundLink")],1)])]),e._v(" "),r("h2",{attrs:{id:"前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),r("p",[e._v("LibFuzzer是一个"),r("code",[e._v("in-process")]),e._v("，"),r("code",[e._v("coverage-based")]),e._v("，"),r("code",[e._v("evolutionary")]),e._v("的模糊测试引擎，是LLVM项目的一部分。它与被测库链接，通过特定的入口点将模糊测试的输入提供给被测函数。在测试过程中不断变异输入，并统计代码覆盖率和崩溃情况。")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.llvm.org/docs/LibFuzzer.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("项目地址"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/llvm/llvm-project/tree/main/compiler-rt/lib/fuzzer",target:"_blank",rel:"noopener noreferrer"}},[e._v("代码路径"),r("OutboundLink")],1)])]),e._v(" "),r("h2",{attrs:{id:"libfuzzer-使用方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#libfuzzer-使用方法"}},[e._v("#")]),e._v(" LibFuzzer 使用方法")]),e._v(" "),r("h3",{attrs:{id:"实验环境"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#实验环境"}},[e._v("#")]),e._v(" 实验环境")]),e._v(" "),r("p",[e._v("采用了鹏程实验室的云主机，操作系统为openEuler")]),e._v(" "),r("div",{staticClass:"language-bash= extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('[root@host-10-0-0-94 libFuzzer]# lscpu\nArchitecture:                    aarch64\nCPU op-mode(s):                  64-bit\nByte Order:                      Little Endian\nCPU(s):                          4\n\n[root@host-10-0-0-94 libFuzzer]# cat /etc/os-release\nNAME="openEuler"\nVERSION="20.03 (LTS-SP1)"\n')])])]),r("h3",{attrs:{id:"简单使用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#简单使用"}},[e._v("#")]),e._v(" 简单使用")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/google/fuzzing/blob/master/tutorial/libFuzzerTutorial.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("入门教学"),r("OutboundLink")],1)]),e._v(" "),r("ol",[r("li",[r("p",[e._v("安装llvm和clang")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://clang.llvm.org/get_started.html#build",target:"_blank",rel:"noopener noreferrer"}},[e._v("源码编译"),r("OutboundLink")],1),e._v("：对于机器性能尤其是内存（8GB）和硬盘（15-20GB）的要求比较高，需要对编译命令进行一些"),r("a",{attrs:{href:"https://blog.csdn.net/qq_40323844/article/details/103191029",target:"_blank",rel:"noopener noreferrer"}},[e._v("优化"),r("OutboundLink")],1),e._v("。需要额外安装LibFuzzer依赖的"),r("a",{attrs:{href:"https://compiler-rt.llvm.org",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("compile-rt")]),r("OutboundLink")],1),e._v("。")])]),e._v(" "),r("div",{staticClass:"language-bash= extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('git clone https://gitee.com/mirrors/LLVM.git\ncd LLVM ; mkdir build ; cd build\ncmake -DLLVM_ENABLE_PROJECTS="clang;clang-tools-extra;compiler-rt" -DCMAKE_BUILD_TYPE="Release" -DLLVM_TARGETS_TO_BUILD="host" -G "Unix Makefiles" ../llvm\nmake -j4\n')])])]),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/llvm/llvm-project/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("二进制安装"),r("OutboundLink")],1),e._v("：下载对应版本的二进制文件，方便在不同版本间切换。可以使用软链接添加到环境变量中方便使用。")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.rootusers.com/how-to-install-dnf-package-manager-in-centosrhel/",target:"_blank",rel:"noopener noreferrer"}},[e._v("包管理器安装"),r("OutboundLink")],1),e._v("，版本较低，自带了libFuzzer。")])]),e._v(" "),r("div",{staticClass:"language-bash= extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("# sudo apt/dnf search xxx 可以查看包管理器中包含的软件以及对应版本\nsudo apt/dnf install clang llvm compiler-rt\n")])])])]),e._v(" "),r("li",[r("p",[e._v("编译被测二进制文件，加入LibFuzzer的编译选项")]),e._v(" "),r("div",{staticClass:"language-cpp= extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('// LibFuzzer提供的函数接口，在被测源代码fuzz_me.cc中实现\nextern "C" int LLVMFuzzerTestOneInput(const uint8_t *Data, size_t Size) {\n  DoSomethingInterestingWithMyAPI(Data, Size);\n  return 0;  // Non-zero return values are reserved for future use.\n}\n')])])]),r("div",{staticClass:"language-bash= extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("# clang会去寻找libclang_rt.xxx.a的静态链接库，即sanitizers\n# 除了ASAN，还可以添加UBSAN，TSAN等其他sanitizers\nclang -fsantize=address,fuzzer -g fuzz_me.c -o fuzz_me\n")])])])])]),e._v(" "),r("p",[e._v("如果使用该编译命令失败，说明上一步安装不成功，需要检查compile-rt库的位置或重新安装。")]),e._v(" "),r("ol",{attrs:{start:"3"}},[r("li",[e._v("运行二进制文件，观察输出"),r("div",{staticClass:"language-bash= extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("./fuzz_me \ngrep ERROR ./*.log | sort -k 3\n")])])])])]),e._v(" "),r("p",[e._v("如果程序的异常行为被sanitizer检测到，会产生Fuzzing output，即crash。除了crash，Fuzzer还会记录Fuzzing过程中的参数，例如代码覆盖率（以基本块为单位），种子变异情况等等。")]),e._v(" "),r("ol",{attrs:{start:"4"}},[r("li",[e._v("复现该输入，定位漏洞"),r("div",{staticClass:"language-bash= extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("./fuzz_me crash-xxx\n./fuzz_me -seed=xxx # xxx为crash的SHA-1哈希值\ngdb fuzz_me\n")])])])])]),e._v(" "),r("p",[e._v("sanitizer给出了漏洞类型和漏洞触发的环境。可以重新观察crash，复现漏洞，或放入gdb调试。")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/585afb1d9b9b3892943e01d85abc25de.png",alt:""}})]),e._v(" "),r("h3",{attrs:{id:"一些有用的utils"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一些有用的utils"}},[e._v("#")]),e._v(" 一些有用的utils")]),e._v(" "),r("p",[e._v("面对大型软件时，还需要开启一些编译选项，来提高Fuzzing的效率：")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("-jobs")]),e._v("：任务数，每个job的目的就是触发crash，job在workers进程中运行，一个worker可以管理多个job。如果将jobs设置为1000，可以绕过程序的简单bug")]),e._v(" "),r("li",[r("code",[e._v("-workers")]),e._v("：进程数，最多可使用一半的CPU核心数")]),e._v(" "),r("li",[r("code",[e._v("-forks")]),e._v("：将"),r("code",[e._v("-jobs = N")]),e._v("和"),r("code",[e._v("-workers = N")]),e._v("替换为"),r("code",[e._v("-fork = N")])]),e._v(" "),r("li",[r("code",[e._v("-dict")]),e._v("：字典，在Fuzzing特定格式的文件时非常必要")]),e._v(" "),r("li",[r("code",[e._v("CORPUS")]),e._v("：语料库，用于保存Fuzzing中触发新路径的输入")]),e._v(" "),r("li",[r("code",[e._v("-max-len")]),e._v("：设置最大输入长度，根据语料库文件大小来定义")]),e._v(" "),r("li",[r("code",[e._v("-run")]),e._v("：减少crash producer，单位为每次迭代中的变异次数")]),e._v(" "),r("li",[r("code",[e._v("-shrink")]),e._v("：减小语料库大小，可能可以提高代码覆盖率")])]),e._v(" "),r("h3",{attrs:{id:"项目实践"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#项目实践"}},[e._v("#")]),e._v(" 项目实践")]),e._v(" "),r("ul",[r("li",[e._v("课程："),r("a",{attrs:{href:"https://github.com/Dor1s/libfuzzer-workshop/",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("libfuzzer-workshop")]),r("OutboundLink")],1),e._v("包括了LibFuzzer一些常见的使用方法，"),r("a",{attrs:{href:"https://www.secpulse.com/archives/71898.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("此处为课程笔记"),r("OutboundLink")],1),e._v("。")]),e._v(" "),r("li",[e._v("开源项目CVE实战：LibFuzzer发现了"),r("a",{attrs:{href:"https://www.llvm.org/docs/LibFuzzer.html#trophies",target:"_blank",rel:"noopener noreferrer"}},[e._v("许多开源软件中的漏洞"),r("OutboundLink")],1),e._v("，包括OpenSSL中的Heartbleed漏洞，可以在Google的"),r("a",{attrs:{href:"https://github.com/google/fuzzer-test-suite",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("fuzzer-test-suite")]),r("OutboundLink")],1),e._v("中找到有漏洞的开源软件，并通过LibFuzzer进行复现。")]),e._v(" "),r("li",[e._v("与其他工具的对比：LibFuzzerTutorial给出的"),r("a",{attrs:{href:"https://github.com/google/fuzzing/blob/master/tutorial/libFuzzerTutorial.md#related-links",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考链接"),r("OutboundLink")],1),e._v("。")])]),e._v(" "),r("h2",{attrs:{id:"libfuzzer-原理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#libfuzzer-原理"}},[e._v("#")]),e._v(" LibFuzzer 原理")]),e._v(" "),r("h3",{attrs:{id:"变异算法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#变异算法"}},[e._v("#")]),e._v(" 变异算法")]),e._v(" "),r("p",[e._v("变异（Mutation）是现代Fuzzer中的关键步骤，用于产生新的且能够覆盖更多基本块的输入。LibFuzzer包含了一系列内置的简单的变异算法，大多为bit级反转。LibFuzzer同时也接受用户自定义变异算法，用于定向Fuzzing。")]),e._v(" "),r("h4",{attrs:{id:"已有变异算法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#已有变异算法"}},[e._v("#")]),e._v(" 已有变异算法")]),e._v(" "),r("p",[e._v("通过观察LibFuzzer的"),r("a",{attrs:{href:"https://www.llvm.org/docs/LibFuzzer.html#output",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("Stderr Output")]),r("OutboundLink")],1),e._v("，可以在MS字段发现当前输入使用的变异算法，如图所示。")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/cac0122be891840a29113c2a1136c681.png",alt:""}})]),e._v(" "),r("p",[e._v("LibFuzzer一共内置了12种变异算法，属于"),r("code",[e._v("MutationDispatcher")]),e._v("类的成员函数，类定义代码如下：")]),e._v(" "),r("div",{staticClass:"language-cpp= extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('// 代码路径：LLVM/compiler-rt/lib/fuzzer/FuzzerMutate.cpp\n\nMutationDispatcher::MutationDispatcher(Random &Rand, const FuzzingOptions &Options) : Rand(Rand), Options(Options) {\n    DefaultMutators.insert(\n        DefaultMutators.begin(),\n        {\n            {&MutationDispatcher::Mutate_EraseBytes, "EraseBytes"},\n            {&MutationDispatcher::Mutate_InsertByte, "InsertByte"},\n            {&MutationDispatcher::Mutate_InsertRepeatedBytes, "InsertRepeatedBytes"},\n            {&MutationDispatcher::Mutate_ChangeByte, "ChangeByte"},\n            {&MutationDispatcher::Mutate_ChangeBit, "ChangeBit"},\n            {&MutationDispatcher::Mutate_ShuffleBytes, "ShuffleBytes"},\n            {&MutationDispatcher::Mutate_ChangeASCIIInteger, "ChangeASCIIInt"},\n            {&MutationDispatcher::Mutate_ChangeBinaryInteger, "ChangeBinInt"},\n            {&MutationDispatcher::Mutate_CopyPart, "CopyPart"},\n            {&MutationDispatcher::Mutate_CrossOver, "CrossOver"},\n            {&MutationDispatcher::Mutate_AddWordFromManualDictionary, "ManualDict"},\n            {&MutationDispatcher::Mutate_AddWordFromPersistentAutoDictionary, "PersAutoDict"},\n        });\n        // 以上函数的具体实现\n    }\n')])])]),r("p",[e._v("大部分变异算法从名称就可以看出实现方法。比如"),r("code",[e._v("EraseBytes")]),e._v("即调用"),r("code",[e._v("memmove")]),e._v("函数覆盖掉部分比特位；"),r("code",[e._v("InsertBytes")]),e._v("即调用"),r("code",[e._v("memmove")]),e._v("函数添加一个比特位。值得注意的是，在这些内置的变异算法中，变异的位置的和变异的值都是采用"),r("code",[e._v("Rand")]),e._v("系列的随机函数生成。")]),e._v(" "),r("h4",{attrs:{id:"如何添加新的变异算法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#如何添加新的变异算法"}},[e._v("#")]),e._v(" 如何添加新的变异算法")]),e._v(" "),r("p",[e._v("LibFuzzer和AFL属于"),r("code",[e._v("coverage-guided")]),e._v("的Fuzzing工具，在Fuzz具体的对象时，可能由于变异算法不包含语义信息而导致在程序运行的初期就被过滤掉，相对于generation-based的Fuzzing工具效率低下。Google由此提出了"),r("a",{attrs:{href:"https://github.com/google/fuzzing/blob/master/docs/structure-aware-fuzzing.md",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("structure-aware-fuzzing")]),r("OutboundLink")],1),e._v("的高级概念，可以让用户自行添加变异算法，即"),r("code",[e._v("LibFuzzer Plugin")]),e._v("，文中也介绍了如何添加Plugin，并列举了一系列官方实现的Plugin。")]),e._v(" "),r("p",[e._v("添加Plugin的方法如下面代码所示。首先需要实现一个自定义的"),r("code",[e._v("LLVMFuzzerCustomMutator")]),e._v("函数，加入特定的变异算法，然后在该函数中调用"),r("code",[e._v("LLVMFuzzerMutate")]),e._v("来实现普通的变异。")]),e._v(" "),r("p",[e._v("在具体的代码实现中，可以通过条件编译指令"),r("code",[e._v("ifdef CUSTOM_MUTATOR")]),e._v("和"),r("code",[e._v("clang -DCUSTOM_MUTATOR")]),e._v("来开启或关闭自定义的Plugin。")]),e._v(" "),r("div",{staticClass:"language-cpp= extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("// Optional user-provided custom mutator. \n// Mutates raw data in [Data, Data+Size) inplace. \n// Returns the new size, which is not greater than MaxSize. \n// Given the same Seed produces the same mutation. \nsize_t LLVMFuzzerCustomMutator(uint8_t *Data, size_t Size, size_t MaxSize, unsigned int Seed); \n\n// libFuzzer-provided function to be used inside LLVMFuzzerCustomMutator.\n// Mutates raw data in [Data, Data+Size) inplace.\n// Returns the new size, which is not greater than MaxSize.\nsize_t LLVMFuzzerMutate(uint8_t *Data, size_t Size, size_t MaxSize);\n")])])]),r("p",[e._v("对于添加自己的Plugin感兴趣的同学，可以参考该文章中给出的"),r("a",{attrs:{href:"https://github.com/google/fuzzing/blob/master/docs/structure-aware-fuzzing.md#related-links",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考链接"),r("OutboundLink")],1),e._v("，也可以参考2017年LLVM开发者大会上的议题"),r("a",{attrs:{href:"https://www.youtube.com/watch?v=U60hC16HEDY",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v('"Structure-aware fuzzing for Clang and LLVM with libprotobuf-mutator"')]),r("OutboundLink")],1)]),e._v(" "),r("h3",{attrs:{id:"覆盖率统计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#覆盖率统计"}},[e._v("#")]),e._v(" 覆盖率统计")]),e._v(" "),r("p",[e._v("代码覆盖率统计方法需要从两个维度分析：")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("统计精度")]),e._v("：从粗糙到精细，代码覆盖率（Coverage）的统计大致分为三个层次\n"),r("ul",[r("li",[r("code",[e._v("function level")]),e._v("：统计调用的函数，忽略对函数内部代码的统计")]),e._v(" "),r("li",[r("code",[e._v("basic block level")]),e._v("：统计标准块，可以在LibFuzzer的"),r("a",{attrs:{href:"https://www.llvm.org/docs/LibFuzzer.html#output",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("Stderr Output")]),r("OutboundLink")],1),e._v("的cov字段查找到")]),e._v(" "),r("li",[r("code",[e._v("edge level")]),e._v("：edge不仅包含了基本块信息，还在基本块之间建立虚拟块，以包含执行信息")])])])]),e._v(" "),r("p",[r("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/f3d19dfa66d44924b3386cd6860505c5.png",alt:""}})]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("分析对象")]),e._v("：统计的基本方法是插桩（instrumentation），加入计数变量，大致分为三个级别\n"),r("ul",[r("li",[r("code",[e._v("source code")]),e._v("：在编译选项中提供覆盖率统计方式")]),e._v(" "),r("li",[r("code",[e._v("intermediate representation")]),e._v("：用"),r("code",[e._v("llvm pass")]),e._v("等方式统计")]),e._v(" "),r("li",[r("code",[e._v("binary")]),e._v("：使用"),r("code",[e._v("Pin")]),e._v("，"),r("code",[e._v("DynamoRIO")]),e._v("等二进制插桩工具去hook统计")])])])]),e._v(" "),r("p",[e._v("综上所述，LibFuzzer使用了LLVM框架中的"),r("a",{attrs:{href:"https://clang.llvm.org/docs/SanitizerCoverage.html",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("SanitizerCoverage")]),r("OutboundLink")],1),e._v("来实现源代码级别的覆盖率统计，可以通过如下命令指定，默认使用"),r("code",[e._v("edge")]),e._v("级别。")]),e._v(" "),r("div",{staticClass:"language-bash= extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("# xxx=edge,bb,func,trace-pc-guard,inline-8bit-counters,inline-bool-flag,pc-table,trace-pc\nclang -fsanitize-coverage=xxx fuzz_me.c\n")])])]),r("p",[e._v("此外，还可以在"),r("code",[e._v("SanitizerCoverage")]),e._v("的基础上开发分析工具。Sanitizer提供了覆盖率的回调接口，用户可以在Fuzzing进程关闭时将覆盖率统计的结果转储为"),r("code",[e._v(".sancov")]),e._v("文件。LLVM框架提供了"),r("code",[e._v("Sancov Tool")]),e._v("工具来生成源代码级别的覆盖率报告。")]),e._v(" "),r("h3",{attrs:{id:"错误检查"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#错误检查"}},[e._v("#")]),e._v(" 错误检查")]),e._v(" "),r("h4",{attrs:{id:"常见错误"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#常见错误"}},[e._v("#")]),e._v(" 常见错误")]),e._v(" "),r("p",[e._v("前文提到，LibFuzzer进程中的每个"),r("code",[e._v("job")]),e._v("的使命就是完成检查任务。它直到遇到crash或者运行超时后才会停止。这时，LibFuzzer的守护进程会捕获错误码。如果错误码为77，则为超时（默认超时时间为1200秒）或者LibFuzzer本身程序异常；如果为crash，则将crash结果以及造成crash的输入记录下来。")]),e._v(" "),r("h4",{attrs:{id:"sanitizers"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sanitizers"}},[e._v("#")]),e._v(" Sanitizers")]),e._v(" "),r("p",[e._v("而仅仅检测出crash并不够覆盖所有Fuzzing的检测场景，比如内存泄漏，竞态等情况虽然可能不会造成crash，但也是非常严重的一类错误。针对这些非crash的错误，有像"),r("code",[e._v("Valgrind")]),e._v("这样的重量级内存检测工具。而LibFuzzer使用的是LLVM框架中的一系列"),r("a",{attrs:{href:"https://github.com/google/sanitizers",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("Sanitizers")]),r("OutboundLink")],1),e._v("。这些工具由Google提出，可以用于检测C/C++语言的各类运行时异常，比较常用的Sanitizers列举如下：")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("AddressSanitizer(ASAN)")]),e._v("：捕获堆栈溢出，UAF等漏洞")]),e._v(" "),r("li",[r("code",[e._v("ThreadSanitizer(TSAN)")]),e._v("：捕获data race，支持C/C++和Go")]),e._v(" "),r("li",[r("code",[e._v("UndefinedBehaviorSanitizer(UBSAN)")]),e._v("：捕获整数溢出，空指针解引用等异常行为")])]),e._v(" "),r("p",[e._v("以ASAN为例来分析这些错误检查工具的原理，详细介绍可以看"),r("a",{attrs:{href:"http://research.google.com/pubs/pub37752.html",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("USENIX ATC 2021")]),r("OutboundLink")],1),e._v("。")]),e._v(" "),r("ol",[r("li",[e._v("在编译时，ASAN在LLVM IR级别的访问内存操作（load，store，alloca）的前后插桩。由于内存有8字节对齐的要求，所以部分内存处于unused状态，可以使用内存映射的方式将其设置为"),r("code",[e._v("shadow memory")]),e._v("，来指示其读写情况。")]),e._v(" "),r("li",[e._v("在运行时对malloc函数进行HOOK，并在前后设置"),r("code",[e._v("Redzone")]),e._v("区域，类似于Stack Canary的做法。将Redzone区域的shadow memory设置为不可写，即可避免溢出问题。")]),e._v(" "),r("li",[e._v("在运行时对free函数进行HOOK，不立即释放该内存，而是将shadow memory设置为负数，即不可读写的状态，并放入隔离区观察。如果发生UAF或者野指针解引用的情况，则会被捕获。")])]),e._v(" "),r("p",[r("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/e70c15eb1734af0179d9745801a3e88d.png",alt:""}})]),e._v(" "),r("h2",{attrs:{id:"其他-fuzzer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#其他-fuzzer"}},[e._v("#")]),e._v(" 其他 Fuzzer")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("学术界：Fuzzing作为学术热点，近年来在系统安全，网络安全，软件分析，程序语言等领域的国际顶级会议上都有许多相关论文，可以查看"),r("a",{attrs:{href:"https://github.com/wcventure/FuzzingPaper",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("FuzzingPaper")]),r("OutboundLink")],1),e._v("项目。这些论文大多是提出一种针对某一特定对象（软件，OS内核，硬件，程序语言等等）或者特定漏洞类型（竞态条件，缓冲区溢出）的Fuzzer，并结合符号执行（Concolic Fuzzing），深度学习等方法提高Fuzzing效率。")])]),e._v(" "),r("li",[r("p",[e._v("工业界：在AFL，LibFuzzer这样的工具诞生之后，Github上陆续有许多在此基础上开发的工具，也有许多主打模糊测试技术的公司兴起。其中比较著名的是Google提出的一系列Fuzzing工具，包括其维护的"),r("code",[e._v("Fuzzbench")]),e._v("平台，可以对Fuzzer性能进行统一评估。")])])]),e._v(" "),r("p",[e._v("总体来说，学术界和工业界在Fuzzing的研究上还是非常相关的。因为大部分Fuzzing技术基于LLVM框架实现，所以可扩展性很强。学术界的工作基于工业界的已有的工具扩展开发，而学术界性能较好的成果，也会发布到Github上。以下列举一些我在学习Fuzzing过程中收藏的Fuzzer，更完整的版本可以查看"),r("a",{attrs:{href:"https://github.com/secfigo/Awesome-Fuzzing",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("Awesome-Fuzzing")]),r("OutboundLink")],1)]),e._v(" "),r("ul",[r("li",[r("p",[e._v("通用")]),e._v(" "),r("ul",[r("li",[r("p",[r("a",{attrs:{href:"https://github.com/guidovranken/libfuzzer-gv",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("LibFuzzer-gv")]),r("OutboundLink")],1),e._v("：LibFuzzer增强版")])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://aflplus.plus/",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("AFL++")]),r("OutboundLink")],1),e._v("：AFL增强版")])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://google.github.io/oss-fuzz/",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("OSS-Fuzz")]),r("OutboundLink")],1),e._v("+"),r("a",{attrs:{href:"https://google.github.io/clusterfuzz",target:"_blank",rel:"noopener noreferrer"}},[e._v("ClusterFuzz"),r("OutboundLink")],1),e._v("：前后端配合实现的大规模分布式Fuzzer")])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://boofuzz.readthedocs.io/en/stable/",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("boofuzz")]),r("OutboundLink")],1),e._v("：Sulley框架增强版")])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://github.com/angr/phuzzer",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("phuzzer")]),r("OutboundLink")],1),e._v("：和AFL交互的python框架")])])])]),e._v(" "),r("li",[r("p",[e._v("安全")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://honggfuzz.dev/",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("Honggfuzz")]),r("OutboundLink")],1),e._v("：更加针对于软件安全漏洞的Fuzzer")])])]),e._v(" "),r("li",[r("p",[e._v("网络协议")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/aflnet/aflnet",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("AFLNet")]),r("OutboundLink")],1),e._v("：针对网络协议的灰盒Fuzzer")])])]),e._v(" "),r("li",[r("p",[e._v("内核")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/google/syzkaller",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("Syzkaller")]),r("OutboundLink")],1),e._v("：无监督的linux内核Fuzzer")])])]),e._v(" "),r("li",[r("p",[e._v("编程语言")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/rust-fuzz",target:"_blank",rel:"noopener noreferrer"}},[e._v("使用Rust实现的一系列Fuzzer"),r("OutboundLink")],1),e._v("：包括AFL，LibFuzzer，Honggfuzz")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/s3team/Polyglot",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("PolyGlot")]),r("OutboundLink")],1),e._v("：针对程序语言解释器的Fuzzer")])])]),e._v(" "),r("li",[r("p",[e._v("IoT")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/zyw-200/FirmAFL",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("FirmAFL")]),r("OutboundLink")],1),e._v("：针对IoT固件的灰盒Fuzzer")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/ucsb-seclab/diane",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("DIANE")]),r("OutboundLink")],1),e._v("：针对IoT配套的手机APP的Fuzzer")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/seemoo-lab/frankenstein",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("Frankenstein")]),r("OutboundLink")],1),e._v("：Fuzz无线物联网设备")])])])]),e._v(" "),r("blockquote",[r("p",[e._v("有错误之处请批评指正，作者联系方式："),r("a",{attrs:{href:"https://cascadeschen.cn",target:"_blank",rel:"noopener noreferrer"}},[e._v("cascades-sjtu"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=n.exports}}]);