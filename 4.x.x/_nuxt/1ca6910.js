(window.webpackJsonp=window.webpackJsonp||[]).push([[23,6,7,8],{441:function(e,t,n){"use strict";n.r(t);n(29),n(1),n(70);var r,c=n(18),l=n(17),o=n(38),d=n(44),v=n(25),f=n(9),h=n(164);function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(v.a)(e);if(t){var c=Object(v.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(d.a)(this,n)}}var m=function(e){Object(o.a)(n,e);var t=y(n);function n(){var e;return Object(c.a)(this,n),(e=t.apply(this,arguments)).name="",e.nameState=null,e}return Object(l.a)(n,[{key:"visibilityChanged",value:function(){return this.visible}},{key:"checkFormValidity",value:function(){var e=this.form.checkValidity();return this.nameState=e?"valid":"invalid",e}},{key:"resetModal",value:function(){this.name="",this.nameState=null}},{key:"handleOk",value:function(e){e.preventDefault(),this.handleSubmit()}},{key:"handleSubmit",value:function(){var e=this;this.checkFormValidity()&&(this.$nextTick((function(){e.visible=!1})),this.submit(this.name))}},{key:"submit",value:function(e){return e}}]),n}(h.f);Object(f.b)([Object(h.c)("change",{default:!1}),Object(f.c)("design:type",Boolean)],m.prototype,"visible",void 0),Object(f.b)([Object(h.g)("visible"),Object(h.b)("change"),Object(f.c)("design:type",Function),Object(f.c)("design:paramtypes",[]),Object(f.c)("design:returntype",void 0)],m.prototype,"visibilityChanged",null),Object(f.b)([Object(h.e)("form"),Object(f.c)("design:type","function"==typeof(r="undefined"!=typeof HTMLFormElement&&HTMLFormElement)?r:Object)],m.prototype,"form",void 0),Object(f.b)([Object(h.b)("submit"),Object(f.c)("design:type",Function),Object(f.c)("design:paramtypes",[String]),Object(f.c)("design:returntype",void 0)],m.prototype,"submit",null);var j=m=Object(f.b)([Object(h.a)({})],m),k=n(84),component=Object(k.a)(j,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("b-modal",{attrs:{id:"modal-prevent-closing",title:"Add Playlist"},on:{show:e.resetModal,hidden:e.resetModal,ok:e.handleOk},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[t("form",{ref:"form",on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[t("b-form-group",{attrs:{state:e.nameState,label:"Playlist Name","label-for":"playlist-input","invalid-feedback":"Name is required"}},[t("b-form-input",{attrs:{id:"playlist-input",state:e.nameState,required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1)],1)])}),[],!1,null,null,null);t.default=component.exports},442:function(e,t,n){e.exports=n.p+"img/logo256.2df64b8.png"},443:function(e,t,n){var content=n(454);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(105).default)("0f1ddd07",content,!1,{sourceMap:!1})},446:function(e,t,n){"use strict";n.r(t);n(60),n(85),n(29),n(70);var r=n(18),c=n(17),l=n(38),o=n(44),d=n(25),v=(n(2),n(1),n(9)),f=n(164),h=n(165),y=n(441),m=n(212);function j(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(d.a)(e);if(t){var c=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(o.a)(this,n)}}var k=function(e){Object(l.a)(n,e);var t=j(n);function n(){var e;return Object(r.a)(this,n),(e=t.apply(this,arguments)).showAddPlaylistModal=!1,e.playlistFavoritesId=m.a,e}return Object(c.a)(n,[{key:"playlists",get:function(){return h.Store.library.playlists.filter((function(e){return"favorites"!==e.id}))}},{key:"isPlaylistActive",value:function(e){return this.$route.path.includes("/playlist")&&(!e||this.$route.query.id===e)}},{key:"addPlaylist",value:function(e){h.Store.library.newPlaylist(e)}}]),n}(f.f),w=k=Object(v.b)([Object(f.a)({components:{AddPlaylistModal:y.default}})],k),O=(n(453),n(84)),component=Object(O.a)(w,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark",fixed:"top"}},[t("b-navbar-brand",{attrs:{to:"/search"}},[t("div",{staticClass:"ov-brand"},[t("img",{attrs:{src:n(442)}}),e._v(" "),t("div",{staticClass:"ov-brand-text"},[e._v("OpenVideo")])])]),e._v(" "),t("b-collapse",{attrs:{id:"nav-text-collapse","is-nav":""}},[t("b-navbar-nav",[t("b-nav-item",{attrs:{active:e.$route.path.includes("/search"),to:"/search"}},[e._v("\n        Search Videos\n      ")]),e._v(" "),t("b-nav-item",{attrs:{active:e.isPlaylistActive("history"),to:"/playlist?id=history"}},[e._v("\n        History\n      ")]),e._v(" "),t("b-nav-item",{attrs:{active:e.isPlaylistActive(e.playlistFavoritesId),to:"/playlist?id=".concat(e.playlistFavoritesId)}},[e._v("\n        Favorites\n      ")]),e._v(" "),e.playlists?t("b-nav-item-dropdown",{attrs:{active:e.isPlaylistActive(),text:"Playlists",right:""}},[e._l(e.playlists,(function(n){return t("b-dropdown-item",{key:n.id,attrs:{to:"/playlist?id=".concat(n.id),active:e.isPlaylistActive(n.id)}},[e._v(e._s(n.name)+"\n        ")])})),e._v(" "),e.playlists.length>0?t("b-dropdown-divider"):e._e(),e._v(" "),t("b-dropdown-item",{on:{click:function(t){e.showAddPlaylistModal=!0}}},[e._v("\n          Add Playlist\n        ")])],2):e._e(),e._v(" "),t("b-nav-item",{attrs:{active:e.$route.path.includes("/options"),to:"/options"}},[e._v("\n        Options\n      ")]),e._v(" "),t("b-nav-text",{staticClass:"ov-ukraine-text"},[t("div",[e._v("The leader goes to war - the people die.")])])],1),e._v(" "),t("b-navbar-nav",{staticClass:"ml-auto"},[e._t("default")],2)],1),e._v(" "),t("b-navbar-toggle",{attrs:{target:"nav-text-collapse"}}),e._v(" "),t("AddPlaylistModal",{on:{submit:e.addPlaylist},model:{value:e.showAddPlaylistModal,callback:function(t){e.showAddPlaylistModal=t},expression:"showAddPlaylistModal"}})],1)}),[],!1,null,"6c69e993",null);t.default=component.exports;installComponents(component,{AddPlaylistModal:n(441).default})},453:function(e,t,n){"use strict";n(443)},454:function(e,t,n){var r=n(104)(!1);r.push([e.i,".ov-brand[data-v-6c69e993]{display:flex}.ov-brand img[data-v-6c69e993]{width:3rem;margin-right:.5rem}.ov-brand .ov-brand-text[data-v-6c69e993]{margin:auto}.ov-ukraine-text[data-v-6c69e993]{display:flex;color:#fff;text-align:right;min-width:calc(50vw - 20rem)}.ov-ukraine-text div[data-v-6c69e993]{font-size:1.2rem;padding-left:2rem;margin:auto}",""]),e.exports=r},459:function(e,t,n){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},462:function(e,t,n){"use strict";n.r(t);n(29),n(1),n(70);var r,c=n(18),l=n(17),o=n(38),d=n(44),v=n(25),f=(n(13),n(166),n(9)),h=n(164);function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(v.a)(e);if(t){var c=Object(v.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(d.a)(this,n)}}var m=function(e){Object(o.a)(n,e);var t=y(n);function n(){var e;return Object(c.a)(this,n),(e=t.apply(this,arguments)).name="",e.url="",e.nameState=null,e}return Object(l.a)(n,[{key:"visibilityChanged",value:function(){return this.visible}},{key:"checkFormValidity",value:function(){var e=this.form.checkValidity();return this.nameState=e?"valid":"invalid",e}},{key:"resetModal",value:function(){this.name="",this.url="",this.nameState=null}},{key:"handleOk",value:function(e){e.preventDefault(),this.handleSubmit()}},{key:"handleSubmit",value:function(){var e=this;if(this.checkFormValidity()){var t=this.url.match(/(https?:\/\/)?(www.)?([^/]*)(\/.*)?/);t?(this.$nextTick((function(){e.visible=!1})),this.submit({name:this.name,url:t[3]})):this.nameState="invalid"}}},{key:"submit",value:function(data){return data}}]),n}(h.f);Object(f.b)([Object(h.c)("change",{default:!1}),Object(f.c)("design:type",Boolean)],m.prototype,"visible",void 0),Object(f.b)([Object(h.g)("visible"),Object(h.b)("change"),Object(f.c)("design:type",Function),Object(f.c)("design:paramtypes",[]),Object(f.c)("design:returntype",void 0)],m.prototype,"visibilityChanged",null),Object(f.b)([Object(h.e)("form"),Object(f.c)("design:type","function"==typeof(r="undefined"!=typeof HTMLFormElement&&HTMLFormElement)?r:Object)],m.prototype,"form",void 0),Object(f.b)([Object(h.b)("submit"),Object(f.c)("design:type",Function),Object(f.c)("design:paramtypes",[Object]),Object(f.c)("design:returntype",void 0)],m.prototype,"submit",null);var j=m=Object(f.b)([Object(h.a)({})],m),k=n(84),component=Object(k.a)(j,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("b-modal",{attrs:{id:"modal-prevent-closing",title:"Add page to search"},on:{show:e.resetModal,hidden:e.resetModal,ok:e.handleOk},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[t("form",{ref:"form",on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[t("b-form-group",{attrs:{state:e.nameState,label:"Page name","label-for":"page-name-input","invalid-feedback":"Name is required"}},[t("b-form-input",{attrs:{id:"page-name-input",state:e.nameState,placeholder:"eg. YouTube",required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),e._v(" "),t("b-form-group",{attrs:{state:e.nameState,label:"Page url","label-for":"page-url-input","invalid-feedback":"Url is required"}},[t("b-form-input",{attrs:{id:"page-url-input",state:e.nameState,placeholder:"eg. youtube.com",required:""},model:{value:e.url,callback:function(t){e.url=t},expression:"url"}})],1)],1)])}),[],!1,null,null,null);t.default=component.exports},478:function(e,t,n){var content=n(528);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(105).default)("4258baca",content,!1,{sourceMap:!1})},479:function(e,t,n){var content=n(532);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(105).default)("e7222b5e",content,!1,{sourceMap:!1})},527:function(e,t,n){"use strict";n(478)},528:function(e,t,n){var r=n(104),c=n(459),l=n(529),o=n(530),d=r(!1),v=c(l),f=c(o);d.push([e.i,".ov-search-box[data-v-929e2650]{margin-top:10rem;border:solid 1px #000}.has-results[data-v-929e2650]{margin-top:5rem !important}.ov-search-page[data-v-929e2650]{display:flex;flex-flow:column}.ov-search-page .ov-circle[data-v-929e2650]{border-radius:50%;margin:0 auto;padding:1.5rem;position:relative}.ov-search-page .ov-circle .close[data-v-929e2650]{display:none;position:absolute;right:-5px;top:-10px}.ov-search-page .ov-circle:hover .close[data-v-929e2650]{display:block}.ov-search-page .ov-circle img[data-v-929e2650],.ov-search-page .ov-circle .ov-all-pages[data-v-929e2650],.ov-search-page .ov-circle .ov-add-page[data-v-929e2650]{width:2rem;height:2rem;display:block}.ov-search-page .ov-circle .ov-all-pages[data-v-929e2650]{mask:url("+v+") no-repeat center/2rem;-webkit-mask:url("+v+") no-repeat center/2rem;background-color:#8dc73f}.ov-search-page .ov-circle .ov-add-page[data-v-929e2650]{mask:url("+f+") no-repeat center/2rem;-webkit-mask:url("+f+") no-repeat center/2rem;background-color:#8dc73f}.ov-search-page .ov-search-page-text[data-v-929e2650]{margin:0 auto}.ov-result-card .ov-result-title[data-v-929e2650]{display:flex}.ov-result-card .ov-result-title img[data-v-929e2650]{min-width:1.5rem;max-width:1.5rem;height:1.5rem;margin:auto 0}.ov-result-card .ov-result-title .ov-result-text[data-v-929e2650]{margin:auto 0 auto .5rem}",""]),e.exports=d},529:function(e,t,n){e.exports=n.p+"img/dot-matrix.d892e30.svg"},530:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB3aWR0aD0iNTEwcHgiIGhlaWdodD0iNTEwcHgiIHZpZXdCb3g9IjAgMCA1MTAgNTEwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTAgNTEwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPGcgaWQ9ImFkZC1jaXJjbGUtb3V0bGluZSI+CgkJPHBhdGggZD0iTTI4MC41LDEyNy41aC01MXYxMDJoLTEwMnY1MWgxMDJ2MTAyaDUxdi0xMDJoMTAydi01MWgtMTAyVjEyNy41eiBNMjU1LDBDMTE0Ljc1LDAsMCwxMTQuNzUsMCwyNTVzMTE0Ljc1LDI1NSwyNTUsMjU1CgkJCXMyNTUtMTE0Ljc1LDI1NS0yNTVTMzk1LjI1LDAsMjU1LDB6IE0yNTUsNDU5Yy0xMTIuMiwwLTIwNC05MS44LTIwNC0yMDRTMTQyLjgsNTEsMjU1LDUxczIwNCw5MS44LDIwNCwyMDRTMzY3LjIsNDU5LDI1NSw0NTl6Ii8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=="},531:function(e,t,n){"use strict";n(479)},532:function(e,t,n){var r=n(104)(!1);r.push([e.i,".ov-result-card{border:solid 1px #000;cursor:pointer}.ov-result-card .ov-result-content em{font-weight:bold;font-style:normal;color:#8dc73f}",""]),e.exports=r},553:function(e,t,n){"use strict";n.r(t);n(13),n(129),n(60),n(85),n(29),n(5),n(72),n(70);var r=n(18),c=n(17),l=n(38),o=n(44),d=n(25),v=(n(51),n(167),n(16),n(15),n(23),n(2),n(1),n(9)),f=n(164),h=n(446),y=n(462),m=n(165);function j(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(d.a)(e);if(t){var c=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(o.a)(this,n)}}var k=function(e){Object(l.a)(n,e);var t=j(n);function n(){var e;return Object(r.a)(this,n),(e=t.apply(this,arguments)).showAddSearchModal=!1,e.query="",e.searchResults=null,e.selectedPages=[],e}return Object(c.a)(n,[{key:"library",get:function(){return m.Store.library}},{key:"areAllSelected",get:function(){return this.library.searchPages.length===this.selectedPages.length&&0!==this.library.searchPages.length}},{key:"mounted",value:function(){this.queryData?(this.query=this.queryData.query,this.selectedPages=this.queryData.selectedPages):this.toggleAll()}},{key:"handleSubmit",value:function(e){var t=e.url,n=e.name;this.library.addSearchPage({name:n,title:n,url:t,icon:"https://s2.googleusercontent.com/s2/favicons?domain_url=".concat(t)})}},{key:"toggleButton",value:function(e){this.areAllSelected&&(this.selectedPages=[]);var t=this.selectedPages.indexOf(e);-1===t?this.selectedPages.push(e):this.selectedPages.splice(t,1)}},{key:"toggleAll",value:function(){this.areAllSelected?this.selectedPages=[]:this.selectedPages=this.library.searchPages.map((function(e){return e.url}))}},{key:"handleCloseClicked",value:function(e){this.library.removeSearchPage(e)}},{key:"fullQuery",get:function(){return"".concat(this.query," ").concat(this.selectedPages.map((function(e){return"site:".concat(e)})).join(" OR ")).split(" ").filter((function(e){return""!==e})).map((function(e){return encodeURIComponent(e)})).join("+")}},{key:"queryData",get:function(){if(this.$route.query.q)return{query:this.$route.query.q,selectedPages:this.$route.query.sites.split(",")}}},{key:"search",value:function(){return Object(v.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$router.push({path:"/search",query:{q:this.query,sites:this.selectedPages.join(",")}});case 2:this.fetchResults();case 3:case"end":return e.stop()}}),e,this)})))}},{key:"fetchResults",value:function(){var e,t="https://www.startpage.com/sp/search?q=".concat(this.fullQuery,"&pl=ext-chrome");null===(e=window.open(t,"_blank"))||void 0===e||e.focus()}},{key:"handleResultClicked",value:function(e){location.href=e}}]),n}(f.f),w=k=Object(v.b)([Object(f.a)({components:{Navigation:h.default,AddSearchModal:y.default},head:function(){return{title:"Search Videos – OpenVideo"}},meta:{analytics:{pageviewTemplate:function(e){return e.query.data?{page:"/search/results"}:{page:"/search"}}}}})],k),O=(n(527),n(531),n(84)),component=Object(O.a)(w,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",[t("Navigation"),e._v(" "),t("AddSearchModal",{on:{submit:e.handleSubmit},model:{value:e.showAddSearchModal,callback:function(t){e.showAddSearchModal=t},expression:"showAddSearchModal"}}),e._v(" "),t("div",{staticClass:"container p-5 bg-dark ov-search-box",class:{"has-results":!!e.searchResults}},[t("b-input-group",[t("b-form-input",{attrs:{placeholder:"Series / Movie title"},model:{value:e.query,callback:function(t){e.query=t},expression:"query"}}),e._v(" "),t("b-input-group-append",[t("b-button",{attrs:{variant:"outline-primary"},on:{click:function(t){return e.search()}}},[e._v("Search")])],1)],1),e._v(" "),t("div",{staticClass:"row justify-content-center"},[t("div",{staticClass:"col-auto p-3"},[t("div",{staticClass:"ov-search-page"},[t("div",{staticClass:"ov-circle btn btn-secondary",class:{active:e.areAllSelected},on:{click:function(t){return e.toggleAll()}}},[t("div",{staticClass:"ov-all-pages"})]),e._v(" "),t("div",{staticClass:"ov-search-page-text"},[e._v("All Pages")])])]),e._v(" "),e._l(e.library.searchPages,(function(n){return t("div",{key:n.url,staticClass:"col-auto p-3"},[t("div",{staticClass:"ov-search-page"},[t("div",{staticClass:"ov-circle btn btn-secondary",class:{active:e.selectedPages.includes(n.url)&&!e.areAllSelected},on:{click:function(t){return e.toggleButton(n.url)}}},[t("div",{staticClass:"close",on:{click:function(t){return e.handleCloseClicked(n.url)}}},[e._v("\n              ×\n            ")]),e._v(" "),t("img",{attrs:{src:n.icon}})]),e._v(" "),t("div",{staticClass:"ov-search-page-text"},[e._v(e._s(n.name))])])])})),e._v(" "),t("div",{staticClass:"col-auto p-3"},[t("div",{staticClass:"ov-search-page"},[t("div",{staticClass:"ov-circle btn btn-secondary",on:{click:function(t){e.showAddSearchModal=!0}}},[t("div",{staticClass:"ov-add-page"})]),e._v(" "),t("div",{staticClass:"ov-search-page-text"},[e._v("Add Page")])])])],2)],1),e._v(" "),e.searchResults?t("div",{staticClass:"container ov-search-results"},[t("div",{staticClass:"row"},e._l(e.searchResults,(function(n){return t("div",{key:n.url,staticClass:"col-6 p-3"},[t("b-card",{staticClass:"ov-result-card bg-dark",on:{click:function(t){return e.handleResultClicked(n.url)}}},[t("b-card-title",{staticClass:"h5 text-trunc-2-lines text-white"},[t("div",{staticClass:"ov-result-title"},[t("img",{attrs:{src:n.icon}}),e._v(" "),t("div",{staticClass:"ov-result-text"},[e._v(e._s(n.title))])])]),e._v(" "),t("div",{staticClass:"ov-result-content",domProps:{innerHTML:e._s(n.description)}})],1)],1)})),0)]):e._e()],1)}),[],!1,null,"929e2650",null);t.default=component.exports;installComponents(component,{Navigation:n(446).default,AddSearchModal:n(462).default})}}]);