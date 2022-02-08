(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{1028:function(v,i,t){v.exports=t.p+"assets/img/2020-11-09-静态链接与动态链接-1.8737cf42.jpg"},1029:function(v,i,t){v.exports=t.p+"assets/img/2020-11-09-静态链接与动态链接-2.15a28185.jpg"},1680:function(v,i,t){"use strict";t.r(i);var _=t(42),a=Object(_.a)({},(function(){var v=this,i=v.$createElement,_=v._self._c||i;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"静态链接与动态链接"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#静态链接与动态链接"}},[v._v("#")]),v._v(" 静态链接与动态链接")]),v._v(" "),_("h2",{attrs:{id:"自顶向下的思考逻辑"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#自顶向下的思考逻辑"}},[v._v("#")]),v._v(" 自顶向下的思考逻辑")]),v._v(" "),_("p",[v._v("通过之前的《ELF文件格式解析》，我们对ELF目标文件有了大致的印象和了解。那么接下来的问题就是："),_("strong",[v._v("我们如何将编译得到的多个目标文件链接形成一个可执行文件？")])]),v._v(" "),_("p",[v._v("因为可执行文件中的每一条指令都需要一个明确的地址，因此链接的任务就是为可执行文件确定这些地址。从这个角度出发，我们不难发现链接器的主要任务就是以下三者：")]),v._v(" "),_("ol",[_("li",[v._v("为多个目标文件分配地址空间")]),v._v(" "),_("li",[v._v("明确每个符号的定义以及引用")]),v._v(" "),_("li",[v._v("修改需要更新地址的指令")])]),v._v(" "),_("p",[v._v("以上三个步骤其实就对应了链接过程中的"),_("strong",[v._v("地址空间分配")]),v._v("、"),_("strong",[v._v("符号解析")]),v._v("与"),_("strong",[v._v("符号重定位")]),v._v("。这其中的符号解析与符号重定位通常都是在一起完成的，因此这套处理逻辑也被称为"),_("strong",[v._v("两步链接(Two-pass Linking)")]),v._v("。")]),v._v(" "),_("p",[v._v("根据为目标文件分配地址空间方式的不同，我们可以将链接方式分为静态链接和动态链接。接下来就仔细讲解这两者的相关细节。")]),v._v(" "),_("h2",{attrs:{id:"静态链接"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#静态链接"}},[v._v("#")]),v._v(" 静态链接")]),v._v(" "),_("p",[v._v("静态链接就是在程序运行前，链接器通过对象文件中包含的重定位表，完成所有重定位操作，并最终形成一个在运行时不需要再次进行依赖库的加载和重定位操作（因为所有的依赖库在运行前都被链接到程序中了）。")]),v._v(" "),_("p",[v._v("以下面的图来简单说明一下由静态链接得到可执行文件的过程。根据在源文件中包含的头文件和程序中使用到的库函数，如stdio.h中定义的printf()函数，在libc.a中找到目标文件printf.o(这里暂且不考虑printf()函数的依赖关系)，然后将这个目标文件和我们hello.o这个文件进行静态链接得到我们的可执行文件。")]),v._v(" "),_("img",{attrs:{src:t(1028)}}),v._v(" "),_("p",[v._v("静态链接使得不同的程序开发者以及团队之间可以相对独立地进行自己程序模块的开发和测试，从某种意义上来说这极大地促进了程序开发的效率；并且由于静态链接使得可执行程序已经具备了程序执行的所有条件，可执行文件在执行时的运行速度很快。")]),v._v(" "),_("p",[v._v("但是静态链接对于计算机的内存和磁盘空间浪费极其严重。大家可以思考一下，对于多进程的操作系统来说，每个进程都会使用到很多公有静态库的函数，例如printf()函数、scanf()函数。静态链接就会导致系统内存以及磁盘空间之中都存在多份重复的公有库函数目标文件，空间浪费极大。")]),v._v(" "),_("p",[v._v("此外静态链接的另一个问题就在于程序更新升级困难。因为一个可执行文件所需要的目标文件更新之后，我们就需要重新链接整个可执行文件，这对于用户来说是非常不方便的。")]),v._v(" "),_("p",[v._v("要解决以上两个问题，最简单的办法就是将程序所需的各个模块分割开来，等到程序真正运行的时候才进行链接。这就是动态链接的基本思想。")]),v._v(" "),_("h2",{attrs:{id:"动态链接"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#动态链接"}},[v._v("#")]),v._v(" 动态链接")]),v._v(" "),_("p",[v._v("动态链接指的是主程序对动态共享库或对象中符号的引用，是等到程序运行后再加载并进行重定位操作。程序的主体部分也称为主程序还是静态链接的，这部分链接是不会将依赖的动态共享库或对象链接进主程序的。")]),v._v(" "),_("p",[v._v("由于动态链接涉及到了运行时链接以及多个文件的装载，这些步骤都必须要操作系统支持。而目前主流的操作系统都支持动态链接，在Linux系统中，ELF动态链接文件被称为动态共享对象(DSO，Dynamic Shared Objects)，文件名一般都是以“.so”结尾；而在Window系统中，动态链接文件被称为动态共享库(Dynamic Linking Library)，文件名一般都是以“.dll”结尾。")]),v._v(" "),_("p",[v._v("我们可以通过一个简单的例子来说明Linux上动态链接的大致流程。我们需要用到三个源文件：hello.c、lib.c、lib.h")]),v._v(" "),_("div",{staticClass:"language-c++ extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v('/* hello.c file */\n#include "lib.h"\nint main(){\n    printInLib(1);\n    return 0;\n}\n')])])]),_("div",{staticClass:"language-c++ extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v('/* lib.c file */\n#include <stdio.h>\nvoid printInLib(int i){\n    printf("Hello from lib %d\\n", i);\n    return 0;\n}\n')])])]),_("div",{staticClass:"language-c++ extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("/* lib.h file */\n#inndef LIB_H\n#define LIB_H\n\nvoid printInLib(int i);\n\n#endif\n")])])]),_("p",[v._v("演示程序很简单，hello.c调用lib.c中的printInLib函数，打印传进去的一个数字。我们首先使用以下命令将lib.c和lib.h编译成DSO。")]),v._v(" "),_("div",{staticClass:"language-shell extra-class"},[_("pre",{pre:!0,attrs:{class:"language-shell"}},[_("code",[v._v("gcc -fPic -shared -o Lib.so lib.c\n")])])]),_("p",[v._v("此时我们得到一个Lib.so文件，然后我们进一步来编译hello.c文件，命令如下：")]),v._v(" "),_("div",{staticClass:"language-shell extra-class"},[_("pre",{pre:!0,attrs:{class:"language-shell"}},[_("code",[v._v("gcc -o hello hello.c ./Lib.so\n")])])]),_("p",[v._v("这样我们就得到了一个可执行文件hello，整个编译以及链接的过程如下图所示：")]),v._v(" "),_("img",{attrs:{src:t(1029)}}),v._v(" "),_("p",[v._v("我们可以发现，当hello.c被编译为hello.o的时候，链接器需要明确printInLib的地址。因此链接器需要Lib.so作为输入，为hello提供完整的符号信息。")]),v._v(" "),_("p",[v._v("这里需要注意一点：此处所说的链接器指的是静态链接器，而非程序运行时所需的动态链接器。")]),v._v(" "),_("p",[v._v("通过这个简单的例子，我们基本了解了动态链接的概念，但是我们立马就会遇到一个问题：目标程序运行时，我们该如何确定动态共享对象的地址呢？")]),v._v(" "),_("p",[v._v("早期的操作系统采用了一种称之为“静态共享库(Static Shared Library)”的方式，也就是将所有程序的共享库交由操作系统来管理，由操作系统在某个特定地址划分出一块地址，然后根据这些地址来进行符号重定位。")]),v._v(" "),_("p",[v._v("但是这种方法会带来一个严重的问题：地址冲突。假设一个程序A需要用到共享库1和共享库2，而程序B需要用到共享库1和共享库3，但是操作系统依旧会为共享库1、2、3分配地址，而这就意味着程序A不能使用共享库3所占用的那块地址，程序B不能使用共享库2所占用的地址。这种情况会随着程序以及共享库的增多变得越来越严重，合理分配的可行性几乎为零。")]),v._v(" "),_("p",[v._v("为了解决这个问题，我们就需要思考如何实现动态共享对象在任意地址加载？此时我们就可以参考静态链接中的重定位操作：对所有绝对地址的引用都不做重定位操作，当目标程序装载完成之后，再进行绝对地址的修改。静态链接时的重定位就被称之为链接时重定位，此时的重定位被称为"),_("strong",[v._v("装载时重定位")]),v._v("。")]),v._v(" "),_("p",[v._v("装载重定位可以很好地解决地址冲突的问题，但是其存在一个很大的缺点：DSO中一部分需要修改的指令无法在多个进程之间共享，这就失去了动态链接节约内存的优势。为了解决这个问题，出现了一种被称为**地址无关代码(PIC/Position Independent Code)**的解决办法。")]),v._v(" "),_("p",[v._v("PIC的核心思想就是将DSO中需要修改的那部分指令分离出来，和数据部分放在一起；不需要修改的指令保持不变，需要修改的指令和数据可以在每个进程中拥有一个副本。怎么做到这一点呢？模块内的变量以及函数访问很简单，我们可以采用相对地址访问以及相对跳转来解决问题。")]),v._v(" "),_("p",[v._v("但是对于模块间的变量以及函数访问，该怎么办呢？此时我们可以想到计算机界的那句名言“任何问题都可以通过添加一个中间层来解决”，我们可以为这些变量以及函数创建一个全局偏移量表(GOT/Global Offset Table)，通过GOT表来跳转，从而实现地址无关代码。到这一步之后，动态链接已经基本实现了我们当初所期望的优势：可以更加灵活、节约内存以及磁盘空间、更有利于升级维护。")]),v._v(" "),_("h2",{attrs:{id:"总结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[v._v("#")]),v._v(" 总结")]),v._v(" "),_("p",[v._v("编译是将用编程语言所写的源文件通过词法分析、语法分析、语义分析、源代码优化、目标代码生成、目标代码优化这6个步骤生成得到汇编语言所对应的目标文件。")]),v._v(" "),_("p",[v._v("链接器则是综合了各个目标文件的符号信息，进行了地址空间分配、符号解析、符号重定位操作，最终生成得到可执行程序。根据链接过程的不同处理办法，链接可以被分为静态链接和动态链接。")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("静态链接优点")]),v._v(" "),_("ul",[_("li",[v._v("代码装载速度快，执行速度略比动态链接快。")]),v._v(" "),_("li",[v._v("只需保证在开发者的计算机中有正确的.LIB文件，在以二进制形式发布程序时不需考虑在用户的计算机上.LIB文件是否存在及版本问题，可避免DLL地狱问题。")])])]),v._v(" "),_("li",[_("p",[v._v("静态链接缺点")]),v._v(" "),_("ul",[_("li",[v._v("使用静态链接生成的可执行文件体积较大，包含相同的公共代码，造成内存以及磁盘空间浪费。")])])]),v._v(" "),_("li",[_("p",[v._v("动态链接优点")]),v._v(" "),_("ul",[_("li",[v._v("更加节省内存并减少页面交换。")]),v._v(" "),_("li",[v._v("DLL文件与EXE文件独立，只要输出接口不变（即名称、参数、返回值类型和调用约定不变），更换DLL文件不会对EXE文件造成任何影响，因而极大地提高了可维护性和可扩展性。")]),v._v(" "),_("li",[v._v("不同编程语言编写的程序只要按照函数调用约定就可以调用同一个DLL函数。")]),v._v(" "),_("li",[v._v("适用于大规模的软件开发，使开发过程独立、耦合度小，便于不同开发者和开发组织之间进行开发和测试。")])])]),v._v(" "),_("li",[_("p",[v._v("动态链接缺点")]),v._v(" "),_("ul",[_("li",[v._v("可执行文件的运行速度比静态链接略慢。")]),v._v(" "),_("li",[v._v("使用动态链接库的应用程序不是自完备的，如果可执行文件所需的动态库不存在，程序就无法正确执行。")])])])]),v._v(" "),_("h2",{attrs:{id:"参考资料"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[v._v("#")]),v._v(" 参考资料")]),v._v(" "),_("ol",[_("li",[v._v("《程序员的自我修养——链接、装载与库》")]),v._v(" "),_("li",[v._v("https://en.wikipedia.org/wiki/Static_library")]),v._v(" "),_("li",[v._v("https://en.wikipedia.org/wiki/Dynamic-link_library")])])])}),[],!1,null,null,null);i.default=a.exports}}]);