(window.webpackJsonp=window.webpackJsonp||[]).push([[21,8],{394:function(t,e,n){var content=n(406);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(120).default)("13b29c2a",content,!0,{sourceMap:!1})},397:function(t,e,n){t.exports=n.p+"img/logo256.2df64b8.png"},398:function(t,e,n){"use strict";n.r(e);n(93);var o=n(21),r=n(22),c=n(45),l=n(57),d=n(32),f=n(27),v=(n(5),n(1),n(2),n(64),n(79),n(390)),y=n(149),h=n(401),_=n(121);function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(d.a)(t);if(e){var r=Object(d.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(l.a)(this,n)}}var O=function(t,e,n,desc){var o,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},w=function(t){Object(c.a)(n,t);var e=m(n);function n(){var t;return Object(o.a)(this,n),(t=e.apply(this,arguments)).showAddPlaylistModal=!1,t.playlistFavoritesId=_.c,t}return Object(r.a)(n,[{key:"playlists",get:function(){return y.Store.library.playlists.filter((function(t){return"favorites"!==t.id}))}},{key:"isPlaylistActive",value:function(t){return this.$route.path.includes("/playlist")&&(!t||this.$route.query.id===t)}},{key:"addPlaylist",value:function(t){y.Store.library.newPlaylist(t)}}]),n}(v.f),j=w=O([Object(v.a)({components:{AddPlaylistModal:h.default}})],w),x=(n(405),n(78)),component=Object(x.a)(j,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark",fixed:"top"}},[o("b-navbar-brand",{attrs:{to:"/search"}},[o("div",{staticClass:"ov-brand"},[o("img",{attrs:{src:n(397)}}),t._v(" "),o("div",{staticClass:"ov-brand-text"},[t._v("OpenVideo")])])]),t._v(" "),o("b-collapse",{attrs:{id:"nav-text-collapse","is-nav":""}},[o("b-navbar-nav",[o("b-nav-item",{attrs:{active:t.$route.path.includes("/search"),to:"/search"}},[t._v("\n        Search Videos\n      ")]),t._v(" "),o("b-nav-item",{attrs:{active:t.isPlaylistActive("history"),to:"/playlist?id=history"}},[t._v("\n        History\n      ")]),t._v(" "),o("b-nav-item",{attrs:{active:t.isPlaylistActive(t.playlistFavoritesId),to:"/playlist?id="+t.playlistFavoritesId}},[t._v("\n        Favorites\n      ")]),t._v(" "),t.playlists?o("b-nav-item-dropdown",{attrs:{active:t.isPlaylistActive(),text:"Playlists",right:""}},[t._l(t.playlists,(function(e){return o("b-dropdown-item",{key:e.id,attrs:{to:"/playlist?id="+e.id,active:t.isPlaylistActive(e.id)}},[t._v(t._s(e.name)+"\n        ")])})),t._v(" "),t.playlists.length>0?o("b-dropdown-divider"):t._e(),t._v(" "),o("b-dropdown-item",{on:{click:function(e){t.showAddPlaylistModal=!0}}},[t._v("\n          Add Playlist\n        ")])],2):t._e(),t._v(" "),o("b-nav-item",{attrs:{active:t.$route.path.includes("/options"),to:"/options"}},[t._v("\n        Options\n      ")])],1),t._v(" "),o("b-navbar-nav",{staticClass:"ml-auto"},[t._t("default")],2)],1),t._v(" "),o("b-navbar-toggle",{attrs:{target:"nav-text-collapse"}}),t._v(" "),o("AddPlaylistModal",{on:{submit:t.addPlaylist},model:{value:t.showAddPlaylistModal,callback:function(e){t.showAddPlaylistModal=e},expression:"showAddPlaylistModal"}})],1)}),[],!1,null,"5f31b044",null);e.default=component.exports;installComponents(component,{AddPlaylistModal:n(401).default})},405:function(t,e,n){"use strict";n(394)},406:function(t,e,n){var o=n(119)(!1);o.push([t.i,".ov-brand[data-v-5f31b044]{display:flex}.ov-brand img[data-v-5f31b044]{width:3rem;margin-right:.5rem}.ov-brand .ov-brand-text[data-v-5f31b044]{margin:auto}",""]),t.exports=o},408:function(t,e,n){var content=n(414);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(120).default)("53d531b3",content,!0,{sourceMap:!1})},413:function(t,e,n){"use strict";n(408)},414:function(t,e,n){var o=n(119)(!1);o.push([t.i,'.switch[data-v-3f20b2d8]{position:relative;display:inline-block;width:60px;height:34px}.switch input[data-v-3f20b2d8]{opacity:0;width:0;height:0}.slider[data-v-3f20b2d8]{cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc}.slider[data-v-3f20b2d8],.slider[data-v-3f20b2d8]:before{position:absolute;transition:.4s}.slider[data-v-3f20b2d8]:before{content:"";height:26px;width:26px;left:4px;bottom:4px;background-color:#fff}input:checked+.slider[data-v-3f20b2d8]{background-color:#8dc73f}input:focus+.slider[data-v-3f20b2d8]{box-shadow:0 0 1px #8dc73f}input:checked+.slider[data-v-3f20b2d8]:before{transform:translateX(26px)}.slider.round[data-v-3f20b2d8]{border-radius:34px}.slider.round[data-v-3f20b2d8]:before{border-radius:50%}',""]),t.exports=o},426:function(t,e,n){var content=n(472);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(120).default)("16940fa7",content,!0,{sourceMap:!1})},427:function(t,e,n){var content=n(474);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(120).default)("73981d5b",content,!0,{sourceMap:!1})},436:function(t,e,n){"use strict";n.r(e);var o=n(21),r=n(22),c=n(45),l=n(57),d=n(32),f=n(27),v=(n(5),n(1),n(148),n(93),n(390));function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(d.a)(t);if(e){var r=Object(d.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(l.a)(this,n)}}var h,_=function(t,e,n,desc){var o,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},m=function(t,e){if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},O=function(t){Object(c.a)(n,t);var e=y(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"handleChange",value:function(){return this.input.checked}}]),n}(v.f);_([Object(v.c)("input"),m("design:type",Boolean)],O.prototype,"value",void 0),_([Object(v.e)("cb"),m("design:type","function"==typeof(h="undefined"!=typeof HTMLInputElement&&HTMLInputElement)?h:Object)],O.prototype,"input",void 0),_([Object(v.b)("input"),m("design:type",Function),m("design:paramtypes",[]),m("design:returntype",void 0)],O.prototype,"handleChange",null);var w=O=_([v.a],O),j=(n(413),n(78)),component=Object(j.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"switch"},[n("input",{ref:"cb",attrs:{type:"checkbox"},domProps:{checked:t.value},on:{input:t.handleChange}}),t._v(" "),n("span",{staticClass:"slider round"})])}),[],!1,null,"3f20b2d8",null);e.default=component.exports},471:function(t,e,n){"use strict";n(426)},472:function(t,e,n){var o=n(119)(!1);o.push([t.i,".ov-switch[data-v-20ca3688]{display:flex}.ov-switch>*[data-v-20ca3688]{margin:auto .5em}.ov-redirect-switches[data-v-20ca3688]{max-width:800px;margin:auto}",""]),t.exports=o},473:function(t,e,n){"use strict";n(427)},474:function(t,e,n){var o=n(119)(!1);o.push([t.i,".no-nav-body{width:1000px;overflow:hidden;background:#fff;color:#000}",""]),t.exports=o},499:function(t,e,n){"use strict";n.r(e);var o=n(17),r=n(21),c=n(22),l=n(45),d=n(57),f=n(32),v=n(27),y=(n(52),n(5),n(1),n(93),n(390)),h=n(398),_=n(436),m=n(61),O=n(149);function w(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(f.a)(t);if(e){var r=Object(f.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(d.a)(this,n)}}var j=function(t,e,n,desc){var o,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},x=function(t){Object(l.a)(n,t);var e=w(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"mounted",value:function(){this.hideNav&&(document.body.className="no-nav-body")}},{key:"options",get:function(){return O.Store.options}},{key:"hideNav",get:function(){return this.$route.query.hideNav}}]),n}(y.f),R=x=j([Object(y.a)({components:{"ov-switch":_.default,Navigation:h.default},head:function(){return{title:"Options – OpenVideo"}},asyncData:function(){return Object(o.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.b.send();case 2:return e=t.sent,t.abrupt("return",{scripts:e});case 4:case"end":return t.stop()}}),t)})))()}})],x),P=(n(471),n(473),n(78)),component=Object(P.a)(R,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.hideNav?t._e():n("Navigation"),t._v(" "),n("div",{staticClass:"container text-center",class:{"mt-5":!t.hideNav,"pt-5":!t.hideNav}},[n("h1",{staticClass:"text-primary"},[t._v("Redirect Scripts")]),t._v(" "),n("div",{staticClass:"row ov-redirect-switches"},t._l(t.scripts,(function(script){return n("div",{key:script,staticClass:"p-3 col-4 ov-switch"},[n("ov-switch",{attrs:{value:t.options.isScriptEnabled(script)},on:{input:function(e){return t.options.setScriptEnabled({name:script,enabled:e})}}}),t._v(" "),n("div",[t._v(t._s(script))])],1)})),0),t._v(" "),n("h1",{staticClass:"text-primary"},[t._v("Other Options")]),t._v(" "),n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-auto p-3 ov-switch"},[n("ov-switch",{attrs:{value:t.options.analyticsEnabled},on:{input:function(e){return t.options.setAnalyticsEnabled(e)}}}),t._v(" "),n("div",[t._v("Allow Google Analytics")])],1),t._v(" "),n("div",{staticClass:"col-auto p-3 ov-switch"},[n("ov-switch",{attrs:{value:t.options.videoPopupEnabled},on:{input:function(e){return t.options.setVideoPopupEnabled(e)}}}),t._v(" "),n("div",[t._v("Search for videos")])],1),t._v(" "),n("div",{staticClass:"col-auto p-3 ov-switch"},[n("ov-switch",{attrs:{value:t.options.historyEnabled},on:{input:function(e){return t.options.setHistoryEnabled(e)}}}),t._v(" "),n("div",[t._v("History enabled")])],1)])])],1)}),[],!1,null,"20ca3688",null);e.default=component.exports;installComponents(component,{Navigation:n(398).default})}}]);