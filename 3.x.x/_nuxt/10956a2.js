(window.webpackJsonp=window.webpackJsonp||[]).push([[3,9],{391:function(t,e,r){"use strict";var n;function o(t){return function(e){return{trigger:function(r){return e.trigger(t,r)},on:function(r){e.on(t,(function(t,e){r(e)}))}}}}r.r(e),r.d(e,"THEATRE_MODE_CHANGED",(function(){return c})),r.d(e,"DOWNLOAD_VIDEO_SRC",(function(){return l})),r.d(e,"DOWNLOAD_ACTIVE_VIDEO_SRC",(function(){return d})),r.d(e,"ADD_TO_PLAYLIST",(function(){return f})),r.d(e,"REMOVE_FROM_PLAYLIST",(function(){return h})),r.d(e,"PATREON_BUTTON_CLICKED",(function(){return v})),r.d(e,"QUALITY_CHANGED",(function(){return y})),r.d(e,"DOWNLOAD_TRACK_SRC",(function(){return j})),r.d(e,"LOAD_TRACK_FROM_URL",(function(){return m})),r.d(e,"LOAD_TRACK_FROM_FILE",(function(){return O})),function(t){t.THEATRE_MODE_CHANGED="theatre-mode-changed",t.DOWNLOAD_VIDEO_SRC="download-video-source",t.DOWNLOAD_ACTIVE_VIDEO_SRC="download-active-video-source",t.ADD_TO_PLAYLIST="add-to-playlist",t.REMOVE_FROM_PLAYLIST="remove-from-playlist",t.PATREON_BUTTON_CLICKED="patreon-button-clicked",t.QUALITY_CHANGED="quality-changed",t.DOWNLOAD_TRACK_SRC="download-track-src",t.LOAD_TRACK_FROM_URL="load-track-from-url",t.LOAD_TRACK_FROM_FILE="load-track-from-file"}(n||(n={}));var c=o(n.THEATRE_MODE_CHANGED),l=o(n.DOWNLOAD_VIDEO_SRC),d=o(n.DOWNLOAD_ACTIVE_VIDEO_SRC),f=o(n.ADD_TO_PLAYLIST),h=o(n.REMOVE_FROM_PLAYLIST),v=o(n.PATREON_BUTTON_CLICKED),y=o(n.QUALITY_CHANGED),j=o(n.DOWNLOAD_TRACK_SRC),m=o(n.LOAD_TRACK_FROM_URL),O=o(n.LOAD_TRACK_FROM_FILE)},402:function(t,e){},407:function(t,e,r){"use strict";r.d(e,"addRefererToUrl",(function(){return o})),r.d(e,"isRefererInUrl",(function(){return c}));var n=r(198);function o(t){var e=t.url,r=t.referer;return Object(n.appendToQuery)({url:e,key:"ovreferer",value:btoa(r)})}function c(t){var e=Object(n.parseUrl)(t).query,r=e.ovreferer,o=e.OVReferer;return!!r||!!o}r.o(n,"decodeUrlParamToObject")&&r.d(e,"decodeUrlParamToObject",(function(){return n.decodeUrlParamToObject})),r.o(n,"setIgnoreUrlFlag")&&r.d(e,"setIgnoreUrlFlag",(function(){return n.setIgnoreUrlFlag})),r.o(n,"sleep")&&r.d(e,"sleep",(function(){return n.sleep}))},409:function(t,e,r){"use strict";r.r(e);r(93),r(6),r(4),r(2),r(7);var n=r(17),o=r(0),c=r(21),l=r(22),d=r(45),f=r(57),h=r(32),v=r(27),y=(r(52),r(5),r(1),r(148),r(94),r(11),r(23),r(16),r(3),r(65),r(49),r(64),r(79),r(40),r(15),r(25),r(203),r(55),r(437),r(278),r(31),r(150),r(197),r(390)),j=r(393),m=r(118),O=r.n(m),M=r(121),D=r(149),k=r(200),T=r(61),I=r(407),w=r(391),C=r(419),R=r(420),S=r(421),L=r(422),_=r(423),A=r(435);r(459),r(460);function N(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function E(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?N(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):N(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function x(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(h.a)(t);if(e){var o=Object(h.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}var P,z,B,V,Y,U=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},H=function(t,e){if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},F=function(t){Object(d.a)(f,t);var e,r,o=x(f);function f(){var t;return Object(c.a)(this,f),(t=o.apply(this,arguments)).webstoreUrl=Object(k.b)(),t._player=null,t.qualityMenu=null,t.playlistMenu=null,t.srtSelector=document.createElement("input"),t.warning=null,t.error=null,t.showTextTrackUrlInput=!1,t.disableSharePopup=!1,t.showShareAlert=!1,t}return Object(l.a)(f,[{key:"emitVideoJSError",value:function(t){return t}},{key:"player",get:function(){if(!this._player)throw new Error("Player isn't created jet!");return this._player}},{key:"activeVideoSource",get:function(){var t=this.player.src(),e=this.videoData.src.find((function(e){return e.src===t}));if(!e)throw new Error("No video source active!");return e}},{key:"playlistEntry",get:function(){return D.Store.library.getResolvedVideoEntry(this.videoData.origin.url)}},{key:"play",value:function(){this.player.play()}},{key:"pause",value:function(){this.player.pause()}},{key:"setReloadStateError",value:function(t){var e=this;this.error="".concat(t.message,"\nTry to reload the video by hitting the play button!"),this.player.error(null),this.pause(),this.player.bigPlayButton.show(),this.player.bigPlayButton.one("click",(function(){location.replace(e.videoData.origin.url)}))}},{key:"hasStarted",value:function(){return!!this.playlistEntry}},{key:"updateShowShareAlert",value:function(){if(D.Store.player.disableSharePopup)this.showShareAlert=!1;else{var t=D.Store.player.sharePopupShownDate;if(t){var e=new Date(t),r=new Date,n=Math.abs(+r-+e),o=Math.ceil(n/864e5);this.showShareAlert=o>=14}else D.Store.player.setSharePopupShownDate(Date.now()),this.showShareAlert=!1}}},{key:"handleShareAlertDismissed",value:function(){this.disableSharePopup&&D.Store.player.setDisableSharePopup(!0),D.Store.player.setSharePopupShownDate(+new Date)}},{key:"head",value:function(){return{title:"".concat(this.videoData.title||"Watch video"," – OpenVideo")}}},{key:"handleVideoDataChange",value:function(t,e){e&&this.videoData&&this.updatePlayer()}},{key:"updatePlayer",value:function(){var t=this;this.qualityMenu?this.qualityMenu.setSources(this.videoData.src):this.qualityMenu=this.addBeforeFullscreen(new S.QualityMenuButton({player:this.player,sources:this.videoData.src})),this.playlistMenu?this.playlistMenu.setData({playlists:D.Store.library.playlists,active:this.playlistEntry?this.playlistEntry.playlists.map((function(t){return t.playlist})):[]}):this.playlistMenu=this.addBeforeFullscreen(new L.PlaylistMenuButton({player:this.player,data:{playlists:D.Store.library.playlists,active:this.playlistEntry?this.playlistEntry.playlists.map((function(t){return t.playlist})):[]}})),this.videoData.poster&&this.player.poster(this.videoData.poster),Array.from(this.player.textTracks()).forEach((function(track){track.mode="disabled"})),this.videoData.tracks.forEach((function(track){t.appendTextTrack(track)})),this.player.one("loadedmetadata",(function(){t.playlistEntry&&t.player.currentTime(t.playlistEntry.data.watched)}))}},{key:"mounted",value:function(){var t=this;this.updateShowShareAlert(),_.setup(),this.setupSrtSelector(),this._player=Object(j.default)(this.videoPlayer,E(E({},this.options),{},{playbackRates:[.5,.75,1,1.5,2],controls:!0}),Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.playerReady();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),e.t0 instanceof Error&&(t.error=e.t0.message);case 8:case"end":return e.stop()}}),e,null,[[0,5]])}))))}},{key:"beforeDestroy",value:function(){this._player&&this._player.dispose()}},{key:"playerReady",value:function(){var t=this;this.player.hotkeys({volumeStep:.1,seekStep:5,enableModifiersForNumbers:!1}),Object(w.ADD_TO_PLAYLIST)(this.player).on((function(e){D.Store.library.addToPlaylist({origin:t.videoData.origin.url,playlistId:e.id})})),Object(w.REMOVE_FROM_PLAYLIST)(this.player).on((function(e){D.Store.library.removeFromPlaylist({origin:t.videoData.origin.url,playlistId:e.id})})),Object(w.THEATRE_MODE_CHANGED)(this.player).on((function(t){var e=t.isEnabled;T.h.send({isEnabled:e,width:window.innerWidth,height:window.innerHeight})})),Object(w.DOWNLOAD_VIDEO_SRC)(this.player).on((function(e){t.downloadVideoSource(e)})),Object(w.DOWNLOAD_ACTIVE_VIDEO_SRC)(this.player).on((function(){t.downloadVideoSource(t.activeVideoSource)})),Object(w.DOWNLOAD_TRACK_SRC)(this.player).on((function(e){var label=e.label;t.downloadTrackSource(label)})),Object(w.QUALITY_CHANGED)(this.player).on((function(){})),Object(w.LOAD_TRACK_FROM_URL)(this.player).on((function(){t.showTextTrackUrlInput=!0})),Object(w.LOAD_TRACK_FROM_FILE)(this.player).on((function(){t.srtSelector.click()})),this.player.on("loadstart",(function(){var e=t.player.tech();e.hls&&(e.hls.xhr.beforeRequest=function(e){Object(I.isRefererInUrl)(e.uri)||(e.uri=Object(I.addRefererToUrl)({url:e.uri,referer:t.videoData.origin.url}))})})),this.player.on("volumechange",(function(){D.Store.player.setVolume(t.player.volume())})),this.player.el().addEventListener("mouseleave",(function(){0!==t.player.currentTime()&&t.saveToHistory()})),this.player.on("error",(function(){var e=t.player.error();e&&t.emitVideoJSError(e)})),this.player.on("play",(function(){return t.$emit("play")})),this.player.on("pause",(function(){return t.$emit("pause")})),this.player.volume(D.Store.player.volume),this.addBeforeFullscreen(new C.DownloadButton(this.player)),this.addBeforeFullscreen(new R.PatreonButton(this.player)),this.player.controlBar.getChild("SubsCapsButton").show(),this.updatePlayer()}},{key:"addBeforeFullscreen",value:function(t){return this.player.controlBar.addChild(t,null,this.player.controlBar.children().length-2),t}},{key:"handleTextTrackUrlSubmit",value:function(t){this.appendTextTrack({src:t,language:"ADDED_FROM_USER",kind:"captions",label:"Custom"})}},{key:"saveToHistory",value:function(){D.Store.library.updateHistory({poster:this.videoData.poster,title:this.videoData.title,origin:this.videoData.origin,parent:this.videoData.parent,watched:this.player.currentTime(),duration:this.player.duration()})}},{key:"download",value:(r=Object(n.a)(regeneratorRuntime.mark((function t(data){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T.f.send(data);case 3:t.next=12;break;case 5:if(t.prev=5,t.t0=t.catch(0),!(t.t0 instanceof Error)){t.next=11;break}this.error=t.t0.message,t.next=12;break;case 11:throw t.t0;case 12:case"end":return t.stop()}}),t,this,[[0,5]])}))),function(t){return r.apply(this,arguments)})},{key:"downloadVideoSource",value:function(t){var e,r,n,o={label:t.label,src:(null===(e=t.dlsrc)||void 0===e?void 0:e.src)||t.src,type:(null===(r=t.dlsrc)||void 0===r?void 0:r.type)||t.type,filename:null===(n=t.dlsrc)||void 0===n?void 0:n.filename};if(!o.type.includes("application/")){var c=o.filename||"".concat(this.videoData.title,".").concat(o.type.substr(o.type.indexOf("/")+1)).replace(/[/\\?%*:|"<>]/g," ").trim();return o.label&&(c="[".concat(o.label,"]").concat(c)),this.download({url:o.src,filename:c})}this.warning="HLS videos can't be downloaded! \nTry downloading that video from a different hoster."}},{key:"downloadTrackSource",value:function(label){var t=this.videoData.tracks.find((function(t){return label===t.label}));if(t){var e="[".concat(t.label,"]").concat(this.videoData.title).concat(".vtt".replace(/[/\\?%*:|"<>]/g," ").trim());return this.download({url:t.src,filename:e})}}},{key:"appendTextTrack",value:(e=Object(n.a)(regeneratorRuntime.mark((function t(e){var r,label,n,o,c,l,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.kind,label=e.label,n=e.language,o=e.default,c=e.src,t.next=3,O.a.get(c);case 3:l=t.sent,d=W(l.data),this.player.addRemoteTextTrack({kind:r,label:label,language:n,src:d,default:o},!0);case 6:case"end":return t.stop()}}),t,this)}))),function(t){return e.apply(this,arguments)})},{key:"setupSrtSelector",value:function(){var t=this;this.srtSelector.type="file",this.srtSelector.accept=".vtt, .srt, .txt",this.srtSelector.style.display="none",this.srtSelector.addEventListener("change",(function(){var e=new FileReader;e.onload=function(){var r=W(e.result);t.player.addRemoteTextTrack({label:t.srtSelector.files[0].name,language:"ADDED_FROM_USER",kind:"captions",src:r},!0)},e.readAsText(t.srtSelector.files[0],"ISO-8859-1")}))}}]),f}(y.f);function W(t){return t.startsWith("WEBVTT")||(t=function(data){var t=data.replace(/\r+/g,""),e=(t=t.replace(/^\s+|\s+$/g,"")).split("\n\n"),r="";if(e.length>0){r+="WEBVTT\n\n";for(var i=0;i<e.length;i+=1)r+=Q(e[i])}return r}(t)),URL.createObjectURL(new Blob([t],{type:"text/vtt"}))}function Q(caption){for(var t="",s=caption.split(/\n/);s.length>3;){for(var i=3;i<s.length;i++)s[2]+="\n".concat(s[i]);s.splice(3,s.length-3)}var line=0;if(!s[0].match(/\d+:\d+:\d+/)&&s[1].match(/\d+:\d+:\d+/)&&(t+="".concat(s[0].match(/\w+/),"\n"),line+=1),!s[line].match(/\d+:\d+:\d+/))return"";var e=s[1].match(/(\d+):(\d+):(\d+)(?:,(\d+))?\s*--?>\s*(\d+):(\d+):(\d+)(?:,(\d+))?/);return e?(t+="".concat(e[1],":").concat(e[2],":").concat(e[3],".").concat(e[4]," --\x3e ").concat(e[5],":").concat(e[6],":").concat(e[7],".").concat(e[8],"\n"),s[line+=1]&&(t+="".concat(s[line],"\n\n")),t):""}U([Object(y.e)("videoPlayer"),H("design:type","function"==typeof(P="undefined"!=typeof HTMLVideoElement&&HTMLVideoElement)?P:Object)],F.prototype,"videoPlayer",void 0),U([Object(y.d)({default:function(){}}),H("design:type","function"==typeof(z=void 0!==j.default&&j.default.PlayerOptions)?z:Object)],F.prototype,"options",void 0),U([Object(y.b)("error"),H("design:type",Function),H("design:paramtypes",["function"==typeof(B="undefined"!=typeof MediaError&&MediaError)?B:Object]),H("design:returntype",void 0)],F.prototype,"emitVideoJSError",null),U([Object(y.d)({required:!0}),H("design:type","function"==typeof(V=void 0!==M.VideoData&&M.VideoData)?V:Object)],F.prototype,"videoData",void 0),U([Object(y.d)({default:!0}),H("design:type",Boolean)],F.prototype,"allowTheatreMode",void 0),U([Object(y.g)("videoData"),H("design:type",Function),H("design:paramtypes",["function"==typeof(Y=void 0!==M.VideoData&&M.VideoData)?Y:Object,Object]),H("design:returntype",void 0)],F.prototype,"handleVideoDataChange",null);var Z=F=U([Object(y.a)({components:{TextTrackUrlModal:A.default}})],F),G=(r(462),r(78)),component=Object(G.a)(Z,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("video",{ref:"videoPlayer",staticClass:"video-js vjs-big-play-centered",attrs:{preload:"auto"}}),t._v(" "),r("div",{staticClass:"fixed-top"},[r("b-alert",{staticClass:"mx-auto my-3 w-75",attrs:{show:!!t.warning,variant:"warning",dismissible:""},on:{dismissed:function(e){t.warning=null}}},[t._v("\n      "+t._s(t.warning)+"\n    ")]),t._v(" "),r("b-alert",{staticClass:"mx-auto my-3 w-75",attrs:{show:!!t.error,variant:"danger",dismissible:""},on:{dismissed:function(e){t.error=null}}},[t._v("\n      "+t._s(t.error)+"\n    ")]),t._v(" "),r("b-alert",{staticClass:"mx-auto my-3 w-75 bg-secondary text-white",attrs:{show:t.showShareAlert,dismissible:""},on:{dismissed:function(e){return t.handleShareAlertDismissed()}}},[t._v("\n      Hi!\n      "),r("p",[t._v("\n        I really appreciate that you are using OpenVideo that much! If you\n        want to support me, recommend OpenVideo to one of your friends.\n      ")]),t._v(" "),r("p",[t._v("\n        You can also rate OpenVideo or write a review for it in the webstore:\n        "),r("b-link",{attrs:{href:t.webstoreUrl,target:"_blank"}},[t._v("Click here")]),t._v(" (opens\n        in new tab).\n      ")],1),t._v(" "),r("p",[t._v("Thank you so much!")]),t._v(" "),r("b-checkbox",{model:{value:t.disableSharePopup,callback:function(e){t.disableSharePopup=e},expression:"disableSharePopup"}},[t._v("Don't show this again")])],1)],1),t._v(" "),r("TextTrackUrlModal",{on:{submit:t.handleTextTrackUrlSubmit},model:{value:t.showTextTrackUrlInput,callback:function(e){t.showTextTrackUrlInput=e},expression:"showTextTrackUrlInput"}})],1)}),[],!1,null,null,null);e.default=component.exports},419:function(t,e,r){"use strict";r.r(e),r.d(e,"DownloadButton",(function(){return y}));r(1),r(93);var n=r(21),o=r(22),c=r(45),l=r(57),d=r(32),f=r(393),h=r(391);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var y=function(t){Object(c.a)(r,t);var e=v(r);function r(t){var o;return Object(n.a)(this,r),(o=e.call(this,t)).addClass("vjs-download-button"),o}return Object(o.a)(r,[{key:"handleClick",value:function(){Object(h.DOWNLOAD_ACTIVE_VIDEO_SRC)(this.player()).trigger()}}]),r}(f.default.getComponent("Button"))},420:function(t,e,r){"use strict";r.r(e),r.d(e,"PatreonButton",(function(){return j}));r(1),r(93);var n=r(21),o=r(22),c=r(45),l=r(57),d=r(32),f=(r(411),r(393)),h=r(391),v=r(200);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var j=function(t){Object(c.a)(r,t);var e=y(r);function r(t){var o;return Object(n.a)(this,r),(o=e.call(this,t)).anchor=document.createElement("a"),o.anchor.href=Object(v.a)(),o.anchor.target="_blank",o.addClass("vjs-patreon-button"),o}return Object(o.a)(r,[{key:"handleClick",value:function(){this.anchor.click(),Object(h.PATREON_BUTTON_CLICKED)(this.player()).trigger()}}]),r}(f.default.getComponent("Button"))},421:function(t,e,r){"use strict";r.r(e),r.d(e,"QualityMenuButton",(function(){return m}));r(1),r(93);var n=r(21),o=r(22),c=r(199),l=r(45),d=r(57),f=r(32),h=(r(80),r(15),r(11),r(197),r(16),r(393)),v=r(391);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(d.a)(this,r)}}var j=function(t){Object(l.a)(r,t);var e=y(r);function r(t){var o,c=t.player,data=t.data;return Object(n.a)(this,r),(o=e.call(this,c,{label:data.label,selectable:!0,selected:c.src()===data.src})).source=data,Object(v.QUALITY_CHANGED)(o.player()).on((function(t){o.selected(t.src===o.source.src)})),o.setupContent(),o}return Object(o.a)(r,[{key:"handleClick",value:function(t){Object(c.a)(Object(f.a)(r.prototype),"handleClick",this).call(this,t),this.select()}},{key:"select",value:function(){var t=this;if(this.player().src()!==this.source.src){var e=this.player().paused(),r=this.player().currentTime();this.player().one("loadedmetadata",(function(){t.player().currentTime(r),e||t.player().play()})),this.player().src(this.source),Object(v.QUALITY_CHANGED)(this.player()).trigger(this.source)}}},{key:"setupContent",value:function(){var t=this,button=document.createElement("button");button.addEventListener("click",(function(e){Object(v.DOWNLOAD_VIDEO_SRC)(t.player()).trigger(t.source),e.stopPropagation()})),this.el().appendChild(button)}}]),r}(h.default.getComponent("MenuItem")),m=function(t){Object(l.a)(r,t);var e=y(r);function r(t){var o,c=t.player,l=t.sources;return Object(n.a)(this,r),(o=e.call(this,c,{})).addClass("vjs-quality-button"),o.setSources(l),o}return Object(o.a)(r,[{key:"setSources",value:function(t){this.sources=t.concat().sort((function(a,b){var t=a.label.match(/([0-9]*)p?/),e=b.label.match(/([0-9]*)p?/);return t&&e?parseInt(e[1])-parseInt(t[1]):t||e?t?1:-1:-a.label.localeCompare(b.label)})),this.sources.length>0&&this.player().src(this.sources[0]),this.update(),this.sources.length<=1&&this.hide()}},{key:"createItems",value:function(){var t=this;return this.sources?this.sources.map((function(e){return new j({player:t.player(),data:e})})):[]}}]),r}(h.default.getComponent("MenuButton"))},422:function(t,e,r){"use strict";r.r(e),r.d(e,"PlaylistMenuButton",(function(){return m}));r(93);var n=r(21),o=r(22),c=r(199),l=r(45),d=r(57),f=r(32),h=(r(25),r(16),r(94),r(1),r(393)),v=r(391);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(d.a)(this,r)}}var j=function(t){Object(l.a)(r,t);var e=y(r);function r(t){var o,c=t.player,data=t.data,l=t.selected;return Object(n.a)(this,r),(o=e.call(this,c,{label:data.name,selectable:!0,selected:l,multiSelectable:!0})).playlist=data,o.isSelected=l,o}return Object(o.a)(r,[{key:"handleClick",value:function(t){Object(c.a)(Object(f.a)(r.prototype),"handleClick",this).call(this,t),this.isSelected=!this.isSelected,this.selected(this.isSelected),this.isSelected?Object(v.ADD_TO_PLAYLIST)(this.player()).trigger(this.playlist):Object(v.REMOVE_FROM_PLAYLIST)(this.player()).trigger(this.playlist)}}]),r}(h.default.getComponent("MenuItem")),m=function(t){Object(l.a)(r,t);var e=y(r);function r(t){var o,c=t.player,data=t.data;return Object(n.a)(this,r),(o=e.call(this,c,{})).addClass("vjs-playlist-button"),o.setData(data),o}return Object(o.a)(r,[{key:"setData",value:function(data){this.data=data,this.update()}},{key:"createItems",value:function(){var t=this;return this.data?this.data.playlists.map((function(e){return new j({player:t.player(),data:e,selected:!!t.data.active.find((function(t){return t.id===e.id}))})})):[]}}]),r}(h.default.getComponent("MenuButton"))},423:function(t,e,r){"use strict";r.r(e),r.d(e,"setup",(function(){return k}));r(1),r(93);var n=r(199),o=r(21),c=r(22),l=r(45),d=r(57),f=r(32),h=(r(150),r(393)),v=r(391);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(d.a)(this,r)}}var j=function(t){Object(l.a)(r,t);var e=y(r);function r(t){var n;return Object(o.a)(this,r),(n=e.call(this,t,{label:"load VTT/SRT from File"})).controlText("load VTT/SRT from File"),n}return Object(c.a)(r,[{key:"handleClick",value:function(){Object(v.LOAD_TRACK_FROM_FILE)(this.player()).trigger()}}]),r}(h.default.getComponent("MenuItem")),m=function(t){Object(l.a)(r,t);var e=y(r);function r(t){var n;return Object(o.a)(this,r),(n=e.call(this,t,{label:"load VTT/SRT from URL"})).controlText("load VTT/SRT from URL"),n}return Object(c.a)(r,[{key:"handleClick",value:function(){Object(v.LOAD_TRACK_FROM_URL)(this.player()).trigger()}}]),r}(h.default.getComponent("MenuItem")),O=h.default.getComponent("SubsCapsMenuItem"),M=function(t){Object(l.a)(r,t);var e=y(r);function r(){return Object(o.a)(this,r),e.apply(this,arguments)}return Object(c.a)(r,[{key:"createEl",value:function(t,e,o){var c=this,l=Object(n.a)(Object(f.a)(r.prototype),"createEl",this).call(this,t,e,o),track=this.options_.track;if("ADDED_FROM_USER"!==track.language){var button=document.createElement("button");button.addEventListener("click",(function(t){Object(v.DOWNLOAD_TRACK_SRC)(c.player()).trigger({label:track.label}),t.stopPropagation()})),l.appendChild(button)}return l}}]),r}(O),D=function(t){Object(l.a)(r,t);var e=y(r);function r(){return Object(o.a)(this,r),e.apply(this,arguments)}return Object(c.a)(r,[{key:"createItems",value:function(){var t=Object(n.a)(Object(f.a)(r.prototype),"createItems",this).call(this);return t.splice(2,0,new j(this.player_)),t.splice(3,0,new m(this.player_)),t}}]),r}(h.default.getComponent("SubsCapsButton"));function k(){O.prototype=M.prototype,h.default.registerComponent("SubsCapsMenuItem",M),h.default.registerComponent("SubsCapsButton",D)}},424:function(t,e,r){var content=r(463);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(120).default)("d0dae97e",content,!0,{sourceMap:!1})},435:function(t,e,r){"use strict";r.r(e);var n=r(21),o=r(22),c=r(45),l=r(57),d=r(32),f=r(27),h=(r(5),r(1),r(148),r(93),r(390));function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var y,j=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},m=function(t,e){if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},O=function(t){Object(c.a)(r,t);var e=v(r);function r(){var t;return Object(n.a)(this,r),(t=e.apply(this,arguments)).url="",t.urlState=null,t}return Object(o.a)(r,[{key:"visibilityChanged",value:function(){return this.visible}},{key:"checkFormValidity",value:function(){var t=this.form.checkValidity();return this.urlState=t?"valid":"invalid",t}},{key:"resetModal",value:function(){this.url="",this.urlState=null}},{key:"handleOk",value:function(t){t.preventDefault(),this.handleSubmit()}},{key:"handleSubmit",value:function(){var t=this;this.checkFormValidity()&&(this.$nextTick((function(){t.visible=!1})),this.submit(this.url))}},{key:"submit",value:function(t){return t}}]),r}(h.f);j([Object(h.c)("change",{default:!1}),m("design:type",Boolean)],O.prototype,"visible",void 0),j([Object(h.g)("visible"),Object(h.b)("change"),m("design:type",Function),m("design:paramtypes",[]),m("design:returntype",void 0)],O.prototype,"visibilityChanged",null),j([Object(h.e)("form"),m("design:type","function"==typeof(y="undefined"!=typeof HTMLFormElement&&HTMLFormElement)?y:Object)],O.prototype,"form",void 0),j([Object(h.b)("submit"),m("design:type",Function),m("design:paramtypes",[String]),m("design:returntype",void 0)],O.prototype,"submit",null);var M=O=j([Object(h.a)({})],O),D=r(78),component=Object(D.a)(M,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-modal",{attrs:{id:"modal-prevent-closing",title:"Add Subtitles from Url"},on:{show:t.resetModal,hidden:t.resetModal,ok:t.handleOk},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[r("form",{ref:"form",on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[r("b-form-group",{attrs:{state:t.urlState,label:"Url","label-for":"url-input","invalid-feedback":"Url is required"}},[r("b-form-input",{attrs:{id:"url-input",state:t.urlState,required:""},model:{value:t.url,callback:function(e){t.url=e},expression:"url"}})],1)],1)])}),[],!1,null,null,null);e.default=component.exports},462:function(t,e,r){"use strict";r(424)},463:function(t,e,r){var n=r(119),o=r(412),c=r(464),l=r(465),d=r(466),f=r(467),h=r(468),v=n(!1),y=o(c),j=o(l),m=o(d),O=o(f),M=o(h);v.push([t.i,'video{outline:none}.video-js{width:100%;height:100%;display:flex}.video-js *{outline:none}.video-js .vjs-menu{z-index:100}.video-js .vjs-big-play-button{background:url(/logos/logo256.png) 50%/contain no-repeat;position:unset;top:unset;left:unset;margin:auto;width:4em;height:4em;z-index:999;border:none}.video-js .vjs-big-play-button .vjs-icon-placeholder:before{content:none}.video-js:hover .vjs-big-play-button{background-color:transparent}.vjs-has-started .vjs-control-bar{display:inline-flex;background-color:transparent;bottom:0;left:0;right:0;width:unset;height:3.25em;font-size:1.2em}.vjs-has-started .vjs-control-bar:before{content:"";background-image:linear-gradient(180deg,transparent,rgba(0,0,0,.8));pointer-events:none;position:absolute;left:0;right:0;bottom:0;height:5em}.vjs-has-started .vjs-control-bar .vjs-play-control{padding-left:1em;width:5em}.vjs-has-started .vjs-control-bar .vjs-fullscreen-control{padding-right:1em;width:5em}.vjs-has-started .vjs-control-bar .vjs-button{opacity:.9;outline:none;cursor:pointer;padding-bottom:.25em}.vjs-has-started .vjs-control-bar .vjs-button:hover{opacity:1}.vjs-has-started .vjs-control-bar .vjs-button .vjs-icon-placeholder:before{position:unset}.vjs-has-started .vjs-control-bar .vjs-menu-content{font-size:.9em}.vjs-has-started .vjs-control-bar .vjs-menu-content li{padding:.2em}.vjs-has-started .vjs-control-bar .vjs-progress-control{height:1.8em;align-items:flex-end;position:absolute;width:100%;bottom:100%;padding:0 1em}.vjs-has-started .vjs-control-bar .vjs-progress-control .vjs-progress-holder{margin:0}.vjs-has-started .vjs-control-bar .vjs-progress-control .vjs-play-progress{background-color:#8dc73f}.vjs-has-started .vjs-control-bar .vjs-duration{display:block;padding-left:.3em}.vjs-has-started .vjs-control-bar .vjs-current-time{display:block;padding-right:0}.vjs-has-started .vjs-control-bar .vjs-current-time:after{content:" / "}.vjs-has-started .vjs-control-bar .vjs-remaining-time{display:none}.vjs-has-started .vjs-control-bar .vjs-playback-rate{margin-left:auto}.vjs-has-started .vjs-control-bar .vjs-quality-button .vjs-menu-button{-webkit-mask:url('+y+") no-repeat center/1.5em;mask:url("+y+") no-repeat center/1.5em;background-color:#fff}.vjs-has-started .vjs-control-bar .vjs-quality-button .vjs-menu{width:7em;left:-1.5em}.vjs-has-started .vjs-control-bar .vjs-quality-button .vjs-menu ul li{position:relative}.vjs-has-started .vjs-control-bar .vjs-quality-button .vjs-menu ul li button{-webkit-mask:url("+j+") no-repeat center;mask:url("+j+") no-repeat center;width:13px;position:absolute;right:5px;top:2px;bottom:2px;background-color:#fff}.vjs-has-started .vjs-control-bar .vjs-quality-button .vjs-menu ul li.vjs-selected button{background-color:#2b333f;color:#2b333f!important}.vjs-has-started .vjs-control-bar .vjs-subs-caps-button .vjs-menu{width:15em;left:-5.5em}.vjs-has-started .vjs-control-bar .vjs-subs-caps-button .vjs-menu ul{overflow-x:hidden}.vjs-has-started .vjs-control-bar .vjs-subs-caps-button .vjs-menu ul li{position:relative;text-transform:capitalize}.vjs-has-started .vjs-control-bar .vjs-subs-caps-button .vjs-menu ul li button{-webkit-mask:url("+j+") no-repeat center;mask:url("+j+") no-repeat center;width:13px;position:absolute;right:5px;top:2px;bottom:2px;background-color:#fff}.vjs-has-started .vjs-control-bar .vjs-subs-caps-button .vjs-menu ul li.vjs-selected button{background-color:#2b333f;color:#2b333f!important}.vjs-has-started .vjs-control-bar .vjs-download-button{background-color:#fff;-webkit-mask:url("+j+") no-repeat center/1.5em;mask:url("+j+") no-repeat center/1.5em}.vjs-has-started .vjs-control-bar .vjs-patreon-button{background:url("+m+") no-repeat 50%/1.8em}.vjs-has-started .vjs-control-bar .vjs-theatre-button{-webkit-mask:url("+O+") no-repeat center/1.5em;mask:url("+O+") no-repeat center/1.5em;background-color:#fff}.vjs-has-started .vjs-control-bar .vjs-playlist-button .vjs-menu-button{-webkit-mask:url("+M+") no-repeat center/1.9em;mask:url("+M+") no-repeat center/1.9em;background-color:#fff}.vjs-has-started .vjs-control-bar .vjs-playlist-button .vjs-menu ul li{text-transform:capitalize}",""]),t.exports=v},464:function(t,e,r){t.exports=r.p+"img/settings-work-tool.b3a3f99.svg"},465:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTQgMTMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE0IDEzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2ZpbGw6IzAwMDAwMDt9PC9zdHlsZT48cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjEyLDkgMTIsMTEgMiwxMSAyLDkgMCw5IDAsMTMgMTQsMTMgMTQsOSAiLz48cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjEwLDMuNiA4LDUuNiA4LDAgNiwwIDYsNS42IDQsMy42IDIuNiw1IDcsOS40IDExLjQsNSAiLz48L3N2Zz4="},466:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxODAgMTgwIj4KCTxwYXRoCgkJZmlsbD0iI2Y5Njc1MyIKCQlkPSJNMTA4LjgxMzU5OTIgMjYuMDY3MjAxMjVjLTI2LjQ2ODI2NiAwLTQ4LjAwMjEzMjEyIDIxLjUzMDY2NjEzLTQ4LjAwMjEzMjEyIDQ3Ljk5NzMzMjEzIDAgMjYuMzg2NTMyNjggMjEuNTMzODY2MTMgNDcuODU0MjY1NDcgNDguMDAyMTMyMTMgNDcuODU0MjY1NDcgMjYuMzg2Mzk5MzcgMCA0Ny44NTMwNjU1LTIxLjQ2NzczMjggNDcuODUzMDY1NS00Ny44NTQyNjU0NyAwLTI2LjQ2NjY2Ni0yMS40NjY2NjYxMy00Ny45OTczMzIxMy00Ny44NTMwNjU0Ny00Ny45OTczMzIxMyIKCS8+Cgk8cGF0aAoJCWZpbGw9IiMwNTJhNDkiCgkJZD0iTTIzLjMzMzMzNSAxNTMuOTMzMzMxNzhWMjYuMDY2NjY3OWgyMy40NjY2NjU3NnYxMjcuODY2NjYzOXoiCgkvPgo8L3N2Zz4KCg=="},467:function(t,e,r){t.exports=r.p+"img/light-off.a734005.svg"},468:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgNDI2LjY2NyA0MjYuNjY3IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MjYuNjY3IDQyNi42Njc7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8Zz4KCQk8Zz4KCQkJPHJlY3QgeD0iMCIgeT0iNjQiIHdpZHRoPSIyNTYiIGhlaWdodD0iNDIuNjY3Ii8+CgkJCTxyZWN0IHg9IjAiIHk9IjE0OS4zMzMiIHdpZHRoPSIyNTYiIGhlaWdodD0iNDIuNjY3Ii8+CgkJCTxyZWN0IHg9IjAiIHk9IjIzNC42NjciIHdpZHRoPSIxNzAuNjY3IiBoZWlnaHQ9IjQyLjY2NyIvPgoJCQk8cG9seWdvbiBwb2ludHM9IjM0MS4zMzMsMjM0LjY2NyAzNDEuMzMzLDE0OS4zMzMgMjk4LjY2NywxNDkuMzMzIDI5OC42NjcsMjM0LjY2NyAyMTMuMzMzLDIzNC42NjcgMjEzLjMzMywyNzcuMzMzIAoJCQkJMjk4LjY2NywyNzcuMzMzIDI5OC42NjcsMzYyLjY2NyAzNDEuMzMzLDM2Mi42NjcgMzQxLjMzMywyNzcuMzMzIDQyNi42NjcsMjc3LjMzMyA0MjYuNjY3LDIzNC42NjcgCQkJIi8+CgkJPC9nPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="}}]);