(window.webpackJsonp=window.webpackJsonp||[]).push([[8,6],{399:function(t,e,n){"use strict";n.r(e);n(78);var l=n(19),r=n(20),o=n(40),c=n(49),d=n(28),f=n(26),v=(n(5),n(1),n(150),n(25),n(149));function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,l=Object(d.a)(t);if(e){var r=Object(d.a)(this).constructor;n=Reflect.construct(l,arguments,r)}else n=l.apply(this,arguments);return Object(c.a)(this,n)}}var h,m=function(t,e,n,desc){var l,r=arguments.length,o=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(l=t[i])&&(o=(r<3?l(o):r>3?l(e,n,o):l(e,n))||o);return r>3&&o&&Object.defineProperty(e,n,o),o},O=function(t,e){if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},j=function(t){Object(o.a)(n,t);var e=y(n);function n(){var t;return Object(l.a)(this,n),(t=e.apply(this,arguments)).name="",t.nameState=null,t}return Object(r.a)(n,[{key:"visibilityChanged",value:function(){return this.visible}},{key:"checkFormValidity",value:function(){var t=this.form.checkValidity();return this.nameState=t?"valid":"invalid",t}},{key:"resetModal",value:function(){this.name="",this.nameState=null}},{key:"handleOk",value:function(t){t.preventDefault(),this.handleSubmit()}},{key:"handleSubmit",value:function(){var t=this;this.checkFormValidity()&&(this.$nextTick((function(){t.visible=!1})),this.submit(this.name))}},{key:"submit",value:function(t){return t}}]),n}(v.f);m([Object(v.c)("change",{default:!1}),O("design:type",Boolean)],j.prototype,"visible",void 0),m([Object(v.g)("visible"),Object(v.b)("change"),O("design:type",Function),O("design:paramtypes",[]),O("design:returntype",void 0)],j.prototype,"visibilityChanged",null),m([Object(v.e)("form"),O("design:type","function"==typeof(h="undefined"!=typeof HTMLFormElement&&HTMLFormElement)?h:Object)],j.prototype,"form",void 0),m([Object(v.b)("submit"),O("design:type",Function),O("design:paramtypes",[String]),O("design:returntype",void 0)],j.prototype,"submit",null);var _=j=m([Object(v.a)({})],j),k=n(79),component=Object(k.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-modal",{attrs:{id:"modal-prevent-closing",title:"Add Playlist"},on:{show:t.resetModal,hidden:t.resetModal,ok:t.handleOk},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[n("form",{ref:"form",on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[n("b-form-group",{attrs:{state:t.nameState,label:"Playlist Name","label-for":"playlist-input","invalid-feedback":"Name is required"}},[n("b-form-input",{attrs:{id:"playlist-input",state:t.nameState,required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1)],1)])}),[],!1,null,null,null);e.default=component.exports},400:function(t,e,n){t.exports=n.p+"img/logo256.2df64b8.png"},401:function(t,e,n){var content=n(411);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(95).default)("02cd87b4",content,!0,{sourceMap:!1})},404:function(t,e,n){"use strict";n.r(e);n(78);var l=n(19),r=n(20),o=n(40),c=n(49),d=n(28),f=n(26),v=(n(5),n(1),n(2),n(64),n(80),n(149)),y=n(151),h=n(399),m=n(121);function O(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,l=Object(d.a)(t);if(e){var r=Object(d.a)(this).constructor;n=Reflect.construct(l,arguments,r)}else n=l.apply(this,arguments);return Object(c.a)(this,n)}}var j=function(t,e,n,desc){var l,r=arguments.length,o=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(l=t[i])&&(o=(r<3?l(o):r>3?l(e,n,o):l(e,n))||o);return r>3&&o&&Object.defineProperty(e,n,o),o},_=function(t){Object(o.a)(n,t);var e=O(n);function n(){var t;return Object(l.a)(this,n),(t=e.apply(this,arguments)).showAddPlaylistModal=!1,t.playlistFavoritesId=m.c,t}return Object(r.a)(n,[{key:"playlists",get:function(){return y.Store.library.playlists.filter((function(t){return"favorites"!==t.id}))}},{key:"isPlaylistActive",value:function(t){return this.$route.path.includes("/playlist")&&(!t||this.$route.query.id===t)}},{key:"addPlaylist",value:function(t){y.Store.library.newPlaylist(t)}}]),n}(v.f),k=_=j([Object(v.a)({components:{AddPlaylistModal:h.default}})],_),P=(n(410),n(79)),component=Object(P.a)(k,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark",fixed:"top"}},[l("b-navbar-brand",{attrs:{to:"/search"}},[l("div",{staticClass:"ov-brand"},[l("img",{attrs:{src:n(400)}}),t._v(" "),l("div",{staticClass:"ov-brand-text"},[t._v("OpenVideo")])])]),t._v(" "),l("b-collapse",{attrs:{id:"nav-text-collapse","is-nav":""}},[l("b-navbar-nav",[l("b-nav-item",{attrs:{active:t.$route.path.includes("/search"),to:"/search"}},[t._v("\n        Search Videos\n      ")]),t._v(" "),l("b-nav-item",{attrs:{active:t.isPlaylistActive("history"),to:"/playlist?id=history"}},[t._v("\n        History\n      ")]),t._v(" "),l("b-nav-item",{attrs:{active:t.isPlaylistActive(t.playlistFavoritesId),to:"/playlist?id="+t.playlistFavoritesId}},[t._v("\n        Favorites\n      ")]),t._v(" "),t.playlists?l("b-nav-item-dropdown",{attrs:{active:t.isPlaylistActive(),text:"Playlists",right:""}},[t._l(t.playlists,(function(e){return l("b-dropdown-item",{key:e.id,attrs:{to:"/playlist?id="+e.id,active:t.isPlaylistActive(e.id)}},[t._v(t._s(e.name)+"\n        ")])})),t._v(" "),t.playlists.length>0?l("b-dropdown-divider"):t._e(),t._v(" "),l("b-dropdown-item",{on:{click:function(e){t.showAddPlaylistModal=!0}}},[t._v("\n          Add Playlist\n        ")])],2):t._e(),t._v(" "),l("b-nav-item",{attrs:{active:t.$route.path.includes("/options"),to:"/options"}},[t._v("\n        Options\n      ")]),t._v(" "),l("b-nav-text",{staticClass:"ov-ukraine-text"},[l("div",[t._v("The leader goes to war - the people die.")])])],1),t._v(" "),l("b-navbar-nav",{staticClass:"ml-auto"},[t._t("default")],2)],1),t._v(" "),l("b-navbar-toggle",{attrs:{target:"nav-text-collapse"}}),t._v(" "),l("AddPlaylistModal",{on:{submit:t.addPlaylist},model:{value:t.showAddPlaylistModal,callback:function(e){t.showAddPlaylistModal=e},expression:"showAddPlaylistModal"}})],1)}),[],!1,null,"6e818c23",null);e.default=component.exports;installComponents(component,{AddPlaylistModal:n(399).default})},410:function(t,e,n){"use strict";n(401)},411:function(t,e,n){var l=n(94)(!1);l.push([t.i,".ov-brand[data-v-6e818c23]{display:flex}.ov-brand img[data-v-6e818c23]{width:3rem;margin-right:.5rem}.ov-brand .ov-brand-text[data-v-6e818c23]{margin:auto}.ov-ukraine-text[data-v-6e818c23]{display:flex;color:#fff;text-align:right;min-width:calc(50vw - 20rem)}.ov-ukraine-text div[data-v-6e818c23]{font-size:1.2rem;padding-left:2rem;margin:auto}",""]),t.exports=l}}]);