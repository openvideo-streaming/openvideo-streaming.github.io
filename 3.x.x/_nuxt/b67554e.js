(window.webpackJsonp=window.webpackJsonp||[]).push([[22,6,8],{398:function(t,e,n){"use strict";n.r(e);n(78);var r=n(19),o=n(20),l=n(40),c=n(49),d=n(28),f=n(26),v=(n(5),n(1),n(149),n(25),n(148));function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var h,m=function(t,e,n,desc){var r,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(l=(o<3?r(l):o>3?r(e,n,l):r(e,n))||l);return o>3&&l&&Object.defineProperty(e,n,l),l},k=function(t,e){if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},_=function(t){Object(l.a)(n,t);var e=y(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).name="",t.nameState=null,t}return Object(o.a)(n,[{key:"visibilityChanged",value:function(){return this.visible}},{key:"checkFormValidity",value:function(){var t=this.form.checkValidity();return this.nameState=t?"valid":"invalid",t}},{key:"resetModal",value:function(){this.name="",this.nameState=null}},{key:"handleOk",value:function(t){t.preventDefault(),this.handleSubmit()}},{key:"handleSubmit",value:function(){var t=this;this.checkFormValidity()&&(this.$nextTick((function(){t.visible=!1})),this.submit(this.name))}},{key:"submit",value:function(t){return t}}]),n}(v.f);m([Object(v.c)("change",{default:!1}),k("design:type",Boolean)],_.prototype,"visible",void 0),m([Object(v.g)("visible"),Object(v.b)("change"),k("design:type",Function),k("design:paramtypes",[]),k("design:returntype",void 0)],_.prototype,"visibilityChanged",null),m([Object(v.e)("form"),k("design:type","function"==typeof(h="undefined"!=typeof HTMLFormElement&&HTMLFormElement)?h:Object)],_.prototype,"form",void 0),m([Object(v.b)("submit"),k("design:type",Function),k("design:paramtypes",[String]),k("design:returntype",void 0)],_.prototype,"submit",null);var O=_=m([Object(v.a)({})],_),j=n(79),component=Object(j.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-modal",{attrs:{id:"modal-prevent-closing",title:"Add Playlist"},on:{show:t.resetModal,hidden:t.resetModal,ok:t.handleOk},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[n("form",{ref:"form",on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[n("b-form-group",{attrs:{state:t.nameState,label:"Playlist Name","label-for":"playlist-input","invalid-feedback":"Name is required"}},[n("b-form-input",{attrs:{id:"playlist-input",state:t.nameState,required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1)],1)])}),[],!1,null,null,null);e.default=component.exports},399:function(t,e,n){t.exports=n.p+"img/logo256.2df64b8.png"},400:function(t,e,n){var content=n(410);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(95).default)("02cd87b4",content,!0,{sourceMap:!1})},403:function(t,e,n){"use strict";n.r(e);n(78);var r=n(19),o=n(20),l=n(40),c=n(49),d=n(28),f=n(26),v=(n(5),n(1),n(2),n(64),n(80),n(148)),y=n(150),h=n(398),m=n(121);function k(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var _=function(t,e,n,desc){var r,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(l=(o<3?r(l):o>3?r(e,n,l):r(e,n))||l);return o>3&&l&&Object.defineProperty(e,n,l),l},O=function(t){Object(l.a)(n,t);var e=k(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).showAddPlaylistModal=!1,t.playlistFavoritesId=m.c,t}return Object(o.a)(n,[{key:"playlists",get:function(){return y.Store.library.playlists.filter((function(t){return"favorites"!==t.id}))}},{key:"isPlaylistActive",value:function(t){return this.$route.path.includes("/playlist")&&(!t||this.$route.query.id===t)}},{key:"addPlaylist",value:function(t){y.Store.library.newPlaylist(t)}}]),n}(v.f),j=O=_([Object(v.a)({components:{AddPlaylistModal:h.default}})],O),w=(n(409),n(79)),component=Object(w.a)(j,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark",fixed:"top"}},[r("b-navbar-brand",{attrs:{to:"/search"}},[r("div",{staticClass:"ov-brand"},[r("img",{attrs:{src:n(399)}}),t._v(" "),r("div",{staticClass:"ov-brand-text"},[t._v("OpenVideo")])])]),t._v(" "),r("b-collapse",{attrs:{id:"nav-text-collapse","is-nav":""}},[r("b-navbar-nav",[r("b-nav-item",{attrs:{active:t.$route.path.includes("/search"),to:"/search"}},[t._v("\n        Search Videos\n      ")]),t._v(" "),r("b-nav-item",{attrs:{active:t.isPlaylistActive("history"),to:"/playlist?id=history"}},[t._v("\n        History\n      ")]),t._v(" "),r("b-nav-item",{attrs:{active:t.isPlaylistActive(t.playlistFavoritesId),to:"/playlist?id="+t.playlistFavoritesId}},[t._v("\n        Favorites\n      ")]),t._v(" "),t.playlists?r("b-nav-item-dropdown",{attrs:{active:t.isPlaylistActive(),text:"Playlists",right:""}},[t._l(t.playlists,(function(e){return r("b-dropdown-item",{key:e.id,attrs:{to:"/playlist?id="+e.id,active:t.isPlaylistActive(e.id)}},[t._v(t._s(e.name)+"\n        ")])})),t._v(" "),t.playlists.length>0?r("b-dropdown-divider"):t._e(),t._v(" "),r("b-dropdown-item",{on:{click:function(e){t.showAddPlaylistModal=!0}}},[t._v("\n          Add Playlist\n        ")])],2):t._e(),t._v(" "),r("b-nav-item",{attrs:{active:t.$route.path.includes("/options"),to:"/options"}},[t._v("\n        Options\n      ")]),t._v(" "),r("b-nav-text",{staticClass:"ov-ukraine-text"},[r("div",[t._v("The leader goes to war - the people die.")])])],1),t._v(" "),r("b-navbar-nav",{staticClass:"ml-auto"},[t._t("default")],2)],1),t._v(" "),r("b-navbar-toggle",{attrs:{target:"nav-text-collapse"}}),t._v(" "),r("AddPlaylistModal",{on:{submit:t.addPlaylist},model:{value:t.showAddPlaylistModal,callback:function(e){t.showAddPlaylistModal=e},expression:"showAddPlaylistModal"}})],1)}),[],!1,null,"6e818c23",null);e.default=component.exports;installComponents(component,{AddPlaylistModal:n(398).default})},409:function(t,e,n){"use strict";n(400)},410:function(t,e,n){var r=n(94)(!1);r.push([t.i,".ov-brand[data-v-6e818c23]{display:flex}.ov-brand img[data-v-6e818c23]{width:3rem;margin-right:.5rem}.ov-brand .ov-brand-text[data-v-6e818c23]{margin:auto}.ov-ukraine-text[data-v-6e818c23]{display:flex;color:#fff;text-align:right;min-width:calc(50vw - 20rem)}.ov-ukraine-text div[data-v-6e818c23]{font-size:1.2rem;padding-left:2rem;margin:auto}",""]),t.exports=r},432:function(t,e,n){var content=n(481);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(95).default)("ab94b520",content,!0,{sourceMap:!1})},479:function(t,e,n){t.exports=n.p+"img/no-thumbnail.ea55d48.jpg"},480:function(t,e,n){"use strict";n(432)},481:function(t,e,n){var r=n(94)(!1);r.push([t.i,".text-trunc-2-lines[data-v-4862fe63]{display:-webkit-box;-webkit-line-clamp:2;overflow:hidden;-webkit-box-orient:vertical}.ov-video-frame[data-v-4862fe63]{position:relative;width:100%;padding-bottom:56.25%}.ov-video-frame iframe[data-v-4862fe63]{border:none;position:absolute;left:0;right:0;top:0;bottom:0;width:100%;height:100%}.ov-video-card[data-v-4862fe63]{width:15rem;max-width:100%}.ov-video-card .card-body[data-v-4862fe63]{position:relative}.ov-video-card .card-body .ov-video-links[data-v-4862fe63]{position:absolute;right:.25rem;top:-2.5rem}.ov-video-card .card-body .ov-video-links button[data-v-4862fe63]{padding:.5rem}.ov-video-card .card-body .ov-video-links button img[data-v-4862fe63]{width:1rem;height:1rem;display:block}",""]),t.exports=r},504:function(t,e,n){"use strict";n.r(e);n(78);var r=n(19),o=n(20),l=n(40),c=n(49),d=n(28),f=n(26),v=(n(5),n(1),n(11),n(198),n(83),n(39),n(81),n(2),n(25),n(64),n(80),n(15),n(148)),y=n(403),h=n(121),m=n(150);function k(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var _=function(t,e,n,desc){var r,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(l=(o<3?r(l):o>3?r(e,n,l):r(e,n))||l);return o>3&&l&&Object.defineProperty(e,n,l),l},O=function(t){Object(l.a)(c,t);var e=k(c);function c(){var t;return Object(r.a)(this,c),(t=e.apply(this,arguments)).searchQuery="",t.searchInput="",t.noThumbnailSrc=n(479),t.currentVideo=null,t}return Object(o.a)(c,[{key:"playlistId",get:function(){return this.$route.query.id}},{key:"playlistVideos",get:function(){var t=this,filter=function(video){try{return!!video.data.title.match(new RegExp(t.searchQuery,"i"))||!!(video.data.parent||video.data.origin).title.match(new RegExp(t.searchQuery,"i"))}catch(t){return!1}};return"history"===this.playlistId?m.Store.library.getPlaylistVideos().filter(filter).sort((function(a,b){return b.data.lastWatchedTimestamp-a.data.lastWatchedTimestamp})):m.Store.library.getPlaylistVideos(this.playlistId).filter(filter)}},{key:"playlist",get:function(){if("history"===this.playlistId)return{name:"History",id:"history"};if(this.playlistId===h.c)return{name:"Favorites",id:h.c};var t=m.Store.library.getPlaylist(this.playlistId);if(!t)throw new Error("Playlist doesn't exist!");return t}},{key:"mounted",value:function(){document.title="".concat(this.playlist.name," - OpenVideo")}},{key:"handleCardClicked",value:function(video){video.data.origin.name.includes(".")?location.href=video.data.origin.url:this.currentVideo=video}},{key:"handleEditPlaylistClick",value:function(){}},{key:"handleClearHistoryClick",value:function(){m.Store.library.clearHistory()}},{key:"secondsToTimeStr",value:function(t){return new Date(1e3*t).toISOString().match(/T(00:|0)?0?([^.]*)/)[2]}},{key:"handleParentPageClicked",value:function(t){location.href=t}}]),c}(v.f),j=O=_([Object(v.a)({components:{Navigation:y.default},head:{title:"Playlists – OpenVideo"},meta:{analytics:{pageviewTemplate:function(t){var e=["favorites","history"].includes("".concat(t.query.id))?t.query.id:"custom";return{page:"".concat(t.path,"/").concat(e)}}}}})],O),w=(n(480),n(79)),component=Object(w.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Navigation",["history"===t.playlistId?n("b-nav-item",{on:{click:function(e){return t.handleClearHistoryClick()}}},[t._v("\n      Clear history\n    ")]):"favorites"!==t.playlistId?n("b-nav-item",{on:{click:function(e){return t.handleEditPlaylistClick()}}},[t._v("\n      Edit Playlist\n    ")]):t._e(),t._v(" "),n("b-nav-form",[n("b-input-group",[n("b-form-input",{attrs:{placeholder:"Video title"},on:{keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.searchQuery=t.searchInput}},model:{value:t.searchInput,callback:function(e){t.searchInput=e},expression:"searchInput"}}),t._v(" "),n("b-input-group-append",[n("b-button",{attrs:{variant:"outline-primary"},on:{click:function(e){t.searchQuery=t.searchInput}}},[t._v("Search")])],1)],1)],1)],1),t._v(" "),n("div",{staticClass:"container mt-5 pt-5"},[t.currentVideo?n("div",{staticClass:"ov-video-frame"},[n("iframe",{attrs:{src:t.currentVideo.data.origin.url}})]):t._e(),t._v(" "),n("div",{staticClass:"row justify-content-center"},t._l(t.playlistVideos,(function(video){return n("div",{key:video.data.origin.url,staticClass:"col-auto p-3",attrs:{title:(video.data.parent||video.data.origin).title}},[n("b-card",{staticClass:"ov-video-card bg-dark",attrs:{"img-src":video.data.poster||t.noThumbnailSrc,"img-top":""},on:{click:function(e){return t.handleCardClicked(video)}}},[n("b-card-title",{staticClass:"h5 text-trunc-2-lines text-white"},[t._v(t._s((video.data.parent||video.data.origin).title))]),t._v(" "),n("b-progress",{staticStyle:{position:"relative"}},[n("b-progress-bar",{attrs:{value:video.data.watched/video.data.duration*100}},[n("b-badge",{staticStyle:{position:"absolute",right:"2px"},attrs:{variant:"dark"}},[t._v(t._s(t.secondsToTimeStr(video.data.duration)))]),t._v(" "),n("div",[t._v(t._s(t.secondsToTimeStr(video.data.watched)))])],1)],1),t._v(" "),n("div",{staticClass:"ov-video-links"},[video.data.parent?n("b-button",{attrs:{title:"Watch on "+video.data.parent.name,variant:"secondary"},on:{click:function(e){return t.handleParentPageClicked(video.data.parent.url)}}},[n("img",{attrs:{src:video.data.parent.icon}})]):t._e(),t._v(" "),n("b-button",{attrs:{title:"Watch on "+video.data.origin.name+(video.data.origin.name.includes(".")?"":" (direct)"),variant:"secondary"}},[n("img",{attrs:{src:video.data.origin.icon}})])],1)],1)],1)})),0)])],1)}),[],!1,null,"4862fe63",null);e.default=component.exports;installComponents(component,{Navigation:n(403).default})}}]);