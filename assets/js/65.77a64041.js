(window.webpackJsonp=window.webpackJsonp||[]).push([[65,104],{1415:function(t,e,a){"use strict";a(743)},1500:function(t,e,a){"use strict";a.r(e);a(303),a(44);var i=a(549),n=a(652),o=null,r=function(t){o.tableLoading=!0,Object(n.g)(t).then((function(t){o.tableLoading=!1,t.totalRecords?(o.total=t.totalRecords,o.hardwareTableData=t.list):(o.total=0,o.hardwareTableData=[])})).catch((function(t){o.$message.error(t),o.tableLoading=!1}))},l=function(t){o.tableLoading=!0,Object(n.d)(t).then((function(t){o.tableLoading=!1,t.totalRecords?(o.total=t.totalRecords,o.driverTableData=t.list):(o.total=0,o.driverTableData=[])})).catch((function(t){o.$message.error(t),o.tableLoading=!1}))},s=function(t){o.tableLoading=!0,Object(n.i)(t).then((function(t){if(o.tableLoading=!1,t){o.total=t.total;for(var e=t.info,a=["A","a","b","B","C","c","D","d","E","e","F","f","G","g","H","h","I","i","J","j","K","k","L","l","M","m","N","n","O","o","P","p","Q","q","R","r","S","s","T","t","U","u","V","v","W","w","X","x","Y","y","Z","z","0","1","2","3","4","5","6","7","8","9"],i=[],n=0;n<a.length;n++)for(var r=0;r<e.length;r++)e[r].softwareName[0]==a[n]&&i.push(e[r]);o.softwareTableData=i}else o.total=0,o.softwareTableData=[]})).catch((function(t){o.$message.error(t),o.tableLoading=!1}))},c={data:function(){return o=this,{isSoft:!1,tabActiveName:"drive",hardwareOSOptions:[],hardwareArchitectureOptions:[],driverOSOptions:[],driverArchitectureOptions:[],softwareOptionsOs:[],softwareOptionsArch:[],softwareOptionsType:[],formData:{keyword:"",os:"",architecture:"",page:1,pageSize:10,type:"",lang:"zh"},hardwareTableData:[],softwareTableData:[],driverTableData:[],tableLoading:!1,total:0,pageValue:!0}},components:{commonBanner:i.default},computed:{},created:function(){},mounted:function(){var t=this,e="";e=-1!==window.location.pathname.indexOf("/en/")||-1!==window.location.pathname.indexOf("/ru/")?"en":"zh",this.formData.lang=e,this.initData(this.formData),Object(n.h)({lang:e}).then((function(e){e&&e.length>0&&(t.hardwareOSOptions=e)})),Object(n.f)({lang:e}).then((function(e){e&&e.length>0&&(t.hardwareArchitectureOptions=e)})),Object(n.e)({lang:e}).then((function(e){e&&e.length>0&&(t.driverOSOptions=e)})),Object(n.c)({lang:e}).then((function(e){e&&e.length>0&&(t.driverArchitectureOptions=e)})),Object(n.j)({}).then((function(e){t.softwareOptionsOs=e.OS,t.softwareOptionsArch=e.Arch,t.softwareOptionsType=e.Type.filter((function(t){return""!==t}))}))},methods:{initData:function(t){"hardware"===this.tabActiveName?r(t):"drive"===this.tabActiveName?l(t):"software"===this.tabActiveName&&s(t)},handleTabClick:function(t,e){var a="";a=-1!==window.location.pathname.indexOf("/en/")||-1!==window.location.pathname.indexOf("/ru/")?"en":"zh",this.formData={type:"",keyword:"",os:"",architecture:"",page:1,pageSize:10,lang:a},this.initData(this.formData)},pageChange:function(t){this.formData.page=t,this.initData(this.formData)},hardwareChange:function(){this.formData.page=1,r(this.formData)},softwareChange:function(){this.formData.page=1,console.log(this.formData),s(this.formData)},driverChange:function(){this.formData.page=1,l(this.formData)},go:function(t){this.$router.push({path:this.resolvePath("/compatibility/hardware-info/"),query:{id:t}})},goToHareware:function(){this.$router.push({path:this.resolvePath("/compatibility/hardware/")})},goToSoftware:function(){this.$router.push({path:this.resolvePath("/compatibility/software/")})}}},p=(a(1415),a(42)),u=Object(p.a)(c,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"compatibility-box"},[a("common-banner",{attrs:{"pc-src":"/img/compatibility/compatibility_banner.png","mobile-src":"/img/compatibility/compatibility_banner.png","inside-name":"SUPPORT","outside-name":t.i18n.compatibility.COMPATIBILITY}}),t._v(" "),a("div",{staticClass:"compatibility-content"},[a("el-tabs",{on:{"tab-click":t.handleTabClick},model:{value:t.tabActiveName,callback:function(e){t.tabActiveName=e},expression:"tabActiveName"}},[a("el-tab-pane",{attrs:{label:t.i18n.compatibility.DRIVE,name:"drive"}},[a("el-form",{staticClass:"compatibility-filter",attrs:{inline:!0,model:t.formData}},[a("el-form-item",{attrs:{label:t.i18n.compatibility.OS}},[a("el-select",{staticClass:"pc-select",attrs:{placeholder:t.i18n.compatibility.SELECT_PLACEHOLDER},on:{change:t.driverChange},model:{value:t.formData.os,callback:function(e){t.$set(t.formData,"os",e)},expression:"formData.os"}},[a("el-option",{attrs:{label:t.i18n.compatibility.SEARCH_ALL,value:"all"}}),t._v(" "),t._l(t.driverOSOptions,(function(t,e){return a("el-option",{key:e,attrs:{value:t}})}))],2),t._v(" "),a("el-select",{staticClass:"mobile-select",attrs:{placeholder:t.i18n.compatibility.OS},on:{change:t.driverChange},model:{value:t.formData.os,callback:function(e){t.$set(t.formData,"os",e)},expression:"formData.os"}},[a("el-option",{attrs:{label:t.i18n.compatibility.SEARCH_ALL,value:"all"}}),t._v(" "),t._l(t.driverOSOptions,(function(t,e){return a("el-option",{key:e,attrs:{value:t}})}))],2)],1),t._v(" "),a("el-form-item",{attrs:{label:t.i18n.compatibility.ARCHITECTURE}},[a("el-select",{staticClass:"pc-select",attrs:{placeholder:t.i18n.compatibility.SELECT_PLACEHOLDER},on:{change:t.driverChange},model:{value:t.formData.architecture,callback:function(e){t.$set(t.formData,"architecture",e)},expression:"formData.architecture"}},[a("el-option",{attrs:{label:t.i18n.compatibility.SEARCH_ALL,value:"all"}}),t._v(" "),t._l(t.driverArchitectureOptions,(function(t,e){return a("el-option",{key:e,attrs:{value:t}})}))],2),t._v(" "),a("el-select",{staticClass:"mobile-select",attrs:{placeholder:t.i18n.compatibility.ARCHITECTURE},on:{change:t.driverChange},model:{value:t.formData.architecture,callback:function(e){t.$set(t.formData,"architecture",e)},expression:"formData.architecture"}},[a("el-option",{attrs:{label:t.i18n.compatibility.SEARCH_ALL,value:"all"}}),t._v(" "),t._l(t.driverArchitectureOptions,(function(t,e){return a("el-option",{key:e,attrs:{value:t}})}))],2)],1),t._v(" "),a("el-form-item",{staticClass:"search-box",attrs:{label:t.i18n.compatibility.SEARCH_LABEL}},[a("el-input",{staticClass:"pc-search",attrs:{placeholder:t.i18n.compatibility.DRIVE_SEARCH_PLACEHOLDER},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.driverChange()}},model:{value:t.formData.keyword,callback:function(e){t.$set(t.formData,"keyword",e)},expression:"formData.keyword"}},[a("i",{staticClass:"icon-search",attrs:{slot:"suffix"},on:{click:function(e){return t.driverChange()}},slot:"suffix"})]),t._v(" "),a("el-input",{staticClass:"mobile-search",attrs:{placeholder:t.i18n.compatibility.SEARCH_LABEL},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.driverChange()}},model:{value:t.formData.keyword,callback:function(e){t.$set(t.formData,"keyword",e)},expression:"formData.keyword"}},[a("i",{staticClass:"icon-search",attrs:{slot:"suffix"},on:{click:function(e){return t.driverChange()}},slot:"suffix"})])],1)],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading.fullscreen",value:t.tableLoading,expression:"tableLoading",modifiers:{fullscreen:!0}}],staticClass:"table-pc",staticStyle:{width:"100%"},attrs:{data:t.driverTableData,stripe:""}},[a("el-table-column",{attrs:{prop:"architecture",label:t.i18n.compatibility.DRIVE_TABLE_COLUMN.ARCHITECTURE,width:"110"}}),t._v(" "),a("el-table-column",{attrs:{prop:"driverName",label:t.i18n.compatibility.DRIVE_TABLE_COLUMN.DRIVE_NAME,width:"115"}}),t._v(" "),a("el-table-column",{attrs:{prop:"os",label:t.i18n.compatibility.DRIVE_TABLE_COLUMN.DRIVE_OS,width:"190"}}),t._v(" "),a("el-table-column",{attrs:{prop:"version",label:t.i18n.compatibility.DRIVE_TABLE_COLUMN.VERSION,width:"115"}}),t._v(" "),a("el-table-column",{attrs:{prop:"type",label:t.i18n.compatibility.DRIVE_TABLE_COLUMN.TYPE,width:"85"}}),t._v(" "),a("el-table-column",{attrs:{prop:"driverDate",label:t.i18n.compatibility.DRIVE_TABLE_COLUMN.DRIVE_DATE,width:"115"}}),t._v(" "),a("el-table-column",{attrs:{prop:"chipVendor",label:t.i18n.compatibility.DRIVE_TABLE_COLUMN.CHIP_VENDOR,width:"115"}}),t._v(" "),a("el-table-column",{attrs:{prop:"boardModel",label:t.i18n.compatibility.DRIVE_TABLE_COLUMN.BOARD_MODEL,width:"160"}}),t._v(" "),a("el-table-column",{attrs:{prop:"chipModel",label:t.i18n.compatibility.DRIVE_TABLE_COLUMN.CHIP_MODEL,width:"115"}})],1),t._v(" "),a("ul",{directives:[{name:"loading",rawName:"v-loading.fullscreen",value:t.tableLoading,expression:"tableLoading",modifiers:{fullscreen:!0}}],staticClass:"table-mobile"},t._l(t.driverTableData,(function(e,i){return a("li",{key:i,staticClass:"item"},[a("ul",[a("li",[a("span",[t._v(t._s(t.i18n.compatibility.DRIVE_TABLE_COLUMN.ARCHITECTURE)+":")]),t._v("\n                                "+t._s(e.architecture)+"\n                            ")]),t._v(" "),a("li",[a("span",[t._v(t._s(t.i18n.compatibility.DRIVE_TABLE_COLUMN.DRIVE_NAME)+":")]),t._v("\n                                "+t._s(e.driverName)+"\n                            ")]),t._v(" "),a("li",[a("span",[t._v(t._s(t.i18n.compatibility.DRIVE_TABLE_COLUMN.DRIVE_OS)+":")]),t._v("\n                                "+t._s(e.os)+"\n                            ")]),t._v(" "),a("li",[a("span",[t._v(t._s(t.i18n.compatibility.DRIVE_TABLE_COLUMN.VERSION)+":")]),t._v("\n                                "+t._s(e.version)+"\n                            ")]),t._v(" "),a("li",[a("span",[t._v(t._s(t.i18n.compatibility.DRIVE_TABLE_COLUMN.TYPE)+":")]),t._v("\n                                "+t._s(e.type)+"\n                            ")]),t._v(" "),a("li",[a("span",[t._v(t._s(t.i18n.compatibility.DRIVE_TABLE_COLUMN.DRIVE_DATE)+":")]),t._v("\n                                "+t._s(e.driverDate)+"\n                            ")]),t._v(" "),a("li",[a("span",[t._v(t._s(t.i18n.compatibility.DRIVE_TABLE_COLUMN.CHIP_VENDOR)+":")]),t._v("\n                                "+t._s(e.chipVendor)+"\n                            ")]),t._v(" "),a("li",[a("span",[t._v(t._s(t.i18n.compatibility.DRIVE_TABLE_COLUMN.BOARD_MODEL)+":")]),t._v("\n                                "+t._s(e.boardModel)+"\n                            ")]),t._v(" "),a("li",[a("span",[t._v(t._s(t.i18n.compatibility.DRIVE_TABLE_COLUMN.CHIP_MODEL)+":")]),t._v("\n                                "+t._s(e.chipModel)+"\n                            ")])])])})),0)],1),t._v(" "),a("el-tab-pane",{attrs:{label:t.i18n.compatibility.HARDWARE,name:"hardware"}},[a("el-form",{staticClass:"compatibility-filter",attrs:{inline:!0,model:t.formData}},[a("el-form-item",{attrs:{label:t.i18n.compatibility.OS}},[a("el-select",{staticClass:"pc-select",attrs:{placeholder:t.i18n.compatibility.SELECT_PLACEHOLDER},on:{change:t.hardwareChange},model:{value:t.formData.os,callback:function(e){t.$set(t.formData,"os",e)},expression:"formData.os"}},[a("el-option",{attrs:{label:t.i18n.compatibility.SEARCH_ALL,value:"all"}}),t._v(" "),t._l(t.hardwareOSOptions,(function(t,e){return a("el-option",{key:e,attrs:{value:t}})}))],2),t._v(" "),a("el-select",{staticClass:"mobile-select",attrs:{placeholder:t.i18n.compatibility.OS},on:{change:t.hardwareChange},model:{value:t.formData.os,callback:function(e){t.$set(t.formData,"os",e)},expression:"formData.os"}},[a("el-option",{attrs:{label:t.i18n.compatibility.SEARCH_ALL,value:"all"}}),t._v(" "),t._l(t.hardwareOSOptions,(function(t,e){return a("el-option",{key:e,attrs:{value:t}})}))],2)],1),t._v(" "),a("el-form-item",{attrs:{label:t.i18n.compatibility.ARCHITECTURE}},[a("el-select",{staticClass:"pc-select",attrs:{placeholder:t.i18n.compatibility.SELECT_PLACEHOLDER},on:{change:t.hardwareChange},model:{value:t.formData.architecture,callback:function(e){t.$set(t.formData,"architecture",e)},expression:"formData.architecture"}},[a("el-option",{attrs:{label:t.i18n.compatibility.SEARCH_ALL,value:"all"}}),t._v(" "),t._l(t.hardwareArchitectureOptions,(function(t,e){return a("el-option",{key:e,attrs:{value:t}})}))],2),t._v(" "),a("el-select",{staticClass:"mobile-select",attrs:{placeholder:t.i18n.compatibility.ARCHITECTURE},on:{change:t.hardwareChange},model:{value:t.formData.architecture,callback:function(e){t.$set(t.formData,"architecture",e)},expression:"formData.architecture"}},[a("el-option",{attrs:{label:t.i18n.compatibility.SEARCH_ALL,value:"all"}}),t._v(" "),t._l(t.hardwareArchitectureOptions,(function(t,e){return a("el-option",{key:e,attrs:{value:t}})}))],2)],1),t._v(" "),a("el-form-item",{staticClass:"search-box",attrs:{label:t.i18n.compatibility.SEARCH_LABEL}},[a("el-input",{staticClass:"pc-search",attrs:{placeholder:t.i18n.compatibility.HARDWARE_SEARCH_PLACEHOLDER},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.hardwareChange()}},model:{value:t.formData.keyword,callback:function(e){t.$set(t.formData,"keyword",e)},expression:"formData.keyword"}},[a("i",{staticClass:"icon-search",attrs:{slot:"suffix"},on:{click:function(e){return t.hardwareChange()}},slot:"suffix"})]),t._v(" "),a("el-input",{staticClass:"mobile-search",attrs:{placeholder:t.i18n.compatibility.SEARCH_LABEL},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.hardwareChange()}},model:{value:t.formData.keyword,callback:function(e){t.$set(t.formData,"keyword",e)},expression:"formData.keyword"}},[a("i",{staticClass:"icon-search",attrs:{slot:"suffix"},on:{click:function(e){return t.hardwareChange()}},slot:"suffix"})])],1)],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading.fullscreen",value:t.tableLoading,expression:"tableLoading",modifiers:{fullscreen:!0}}],staticClass:"table-pc",staticStyle:{width:"100%"},attrs:{data:t.hardwareTableData,stripe:""}},[a("el-table-column",{attrs:{prop:"hardwareFactory",label:t.i18n.compatibility.HARDWARE_TABLE_COLUMN.VENDOR,width:"110"}}),t._v(" "),a("el-table-column",{attrs:{prop:"hardwareModel",label:t.i18n.compatibility.HARDWARE_TABLE_COLUMN.MODEL,width:"230"}}),t._v(" "),a("el-table-column",{attrs:{prop:"osVersion",label:t.i18n.compatibility.HARDWARE_TABLE_COLUMN.OS,width:"240"}}),t._v(" "),a("el-table-column",{attrs:{prop:"date",label:t.i18n.compatibility.HARDWARE_TABLE_COLUMN.DATE,width:"190"}}),t._v(" "),a("el-table-column",{attrs:{prop:"productInformation",label:t.i18n.compatibility.HARDWARE_TABLE_COLUMN.COMPATIBILITY_CONFIGURATION,width:"230"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("a",{staticClass:"table-link",on:{click:function(a){return t.go(e.row.id)}}},[t._v(t._s(t.i18n.compatibility.HARDWARE_TABLE_COLUMN.COMPATIBILITY_CONFIGURATION2))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"friendlyLink",label:t.i18n.compatibility.HARDWARE_TABLE_COLUMN.REFERRENCE,width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("a",{staticClass:"table-link",attrs:{target:"_blank",href:e.row.friendlyLink}},[t._v(t._s(t.i18n.compatibility.LINK))])]}}])})],1),t._v(" "),a("ul",{directives:[{name:"loading",rawName:"v-loading.fullscreen",value:t.tableLoading,expression:"tableLoading",modifiers:{fullscreen:!0}}],staticClass:"table-mobile"},t._l(t.hardwareTableData,(function(e,i){return a("li",{key:i,staticClass:"item"},[a("ul",[a("li",[a("span",[t._v(t._s(t.i18n.compatibility.HARDWARE_TABLE_COLUMN.VENDOR)+":")]),t._v("\n                                "+t._s(e.hardwareFactory)+"\n                            ")]),t._v(" "),a("li",[a("span",[t._v(t._s(t.i18n.compatibility.HARDWARE_TABLE_COLUMN.MODEL)+":")]),t._v("\n                                "+t._s(e.hardwareModel)+"\n                            ")]),t._v(" "),a("li",[a("span",[t._v(t._s(t.i18n.compatibility.HARDWARE_TABLE_COLUMN.OS)+":")]),t._v("\n                                "+t._s(e.osVersion)+"\n                            ")]),t._v(" "),a("li",[a("span",[t._v(t._s(t.i18n.compatibility.HARDWARE_TABLE_COLUMN.DATE)+":")]),t._v("\n                                "+t._s(e.date)+"\n                            ")]),t._v(" "),a("li",[a("span",[t._v(t._s(t.i18n.compatibility.HARDWARE_TABLE_COLUMN.COMPATIBILITY_CONFIGURATION)+":")]),t._v(" "),a("a",{staticClass:"table-link",on:{click:function(a){return t.go(e.id)}}},[t._v(t._s(t.i18n.compatibility.HARDWARE_TABLE_COLUMN.COMPATIBILITY_CONFIGURATION2))])]),t._v(" "),a("li",[a("span",[t._v(t._s(t.i18n.compatibility.HARDWARE_TABLE_COLUMN.REFERRENCE)+":")]),t._v(" "),a("a",{staticClass:"table-link",attrs:{target:"_blank",href:e.friendlyLink}},[t._v(t._s(t.i18n.compatibility.LINK))])])])])})),0)],1),t._v(" "),a("el-tab-pane",{attrs:{label:t.i18n.compatibility.SOFTWARE,name:"software"}},[a("el-form",{staticClass:"compatibility-filter",attrs:{inline:!0,model:t.formData}},[a("el-form-item",{attrs:{label:t.i18n.compatibility.ARCHITECTURE}},[a("el-select",{staticClass:"pc-select",staticStyle:{width:"150px"},attrs:{placeholder:t.i18n.compatibility.SELECT_PLACEHOLDER},on:{change:t.softwareChange},model:{value:t.formData.architecture,callback:function(e){t.$set(t.formData,"architecture",e)},expression:"formData.architecture"}},[a("el-option",{attrs:{label:t.i18n.compatibility.SEARCH_ALL,value:""}}),t._v(" "),t._l(t.softwareOptionsArch,(function(t,e){return a("el-option",{key:e,attrs:{value:t}})}))],2),t._v(" "),a("el-select",{staticClass:"mobile-select",attrs:{placeholder:t.i18n.compatibility.ARCHITECTURE},on:{change:t.softwareChange},model:{value:t.formData.architecture,callback:function(e){t.$set(t.formData,"architecture",e)},expression:"formData.architecture"}},[a("el-option",{attrs:{label:t.i18n.compatibility.SEARCH_ALL,value:""}}),t._v(" "),t._l(t.softwareOptionsArch,(function(t,e){return a("el-option",{key:e,attrs:{value:t}})}))],2)],1),t._v(" "),a("el-form-item",{attrs:{label:t.i18n.compatibility.SOFTWARETYPE}},[a("el-select",{staticClass:"pc-select",staticStyle:{width:"180px"},attrs:{placeholder:t.i18n.compatibility.SELECT_PLACEHOLDER},on:{change:t.softwareChange},model:{value:t.formData.type,callback:function(e){t.$set(t.formData,"type",e)},expression:"formData.type"}},[a("el-option",{attrs:{label:t.i18n.compatibility.SEARCH_ALL,value:""}}),t._v(" "),t._l(t.softwareOptionsType,(function(t,e){return a("el-option",{key:e,attrs:{value:t}})}))],2),t._v(" "),a("el-select",{staticClass:"mobile-select",attrs:{placeholder:t.i18n.compatibility.SOFTWARETYPE},on:{change:t.softwareChange},model:{value:t.formData.type,callback:function(e){t.$set(t.formData,"type",e)},expression:"formData.type"}},[a("el-option",{attrs:{label:t.i18n.compatibility.SEARCH_ALL,value:""}}),t._v(" "),t._l(t.softwareOptionsType,(function(t,e){return a("el-option",{key:e,attrs:{value:t}})}))],2)],1),t._v(" "),a("el-form-item",{attrs:{label:t.i18n.compatibility.ADAPTIVE}},[a("el-select",{staticClass:"pc-select",staticStyle:{width:"180px"},attrs:{placeholder:t.i18n.compatibility.SELECT_PLACEHOLDER},on:{change:t.softwareChange},model:{value:t.formData.os,callback:function(e){t.$set(t.formData,"os",e)},expression:"formData.os"}},[a("el-option",{attrs:{label:t.i18n.compatibility.SEARCH_ALL,value:""}}),t._v(" "),t._l(t.softwareOptionsOs,(function(t,e){return a("el-option",{key:e,attrs:{value:t}})}))],2),t._v(" "),a("el-select",{staticClass:"mobile-select",attrs:{placeholder:t.i18n.compatibility.ADAPTIVE},on:{change:t.softwareChange},model:{value:t.formData.os,callback:function(e){t.$set(t.formData,"os",e)},expression:"formData.os"}},[a("el-option",{attrs:{label:t.i18n.compatibility.SEARCH_ALL,value:""}}),t._v(" "),t._l(t.softwareOptionsOs,(function(t,e){return a("el-option",{key:e,attrs:{value:t}})}))],2)],1),t._v(" "),a("el-form-item",{staticClass:"search-box",attrs:{label:t.i18n.compatibility.SEARCH_LABEL}},[a("el-input",{staticClass:"pc-search",attrs:{placeholder:t.i18n.compatibility.SOFTWARE_SEARCH_PLACEHOLDER},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.softwareChange()}},model:{value:t.formData.keyword,callback:function(e){t.$set(t.formData,"keyword",e)},expression:"formData.keyword"}},[a("i",{staticClass:"icon-search",attrs:{slot:"suffix"},on:{click:function(e){return t.softwareChange()}},slot:"suffix"})]),t._v(" "),a("el-input",{staticClass:"mobile-search",attrs:{placeholder:t.i18n.compatibility.SEARCH_LABEL},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.softwareChange()}},model:{value:t.formData.keyword,callback:function(e){t.$set(t.formData,"keyword",e)},expression:"formData.keyword"}},[a("i",{staticClass:"icon-search",attrs:{slot:"suffix"},on:{click:function(e){return t.softwareChange()}},slot:"suffix"})])],1)],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading.fullscreen",value:t.tableLoading,expression:"tableLoading",modifiers:{fullscreen:!0}}],staticClass:"table-pc",staticStyle:{width:"100%"},attrs:{data:t.softwareTableData,stripe:""}},[a("el-table-column",{attrs:{prop:"arch",label:t.i18n.compatibility.SOFTWARE_TABLE_COLUMN.ARCHITECTURE,width:"110"}}),t._v(" "),a("el-table-column",{attrs:{prop:"softwareName",label:t.i18n.compatibility.SOFTWARE_TABLE_COLUMN.SOFTWARENAME,width:"200"}}),t._v(" "),a("el-table-column",{attrs:{prop:"os",label:t.i18n.compatibility.SOFTWARE_TABLE_COLUMN.SYSTEM,width:"150"}}),t._v(" "),a("el-table-column",{attrs:{prop:"version",label:t.i18n.compatibility.SOFTWARE_TABLE_COLUMN.VERSION,width:"110"}}),t._v(" "),a("el-table-column",{attrs:{prop:"type",label:t.i18n.compatibility.SOFTWARE_TABLE_COLUMN.SOFTWARETYPE,width:"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"property",label:t.i18n.compatibility.SOFTWARE_TABLE_COLUMN.PROPERTIES,width:"150"}}),t._v(" "),a("el-table-column",{attrs:{prop:"downloadLink",label:t.i18n.compatibility.SOFTWARE_TABLE_COLUMN.DOWNLOADLINK,width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("a",{staticClass:"table-link",attrs:{target:"_blank",href:e.row.downloadLink}},[t._v(t._s(t.i18n.compatibility.LINK))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"license",label:t.i18n.compatibility.SOFTWARE_TABLE_COLUMN.PUBLICKLICENSE,width:"180"}})],1),t._v(" "),a("ul",{directives:[{name:"loading",rawName:"v-loading.fullscreen",value:t.tableLoading,expression:"tableLoading",modifiers:{fullscreen:!0}}],staticClass:"table-mobile"},[t.softwareTableData?t._e():a("div",{staticClass:"wait"},[t._v("暂无数据")]),t._v(" "),t._l(t.softwareTableData,(function(e,i){return a("li",{key:i,staticClass:"item"},[a("ul",[a("li",[a("span",[t._v(t._s(t.i18n.compatibility.SOFTWARE_TABLE_COLUMN.ARCHITECTURE)+":")]),t._v("\n                                "+t._s(e.arch)+"\n                            ")]),t._v(" "),a("li",[a("span",[t._v(t._s(t.i18n.compatibility.SOFTWARE_TABLE_COLUMN.SOFTWARETYPE)+":")]),t._v("\n                                "+t._s(e.type)+"\n                            ")]),t._v(" "),a("li",[a("span",[t._v(t._s(t.i18n.compatibility.SOFTWARE_TABLE_COLUMN.SOFTWARENAME)+":")]),t._v("\n                                "+t._s(e.softwareName)+"\n                            ")]),t._v(" "),a("li",[a("span",[t._v(t._s(t.i18n.compatibility.SOFTWARE_TABLE_COLUMN.VERSION)+":")]),t._v("\n                                "+t._s(e.version)+"\n                            ")]),t._v(" "),a("li",[a("span",[t._v(t._s(t.i18n.compatibility.SOFTWARE_TABLE_COLUMN.PROPERTIES)+":")]),t._v("\n                                "+t._s(e.property)+"\n                            ")]),t._v(" "),a("li",[a("span",[t._v(t._s(t.i18n.compatibility.SOFTWARE_TABLE_COLUMN.DOWNLOADLINK)+":")]),t._v(" "),a("a",{staticClass:"table-link",attrs:{target:"_blank",href:e.downloadLink}},[t._v(t._s(t.i18n.compatibility.LINK))])]),t._v(" "),a("li",[a("span",[t._v(t._s(t.i18n.compatibility.SOFTWARE_TABLE_COLUMN.SYSTEM)+":")]),t._v("\n                                "+t._s(e.os)+"\n                            ")]),t._v(" "),a("li",[a("span",[t._v(t._s(t.i18n.compatibility.SOFTWARE_TABLE_COLUMN.PUBLICKLICENSE)+":")]),t._v("\n                                "+t._s(e.license)+"\n                            ")])])])}))],2)],1)],1),t._v(" "),a("el-pagination",{staticClass:"compatibility-pagination",attrs:{background:"","page-size":t.formData.pageSize,"current-page":t.formData.page,layout:t.paginationLayout,total:t.total,"hide-on-single-page":t.pageValue},on:{"current-change":t.pageChange}}),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:"software"!==t.tabActiveName,expression:"tabActiveName!=='software'"}],staticClass:"bottomBanner"},[a("div",{staticClass:"bottomBanner-content"},[t._v("\n                "+t._s(t.i18n.compatibility.HARDWARE_OEC_DETAIL.TEXT)+"\n                "),a("a",{staticClass:"bottom-link",on:{click:function(e){return t.goToHareware()}}},[t._v("\n                    "+t._s(t.i18n.compatibility.HARDWARE_OEC_DETAIL.TITLE)+".\n                ")])])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:"software"===t.tabActiveName,expression:"tabActiveName==='software'"}],staticClass:"bottomBanner"},[a("div",{staticClass:"bottomBanner-content"},[t._v("\n                "+t._s(t.i18n.compatibility.SOFTWARE_OEC_DETAIL.TEXT)+"\n                "),a("a",{staticClass:"bottom-link",on:{click:function(e){return t.goToSoftware()}}},[t._v("\n                    "+t._s(t.i18n.compatibility.SOFTWARE_OEC_DETAIL.TITLE)+".\n                ")])])])],1)],1)}),[],!1,null,"0bbddd14",null);e.default=u.exports},546:function(t,e,a){},547:function(t,e,a){"use strict";var i=a(184),n=(a(303),a(552)),o=a.n(n),r=a(0),l={postJson:function(t){return function(t){var e,a,n,l=o.a.create({baseURL:"/api"+(t.otherBaseUrl||"")||""});l.defaults.headers.post["Content-Type"]="application/json",t.headLanguage&&(l.defaults.headers.common["Accept-Language"]=t.headLanguage),t.url=(e=t.url,a="rnd",n=Math.random(),e?(e+=e.indexOf("?")>0?"&":"?",e+=a+"="+n):e);var s=t.data&&("object"===Object(i.a)(t.data)?JSON.stringify(t.data):t.data),c={success:function(e){var a="string"==typeof e.data?JSON.parse(e.data):e.data;a?t.success(a):(new r.default).$message.error("开小差~请稍后重试。")}};return l({headers:t.notAuthorization?{}:{Authorization:"Basic b3BlbmV1bGVyc2VydmVyOm9wZW5ldWxlcnNlcnZlckAxMjM0"},method:t.type||"post",url:t.url,data:s,params:t.params,responseType:"json"}).then(c.success).catch(t.error)}(t)}};e.a=l},548:function(t,e,a){"use strict";a(546)},549:function(t,e,a){"use strict";a.r(e);var i={data:function(){return{}},props:["insideName","outsideName","pcSrc","mobileSrc"]},n=(a(548),a(42)),o=Object(n.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"common-banner"},[a("div",{staticClass:"banner"},[a("img",{staticClass:"common-img",attrs:{src:t.pcSrc}}),t._v(" "),a("span",{staticClass:"inside"},[t._v(t._s(t.insideName))]),t._v(" "),a("span",{class:["outside",t.$isCn?"font-xihjw":"font-hwmedium"]},[t._v(t._s(t.outsideName))]),t._v(" "),t._t("pc-slot")],2),t._v(" "),a("div",{staticClass:"banner-mobile"},[a("h3",[t._v(t._s(t.outsideName))]),t._v(" "),a("img",{staticClass:"common-img",attrs:{src:t.mobileSrc}}),t._v(" "),t._t("mobile-slot")],2)])}),[],!1,null,"16c1b74a",null);e.default=o.exports},652:function(t,e,a){"use strict";a.d(e,"g",(function(){return n})),a.d(e,"d",(function(){return o})),a.d(e,"e",(function(){return r})),a.d(e,"c",(function(){return l})),a.d(e,"h",(function(){return s})),a.d(e,"f",(function(){return c})),a.d(e,"b",(function(){return p})),a.d(e,"a",(function(){return u})),a.d(e,"i",(function(){return m})),a.d(e,"j",(function(){return _}));a(15),a(116);var i=a(547),n=function(t){var e=t.keyword,a=t.os,n=t.architecture,o=t.page,r=t.pageSize,l=t.lang;return new Promise((function(t,s){i.a.postJson({otherBaseUrl:"-cve",url:"/cve-security-notice-server/hardwarecomp/findAll",type:"post",data:{keyword:e,os:"all"===a?"":a,architecture:"all"===n?"":n,pages:{page:o,size:r},lang:l},success:function(e){var a={totalRecords:e.result.totalCount,list:e.result.hardwareCompList};e?t(a):s(e)},error:function(t){s(t)}})}))},o=function(t){var e=t.keyword,a=t.os,n=t.architecture,o=t.page,r=t.pageSize,l=t.lang;return new Promise((function(t,s){i.a.postJson({otherBaseUrl:"-cve",url:"/cve-security-notice-server/drivercomp/findAll",type:"post",data:{keyword:e,os:"all"===a?"":a,architecture:"all"===n?"":n,pages:{page:o,size:r},lang:l},success:function(e){var a={totalRecords:e.result.totalCount,list:e.result.driverCompList};e?t(a):s(e)},error:function(t){s(t)}})}))},r=function(t){var e=t.lang;return new Promise((function(t,a){i.a.postJson({otherBaseUrl:"-cve",url:"/cve-security-notice-server/drivercomp/getOS",type:"get",params:{lang:e},success:function(e){e?t(e.result):a(e)},error:function(t){a(t)}})}))},l=function(t){var e=t.lang;return new Promise((function(t,a){i.a.postJson({otherBaseUrl:"-cve",url:"/cve-security-notice-server/drivercomp/getArchitecture",type:"get",params:{lang:e},success:function(e){e?t(e.result):a(e)},error:function(t){a(t)}})}))},s=function(t){var e=t.lang;return new Promise((function(t,a){i.a.postJson({otherBaseUrl:"-cve",url:"/cve-security-notice-server/hardwarecomp/getOS",type:"get",params:{lang:e},success:function(e){e?t(e.result):a(e)},error:function(t){a(t)}})}))},c=function(t){var e=t.lang;return new Promise((function(t,a){i.a.postJson({otherBaseUrl:"-cve",url:"/cve-security-notice-server/hardwarecomp/getArchitecture",type:"get",params:{lang:e},success:function(e){e?t(e.result):a(e)},error:function(t){a(t)}})}))},p=function(t){var e=t.id;return new Promise((function(t,a){i.a.postJson({otherBaseUrl:"-cve",url:"/cve-security-notice-server/hardwarecomp/getOne",type:"get",params:{id:e},success:function(e){e?t(e.result):a(e)},error:function(t){a(t)}})}))},u=function(t){var e=t.id;return new Promise((function(t,a){i.a.postJson({otherBaseUrl:"-cve",url:"/cve-security-notice-server/hardwarecomp/getAdapterList",type:"get",params:{hardwareId:e},success:function(e){e?t(e.result):a(e)},error:function(t){a(t)}})}))},m=function(t){var e=t.keyword,a=t.os,n=t.architecture,o=t.page,r=t.type;t.lang;return new Promise((function(t,l){a=a?"&os=".concat(a):"",n=n?"&arch=".concat(n):"",r=r?"&type=".concat(r):"",e=e?"&keyword=".concat(e):"",i.a.postJson({url:"https://api.compass-ci.openeuler.org:20003/compat_software_info?page_size=10&page_num=".concat(o).concat(r).concat(n).concat(a).concat(e),type:"get",notAuthorization:!0,success:function(e){e?t(e):l(e)},error:function(t){l(t)}})}))},_=function(){return new Promise((function(t,e){i.a.postJson({url:"https://api.compass-ci.openeuler.org:20003/query_compat_software",type:"get",notAuthorization:!0,success:function(a){a?t(a):e(a)},error:function(t){e(t)}})}))}},743:function(t,e,a){}}]);