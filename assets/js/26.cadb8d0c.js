(window.webpackJsonp=window.webpackJsonp||[]).push([[26,104,111],{1425:function(t,e,a){"use strict";a(751)},1507:function(t,e,a){"use strict";a.r(e);a(117),a(56),a(57),a(561);var n=a(549),r=a(655),i=a(629),o={name:"mirSelect",data:function(){return{tableData:[],mapData:{center:[],data:[]},versionPath:"",ipAndAsn:[],area:"",version:""}},components:{commonBanner:n.default,baiduMapCom:i.default},created:function(){this.version=this.$route.query.version},mounted:function(){var t=this;Object(r.b)("E8fzNbGP929RhtOZQGNsSKYO").then((function(){Object(r.c)({version:t.version}).then((function(e){if(t.area=e.ClientInfo.Country,t.ipAndAsn.push(e.IP),e.ClientInfo.ASName){var a=e.ClientInfo.ASName+" (ASN"+e.ClientInfo.ASNum+")";t.ipAndAsn.push(a)}else{if(!e.ClientInfo.ASNum)return;var n="ASN"+e.ClientInfo.ASNum;t.ipAndAsn.push(n)}var r,i=[];i.push(e.ClientInfo.Longitude),i.push(e.ClientInfo.Latitude),r=t.compare(e.MirrorList),t.versionPath=e.FileInfo.Path.slice(1),r.length&&i.length&&(t.mapData.data=r,t.mapData.center=i,t.initTable())})).catch((function(t){console.log(t)}))})).catch((function(t){console.log(t)}))},methods:{initTable:function(){var t=this;this.mapData.data.length&&this.mapData.data.forEach((function(e){var a={icon:"",name:"",url:"",country:"",continent:"",distance:""};a.icon=e.SponsorLogoURL,a.name=e.Name,a.url=e.HttpURL+t.versionPath,a.country=e.Country?e.Country:"-",a.continent=e.ContinentCode,a.distance=e.Distance,a.lng=e.Longitude,a.lat=e.Latitude,t.tableData.push(a)}))},compare:function(t){return t.sort((function(t,e){return t.Distance>e.Distance?1:-1})),t},resetPosition:function(){this.baiduMapObj.reset()}}},s=(a(1425),a(42)),l=Object(s.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mirror-select"},[a("common-banner",{attrs:{"pc-src":"/img/download/mirror-banner.png","mobile-src":"/img/download/mirror-banner.png","inside-name":"DOWNLOAD","outside-name":t.i18n.download.MIRROR_SELECT.TITLE}}),t._v(" "),a("p",[t._v("\n        "+t._s(t.i18n.download.MIRROR_SELECT.CONTENT[0])),a("span",{staticClass:"ip"},[t._v(t._s(t.ipAndAsn.length?t.ipAndAsn[0]:""))]),t._v(t._s(t.i18n.download.MIRROR_SELECT.CONTENT[1])+"\n        "),a("span",{staticClass:"asn"},[t._v(t._s(t.ipAndAsn.length?t.ipAndAsn[1]:""))]),t._v(t._s(t.i18n.download.MIRROR_SELECT.CONTENT[2])),a("span",{staticClass:"area"},[t._v(t._s(t.area))]),t._v(t._s(t.i18n.download.MIRROR_SELECT.CONTENT[3])+"\n    ")]),t._v(" "),a("div",{staticClass:"mirror-list"},[t.tableData.length&&t.isShowH5?a("ul",{staticClass:"mobile-list"},t._l(t.tableData,(function(e,n){return a("li",{key:n},[a("ul",[a("li",[a("span",[t._v(t._s(t.i18n.download.MIRROR_SELECT.RANK))]),t._v(" "),a("span",[t._v(t._s(n+1))])]),t._v(" "),a("li",[a("span",[t._v(t._s(t.i18n.download.MIRROR_SELECT.NAME))]),t._v(" "),a("img",{attrs:{src:e.icon,alt:""}}),t._v(" "),a("span",[t._v(t._s(e.name))])]),t._v(" "),a("li",[a("span",[t._v(t._s(t.i18n.download.MIRROR_SELECT.URL))]),t._v(" "),a("a",{attrs:{href:e.url}},[t._v(t._s(e.url))])]),t._v(" "),a("li",[a("span",[t._v(t._s(t.i18n.download.MIRROR_SELECT.COUNTRY))]),t._v(" "),a("span",[t._v(t._s(e.country))])]),t._v(" "),a("li",[a("span",[t._v(t._s(t.i18n.download.MIRROR_SELECT.CONTINENT))]),t._v(" "),a("span",[t._v(t._s(e.continent))])]),t._v(" "),a("li",[a("span",[t._v(t._s(t.i18n.download.MIRROR_SELECT.DISTANCE))]),t._v(" "),a("span",[t._v(t._s(e.distance))])])])])})),0):a("el-table",{staticClass:"pc-list",staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:""}},[a("el-table-column",{attrs:{label:"Rank",width:"70",type:"index"}}),t._v(" "),a("el-table-column",{attrs:{width:"300",label:"Mirror Name"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("img",{attrs:{src:e.row.icon,alt:""}}),t._v(" "),a("span",{staticStyle:{"margin-left":"34px"}},[t._v(t._s(e.row.name))])]}}])}),t._v(" "),a("el-table-column",{attrs:{"show-overflow-tooltip":"",width:"400",label:"URL"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("a",{attrs:{href:e.row.url,target:"_blank"}},[t._v(t._s(e.row.url))])]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"80",prop:"country",label:"Area"}}),t._v(" "),a("el-table-column",{attrs:{prop:"continent",label:"Continent"}}),t._v(" "),a("el-table-column",{attrs:{width:"160",prop:"distance",label:"Distance(KM)"}})],1)],1),t._v(" "),!t.isShowH5&&t.mapData.data.length?a("baiduMapCom",{attrs:{mapData:t.mapData.data,versionPath:t.versionPath,centerPoint:t.mapData.center}}):t._e()],1)}),[],!1,null,"b86ba6c6",null);e.default=l.exports},546:function(t,e,a){},547:function(t,e,a){"use strict";var n=a(184),r=(a(303),a(552)),i=a.n(r),o=a(0),s={postJson:function(t){return function(t){var e,a,r,s=i.a.create({baseURL:"/api"+(t.otherBaseUrl||"")||""});s.defaults.headers.post["Content-Type"]="application/json",t.headLanguage&&(s.defaults.headers.common["Accept-Language"]=t.headLanguage),t.url=(e=t.url,a="rnd",r=Math.random(),e?(e+=e.indexOf("?")>0?"&":"?",e+=a+"="+r):e);var l=t.data&&("object"===Object(n.a)(t.data)?JSON.stringify(t.data):t.data),c={success:function(e){var a="string"==typeof e.data?JSON.parse(e.data):e.data;a?t.success(a):(new o.default).$message.error("开小差~请稍后重试。")}};return s({headers:t.notAuthorization?{}:{Authorization:"Basic b3BlbmV1bGVyc2VydmVyOm9wZW5ldWxlcnNlcnZlckAxMjM0"},method:t.type||"post",url:t.url,data:l,params:t.params,responseType:"json"}).then(c.success).catch(t.error)}(t)}};e.a=s},548:function(t,e,a){"use strict";a(546)},549:function(t,e,a){"use strict";a.r(e);var n={data:function(){return{}},props:["insideName","outsideName","pcSrc","mobileSrc"]},r=(a(548),a(42)),i=Object(r.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"common-banner"},[a("div",{staticClass:"banner"},[a("img",{staticClass:"common-img",attrs:{src:t.pcSrc}}),t._v(" "),a("span",{staticClass:"inside"},[t._v(t._s(t.insideName))]),t._v(" "),a("span",{class:["outside",t.$isCn?"font-xihjw":"font-hwmedium"]},[t._v(t._s(t.outsideName))]),t._v(" "),t._t("pc-slot")],2),t._v(" "),a("div",{staticClass:"banner-mobile"},[a("h3",[t._v(t._s(t.outsideName))]),t._v(" "),a("img",{staticClass:"common-img",attrs:{src:t.mobileSrc}}),t._v(" "),t._t("mobile-slot")],2)])}),[],!1,null,"16c1b74a",null);e.default=i.exports},556:function(t,e){var a=Math.floor,n=function(t,e){var o=t.length,s=a(o/2);return o<8?r(t,e):i(n(t.slice(0,s),e),n(t.slice(s),e),e)},r=function(t,e){for(var a,n,r=t.length,i=1;i<r;){for(n=i,a=t[i];n&&e(t[n-1],a)>0;)t[n]=t[--n];n!==i++&&(t[n]=a)}return t},i=function(t,e,a){for(var n=t.length,r=e.length,i=0,o=0,s=[];i<n||o<r;)i<n&&o<r?s.push(a(t[i],e[o])<=0?t[i++]:e[o++]):s.push(i<n?t[i++]:e[o++]);return s};t.exports=n},557:function(t,e,a){var n=a(183).match(/firefox\/(\d+)/i);t.exports=!!n&&+n[1]},558:function(t,e,a){var n=a(183);t.exports=/MSIE|Trident/.test(n)},559:function(t,e,a){var n=a(183).match(/AppleWebKit\/(\d+)\./);t.exports=!!n&&+n[1]},561:function(t,e,a){"use strict";var n=a(1),r=a(58),i=a(18),o=a(28),s=a(22),l=a(2),c=a(556),u=a(77),d=a(557),p=a(558),f=a(81),m=a(559),v=[],h=v.sort,y=l((function(){v.sort(void 0)})),b=l((function(){v.sort(null)})),_=u("sort"),g=!l((function(){if(f)return f<70;if(!(d&&d>3)){if(p)return!0;if(m)return m<603;var t,e,a,n,r="";for(t=65;t<76;t++){switch(e=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:a=3;break;case 68:case 71:a=4;break;default:a=2}for(n=0;n<47;n++)v.push({k:e+n,v:a})}for(v.sort((function(t,e){return e.v-t.v})),n=0;n<v.length;n++)e=v[n].k.charAt(0),r.charAt(r.length-1)!==e&&(r+=e);return"DGBEFHACIJK"!==r}}));n({target:"Array",proto:!0,forced:y||!b||!_||!g},{sort:function(t){void 0!==t&&r(t);var e=i(this);if(g)return void 0===t?h.call(e):h.call(e,t);var a,n,l=[],u=o(e.length);for(n=0;n<u;n++)n in e&&l.push(e[n]);for(a=(l=c(l,function(t){return function(e,a){return void 0===a?-1:void 0===e?1:void 0!==t?+t(e,a)||0:s(e)>s(a)?1:-1}}(t))).length,n=0;n<a;)e[n]=l[n++];for(;n<u;)delete e[n++];return e}})},588:function(t,e,a){},615:function(t,e,a){"use strict";a(588)},629:function(t,e,a){"use strict";a.r(e);a(56),a(57),a(116),a(654),a(118),a(187);var n=a(604),r=(a(663),{name:"MapCom",data:function(){return{baiduMapObj:{}}},mounted:function(){this.initChart()},props:["mapData","versionPath","centerPoint"],methods:{initChart:function(){var t,e=this,a=document.getElementById("baidu-map"),r=n.d(a),i=[];this.mapData.forEach((function(t){i.push({name:t.Name,country:t.Country,link:e.versionPath?t.HttpURL+e.versionPath:t.HttpURL})})),(t={tooltip:{trigger:"item",formatter:function(t){var e="",a="";return t.data.dataList.length&&t.data.dataList.length>1?(t.data.dataList.forEach((function(t){e+='<li style="margin-bottom:6px;"><a href="'.concat(t.link,'" target="_blank" style="text-decoration: none;color: #002FA7;">').concat(t.name,"</a></li>")})),a="<div style='text-align:left;padding:10px 20px'><ul style='list-style-type:disc;'>"+e+"</ul><span>"+t.data.country+"</span></div>"):t.data.dataList.length&&1===t.data.dataList.length&&(a='<div style="text-align:left;padding:10px">\n                                            <a href="'.concat(t.data.dataList[0].link,'" target="_blank" style="text-decoration: none;color: #002FA7;">').concat(t.data.dataList[0].name,"</a><br>\n                                            <span>").concat(t.data.country,"</span>\n                                        </div>")),a},enterable:!0,hideDelay:500},bmap:{zoom:1,roam:!0,mapStyle:{styleJson:[{featureType:"water",elementType:"all",stylers:{color:"#aad8f4"}},{featureType:"land",elementType:"all",stylers:{color:"#f1ebdd"}},{featureType:"boundary",elementType:"geometry",stylers:{color:"#d8cab9"}},{featureType:"railway",elementType:"all",stylers:{visibility:"off"}},{featureType:"highway",elementType:"geometry",stylers:{color:"#afbcc2"}},{featureType:"highway",elementType:"geometry.fill",stylers:{color:"#afbcc2",lightness:1}},{featureType:"highway",elementType:"labels",stylers:{visibility:"off"}},{featureType:"arterial",elementType:"geometry",stylers:{color:"#afbcc2"}},{featureType:"arterial",elementType:"geometry.fill",stylers:{color:"#afbcc2"}},{featureType:"poi",elementType:"all",stylers:{visibility:"off"}},{featureType:"green",elementType:"all",stylers:{color:"#afbcc2",visibility:"off"}},{featureType:"subway",elementType:"all",stylers:{visibility:"off"}},{featureType:"manmade",elementType:"all",stylers:{visibility:"off"}},{featureType:"local",elementType:"all",stylers:{visibility:"off"}},{featureType:"arterial",elementType:"labels",stylers:{visibility:"off"}},{featureType:"boundary",elementType:"geometry.fill",stylers:{color:"#afbcc2"}},{featureType:"building",elementType:"all",stylers:{color:"#f1ebdd"}},{featureType:"label",elementType:"all",stylers:{visibility:"off"}}]}},series:[{name:"",type:"effectScatter",coordinateSystem:"bmap",data:this.convertData(i),encode:{value:2},symbolSize:15,showEffectOn:"emphasis",rippleEffect:{brushType:"stroke"},hoverAnimation:!0,label:{formatter:function(t){var e="";return t.data.dataList.length>1?e=t.data.dataList.length+" mirrors are selected here":1===t.data.dataList.length&&(e=t.data.name),e},position:"right",show:!0},itemStyle:{color:"#fff285",shadowBlur:10,shadowColor:"#f9762d"},zlevel:1}]})&&r.setOption(t),this.baiduMapObj=r.getModel().getComponent("bmap").getBMap(),this.setMapStyle(this.baiduMapObj)},setMapStyle:function(t){var e=this;setTimeout((function(){var a;if(e.centerPoint&&e.centerPoint.length){a=new BMap.Point(e.centerPoint[0],e.centerPoint[1]);var n=new BMap.Icon("/img/download/position.png",new BMap.Size(24,24)),r=new BMap.Marker(a,{icon:n});t.addOverlay(r)}else a=new BMap.Point(109.5878,34.115);t.centerAndZoom(a,1),t.addControl(new BMap.NavigationControl({type:BMAP_NAVIGATION_CONTROL_ZOOM,anchor:BMAP_ANCHOR_BOTTOM_RIGHT}))}),100)},convertData:function(t){var e=[],a={};this.mapData.forEach((function(t){a[t.Name]=[t.Longitude,t.Latitude]}));for(var n=0;n<t.length;n++){var r=a[t[n].name],i=-1;if(!r)return;for(var o=0;o<e.length;o++)e[o].Latitude===r[0]&&e[o].Longitude===r[1]&&(i=o);-1===i?e.push({name:t[n].name,value:r,country:t[n].country,dataList:[{name:t[n].name,link:t[n].link}],Latitude:r[0],Longitude:r[1]}):e[i].dataList.push({name:t[n].name,link:t[n].link})}return e},resetPosition:function(){this.baiduMapObj.reset()}}}),i=(a(615),a(42)),o=Object(i.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"map-box"},[e("div",{staticClass:"position-reset",on:{click:this.resetPosition}},[e("img",{attrs:{src:"/img/download/reset.png",alt:""}})]),this._v(" "),e("div",{attrs:{id:"baidu-map"}})])}),[],!1,null,"7e87e3a5",null);e.default=o.exports},655:function(t,e,a){"use strict";a.d(e,"a",(function(){return r})),a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o}));a(15),a(185),a(186);var n=a(547),r=function(){return new Promise((function(t,e){n.a.postJson({otherBaseUrl:"-mirror",url:"/?mirrorstats=true",type:"get",success:function(a){a?t(a):e(a)},error:function(t){e(t)}})}))},i=function(t){return new Promise((function(e,a){if("undefined"!=typeof BMap)return e(BMap),!0;window.onBMapCallback=function(){e(BMap)};var n=document.createElement("script");n.type="text/javascript",n.src="https://api.map.baidu.com/api?v=2.0&ak="+t+"&callback=onBMapCallback",n.onerror=a,document.head.appendChild(n)}))},o=function(t){var e=t.version,a=window.location.host,r=null;return r=a.includes("openeuler")?"https://api.openeuler.org/mirrors/openEuler-".concat(e,"/ISO/"):"/openEuler-".concat(e,"/ISO/"),new Promise((function(t,e){n.a.postJson({otherBaseUrl:"-mirror",url:r,type:"get",success:function(a){a?t(a):e(a)},error:function(t){e(t)}})}))}},751:function(t,e,a){}}]);