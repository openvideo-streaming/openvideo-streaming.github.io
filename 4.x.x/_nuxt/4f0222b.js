(window.webpackJsonp=window.webpackJsonp||[]).push([[11,8],{440:function(t,e,n){"use strict";var r;function c(t){return function(e){return{trigger:function(n){return e.trigger(t,n)},on:function(n){e.on(t,(function(t,e){n(e)}))}}}}n.r(e),n.d(e,"THEATRE_MODE_CHANGED",(function(){return o})),n.d(e,"DOWNLOAD_VIDEO_SRC",(function(){return l})),n.d(e,"DOWNLOAD_ACTIVE_VIDEO_SRC",(function(){return O})),n.d(e,"ADD_TO_PLAYLIST",(function(){return _})),n.d(e,"REMOVE_FROM_PLAYLIST",(function(){return d})),n.d(e,"PATREON_BUTTON_CLICKED",(function(){return f})),n.d(e,"QUALITY_CHANGED",(function(){return A})),n.d(e,"DOWNLOAD_TRACK_SRC",(function(){return D})),n.d(e,"LOAD_TRACK_FROM_URL",(function(){return R})),n.d(e,"LOAD_TRACK_FROM_FILE",(function(){return L})),function(t){t.THEATRE_MODE_CHANGED="theatre-mode-changed",t.DOWNLOAD_VIDEO_SRC="download-video-source",t.DOWNLOAD_ACTIVE_VIDEO_SRC="download-active-video-source",t.ADD_TO_PLAYLIST="add-to-playlist",t.REMOVE_FROM_PLAYLIST="remove-from-playlist",t.PATREON_BUTTON_CLICKED="patreon-button-clicked",t.QUALITY_CHANGED="quality-changed",t.DOWNLOAD_TRACK_SRC="download-track-src",t.LOAD_TRACK_FROM_URL="load-track-from-url",t.LOAD_TRACK_FROM_FILE="load-track-from-file"}(r||(r={}));var o=c(r.THEATRE_MODE_CHANGED),l=c(r.DOWNLOAD_VIDEO_SRC),O=c(r.DOWNLOAD_ACTIVE_VIDEO_SRC),_=c(r.ADD_TO_PLAYLIST),d=c(r.REMOVE_FROM_PLAYLIST),f=c(r.PATREON_BUTTON_CLICKED),A=c(r.QUALITY_CHANGED),D=c(r.DOWNLOAD_TRACK_SRC),R=c(r.LOAD_TRACK_FROM_URL),L=c(r.LOAD_TRACK_FROM_FILE)},447:function(t,e){},471:function(t,e,n){"use strict";n.r(e),n.d(e,"PlaylistMenuButton",(function(){return R}));n(70);var r=n(18),c=n(17),o=n(211),l=n(38),O=n(46),_=n(25),d=(n(29),n(19),n(106),n(1),n(441)),f=n(440);function A(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(_.a)(t);if(e){var c=Object(_.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(O.a)(this,n)}}var D=function(t){Object(l.a)(n,t);var e=A(n);function n(t){var c,o=t.player,data=t.data,l=t.selected;return Object(r.a)(this,n),(c=e.call(this,o,{label:data.name,selectable:!0,selected:l,multiSelectable:!0})).playlist=data,c.isSelected=l,c}return Object(c.a)(n,[{key:"handleClick",value:function(t){Object(o.a)(Object(_.a)(n.prototype),"handleClick",this).call(this,t),this.isSelected=!this.isSelected,this.selected(this.isSelected),this.isSelected?Object(f.ADD_TO_PLAYLIST)(this.player()).trigger(this.playlist):Object(f.REMOVE_FROM_PLAYLIST)(this.player()).trigger(this.playlist)}}]),n}(d.default.getComponent("MenuItem")),R=function(t){Object(l.a)(n,t);var e=A(n);function n(t){var c,o=t.player,data=t.data;return Object(r.a)(this,n),(c=e.call(this,o,{})).addClass("vjs-playlist-button"),c.setData(data),c}return Object(c.a)(n,[{key:"setData",value:function(data){this.data=data,this.update()}},{key:"createItems",value:function(){var t=this;return this.data?this.data.playlists.map((function(e){return new D({player:t.player(),data:e,selected:!!t.data.active.find((function(t){return t.id===e.id}))})})):[]}}]),n}(d.default.getComponent("MenuButton"))}}]);