(window.webpackJsonp=window.webpackJsonp||[]).push([[22,8],{394:function(t,e,n){var content=n(406);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(120).default)("13b29c2a",content,!0,{sourceMap:!1})},397:function(t,e,n){t.exports=n.p+"img/logo256.2df64b8.png"},398:function(t,e,n){"use strict";n.r(e);n(93);var r=n(21),o=n(22),l=n(45),c=n(57),d=n(32),v=n(27),f=(n(5),n(1),n(2),n(70),n(79),n(390)),y=n(149),h=n(401),m=n(121);function _(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var k=function(t,e,n,desc){var r,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(l=(o<3?r(l):o>3?r(e,n,l):r(e,n))||l);return o>3&&l&&Object.defineProperty(e,n,l),l},w=function(t){Object(l.a)(n,t);var e=_(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).showAddPlaylistModal=!1,t.playlistFavoritesId=m.c,t}return Object(o.a)(n,[{key:"playlists",get:function(){return y.Store.library.playlists.filter((function(t){return"favorites"!==t.id}))}},{key:"isPlaylistActive",value:function(t){return this.$route.path.includes("/playlist")&&(!t||this.$route.query.id===t)}},{key:"addPlaylist",value:function(t){y.Store.library.newPlaylist(t)}}]),n}(f.f),P=w=k([Object(f.a)({components:{AddPlaylistModal:h.default}})],w),O=(n(405),n(78)),component=Object(O.a)(P,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark",fixed:"top"}},[r("b-navbar-brand",{attrs:{to:"/search"}},[r("div",{staticClass:"ov-brand"},[r("img",{attrs:{src:n(397)}}),t._v(" "),r("div",{staticClass:"ov-brand-text"},[t._v("OpenVideo")])])]),t._v(" "),r("b-collapse",{attrs:{id:"nav-text-collapse","is-nav":""}},[r("b-navbar-nav",[r("b-nav-item",{attrs:{active:t.$route.path.includes("/search"),to:"/search"}},[t._v("\n        Search Videos\n      ")]),t._v(" "),r("b-nav-item",{attrs:{active:t.isPlaylistActive("history"),to:"/playlist?id=history"}},[t._v("\n        History\n      ")]),t._v(" "),r("b-nav-item",{attrs:{active:t.isPlaylistActive(t.playlistFavoritesId),to:"/playlist?id="+t.playlistFavoritesId}},[t._v("\n        Favorites\n      ")]),t._v(" "),t.playlists?r("b-nav-item-dropdown",{attrs:{active:t.isPlaylistActive(),text:"Playlists",right:""}},[t._l(t.playlists,(function(e){return r("b-dropdown-item",{key:e.id,attrs:{to:"/playlist?id="+e.id,active:t.isPlaylistActive(e.id)}},[t._v(t._s(e.name)+"\n        ")])})),t._v(" "),t.playlists.length>0?r("b-dropdown-divider"):t._e(),t._v(" "),r("b-dropdown-item",{on:{click:function(e){t.showAddPlaylistModal=!0}}},[t._v("\n          Add Playlist\n        ")])],2):t._e(),t._v(" "),r("b-nav-item",{attrs:{active:t.$route.path.includes("/options"),to:"/options"}},[t._v("\n        Options\n      ")])],1),t._v(" "),r("b-navbar-nav",{staticClass:"ml-auto"},[t._t("default")],2)],1),t._v(" "),r("b-navbar-toggle",{attrs:{target:"nav-text-collapse"}}),t._v(" "),r("AddPlaylistModal",{on:{submit:t.addPlaylist},model:{value:t.showAddPlaylistModal,callback:function(e){t.showAddPlaylistModal=e},expression:"showAddPlaylistModal"}})],1)}),[],!1,null,"5f31b044",null);e.default=component.exports;installComponents(component,{AddPlaylistModal:n(401).default})},405:function(t,e,n){"use strict";n(394)},406:function(t,e,n){var r=n(119)(!1);r.push([t.i,".ov-brand[data-v-5f31b044]{display:flex}.ov-brand img[data-v-5f31b044]{width:3rem;margin-right:.5rem}.ov-brand .ov-brand-text[data-v-5f31b044]{margin:auto}",""]),t.exports=r},428:function(t,e,n){var content=n(477);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(120).default)("ab94b520",content,!0,{sourceMap:!1})},475:function(t,e,n){t.exports=n.p+"img/no-thumbnail.ea55d48.jpg"},476:function(t,e,n){"use strict";n(428)},477:function(t,e,n){var r=n(119)(!1);r.push([t.i,".text-trunc-2-lines[data-v-4862fe63]{display:-webkit-box;-webkit-line-clamp:2;overflow:hidden;-webkit-box-orient:vertical}.ov-video-frame[data-v-4862fe63]{position:relative;width:100%;padding-bottom:56.25%}.ov-video-frame iframe[data-v-4862fe63]{border:none;position:absolute;left:0;right:0;top:0;bottom:0;width:100%;height:100%}.ov-video-card[data-v-4862fe63]{width:15rem;max-width:100%}.ov-video-card .card-body[data-v-4862fe63]{position:relative}.ov-video-card .card-body .ov-video-links[data-v-4862fe63]{position:absolute;right:.25rem;top:-2.5rem}.ov-video-card .card-body .ov-video-links button[data-v-4862fe63]{padding:.5rem}.ov-video-card .card-body .ov-video-links button img[data-v-4862fe63]{width:1rem;height:1rem;display:block}",""]),t.exports=r},500:function(t,e,n){"use strict";n.r(e);n(93);var r=n(21),o=n(22),l=n(45),c=n(57),d=n(32),v=n(27),f=(n(5),n(1),n(11),n(197),n(82),n(39),n(80),n(2),n(25),n(70),n(79),n(15),n(390)),y=n(398),h=n(121),m=n(149);function _(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var k=function(t,e,n,desc){var r,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(l=(o<3?r(l):o>3?r(e,n,l):r(e,n))||l);return o>3&&l&&Object.defineProperty(e,n,l),l},w=function(t){Object(l.a)(c,t);var e=_(c);function c(){var t;return Object(r.a)(this,c),(t=e.apply(this,arguments)).searchQuery="",t.searchInput="",t.noThumbnailSrc=n(475),t.currentVideo=null,t}return Object(o.a)(c,[{key:"playlistId",get:function(){return this.$route.query.id}},{key:"playlistVideos",get:function(){var t=this,filter=function(video){try{return!!video.data.title.match(new RegExp(t.searchQuery,"i"))||!!(video.data.parent||video.data.origin).title.match(new RegExp(t.searchQuery,"i"))}catch(t){return!1}};return"history"===this.playlistId?m.Store.library.getPlaylistVideos().filter(filter).sort((function(a,b){return b.data.lastWatchedTimestamp-a.data.lastWatchedTimestamp})):m.Store.library.getPlaylistVideos(this.playlistId).filter(filter)}},{key:"playlist",get:function(){if("history"===this.playlistId)return{name:"History",id:"history"};if(this.playlistId===h.c)return{name:"Favorites",id:h.c};var t=m.Store.library.getPlaylist(this.playlistId);if(!t)throw new Error("Playlist doesn't exist!");return t}},{key:"mounted",value:function(){document.title="".concat(this.playlist.name," - OpenVideo")}},{key:"handleCardClicked",value:function(video){video.data.origin.name.includes(".")?location.href=video.data.origin.url:this.currentVideo=video}},{key:"handleEditPlaylistClick",value:function(){}},{key:"handleClearHistoryClick",value:function(){m.Store.library.clearHistory()}},{key:"secondsToTimeStr",value:function(t){return new Date(1e3*t).toISOString().match(/T(00:|0)?0?([^.]*)/)[2]}},{key:"handleParentPageClicked",value:function(t){location.href=t}}]),c}(f.f),P=w=k([Object(f.a)({components:{Navigation:y.default},head:{title:"Playlists – OpenVideo"},meta:{analytics:{pageviewTemplate:function(t){var e=["favorites","history"].includes("".concat(t.query.id))?t.query.id:"custom";return{page:"".concat(t.path,"/").concat(e)}}}}})],w),O=(n(476),n(78)),component=Object(O.a)(P,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Navigation",["history"===t.playlistId?n("b-nav-item",{on:{click:function(e){return t.handleClearHistoryClick()}}},[t._v("\n      Clear history\n    ")]):"favorites"!==t.playlistId?n("b-nav-item",{on:{click:function(e){return t.handleEditPlaylistClick()}}},[t._v("\n      Edit Playlist\n    ")]):t._e(),t._v(" "),n("b-nav-form",[n("b-input-group",[n("b-form-input",{attrs:{placeholder:"Video title"},on:{keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.searchQuery=t.searchInput}},model:{value:t.searchInput,callback:function(e){t.searchInput=e},expression:"searchInput"}}),t._v(" "),n("b-input-group-append",[n("b-button",{attrs:{variant:"outline-primary"},on:{click:function(e){t.searchQuery=t.searchInput}}},[t._v("Search")])],1)],1)],1)],1),t._v(" "),n("div",{staticClass:"container mt-5 pt-5"},[t.currentVideo?n("div",{staticClass:"ov-video-frame"},[n("iframe",{attrs:{src:t.currentVideo.data.origin.url}})]):t._e(),t._v(" "),n("div",{staticClass:"row justify-content-center"},t._l(t.playlistVideos,(function(video){return n("div",{key:video.data.origin.url,staticClass:"col-auto p-3",attrs:{title:(video.data.parent||video.data.origin).title}},[n("b-card",{staticClass:"ov-video-card bg-dark",attrs:{"img-src":video.data.poster||t.noThumbnailSrc,"img-top":""},on:{click:function(e){return t.handleCardClicked(video)}}},[n("b-card-title",{staticClass:"h5 text-trunc-2-lines text-white"},[t._v(t._s((video.data.parent||video.data.origin).title))]),t._v(" "),n("b-progress",{staticStyle:{position:"relative"}},[n("b-progress-bar",{attrs:{value:video.data.watched/video.data.duration*100}},[n("b-badge",{staticStyle:{position:"absolute",right:"2px"},attrs:{variant:"dark"}},[t._v(t._s(t.secondsToTimeStr(video.data.duration)))]),t._v(" "),n("div",[t._v(t._s(t.secondsToTimeStr(video.data.watched)))])],1)],1),t._v(" "),n("div",{staticClass:"ov-video-links"},[video.data.parent?n("b-button",{attrs:{title:"Watch on "+video.data.parent.name,variant:"secondary"},on:{click:function(e){return t.handleParentPageClicked(video.data.parent.url)}}},[n("img",{attrs:{src:video.data.parent.icon}})]):t._e(),t._v(" "),n("b-button",{attrs:{title:"Watch on "+video.data.origin.name+(video.data.origin.name.includes(".")?"":" (direct)"),variant:"secondary"}},[n("img",{attrs:{src:video.data.origin.icon}})])],1)],1)],1)})),0)])],1)}),[],!1,null,"4862fe63",null);e.default=component.exports;installComponents(component,{Navigation:n(398).default})}}]);