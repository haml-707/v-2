(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{1411:function(t,i,n){"use strict";n(739)},1412:function(t,i,n){"use strict";n(740)},1484:function(t,i,n){"use strict";n.r(i);n(15),n(23),n(56),n(57),n(187),n(185),n(186),n(78),n(554);var s=n(547),e={name:"maillist",data:function(){return{inPC:!0,inEn:!0,list:null,tableLoading:!1}},mounted:function(){var t=this;new Promise((function(t,i){s.a.postJson({url:"/mail/list",type:"get",success:function(n){n?t(n):i(n)},error:function(t){i(t)}})})).then((function(i){t.list=i.entries,t.list.forEach((function(t){t.archive="Archive"})),setTimeout((function(){t.fixPositionOfId()}),1e3)})).catch((function(i){t.$message.error(t.i18n.community.MAILING_LIST.MAIL_ERROR)}))},methods:{golink:function(t){t&&!t.includes("http")?this.$router.push({path:this.resolvePath(t)}):t.includes("http")&&window.open(t)},go:function(t){window.open("https://mailweb.openeuler.org/hyperkitty/list/"+t.toLowerCase()+"@openeuler.org/")},userSubscribe:function(t){window.open("https://mailweb.openeuler.org/postorius/lists/"+t+"/")},fixPositionOfId:function(){var t=window.location.href.split("#")[1];if(t){var i=document.getElementById(t);if(i){var n=i.parentNode.parentNode.parentNode.parentNode.offsetTop+1300;window.scrollTo({top:n,behavior:"smooth"})}}}}},a=(n(1411),n(1412),n(42)),l=Object(a.a)(e,(function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen",value:t.tableLoading,expression:"tableLoading",modifiers:{fullscreen:!0}}],staticClass:"mail-list"},[n("common-banner",{attrs:{"pc-src":"/img/community/maillist/mail-banner.png","mobile-src":"/img/community/maillist/mail-banner.png","inside-name":"COMMUNITY","outside-name":t.i18n.community.MAILING_LIST.TITLE}}),t._v(" "),t.isShowH5?n("div",{staticClass:"maillist is-h5"},t._l(t.i18n.community.MAILING_LIST.GUIDE_CONTENT,(function(i,s){return n("div",{key:s,staticClass:"mail-guide"},[n("div",{staticClass:"step-left"},[n("div",{staticClass:"mail-box"},[n("div",{class:["step-left-box","ru"===t.$lang?"ru-box":""]},[n("div",{staticClass:"step-top"},[n("span",{class:"en"===t.$lang?"en-font":""},[t._v(t._s(i.LEFT.LEFT_CIRCLE))])]),t._v(" "),n("div",{class:["inner-box","en"===t.$lang?"en-box"+s:""]},[n("img",{attrs:{src:i.LEFT.LEFT_IMG,alt:""}}),t._v(" "),n("p",[t._v("\n                                "+t._s(i.LEFT.LEFT_INFO)+"\n                            ")])])])])]),t._v(" "),n("div",{staticClass:"step-right"},[n("div",{staticClass:"mail-box"},[n("div",{staticClass:"step-top"},[n("span",{class:"en"===t.$lang?"en-font":""},[t._v(t._s(i.RIGHT.RIGHT_CIRCLE))])]),t._v(" "),n("div",{class:["step-right-box","en"===t.$lang?"en-box"+s:""]},[n("div",{class:["inner-box","en"===t.$lang?"en-box"+s:""]},[n("img",{attrs:{src:i.RIGHT.LEFT_IMG,alt:""}}),t._v(" "),n("p",[t._v("\n                                "+t._s(i.RIGHT.RIGHT_INFO)),n("span",{staticClass:"link-color",on:{click:function(n){return t.golink(i.RIGHT.LINK)}}},[t._v(t._s(i.RIGHT.DO_THIS))])])])])])])])})),0):n("div",{directives:[{name:"fade",rawName:"v-fade"}],class:["maillist","is-pc","en"===t.$lang?"en":""]},[n("div",{class:["maillist-divider-mail","is-pc"]},[n("div",{staticClass:"maillist-icon-comm"})]),t._v(" "),t._l(t.i18n.community.MAILING_LIST.GUIDE_CONTENT,(function(i,s){return n("div",{key:s,staticClass:"mail-guide"},[n("div",{staticClass:"step-left"},[n("div",{staticClass:"mail-box"},[n("div",{class:["step-left-box","fade-in","en"===t.$lang?"en-box"+s:"","ru"===t.$lang?"ru-box"+s:""]},[n("div",{staticClass:"inner-box"},[n("img",{attrs:{src:i.LEFT.LEFT_IMG,alt:""}}),t._v(" "),n("p",["zh"!==t.$lang?n("span",{staticClass:"en-title"},[t._v(t._s(i.LEFT.LEFT_CIRCLE)),n("br")]):t._e(),t._v("\n                                "+t._s(i.LEFT.LEFT_INFO)+"\n                            ")])])]),t._v(" "),n("div",{staticClass:"step-left-num"},["zh"!==t.$lang?n("span",[t._v(t._s(i.LEFT.INDEX))]):n("span",[t._v(t._s(i.LEFT.LEFT_CIRCLE))])]),t._v(" "),n("div",{staticClass:"step-line"})])]),t._v(" "),n("div",{staticClass:"step-right"},[n("div",{staticClass:"mail-box"},[n("div",{staticClass:"step-line"}),t._v(" "),n("div",{staticClass:"step-right-num"},["zh"!==t.$lang?n("span",[t._v(t._s(i.RIGHT.INDEX))]):n("span",[t._v(t._s(i.RIGHT.RIGHT_CIRCLE))])]),t._v(" "),n("div",{class:["step-right-box","fade-in","zh"!==t.$lang?"en-box"+s:""]},[n("div",{staticClass:"inner-box"},[n("img",{attrs:{src:i.RIGHT.LEFT_IMG,alt:""}}),t._v(" "),n("p",["zh"!==t.$lang?n("span",{staticClass:"en-title"},[t._v(t._s(i.RIGHT.RIGHT_CIRCLE)),n("br")]):t._e(),t._v("\n                                "+t._s(i.RIGHT.RIGHT_INFO)),n("span",{staticClass:"link-color",on:{click:function(n){return t.golink(i.RIGHT.LINK)}}},[t._v(t._s(i.RIGHT.DO_THIS))])])])])])])])}))],2),t._v(" "),t.isShowH5?n("div",{staticClass:"mail-table is-h5"},[n("ul",{staticClass:"mail-list-h5"},[n("li",{staticClass:"heaed"},[n("ul",[n("li",[t._v(t._s(t.i18n.community.MAILING_LIST.TABLE.NAME_H5))]),t._v(" "),n("li",[t._v(t._s(t.i18n.community.MAILING_LIST.TABLE.ARCHIVE_H5))]),t._v(" "),n("li",[t._v(t._s(t.i18n.community.MAILING_LIST.TABLE.DESCRIPTION))])])]),t._v(" "),t._l(t.list,(function(i,s){return n("li",{key:s,staticClass:"item"},[n("ul",[n("li",{staticClass:"color-blue"},[n("span",[t._v("\n                            "+t._s(i.display_name)+"\n                        ")])]),t._v(" "),n("li",{staticClass:"color-blue"},[n("span",{on:{click:function(n){return t.go(i.display_name)}}},[t._v("\n                            "+t._s(i.archive)+"\n                        ")])]),t._v(" "),n("li",[n("span",[t._v("\n                            "+t._s(i.description)+"\n                        ")])])])])}))],2)]):n("div",{staticClass:"mail-table is-pc"},[n("el-table",{attrs:{data:t.list,stripe:""}},[n("el-table-column",{attrs:{prop:"display_name",label:t.i18n.community.MAILING_LIST.TABLE.NAME,width:"180"},scopedSlots:t._u([{key:"default",fn:function(i){return[n("a",{ref:"listName",staticClass:"list-name",on:{click:function(n){return t.userSubscribe(i.row.list_id)}}},[n("p",{attrs:{id:i.row.display_name}},[t._v(t._s(i.row.display_name))])])]}}],null,!1,69104107)}),t._v(" "),n("el-table-column",{attrs:{prop:"fqdn_listname",label:t.i18n.community.MAILING_LIST.TABLE.EMAIL_ADDRESS,width:"260"}}),t._v(" "),n("el-table-column",{attrs:{prop:"archive",label:t.i18n.community.MAILING_LIST.TABLE.ARCHIVE,width:"120"},scopedSlots:t._u([{key:"default",fn:function(i){return[n("a",{staticClass:"arch-link",attrs:{href:"https://mailweb.openeuler.org/hyperkitty/list/"+i.row.display_name.toLowerCase()+"@openeuler.org/",target:"_blank"}},[n("p",[t._v(t._s(i.row.archive))])])]}}],null,!1,1123006932)}),t._v(" "),n("el-table-column",{attrs:{prop:"description",label:t.i18n.community.MAILING_LIST.TABLE.DESCRIPTION}})],1)],1)],1)}),[],!1,null,"ffade43c",null);i.default=l.exports},547:function(t,i,n){"use strict";var s=n(184),e=(n(303),n(552)),a=n.n(e),l=n(0),r={postJson:function(t){return function(t){var i,n,e,r=a.a.create({baseURL:"/api"+(t.otherBaseUrl||"")||""});r.defaults.headers.post["Content-Type"]="application/json",t.headLanguage&&(r.defaults.headers.common["Accept-Language"]=t.headLanguage),t.url=(i=t.url,n="rnd",e=Math.random(),i?(i+=i.indexOf("?")>0?"&":"?",i+=n+"="+e):i);var o=t.data&&("object"===Object(s.a)(t.data)?JSON.stringify(t.data):t.data),c={success:function(i){var n="string"==typeof i.data?JSON.parse(i.data):i.data;n?t.success(n):(new l.default).$message.error("开小差~请稍后重试。")}};return r({headers:t.notAuthorization?{}:{Authorization:"Basic b3BlbmV1bGVyc2VydmVyOm9wZW5ldWxlcnNlcnZlckAxMjM0"},method:t.type||"post",url:t.url,data:o,params:t.params,responseType:"json"}).then(c.success).catch(t.error)}(t)}};i.a=r},554:function(t,i,n){"use strict";var s=n(304),e=n(308),a=n(10),l=n(32),r=n(555),o=n(307),c=n(28),u=n(22),p=n(80),d=n(305),v=n(119),_=n(309),m=n(2),f=_.UNSUPPORTED_Y,h=[].push,I=Math.min;s("split",(function(t,i,n){var s;return s="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var s=u(l(this)),a=void 0===n?4294967295:n>>>0;if(0===a)return[];if(void 0===t)return[s];if(!e(t))return i.call(s,t,a);for(var r,o,c,p=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),_=0,m=new RegExp(t.source,d+"g");(r=v.call(m,s))&&!((o=m.lastIndex)>_&&(p.push(s.slice(_,r.index)),r.length>1&&r.index<s.length&&h.apply(p,r.slice(1)),c=r[0].length,_=o,p.length>=a));)m.lastIndex===r.index&&m.lastIndex++;return _===s.length?!c&&m.test("")||p.push(""):p.push(s.slice(_)),p.length>a?p.slice(0,a):p}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:i.call(this,t,n)}:i,[function(i,n){var e=l(this),a=null==i?void 0:p(i,t);return a?a.call(i,e,n):s.call(u(e),i,n)},function(t,e){var l=a(this),p=u(t),v=n(s,l,p,e,s!==i);if(v.done)return v.value;var _=r(l,RegExp),m=l.unicode,h=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(f?"g":"y"),g=new _(f?"^(?:"+l.source+")":l,h),T=void 0===e?4294967295:e>>>0;if(0===T)return[];if(0===p.length)return null===d(g,p)?[p]:[];for(var b=0,L=0,C=[];L<p.length;){g.lastIndex=f?0:L;var E,y=d(g,f?p.slice(L):p);if(null===y||(E=I(c(g.lastIndex+(f?L:0)),p.length))===b)L=o(p,L,m);else{if(C.push(p.slice(b,L)),C.length===T)return C;for(var x=1;x<=y.length-1;x++)if(C.push(y[x]),C.length===T)return C;L=b=E}}return C.push(p.slice(b)),C}]}),!!m((function(){var t=/(?:)/,i=t.exec;t.exec=function(){return i.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]})),f)},555:function(t,i,n){var s=n(10),e=n(310),a=n(4)("species");t.exports=function(t,i){var n,l=s(t).constructor;return void 0===l||null==(n=s(l)[a])?i:e(n)}},739:function(t,i,n){},740:function(t,i,n){}}]);