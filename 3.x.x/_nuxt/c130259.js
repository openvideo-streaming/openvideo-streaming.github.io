(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{431:function(e,t,n){var content=n(485);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(120).default)("576596d0",content,!0,{sourceMap:!1})},432:function(e,t,n){var content=n(487);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(120).default)("0b019464",content,!0,{sourceMap:!1})},484:function(e,t,n){"use strict";n(431)},485:function(e,t,n){var r=n(119)(!1);r.push([e.i,".semi-transparent[data-v-cd754ad4]{background:rgba(0,0,0,.9);transition:opacity .5s}",""]),e.exports=r},486:function(e,t,n){"use strict";n(432)},487:function(e,t,n){var r=n(119)(!1);r.push([e.i,"body{background:transparent!important}",""]),e.exports=r},502:function(e,t,n){"use strict";n.r(t);n(93),n(6),n(4),n(2),n(3),n(7);var r=n(0),o=n(21),c=n(22),l=n(45),f=n(57),d=n(32),y=n(27),h=(n(5),n(1),n(148),n(281),n(94),n(150),n(25),n(390)),v=n(61),O=n(409),P=n(149);function j(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}function R(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(d.a)(e);if(t){var o=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var w,k=function(e,t,n,desc){var r,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(y.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(o<3?r(c):o>3?r(t,n,c):r(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},x=function(e,t){if("object"===("undefined"==typeof Reflect?"undefined":Object(y.a)(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},C=function(e){Object(l.a)(n,e);var t=R(n);function n(){var e;return Object(o.a)(this,n),(e=t.apply(this,arguments)).currentPage=1,e.videos=[],e.hasPlayed=!1,e}return Object(c.a)(n,[{key:"pageCount",get:function(){return this.videos.length}},{key:"hasVideos",get:function(){return 0!==this.pageCount}},{key:"currentVideo",get:function(){return this.videos[this.currentPage-1]}},{key:"mounted",value:function(){var e=this;v.e.getListener((function(t){var n=e.videos.findIndex((function(video){return!!video.src.find((function(e){return!!t.src.find((function(t){return t.src===e.src}))}))}));-1!==n?e.videos[n]=m(m({},e.videos[n]),t):(e.videos.push(t),v.j.send({count:e.pageCount}))})).listen(),v.d.send()}},{key:"handleClose",value:function(e){v.i.send({isVisible:!1}),this.player.pause(),this.hasPlayed=!1,e.preventDefault()}},{key:"handlePlayerError",value:function(e){e.code===MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED&&(this.videos.splice(this.currentPage-1,1),v.j.send({count:this.pageCount}),0===this.pageCount&&v.i.send({isVisible:!1}))}},{key:"handlePlay",value:function(){this.hasPlayed||(this.hasPlayed=!0,P.Store.options.analyticsEnabled&&this.$gtm.init("GTM-P9ZS6K8"),this.$gtm.push({event:"watch-video-popup",hoster:this.currentVideo.origin.name,originUrl:this.currentVideo.origin.url}))}}]),n}(h.f);k([Object(h.e)("player-component"),x("design:type","function"==typeof(w=void 0!==O.default&&O.default)?w:Object)],C.prototype,"player",void 0);var V=C=k([Object(h.a)({components:{OVPlayer:O.default}})],C),_=(n(484),n(486),n(78)),component=Object(_.a)(V,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.hasVideos?n("div",{staticClass:"d-flex fixed-top fixed-bottom semi-transparent"},[n("b-modal",{attrs:{visible:!0,size:"xl",title:"OpenVideo has found videos!"},on:{hide:e.handleClose},scopedSlots:e._u([{key:"modal-footer",fn:function(){return[n("b-pagination",{staticClass:"m-auto",attrs:{"total-rows":e.pageCount,"per-page":1,size:"lg",align:"center"},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})]},proxy:!0}],null,!1,3726747629)},[n("OVPlayer",{ref:"player-component",style:{height:"60vh"},attrs:{"video-data":e.currentVideo,"allow-theatre-mode":!1},on:{play:function(t){return e.handlePlay()},error:e.handlePlayerError}})],1)],1):e._e()}),[],!1,null,"cd754ad4",null);t.default=component.exports;installComponents(component,{OVPlayer:n(409).default})}}]);