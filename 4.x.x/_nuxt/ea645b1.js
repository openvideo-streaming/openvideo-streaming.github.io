(window.webpackJsonp=window.webpackJsonp||[]).push([[22,6,8],{441:function(t,e,n){"use strict";n.r(e);n(29),n(1),n(70);var r,o=n(18),l=n(17),c=n(38),d=n(44),v=n(25),f=n(9),y=n(164);function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(v.a)(t);if(e){var o=Object(v.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(d.a)(this,n)}}var m=function(t){Object(c.a)(n,t);var e=h(n);function n(){var t;return Object(o.a)(this,n),(t=e.apply(this,arguments)).name="",t.nameState=null,t}return Object(l.a)(n,[{key:"visibilityChanged",value:function(){return this.visible}},{key:"checkFormValidity",value:function(){var t=this.form.checkValidity();return this.nameState=t?"valid":"invalid",t}},{key:"resetModal",value:function(){this.name="",this.nameState=null}},{key:"handleOk",value:function(t){t.preventDefault(),this.handleSubmit()}},{key:"handleSubmit",value:function(){var t=this;this.checkFormValidity()&&(this.$nextTick((function(){t.visible=!1})),this.submit(this.name))}},{key:"submit",value:function(t){return t}}]),n}(y.f);Object(f.b)([Object(y.c)("change",{default:!1}),Object(f.c)("design:type",Boolean)],m.prototype,"visible",void 0),Object(f.b)([Object(y.g)("visible"),Object(y.b)("change"),Object(f.c)("design:type",Function),Object(f.c)("design:paramtypes",[]),Object(f.c)("design:returntype",void 0)],m.prototype,"visibilityChanged",null),Object(f.b)([Object(y.e)("form"),Object(f.c)("design:type","function"==typeof(r="undefined"!=typeof HTMLFormElement&&HTMLFormElement)?r:Object)],m.prototype,"form",void 0),Object(f.b)([Object(y.b)("submit"),Object(f.c)("design:type",Function),Object(f.c)("design:paramtypes",[String]),Object(f.c)("design:returntype",void 0)],m.prototype,"submit",null);var k=m=Object(f.b)([Object(y.a)({})],m),_=n(84),component=Object(_.a)(k,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("b-modal",{attrs:{id:"modal-prevent-closing",title:"Add Playlist"},on:{show:t.resetModal,hidden:t.resetModal,ok:t.handleOk},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[e("form",{ref:"form",on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[e("b-form-group",{attrs:{state:t.nameState,label:"Playlist Name","label-for":"playlist-input","invalid-feedback":"Name is required"}},[e("b-form-input",{attrs:{id:"playlist-input",state:t.nameState,required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1)],1)])}),[],!1,null,null,null);e.default=component.exports},442:function(t,e,n){t.exports=n.p+"img/logo256.2df64b8.png"},443:function(t,e,n){var content=n(454);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(105).default)("0f1ddd07",content,!1,{sourceMap:!1})},446:function(t,e,n){"use strict";n.r(e);n(60),n(85),n(29),n(70);var r=n(18),o=n(17),l=n(38),c=n(44),d=n(25),v=(n(2),n(1),n(9)),f=n(164),y=n(165),h=n(441),m=n(212);function k(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var _=function(t){Object(l.a)(n,t);var e=k(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).showAddPlaylistModal=!1,t.playlistFavoritesId=m.a,t}return Object(o.a)(n,[{key:"playlists",get:function(){return y.Store.library.playlists.filter((function(t){return"favorites"!==t.id}))}},{key:"isPlaylistActive",value:function(t){return this.$route.path.includes("/playlist")&&(!t||this.$route.query.id===t)}},{key:"addPlaylist",value:function(t){y.Store.library.newPlaylist(t)}}]),n}(f.f),O=_=Object(v.b)([Object(f.a)({components:{AddPlaylistModal:h.default}})],_),j=(n(453),n(84)),component=Object(j.a)(O,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark",fixed:"top"}},[e("b-navbar-brand",{attrs:{to:"/search"}},[e("div",{staticClass:"ov-brand"},[e("img",{attrs:{src:n(442)}}),t._v(" "),e("div",{staticClass:"ov-brand-text"},[t._v("OpenVideo")])])]),t._v(" "),e("b-collapse",{attrs:{id:"nav-text-collapse","is-nav":""}},[e("b-navbar-nav",[e("b-nav-item",{attrs:{active:t.$route.path.includes("/search"),to:"/search"}},[t._v("\n        Search Videos\n      ")]),t._v(" "),e("b-nav-item",{attrs:{active:t.isPlaylistActive("history"),to:"/playlist?id=history"}},[t._v("\n        History\n      ")]),t._v(" "),e("b-nav-item",{attrs:{active:t.isPlaylistActive(t.playlistFavoritesId),to:"/playlist?id=".concat(t.playlistFavoritesId)}},[t._v("\n        Favorites\n      ")]),t._v(" "),t.playlists?e("b-nav-item-dropdown",{attrs:{active:t.isPlaylistActive(),text:"Playlists",right:""}},[t._l(t.playlists,(function(n){return e("b-dropdown-item",{key:n.id,attrs:{to:"/playlist?id=".concat(n.id),active:t.isPlaylistActive(n.id)}},[t._v(t._s(n.name)+"\n        ")])})),t._v(" "),t.playlists.length>0?e("b-dropdown-divider"):t._e(),t._v(" "),e("b-dropdown-item",{on:{click:function(e){t.showAddPlaylistModal=!0}}},[t._v("\n          Add Playlist\n        ")])],2):t._e(),t._v(" "),e("b-nav-item",{attrs:{active:t.$route.path.includes("/options"),to:"/options"}},[t._v("\n        Options\n      ")]),t._v(" "),e("b-nav-text",{staticClass:"ov-ukraine-text"},[e("div",[t._v("The leader goes to war - the people die.")])])],1),t._v(" "),e("b-navbar-nav",{staticClass:"ml-auto"},[t._t("default")],2)],1),t._v(" "),e("b-navbar-toggle",{attrs:{target:"nav-text-collapse"}}),t._v(" "),e("AddPlaylistModal",{on:{submit:t.addPlaylist},model:{value:t.showAddPlaylistModal,callback:function(e){t.showAddPlaylistModal=e},expression:"showAddPlaylistModal"}})],1)}),[],!1,null,"6c69e993",null);e.default=component.exports;installComponents(component,{AddPlaylistModal:n(441).default})},453:function(t,e,n){"use strict";n(443)},454:function(t,e,n){var r=n(104)(!1);r.push([t.i,".ov-brand[data-v-6c69e993]{display:flex}.ov-brand img[data-v-6c69e993]{width:3rem;margin-right:.5rem}.ov-brand .ov-brand-text[data-v-6c69e993]{margin:auto}.ov-ukraine-text[data-v-6c69e993]{display:flex;color:#fff;text-align:right;min-width:calc(50vw - 20rem)}.ov-ukraine-text div[data-v-6c69e993]{font-size:1.2rem;padding-left:2rem;margin:auto}",""]),t.exports=r},477:function(t,e,n){var content=n(526);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(105).default)("b52167ec",content,!1,{sourceMap:!1})},524:function(t,e,n){t.exports=n.p+"img/no-thumbnail.ea55d48.jpg"},525:function(t,e,n){"use strict";n(477)},526:function(t,e,n){var r=n(104)(!1);r.push([t.i,".text-trunc-2-lines[data-v-1df5d6fe]{display:-webkit-box;-webkit-line-clamp:2;overflow:hidden;-webkit-box-orient:vertical}.ov-video-frame[data-v-1df5d6fe]{position:relative;width:100%;padding-bottom:56.25%}.ov-video-frame iframe[data-v-1df5d6fe]{border:none;position:absolute;left:0;right:0;top:0;bottom:0;width:100%;height:100%}.ov-video-card[data-v-1df5d6fe]{width:15rem;max-width:100%}.ov-video-card .card-body[data-v-1df5d6fe]{position:relative}.ov-video-card .card-body .ov-video-links[data-v-1df5d6fe]{position:absolute;right:.25rem;top:-2.5rem}.ov-video-card .card-body .ov-video-links button[data-v-1df5d6fe]{padding:.5rem}.ov-video-card .card-body .ov-video-links button img[data-v-1df5d6fe]{width:1rem;height:1rem;display:block}",""]),t.exports=r},552:function(t,e,n){"use strict";n.r(e);n(29),n(15),n(60),n(85),n(70);var r=n(18),o=n(17),l=n(38),c=n(44),d=n(25),v=(n(13),n(166),n(89),n(46),n(86),n(2),n(1),n(9)),f=n(164),y=n(446),h=n(212),m=n(165);function k(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var _=function(t){Object(l.a)(c,t);var e=k(c);function c(){var t;return Object(r.a)(this,c),(t=e.apply(this,arguments)).searchQuery="",t.searchInput="",t.noThumbnailSrc=n(524),t.currentVideo=null,t}return Object(o.a)(c,[{key:"playlistId",get:function(){return this.$route.query.id}},{key:"playlistVideos",get:function(){var t=this,filter=function(video){try{return!!video.data.title.match(new RegExp(t.searchQuery,"i"))||!!(video.data.parent||video.data.origin).title.match(new RegExp(t.searchQuery,"i"))}catch(t){return!1}};return"history"===this.playlistId?m.Store.library.getPlaylistVideos().filter(filter).sort((function(a,b){return b.data.lastWatchedTimestamp-a.data.lastWatchedTimestamp})):m.Store.library.getPlaylistVideos(this.playlistId).filter(filter)}},{key:"playlist",get:function(){if("history"===this.playlistId)return{name:"History",id:"history"};if(this.playlistId===h.a)return{name:"Favorites",id:h.a};var t=m.Store.library.getPlaylist(this.playlistId);if(!t)throw new Error("Playlist doesn't exist!");return t}},{key:"mounted",value:function(){document.title="".concat(this.playlist.name," - OpenVideo")}},{key:"handleCardClicked",value:function(video){video.data.origin.name.includes(".")?location.href=video.data.origin.url:this.currentVideo=video}},{key:"handleEditPlaylistClick",value:function(){}},{key:"handleClearHistoryClick",value:function(){m.Store.library.clearHistory()}},{key:"secondsToTimeStr",value:function(t){return new Date(1e3*t).toISOString().match(/T(00:|0)?0?([^.]*)/)[2]}},{key:"handleParentPageClicked",value:function(t){location.href=t}}]),c}(f.f),O=_=Object(v.b)([Object(f.a)({components:{Navigation:y.default},head:{title:"Playlists – OpenVideo"},meta:{analytics:{pageviewTemplate:function(t){var e=["favorites","history"].includes("".concat(t.query.id))?t.query.id:"custom";return{page:"".concat(t.path,"/").concat(e)}}}}})],_),j=(n(525),n(84)),component=Object(j.a)(O,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("Navigation",["history"===t.playlistId?e("b-nav-item",{on:{click:function(e){return t.handleClearHistoryClick()}}},[t._v("\n      Clear history\n    ")]):"favorites"!==t.playlistId?e("b-nav-item",{on:{click:function(e){return t.handleEditPlaylistClick()}}},[t._v("\n      Edit Playlist\n    ")]):t._e(),t._v(" "),e("b-nav-form",[e("b-input-group",[e("b-form-input",{attrs:{placeholder:"Video title"},on:{keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.searchQuery=t.searchInput}},model:{value:t.searchInput,callback:function(e){t.searchInput=e},expression:"searchInput"}}),t._v(" "),e("b-input-group-append",[e("b-button",{attrs:{variant:"outline-primary"},on:{click:function(e){t.searchQuery=t.searchInput}}},[t._v("Search")])],1)],1)],1)],1),t._v(" "),e("div",{staticClass:"container mt-5 pt-5"},[t.currentVideo?e("div",{staticClass:"ov-video-frame"},[e("iframe",{attrs:{src:t.currentVideo.data.origin.url}})]):t._e(),t._v(" "),e("div",{staticClass:"row justify-content-center"},t._l(t.playlistVideos,(function(video){return e("div",{key:video.data.origin.url,staticClass:"col-auto p-3",attrs:{title:(video.data.parent||video.data.origin).title}},[e("b-card",{staticClass:"ov-video-card bg-dark",attrs:{"img-src":video.data.poster||t.noThumbnailSrc,"img-top":""},on:{click:function(e){return t.handleCardClicked(video)}}},[e("b-card-title",{staticClass:"h5 text-trunc-2-lines text-white"},[t._v(t._s((video.data.parent||video.data.origin).title))]),t._v(" "),e("b-progress",{staticStyle:{position:"relative"}},[e("b-progress-bar",{attrs:{value:video.data.watched/video.data.duration*100}},[e("b-badge",{staticStyle:{position:"absolute",right:"2px"},attrs:{variant:"dark"}},[t._v(t._s(t.secondsToTimeStr(video.data.duration)))]),t._v(" "),e("div",[t._v(t._s(t.secondsToTimeStr(video.data.watched)))])],1)],1),t._v(" "),e("div",{staticClass:"ov-video-links"},[video.data.parent?e("b-button",{attrs:{title:"Watch on ".concat(video.data.parent.name),variant:"secondary"},on:{click:function(e){return t.handleParentPageClicked(video.data.parent.url)}}},[e("img",{attrs:{src:video.data.parent.icon}})]):t._e(),t._v(" "),e("b-button",{attrs:{title:"Watch on ".concat(video.data.origin.name).concat(video.data.origin.name.includes(".")?"":" (direct)"),variant:"secondary"}},[e("img",{attrs:{src:video.data.origin.icon}})])],1)],1)],1)})),0)])],1)}),[],!1,null,"1df5d6fe",null);e.default=component.exports;installComponents(component,{Navigation:n(446).default})}}]);