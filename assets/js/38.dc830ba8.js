(window.webpackJsonp=window.webpackJsonp||[]).push([[38,88,124,126],{1454:function(t,e,i){"use strict";i(778)},1522:function(t,e,i){"use strict";i.r(e);i(185),i(186),i(118);var a=i(608),s=i(565),n=i(609),r={data:function(){return{showTab:"twenty-five",showBtn:"forenoon",agendaData:{},dateArr:[],agendaTableData:[],isShowcarousel:!1,isShowBtn:!0,mobilePadding:!1,hostUnitObj:{},coOrgObj:{},foundationObj:{},undertakerObj:{},lecturerObj:{},lecturerList:[],mediaObj:{},reviewObj:{},flag:!0,dataObj:{},navTitleScroll:[620,1650,3250,6450],activeIndex:-1,isShowNav:!1,isShowQrcode:!1}},mounted:function(){this.dataObj=this.i18n.interaction.SUMMIT.SUMMIT_HOME_DATA,this.agendaData=this.dataObj.AGENDA,this.dateArr=this.agendaData.DATE,this.mediaObj=this.dataObj.MEDIA,this.hostUnitObj=this.dataObj.HOST,this.undertakerObj=this.dataObj.UNDERTAKER,this.coOrgObj=this.dataObj.CO_ORGANIZER,this.foundationObj=this.dataObj.FOUNDATION,this.agendaTableData=this.agendaData.FORENOON_AGENDA_25,this.lecturerObj=this.dataObj.LECTURER,this.lecturerList=this.lecturerObj.LECTURERLIST,this.reviewObj=this.dataObj.REVIEW,document.body.clientWidth<400&&(this.mobilePadding=!0),window.addEventListener("scroll",this.scroTop),this.liveData=this.i18n.interaction.SUMMIT.SUMMITLIVE},methods:{go:function(t){if(!t)return!1;t&&t.includes("http")?window.open(t):t&&"qrcode"===t?this.isShowQrcode=!this.isShowQrcode:this.$router.push("/"+this.$lang+t)},showAll:function(){this.flag=!this.flag},tabClick:function(t){if("twenty-four"===t.name)this.isShowcarousel=!1,this.agendaTableData=this.agendaData.AFTERNOON_AGENDA_24,this.isShowBtn=!1;else{if("twenty-five"!==t.name)return!1;this.isShowcarousel=!1,this.isShowBtn=!0,this.agendaTableData=this.agendaData.FORENOON_AGENDA_25,this.showBtn="forenoon"}},changeTime:function(t){if("forenoon"===t)this.agendaTableData=this.agendaData.FORENOON_AGENDA_25,this.isShowcarousel=!1;else{if("afternoon"!==t)return!1;this.isShowcarousel=!0}},scroTop:function(t){var e=document.body.scrollTop||document.documentElement.scrollTop;if(this.isShowNav=!(e<500),e>550&&e<1e3)this.activeIndex=0;else if(e>1620&&e<2020)this.activeIndex=1;else if(e>2820&&e<3720)this.activeIndex=2;else if(e>5920&&e<6920)this.activeIndex=3;else{if(!(e>8720))return!1;this.activeIndex=4}},objectSpanMethod:function(t){t.row,t.column;var e=t.rowIndex,i=t.columnIndex;return"twenty-four"===this.showTab&&(0!==i&&1!==i||1!==e?void 0:{rowspan:4,colspan:1})}},components:{carousel:a.default,titlenav:s.default,liveroom:n.default},destroyed:function(){window.removeEventListener("scroll",this.scroTop)}},l=(i(1454),i(42)),o=Object(l.a)(r,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:["summit",t.mobilePadding?"mobile-padding":""]},[i("titlenav",{directives:[{name:"show",rawName:"v-show",value:t.isShowNav,expression:"isShowNav"}],attrs:{currentIndex:t.activeIndex,dataList:t.i18n.interaction.SUMMIT.NAV_LIST}}),t._v(" "),t.isShowH5?i("h3",[t._v(t._s(t.i18n.interaction.SUMMIT.SUMMIT))]):t._e(),t._v(" "),t.isShowH5?i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.i18n.interaction.SUMMIT.SUMMIT_H5_IMG,expression:"i18n.interaction.SUMMIT.SUMMIT_H5_IMG"}],staticClass:"mobile-img",attrs:{alt:""},on:{click:function(e){return t.go("/interaction/summit-list/")}}}):i("div",{staticClass:"top-banner",on:{click:function(e){return t.go("/interaction/summit-list/")}}},[i("video",{attrs:{autoplay:"",loop:"",muted:"",width:"700px",height:"380px",id:"summit-mp4"},domProps:{muted:!0}},[i("source",{attrs:{src:"https://openeuler-website-beijing.obs.cn-north-4.myhuaweicloud.com/openEuler%20Summit%202020%20mov.mp4",type:"video/mp4"}})]),t._v(" "),i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.i18n.interaction.SUMMIT.SUMMIT_WEB_IMG,expression:"i18n.interaction.SUMMIT.SUMMIT_WEB_IMG"}],staticClass:"top-img",attrs:{alt:""}})]),t._v(" "),i("div",{staticClass:"summit-content"},[i("div",{staticClass:"summit-explain"},t._l(t.i18n.interaction.SUMMIT.SUMMITCONTENT,(function(e,a){return i("p",{class:"en"===t.$lang?"font-regular":""},[t._v(t._s(e))])})),0),t._v(" "),i("liveroom",{attrs:{liveData:t.i18n.interaction.SUMMIT.SUMMITLIVE,isPass:!0}}),t._v(" "),i("div",{staticClass:"summit-message"},[i("div",{staticClass:"agenda",attrs:{id:"agenda"}},[i("div",{class:["title","en"===t.$lang?"en-title":""]},[t.isShowH5?i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.agendaData.MOBILE_TITLE,expression:"agendaData.MOBILE_TITLE"}],attrs:{alt:""}}):i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.agendaData.WEB_TITLE,expression:"agendaData.WEB_TITLE"}],attrs:{alt:""}})]),t._v(" "),i("div",{staticClass:"time-box"},[i("el-tabs",{on:{"tab-click":t.tabClick},model:{value:t.showTab,callback:function(e){t.showTab=e},expression:"showTab"}},[i("el-tab-pane",{attrs:{label:t.dateArr[0],name:"twenty-four"}}),t._v(" "),i("el-tab-pane",{attrs:{label:t.dateArr[1],name:"twenty-five"}})],1),t._v(" "),i("el-radio-group",{directives:[{name:"show",rawName:"v-show",value:t.isShowBtn,expression:"isShowBtn"}],on:{change:t.changeTime},model:{value:t.showBtn,callback:function(e){t.showBtn=e},expression:"showBtn"}},[i("el-radio-button",{attrs:{label:"forenoon"}},[t._v(t._s(t.dateArr[2]))]),t._v(" "),i("el-radio-button",{attrs:{label:"afternoon"}},[t._v(t._s(t.dateArr[3]))])],1)],1),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.isShowcarousel,expression:"!isShowcarousel"}],class:["calendar-content","twenty-four"===t.showTab?"center-p":""]},[t.isShowH5?t._e():i("el-table",{class:"twenty-four"===t.showTab?"hideIcon":"",staticStyle:{width:"100%"},attrs:{data:t.agendaTableData,"show-header":!1,"span-method":t.objectSpanMethod}},[i("el-table-column",{attrs:{prop:"icon",width:"50"}},[i("i",{staticClass:"el-icon-time"})]),t._v(" "),i("el-table-column",{attrs:{prop:"TIME",width:"190"}}),t._v(" "),i("el-table-column",{attrs:{prop:"THEME",width:"400"}}),t._v(" "),i("el-table-column",{attrs:{prop:"SPEAKER",width:"230"}}),t._v(" "),i("el-table-column",{attrs:{prop:"POSITION",width:"250"}})],1),t._v(" "),t.isShowH5?i("div",{staticClass:"mobile-table"},t._l(t.agendaTableData,(function(e,a){return i("div",{key:a,staticClass:"item"},[i("div",{staticClass:"time"},[t._v(t._s(e.TIME))]),t._v(" "),i("div",{staticClass:"agenda"},[i("p",[t._v(t._s(e.THEME))]),t._v(" "),e.SPEAKER||e.POSITION?i("p",[i("span",[t._v(t._s(e.SPEAKER))]),t._v(" "),i("span",[t._v(t._s(e.POSITION))])]):t._e()])])})),0):t._e()],1),t._v(" "),i("carousel",{directives:[{name:"show",rawName:"v-show",value:t.isShowcarousel,expression:"isShowcarousel"}]})],1),t._v(" "),i("div",{staticClass:"lecturer",attrs:{id:"lecturer"}},[i("div",{staticClass:"title"},[t.isShowH5?i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.lecturerObj.MOBILE_TITLE,expression:"lecturerObj.MOBILE_TITLE"}],attrs:{alt:""}}):i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.lecturerObj.WEB_TITLE,expression:"lecturerObj.WEB_TITLE"}],attrs:{alt:""}})]),t._v(" "),t.lecturerList.length&&!t.isShowH5?i("div",{directives:[{name:"fade",rawName:"v-fade"}],staticClass:"lecturer-box"},t._l(t.lecturerList,(function(e,a){return i("div",{key:a,staticClass:"item fade-in"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.IMG,expression:"item.IMG"}],attrs:{alt:""}}),t._v(" "),i("p",[t._v(t._s(e.NAME))]),t._v(" "),i("p",[t._v(t._s(e.POSITION))])])})),0):t._e(),t._v(" "),t.lecturerList.length&&t.isShowH5?i("div",{directives:[{name:"fade",rawName:"v-fade"}],staticClass:"lecturer-box"},t._l(t.lecturerList,(function(e,a){return i("div",{key:a,class:["item","fade-in",a>7&&t.flag?"hidden":""]},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.IMG,expression:"item.IMG"}],attrs:{alt:""}}),t._v(" "),i("p",[t._v(t._s(e.NAME))]),t._v(" "),i("p",[t._v(t._s(e.POSITION))])])})),0):t._e(),t._v(" "),t.isShowH5?i("div",{staticClass:"show-all",on:{click:t.showAll}},[i("p",[t._v(t._s(t.flag?t.i18n.home.EXPAND:t.i18n.home.RETRACT))]),t._v(" "),t.flag?i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"/img/home/arrow.svg",expression:"'/img/home/arrow.svg'"}],attrs:{alt:""}}):t._e(),t._v(" "),t.flag?t._e():i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"/img/home/arrowUp.svg",expression:"'/img/home/arrowUp.svg'"}],attrs:{alt:""}})]):t._e()]),t._v(" "),i("div",{staticClass:"host-unit",attrs:{id:"host-unit"}},[i("div",{staticClass:"title"},[t.isShowH5?i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.hostUnitObj.MOBILE_TITLE,expression:"hostUnitObj.MOBILE_TITLE"}],attrs:{alt:""}}):i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.hostUnitObj.WEB_TITLE,expression:"hostUnitObj.WEB_TITLE"}],attrs:{alt:""}})]),t._v(" "),i("div",{staticClass:"img-list"},t._l(t.hostUnitObj.LIST,(function(t,e){return i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.IMG,expression:"item.IMG"}],attrs:{alt:""}})})),0)]),t._v(" "),i("div",{staticClass:"undertaker"},[i("div",{staticClass:"title"},[t.isShowH5?i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.undertakerObj.MOBILE_TITLE,expression:"undertakerObj.MOBILE_TITLE"}],attrs:{alt:""}}):i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.undertakerObj.WEB_TITLE,expression:"undertakerObj.WEB_TITLE"}],attrs:{alt:""}})]),t._v(" "),i("div",{staticClass:"img-list"},t._l(t.undertakerObj.LIST,(function(e,a){return i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.IMG,expression:"item.IMG"}],attrs:{alt:""},on:{click:function(i){return t.go(e.LINK)}}})})),0)]),t._v(" "),i("div",{staticClass:"co-organizer"},[i("div",{staticClass:"title"},[t.isShowH5?i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.coOrgObj.MOBILE_TITLE,expression:"coOrgObj.MOBILE_TITLE"}],attrs:{alt:""}}):i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.coOrgObj.WEB_TITLE,expression:"coOrgObj.WEB_TITLE"}],attrs:{alt:""}})]),t._v(" "),i("div",{staticClass:"img-list"},t._l(t.coOrgObj.LIST,(function(e,a){return i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.IMG,expression:"item.IMG"}],attrs:{alt:""},on:{click:function(i){return t.go(e.LINK)}}})})),0)]),t._v(" "),i("div",{staticClass:"foundation"},[i("div",{staticClass:"title"},[t.isShowH5?i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.foundationObj.MOBILE_TITLE,expression:"foundationObj.MOBILE_TITLE"}],attrs:{alt:""}}):i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.foundationObj.WEB_TITLE,expression:"foundationObj.WEB_TITLE"}],attrs:{alt:""}})]),t._v(" "),i("div",{staticClass:"img-list"},t._l(t.foundationObj.LIST,(function(e,a){return i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.IMG,expression:"item.IMG"}],attrs:{alt:""},on:{click:function(i){return t.go(e.LINK)}}})})),0)]),t._v(" "),i("div",{staticClass:"media"},[i("div",{staticClass:"title"},[t.isShowH5?i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.mediaObj.MOBILE_TITLE,expression:"mediaObj.MOBILE_TITLE"}],attrs:{alt:""}}):i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.mediaObj.WEB_TITLE,expression:"mediaObj.WEB_TITLE"}],attrs:{alt:""}})]),t._v(" "),i("div",{staticClass:"media-box"},t._l(t.mediaObj.LIST,(function(e,a){return i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.IMG,expression:"item.IMG"}],attrs:{alt:""},on:{click:function(i){return t.go(e.LINK)}}})})),0),t._v(" "),t.isShowQrcode?i("div",{staticClass:"qrcode-box"},[i("div",{staticClass:"d3"}),t._v(" "),i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"/img/summit/home/media/xianglingshuo.jpg",expression:"'/img/summit/home/media/xianglingshuo.jpg'"}],attrs:{alt:""}})]):t._e()]),t._v(" "),i("div",{staticClass:"review"},[i("div",{staticClass:"title"},[t.isShowH5?i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.reviewObj.MOBILE_TITLE,expression:"reviewObj.MOBILE_TITLE"}],attrs:{alt:""}}):i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.reviewObj.WEB_TITLE,expression:"reviewObj.WEB_TITLE"}],attrs:{alt:""}})]),t._v(" "),i("div",{staticClass:"review-banner",on:{click:function(e){return t.go("/interaction/summit-list/list/")}}},[t.isShowH5?i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.reviewObj.MOBILE_BANNER,expression:"reviewObj.MOBILE_BANNER"}],attrs:{alt:""}}):i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.reviewObj.WEB_BANNER,expression:"reviewObj.WEB_BANNER"}],attrs:{alt:""}})])])])],1)],1)}),[],!1,null,"404e5eca",null);e.default=o.exports},551:function(t,e,i){},562:function(t,e,i){"use strict";i(551)},565:function(t,e,i){"use strict";i.r(e);var a={data:function(){return{}},props:["currentIndex","dataList","internship"],mounted:function(){},methods:{}},s=(i(562),i(42)),n=Object(s.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"title-nav"},[i("div",{staticClass:"box-line"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"/img/summit/home/nav.gif",expression:"'/img/summit/home/nav.gif'"}],staticClass:"gif",attrs:{alt:""}}),t._v(" "),i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"/img/summit/home/line.png",expression:"'/img/summit/home/line.png'"}],staticClass:"line",class:{"internship-line":t.internship},attrs:{alt:""}})]),t._v(" "),i("div",{staticClass:"nav-text",class:{"internship-nav":t.internship}},[i("ul",t._l(t.dataList,(function(e,a){return i("li",{key:a,class:a===t.currentIndex?"active":""},[i("a",{attrs:{href:e.key}},[t._m(0,!0),t._v(" "),i("div",[t._v(t._s(e.name))])])])})),0)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"inside"})])}],!1,null,null,null);e.default=n.exports},576:function(t,e,i){},577:function(t,e,i){},578:function(t,e,i){},600:function(t,e,i){"use strict";i(576)},601:function(t,e,i){"use strict";i(577)},602:function(t,e,i){"use strict";i(578)},608:function(t,e,i){"use strict";i.r(e);var a={data:function(){return{prev:"/img/home/prev.svg",carouselObj:{},cardPosition:0,cardIndex:0,isShowDetail:!1,detailMsg:{},sigObj:{},sigContent:[],sigDesc:[],showSigDetail:!1,sig2DetailList:[],summitData:!1}},props:["agendaData","sigData"],mounted:function(){var t=this.i18n.interaction.SUMMIT.SUMMIT_HOME_DATA;t=t.AGENDA,this.carouselObj=this.agendaData?this.agendaData:t.AFTERNOON_AGENDA_25,this.sigObj=this.sigData?this.sigData:t.SIG_CONTENT,this.sig2DetailList=this.sigObj.SIG2_DETAIL,this.isSummitData()},methods:{isSummitData:function(){10===this.carouselObj.TIME_LIST.length&&(this.summitData=!0)},handleBtn:function(t){if(this.isShowDetail=!1,"left"===t)this.cardIndex<=0?this.cardIndex=0:(this.cardIndex=this.cardIndex-1,this.isShowH5?this.cardPosition=this.cardPosition+220:this.cardPosition=this.cardPosition+317);else{var e=document.body.clientWidth;this.cardIndex>=this.carouselObj.CARD_LIST.length-3&&e>1120?this.cardIndex=this.carouselObj.CARD_LIST.length-3:this.cardIndex>=this.carouselObj.CARD_LIST.length-1&&e<1120?this.cardIndex=this.carouselObj.CARD_LIST.length-1:(this.cardIndex=this.cardIndex+1,this.isShowH5?this.cardPosition=this.cardPosition-220:this.cardPosition=this.cardPosition-317)}},showDetail:function(t,e){if(this.summitData&&this.goCenter(),t.THEME&&1===e)this.detailMsg={},this.isShowDetail=!0,this.detailMsg=t;else{if(!t.CONTENT||2!==e)return!1;this.sigContent=t.CONTENT,this.sigDesc=t.DESC?t.DESC:[],this.showSigDetail=!0}},goCenter:function(){this.isShowH5?document.documentElement.scrollTop=1900:document.documentElement.scrollTop=2800},hideDetail:function(t){"1"===t?this.isShowDetail=!1:this.showSigDetail=!1}}},s=(i(600),i(42)),n=Object(s.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"agenda-carousel",class:t.summitData?"summit2021":""},[i("div",{staticClass:"agenda-msg"},[i("div",{staticClass:"time-list",class:{summit_time:t.isShowH5&&t.summitData}},t._l(t.carouselObj.TIME_LIST,(function(e,a){return i("div",{key:a,class:{"tea-div":t.summitData&&4===a},attrs:{id:1!=a||t.summitData?"":"goCenter"}},[t._v(t._s(e))])})),0),t._v(" "),i("div",{staticClass:"card-list"},[i("button",{staticClass:"left",style:{background:"url("+t.prev+") no-repeat center"},on:{click:function(e){return t.handleBtn("left")}}}),t._v(" "),i("button",{staticClass:"right",style:{background:"url("+t.prev+") no-repeat center"},on:{click:function(e){return t.handleBtn("right")}}}),t._v(" "),t.isShowDetail?i("div",{staticClass:"shade-remind",on:{click:function(e){return t.hideDetail("1")}}}):t._e(),t._v(" "),t.isShowDetail?i("div",{staticClass:"msg-detail",on:{click:function(e){return t.showDetail("1")}}},[i("div",{staticClass:"time-box"},[i("p",[i("i"),t._v(t._s(t.detailMsg.TIME))]),t._v(" "),i("p",[t._v(t._s(t.detailMsg.THEME))])]),t._v(" "),i("div",{staticClass:"speaker-box"},[t.detailMsg.SPEAKER?i("i"):t._e(),t._v(" "),t._l(t.detailMsg.SPEAKER,(function(e,a){return i("p",{key:a},[t._v(t._s(e))])}))],2),t._v(" "),i("div",{staticClass:"desc-box"},[t.detailMsg.DESC?i("i"):t._e(),t._v(" "),t._l(t.detailMsg.DESC,(function(e,a){return e?i("p",{key:a},[t._v(t._s(e))]):t._e()}))],2)]):t._e(),t._v(" "),i("div",{staticClass:"card-box"},[i("ul",{staticClass:"card-list",style:{transform:"translateX("+t.cardPosition+"px)"}},t._l(t.carouselObj.CARD_LIST,(function(e,a){return i("li",{key:a},[t._l(e.TITLE,(function(e,a){return i("p",{key:e,staticClass:"section"},[t._v(t._s(e))])})),t._v(" "),t._l(e.ITEM_LIST,(function(e,a){return i("a",{key:a,class:[e.THEME?"card-item":"null-item",{teacard:4==a&&t.summitData},{teacard_mo:4==a&&t.isShowH5&&t.summitData}],attrs:{href:"#goCenter"},on:{click:function(i){return t.showDetail(e,1)}}},[i("p",[t._v(t._s(e.THEME))])])}))],2)})),0)])])]),t._v(" "),t.sigObj&&!t.summitData?i("div",{staticClass:"sig-content"},[i("p",{staticClass:"sig-title"},[t._v(t._s(t.sigObj.TITLE))]),t._v(" "),t.sigObj.SIG1_TIME?i("div",{staticClass:"sig-1"},[i("div",{staticClass:"time"},[t._v("\n                "+t._s(t.sigObj.SIG1_TIME)+"\n            ")]),t._v(" "),i("div",{staticClass:"detail"},t._l(t.sigObj.SIG1_DETAIL,(function(e,a){return i("span",[t._v(t._s(e))])})),0)]):t._e(),t._v(" "),t._t("othersig"),t._v(" "),i("div",{staticClass:"sig-2"},[t.showSigDetail?i("div",{staticClass:"shade-remind",on:{click:function(e){return t.hideDetail("2")}}}):t._e(),t._v(" "),t.showSigDetail?i("div",{staticClass:"msg-detail",on:{click:function(e){return t.showDetail("1")}}},[i("div",{staticClass:"desc-box"},[t.sigDesc.length?i("div",{staticClass:"desc"},[t._m(0),t._v(" "),t._l(t.sigDesc,(function(e,a){return i("p",{key:a},[t._v(t._s(e))])}))],2):t._e(),t._v(" "),t.sigContent.length?i("div",{staticClass:"content"},[t._m(1),t._v(" "),t._l(t.sigContent,(function(e,a){return i("p",{key:a},[t._v(t._s(e))])}))],2):t._e()])]):t._e(),t._v(" "),i("div",{staticClass:"time"},[t._v(t._s(t.sigObj.SIG2_TIME))]),t._v(" "),i("div",{staticClass:"detail"},t._l(t.sig2DetailList,(function(e,a){return i("div",{class:e.CONTENT?"":"not-click",on:{click:function(i){return t.showDetail(e,2)}}},[t._v(t._s(e.THEME))])})),0)]),t._v(" "),t.sigObj.SIG3_TIME?i("div",{staticClass:"sig-3"},[i("div",{staticClass:"time"},[t._v(t._s(t.sigObj.SIG3_TIME))]),t._v(" "),i("div",{staticClass:"detail"},t._l(t.sigObj.SIG3_DETAIL,(function(e,a){return i("span",[t._v(t._s(e))])})),0)]):t._e()],2):t._e()])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"top-title"},[e("i")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"top-title"},[e("i")])}],!1,null,"baadfccc",null);e.default=n.exports},609:function(t,e,i){"use strict";i.r(e);var a=i(184),s=(i(306),i(56),i(57),{data:function(){return{nowLiveSrc:"",nowValue:"",roomId:null,userName:"",iframeHeight:630,isSummit:!1,tenData:[],nineData:[],renderData:[],currentTime:"ten"}},props:["liveData","isPass"],created:function(){this.liveData.TEN?(this.isSummit=!0,this.renderData=this.liveData.TEN):this.renderData=this.liveData;var t=Math.round(10*Math.random());t>3||(t=3),this.creatUserId(t)},mounted:function(){var t=this,e=this.$route.query.liveid;this.showIframe(e),window.addEventListener("message",(function(e){var i="";try{i=JSON.parse(e.data)}catch(t){i=e.data}"auto"==i.height?t.iframeHeight=550:i.height&&(t.iframeHeight=parseInt(i.height))}),!1)},methods:{tabClick:function(){"nine"==this.currentTime?(this.renderData=this.liveData.NINE,this.showIframe()):(this.renderData=this.liveData.TEN,this.showIframe())},showIframe:function(t){var e=this;t?this.renderData.forEach((function(i,a,s){parseInt(i.ID)===parseInt(t)&&(e.nowLiveSrc=i.LIVEURL+e.userName,e.nowValue=i.OPTION,e.roomId=a)})):(this.nowLiveSrc=this.renderData[0].LIVEURL+this.userName,this.nowValue=this.renderData[0].OPTION,this.roomId=0)},creatUserId:function(t){for(var e="",i="0123456789@#$%&~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",a=0;a<t;a++){var s=Math.round(Math.random()*(i.length-1));e+=i.substring(s,s+1)}this.userName=e},tabLiveRoom:function(t,e){"number"===Object(a.a)(e)?(this.nowLiveSrc=t+this.userName,this.roomId=e):this.nowLiveSrc=t+this.userName}}}),n=(i(601),i(602),i(42)),r=Object(n.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.renderData.length?i("div",{staticClass:"live-room",attrs:{id:"liveroom"}},[i("div",{staticClass:"title"},[t.isPass?i("div",{staticClass:"ever"},[t.isShowH5?i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"/img/summit/home/zh-mobile-liveroom.png",expression:"'/img/summit/home/zh-mobile-liveroom.png'"}],attrs:{alt:""}}):i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"/img/summit/home/zh-pc-liveroom.png",expression:"'/img/summit/home/zh-pc-liveroom.png'"}],attrs:{alt:""}})]):i("div",{staticClass:"will"},[t.isShowH5?i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"/img/summit/devday-2021/h5-liveroom.png",expression:"'/img/summit/devday-2021/h5-liveroom.png'"}],attrs:{alt:""}}):i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"/img/summit/devday-2021/pc-liveroom.png",expression:"'/img/summit/devday-2021/pc-liveroom.png'"}],attrs:{alt:""}})])]),t._v(" "),t.isSummit?i("div",{staticClass:"time-box",attrs:{id:"time-box"}},[i("el-tabs",{on:{"tab-click":t.tabClick},model:{value:t.currentTime,callback:function(e){t.currentTime=e},expression:"currentTime"}},[i("el-tab-pane",{attrs:{label:"11月09日",name:"nine"}}),t._v(" "),i("el-tab-pane",{attrs:{label:"11月10日",name:"ten"}})],1)],1):t._e(),t._v(" "),t.isShowH5?i("el-select",{staticClass:"live-choose",on:{change:t.tabLiveRoom},model:{value:t.nowValue,callback:function(e){t.nowValue=e},expression:"nowValue"}},t._l(t.renderData,(function(e,a){return i("el-option",{key:a,attrs:{label:e.OPTION,value:e.LIVEURL}},[i("span",[t._v(t._s(e.OPTION))])])})),1):t._e(),t._v(" "),i("iframe",{attrs:{id:"livePage",height:t.iframeHeight,allow:"camera *;microphone *;",border:"0",scrolling:"no",src:t.nowLiveSrc,allowfullscreen:"true",webkitallowfullscreen:"true",mozallowfullscreen:"true"}}),t._v(" "),t.isShowH5||t.isSummit?t._e():i("div",{staticClass:"web-box"},[i("p",[t._v(t._s(t.i18n.interaction.SUMMIT.LIVETITLE))]),t._v(" "),i("div",{staticClass:"item-box"},t._l(t.renderData,(function(e,a){return i("div",{key:a,class:["live-item",t.roomId===a?"activeRoom":""],on:{click:function(i){return t.tabLiveRoom(e.LIVEURL,a)}}},[i("p",[t._v(t._s(e.THEME))]),t._v(" "),i("p",[t._v(t._s(e.TIME))])])})),0)]),t._v(" "),!t.isShowH5&&t.isSummit?i("div",{staticClass:"web-box"},["nine"===t.currentTime?i("p",[t._v(t._s(t.i18n.summit.LIVETITLE))]):i("p",[t._v(t._s(t.i18n.summit.TEN_TITLE))]),t._v(" "),i("div",{staticClass:"item-box"},t._l(t.renderData,(function(e,a){return i("div",{key:a,class:["live-item",t.roomId===a?"activeRoom":"",{"summit-item":t.isSummit&&"nine"==t.currentTime}],on:{click:function(i){return t.tabLiveRoom(e.LIVEURL,a)}}},[i("p",[t._v(t._s(e.THEME))]),t._v(" "),i("p",[t._v(t._s(e.TIME))])])})),0)]):t._e()],1):t._e()}),[],!1,null,null,null);e.default=r.exports},778:function(t,e,i){}}]);