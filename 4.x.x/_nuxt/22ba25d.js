(window.webpackJsonp=window.webpackJsonp||[]).push([[21,6,8,17],{441:function(t,e,n){"use strict";n.r(e);n(29),n(1),n(70);var o,r=n(18),c=n(17),l=n(38),d=n(44),v=n(25),f=n(9),y=n(164);function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(v.a)(t);if(e){var r=Object(v.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(d.a)(this,n)}}var m=function(t){Object(l.a)(n,t);var e=h(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).name="",t.nameState=null,t}return Object(c.a)(n,[{key:"visibilityChanged",value:function(){return this.visible}},{key:"checkFormValidity",value:function(){var t=this.form.checkValidity();return this.nameState=t?"valid":"invalid",t}},{key:"resetModal",value:function(){this.name="",this.nameState=null}},{key:"handleOk",value:function(t){t.preventDefault(),this.handleSubmit()}},{key:"handleSubmit",value:function(){var t=this;this.checkFormValidity()&&(this.$nextTick((function(){t.visible=!1})),this.submit(this.name))}},{key:"submit",value:function(t){return t}}]),n}(y.f);Object(f.b)([Object(y.c)("change",{default:!1}),Object(f.c)("design:type",Boolean)],m.prototype,"visible",void 0),Object(f.b)([Object(y.g)("visible"),Object(y.b)("change"),Object(f.c)("design:type",Function),Object(f.c)("design:paramtypes",[]),Object(f.c)("design:returntype",void 0)],m.prototype,"visibilityChanged",null),Object(f.b)([Object(y.e)("form"),Object(f.c)("design:type","function"==typeof(o="undefined"!=typeof HTMLFormElement&&HTMLFormElement)?o:Object)],m.prototype,"form",void 0),Object(f.b)([Object(y.b)("submit"),Object(f.c)("design:type",Function),Object(f.c)("design:paramtypes",[String]),Object(f.c)("design:returntype",void 0)],m.prototype,"submit",null);var O=m=Object(f.b)([Object(y.a)({})],m),_=n(84),component=Object(_.a)(O,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("b-modal",{attrs:{id:"modal-prevent-closing",title:"Add Playlist"},on:{show:t.resetModal,hidden:t.resetModal,ok:t.handleOk},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[e("form",{ref:"form",on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[e("b-form-group",{attrs:{state:t.nameState,label:"Playlist Name","label-for":"playlist-input","invalid-feedback":"Name is required"}},[e("b-form-input",{attrs:{id:"playlist-input",state:t.nameState,required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1)],1)])}),[],!1,null,null,null);e.default=component.exports},442:function(t,e,n){t.exports=n.p+"img/logo256.2df64b8.png"},443:function(t,e,n){var content=n(454);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(105).default)("0f1ddd07",content,!1,{sourceMap:!1})},446:function(t,e,n){"use strict";n.r(e);n(60),n(85),n(29),n(70);var o=n(18),r=n(17),c=n(38),l=n(44),d=n(25),v=(n(2),n(1),n(9)),f=n(164),y=n(165),h=n(441),m=n(212);function O(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(d.a)(t);if(e){var r=Object(d.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(l.a)(this,n)}}var _=function(t){Object(c.a)(n,t);var e=O(n);function n(){var t;return Object(o.a)(this,n),(t=e.apply(this,arguments)).showAddPlaylistModal=!1,t.playlistFavoritesId=m.a,t}return Object(r.a)(n,[{key:"playlists",get:function(){return y.Store.library.playlists.filter((function(t){return"favorites"!==t.id}))}},{key:"isPlaylistActive",value:function(t){return this.$route.path.includes("/playlist")&&(!t||this.$route.query.id===t)}},{key:"addPlaylist",value:function(t){y.Store.library.newPlaylist(t)}}]),n}(f.f),j=_=Object(v.b)([Object(f.a)({components:{AddPlaylistModal:h.default}})],_),x=(n(453),n(84)),component=Object(x.a)(j,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark",fixed:"top"}},[e("b-navbar-brand",{attrs:{to:"/search"}},[e("div",{staticClass:"ov-brand"},[e("img",{attrs:{src:n(442)}}),t._v(" "),e("div",{staticClass:"ov-brand-text"},[t._v("OpenVideo")])])]),t._v(" "),e("b-collapse",{attrs:{id:"nav-text-collapse","is-nav":""}},[e("b-navbar-nav",[e("b-nav-item",{attrs:{active:t.$route.path.includes("/search"),to:"/search"}},[t._v("\n        Search Videos\n      ")]),t._v(" "),e("b-nav-item",{attrs:{active:t.isPlaylistActive("history"),to:"/playlist?id=history"}},[t._v("\n        History\n      ")]),t._v(" "),e("b-nav-item",{attrs:{active:t.isPlaylistActive(t.playlistFavoritesId),to:"/playlist?id=".concat(t.playlistFavoritesId)}},[t._v("\n        Favorites\n      ")]),t._v(" "),t.playlists?e("b-nav-item-dropdown",{attrs:{active:t.isPlaylistActive(),text:"Playlists",right:""}},[t._l(t.playlists,(function(n){return e("b-dropdown-item",{key:n.id,attrs:{to:"/playlist?id=".concat(n.id),active:t.isPlaylistActive(n.id)}},[t._v(t._s(n.name)+"\n        ")])})),t._v(" "),t.playlists.length>0?e("b-dropdown-divider"):t._e(),t._v(" "),e("b-dropdown-item",{on:{click:function(e){t.showAddPlaylistModal=!0}}},[t._v("\n          Add Playlist\n        ")])],2):t._e(),t._v(" "),e("b-nav-item",{attrs:{active:t.$route.path.includes("/options"),to:"/options"}},[t._v("\n        Options\n      ")]),t._v(" "),e("b-nav-text",{staticClass:"ov-ukraine-text"},[e("div",[t._v("The leader goes to war - the people die.")])])],1),t._v(" "),e("b-navbar-nav",{staticClass:"ml-auto"},[t._t("default")],2)],1),t._v(" "),e("b-navbar-toggle",{attrs:{target:"nav-text-collapse"}}),t._v(" "),e("AddPlaylistModal",{on:{submit:t.addPlaylist},model:{value:t.showAddPlaylistModal,callback:function(e){t.showAddPlaylistModal=e},expression:"showAddPlaylistModal"}})],1)}),[],!1,null,"6c69e993",null);e.default=component.exports;installComponents(component,{AddPlaylistModal:n(441).default})},453:function(t,e,n){"use strict";n(443)},454:function(t,e,n){var o=n(104)(!1);o.push([t.i,".ov-brand[data-v-6c69e993]{display:flex}.ov-brand img[data-v-6c69e993]{width:3rem;margin-right:.5rem}.ov-brand .ov-brand-text[data-v-6c69e993]{margin:auto}.ov-ukraine-text[data-v-6c69e993]{display:flex;color:#fff;text-align:right;min-width:calc(50vw - 20rem)}.ov-ukraine-text div[data-v-6c69e993]{font-size:1.2rem;padding-left:2rem;margin:auto}",""]),t.exports=o},455:function(t,e,n){var content=n(461);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(105).default)("1b8134b8",content,!1,{sourceMap:!1})},460:function(t,e,n){"use strict";n(455)},461:function(t,e,n){var o=n(104)(!1);o.push([t.i,'.switch[data-v-1d746982]{position:relative;display:inline-block;width:60px;height:34px}.switch input[data-v-1d746982]{opacity:0;width:0;height:0}.slider[data-v-1d746982]{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc;-webkit-transition:.4s;transition:.4s}.slider[data-v-1d746982]:before{position:absolute;content:"";height:26px;width:26px;left:4px;bottom:4px;background-color:#fff;-webkit-transition:.4s;transition:.4s}input:checked+.slider[data-v-1d746982]{background-color:#8dc73f}input:focus+.slider[data-v-1d746982]{box-shadow:0 0 1px #8dc73f}input:checked+.slider[data-v-1d746982]:before{-webkit-transform:translateX(26px);-ms-transform:translateX(26px);transform:translateX(26px)}.slider.round[data-v-1d746982]{border-radius:34px}.slider.round[data-v-1d746982]:before{border-radius:50%}',""]),t.exports=o},475:function(t,e,n){var content=n(521);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(105).default)("78de1de8",content,!1,{sourceMap:!1})},476:function(t,e,n){var content=n(523);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(105).default)("379a9c2a",content,!1,{sourceMap:!1})},485:function(t,e,n){"use strict";n.r(e);n(1),n(70);var o,r=n(18),c=n(17),l=n(38),d=n(44),v=n(25),f=n(9),y=n(164);function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(v.a)(t);if(e){var r=Object(v.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(d.a)(this,n)}}var m=function(t){Object(l.a)(n,t);var e=h(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"handleChange",value:function(){return this.input.checked}}]),n}(y.f);Object(f.b)([Object(y.c)("input"),Object(f.c)("design:type",Boolean)],m.prototype,"value",void 0),Object(f.b)([Object(y.e)("cb"),Object(f.c)("design:type","function"==typeof(o="undefined"!=typeof HTMLInputElement&&HTMLInputElement)?o:Object)],m.prototype,"input",void 0),Object(f.b)([Object(y.b)("input"),Object(f.c)("design:type",Function),Object(f.c)("design:paramtypes",[]),Object(f.c)("design:returntype",void 0)],m.prototype,"handleChange",null);var O=m=Object(f.b)([y.a],m),_=(n(460),n(84)),component=Object(_.a)(O,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("label",{staticClass:"switch"},[e("input",{ref:"cb",attrs:{type:"checkbox"},domProps:{checked:t.value},on:{input:t.handleChange}}),t._v(" "),e("span",{staticClass:"slider round"})])}),[],!1,null,"1d746982",null);e.default=component.exports},520:function(t,e,n){"use strict";n(475)},521:function(t,e,n){var o=n(104)(!1);o.push([t.i,".ov-switch[data-v-54e33fbc]{display:flex}.ov-switch>*[data-v-54e33fbc]{margin:auto .5em}.ov-redirect-switches[data-v-54e33fbc]{max-width:800px;margin:auto}",""]),t.exports=o},522:function(t,e,n){"use strict";n(476)},523:function(t,e,n){var o=n(104)(!1);o.push([t.i,"\n.no-nav-body {\n  width: 1000px;\n  overflow: hidden;\n  background: white;\n  color: black;\n}\n",""]),t.exports=o},551:function(t,e,n){"use strict";n.r(e);n(1),n(70);var o=n(18),r=n(17),c=n(38),l=n(44),d=n(25),v=(n(51),n(9)),f=n(164),y=n(446),h=n(485),m=n(83),O=n(165);function _(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(d.a)(t);if(e){var r=Object(d.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(l.a)(this,n)}}var j=function(t){Object(c.a)(n,t);var e=_(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"mounted",value:function(){this.hideNav&&(document.body.className="no-nav-body")}},{key:"options",get:function(){return O.Store.options}},{key:"hideNav",get:function(){return this.$route.query.hideNav}}]),n}(f.f),x=j=Object(v.b)([Object(f.a)({components:{"ov-switch":h.default,Navigation:y.default},head:function(){return{title:"Options – OpenVideo"}},asyncData:function(){return Object(v.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.send();case 2:return e=t.sent,t.abrupt("return",{scripts:e});case 4:case"end":return t.stop()}}),t)})))}})],j),w=(n(520),n(522),n(84)),component=Object(w.a)(x,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[t.hideNav?t._e():e("Navigation"),t._v(" "),e("div",{staticClass:"container bg-dark my-6 p-3 text-center",staticStyle:{"margin-top":"7rem","margin-bottom":"2rem",border:"solid 1px black"}},[e("h1",{staticClass:"text-primary"},[t._v("Redirect Scripts")]),t._v(" "),e("div",{staticClass:"row ov-redirect-switches"},t._l(t.scripts,(function(script){return e("div",{key:script,staticClass:"p-3 col-4 ov-switch"},[e("ov-switch",{attrs:{value:t.options.isScriptEnabled(script)},on:{input:function(e){return t.options.setScriptEnabled({name:script,enabled:e})}}}),t._v(" "),e("div",[t._v(t._s(script))])],1)})),0),t._v(" "),e("h1",{staticClass:"text-primary"},[t._v("Other Options")]),t._v(" "),e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-auto p-3 ov-switch"},[e("ov-switch",{attrs:{value:t.options.analyticsEnabled},on:{input:function(e){return t.options.setAnalyticsEnabled(e)}}}),t._v(" "),e("div",[t._v("Allow Google Analytics")])],1),t._v(" "),e("div",{staticClass:"col-auto p-3 ov-switch"},[e("ov-switch",{attrs:{value:t.options.videoPopupEnabled},on:{input:function(e){return t.options.setVideoPopupEnabled(e)}}}),t._v(" "),e("div",[t._v("Search for videos")])],1),t._v(" "),e("div",{staticClass:"col-auto p-3 ov-switch"},[e("ov-switch",{attrs:{value:t.options.historyEnabled},on:{input:function(e){return t.options.setHistoryEnabled(e)}}}),t._v(" "),e("div",[t._v("History enabled")])],1)])])],1)}),[],!1,null,"54e33fbc",null);e.default=component.exports;installComponents(component,{Navigation:n(446).default})}}]);