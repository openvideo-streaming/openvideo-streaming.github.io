(window.webpackJsonp=window.webpackJsonp||[]).push([[7,5],{442:function(t,e,n){"use strict";n.r(e);n(29),n(1),n(70);var l,r=n(18),o=n(17),c=n(38),d=n(46),v=n(25),f=n(9),y=n(164);function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,l=Object(v.a)(t);if(e){var r=Object(v.a)(this).constructor;n=Reflect.construct(l,arguments,r)}else n=l.apply(this,arguments);return Object(d.a)(this,n)}}var m=function(t){Object(c.a)(n,t);var e=h(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).name="",t.nameState=null,t}return Object(o.a)(n,[{key:"visibilityChanged",value:function(){return this.visible}},{key:"checkFormValidity",value:function(){var t=this.form.checkValidity();return this.nameState=t?"valid":"invalid",t}},{key:"resetModal",value:function(){this.name="",this.nameState=null}},{key:"handleOk",value:function(t){t.preventDefault(),this.handleSubmit()}},{key:"handleSubmit",value:function(){var t=this;this.checkFormValidity()&&(this.$nextTick((function(){t.visible=!1})),this.submit(this.name))}},{key:"submit",value:function(t){return t}}]),n}(y.f);Object(f.b)([Object(y.c)("change",{default:!1}),Object(f.c)("design:type",Boolean)],m.prototype,"visible",void 0),Object(f.b)([Object(y.g)("visible"),Object(y.b)("change"),Object(f.c)("design:type",Function),Object(f.c)("design:paramtypes",[]),Object(f.c)("design:returntype",void 0)],m.prototype,"visibilityChanged",null),Object(f.b)([Object(y.e)("form"),Object(f.c)("design:type","function"==typeof(l="undefined"!=typeof HTMLFormElement&&HTMLFormElement)?l:Object)],m.prototype,"form",void 0),Object(f.b)([Object(y.b)("submit"),Object(f.c)("design:type",Function),Object(f.c)("design:paramtypes",[String]),Object(f.c)("design:returntype",void 0)],m.prototype,"submit",null);var O=m=Object(f.b)([Object(y.a)({})],m),j=n(86),component=Object(j.a)(O,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("b-modal",{attrs:{id:"modal-prevent-closing",title:"Add Playlist"},on:{show:t.resetModal,hidden:t.resetModal,ok:t.handleOk},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[e("form",{ref:"form",on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[e("b-form-group",{attrs:{state:t.nameState,label:"Playlist Name","label-for":"playlist-input","invalid-feedback":"Name is required"}},[e("b-form-input",{attrs:{id:"playlist-input",state:t.nameState,required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1)],1)])}),[],!1,null,null,null);e.default=component.exports},443:function(t,e,n){t.exports=n.p+"img/logo256.2df64b8.png"},444:function(t,e,n){var content=n(450);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(105).default)("0f1ddd07",content,!1,{sourceMap:!1})},446:function(t,e,n){"use strict";n.r(e);n(61),n(87),n(29),n(70);var l=n(18),r=n(17),o=n(38),c=n(46),d=n(25),v=(n(3),n(1),n(9)),f=n(164),y=n(165),h=n(442),m=n(212);function O(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,l=Object(d.a)(t);if(e){var r=Object(d.a)(this).constructor;n=Reflect.construct(l,arguments,r)}else n=l.apply(this,arguments);return Object(c.a)(this,n)}}var j=function(t){Object(o.a)(n,t);var e=O(n);function n(){var t;return Object(l.a)(this,n),(t=e.apply(this,arguments)).showAddPlaylistModal=!1,t.playlistFavoritesId=m.a,t}return Object(r.a)(n,[{key:"playlists",get:function(){return y.Store.library.playlists.filter((function(t){return"favorites"!==t.id}))}},{key:"isPlaylistActive",value:function(t){return this.$route.path.includes("/playlist")&&(!t||this.$route.query.id===t)}},{key:"addPlaylist",value:function(t){y.Store.library.newPlaylist(t)}}]),n}(f.f),_=j=Object(v.b)([Object(f.a)({components:{AddPlaylistModal:h.default}})],j),k=(n(449),n(86)),component=Object(k.a)(_,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark",fixed:"top"}},[e("b-navbar-brand",{attrs:{to:"/search"}},[e("div",{staticClass:"ov-brand"},[e("img",{attrs:{src:n(443)}}),t._v(" "),e("div",{staticClass:"ov-brand-text"},[t._v("OpenVideo")])])]),t._v(" "),e("b-collapse",{attrs:{id:"nav-text-collapse","is-nav":""}},[e("b-navbar-nav",[e("b-nav-item",{attrs:{active:t.$route.path.includes("/search"),to:"/search"}},[t._v("\n        Search Videos\n      ")]),t._v(" "),e("b-nav-item",{attrs:{active:t.isPlaylistActive("history"),to:"/playlist?id=history"}},[t._v("\n        History\n      ")]),t._v(" "),e("b-nav-item",{attrs:{active:t.isPlaylistActive(t.playlistFavoritesId),to:"/playlist?id=".concat(t.playlistFavoritesId)}},[t._v("\n        Favorites\n      ")]),t._v(" "),t.playlists?e("b-nav-item-dropdown",{attrs:{active:t.isPlaylistActive(),text:"Playlists",right:""}},[t._l(t.playlists,(function(n){return e("b-dropdown-item",{key:n.id,attrs:{to:"/playlist?id=".concat(n.id),active:t.isPlaylistActive(n.id)}},[t._v(t._s(n.name)+"\n        ")])})),t._v(" "),t.playlists.length>0?e("b-dropdown-divider"):t._e(),t._v(" "),e("b-dropdown-item",{on:{click:function(e){t.showAddPlaylistModal=!0}}},[t._v("\n          Add Playlist\n        ")])],2):t._e(),t._v(" "),e("b-nav-item",{attrs:{active:t.$route.path.includes("/options"),to:"/options"}},[t._v("\n        Options\n      ")]),t._v(" "),e("b-nav-text",{staticClass:"ov-ukraine-text"},[e("div",[t._v("The leader goes to war - the people die.")])])],1),t._v(" "),e("b-navbar-nav",{staticClass:"ml-auto"},[t._t("default")],2)],1),t._v(" "),e("b-navbar-toggle",{attrs:{target:"nav-text-collapse"}}),t._v(" "),e("AddPlaylistModal",{on:{submit:t.addPlaylist},model:{value:t.showAddPlaylistModal,callback:function(e){t.showAddPlaylistModal=e},expression:"showAddPlaylistModal"}})],1)}),[],!1,null,"6c69e993",null);e.default=component.exports;installComponents(component,{AddPlaylistModal:n(442).default})},449:function(t,e,n){"use strict";n(444)},450:function(t,e,n){var l=n(104)(!1);l.push([t.i,".ov-brand[data-v-6c69e993]{display:flex}.ov-brand img[data-v-6c69e993]{width:3rem;margin-right:.5rem}.ov-brand .ov-brand-text[data-v-6c69e993]{margin:auto}.ov-ukraine-text[data-v-6c69e993]{display:flex;color:#fff;text-align:right;min-width:calc(50vw - 20rem)}.ov-ukraine-text div[data-v-6c69e993]{font-size:1.2rem;padding-left:2rem;margin:auto}",""]),t.exports=l}}]);