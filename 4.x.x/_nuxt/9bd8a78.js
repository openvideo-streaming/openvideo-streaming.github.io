(window.webpackJsonp=window.webpackJsonp||[]).push([[16,9],{437:function(t,e){function r(e,p){return t.exports=r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,p){return t.__proto__=p,t},t.exports.__esModule=!0,t.exports.default=t.exports,r(e,p)}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports},438:function(t,e,r){"use strict";var n;function o(t){return function(e){return{trigger:function(r){return e.trigger(t,r)},on:function(r){e.on(t,(function(t,e){r(e)}))}}}}r.r(e),r.d(e,"THEATRE_MODE_CHANGED",(function(){return c})),r.d(e,"DOWNLOAD_VIDEO_SRC",(function(){return f})),r.d(e,"DOWNLOAD_ACTIVE_VIDEO_SRC",(function(){return _})),r.d(e,"ADD_TO_PLAYLIST",(function(){return l})),r.d(e,"REMOVE_FROM_PLAYLIST",(function(){return O})),r.d(e,"PATREON_BUTTON_CLICKED",(function(){return d})),r.d(e,"QUALITY_CHANGED",(function(){return A})),r.d(e,"DOWNLOAD_TRACK_SRC",(function(){return R})),r.d(e,"LOAD_TRACK_FROM_URL",(function(){return D})),r.d(e,"LOAD_TRACK_FROM_FILE",(function(){return E})),function(t){t.THEATRE_MODE_CHANGED="theatre-mode-changed",t.DOWNLOAD_VIDEO_SRC="download-video-source",t.DOWNLOAD_ACTIVE_VIDEO_SRC="download-active-video-source",t.ADD_TO_PLAYLIST="add-to-playlist",t.REMOVE_FROM_PLAYLIST="remove-from-playlist",t.PATREON_BUTTON_CLICKED="patreon-button-clicked",t.QUALITY_CHANGED="quality-changed",t.DOWNLOAD_TRACK_SRC="download-track-src",t.LOAD_TRACK_FROM_URL="load-track-from-url",t.LOAD_TRACK_FROM_FILE="load-track-from-file"}(n||(n={}));var c=o(n.THEATRE_MODE_CHANGED),f=o(n.DOWNLOAD_VIDEO_SRC),_=o(n.DOWNLOAD_ACTIVE_VIDEO_SRC),l=o(n.ADD_TO_PLAYLIST),O=o(n.REMOVE_FROM_PLAYLIST),d=o(n.PATREON_BUTTON_CLICKED),A=o(n.QUALITY_CHANGED),R=o(n.DOWNLOAD_TRACK_SRC),D=o(n.LOAD_TRACK_FROM_URL),E=o(n.LOAD_TRACK_FROM_FILE)},440:function(t,e){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}},t.exports.__esModule=!0,t.exports.default=t.exports},445:function(t,e){function r(){return t.exports=r=Object.assign?Object.assign.bind():function(t){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var e in source)Object.prototype.hasOwnProperty.call(source,e)&&(t[e]=source[e])}return t},t.exports.__esModule=!0,t.exports.default=t.exports,r.apply(this,arguments)}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports},447:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t},t.exports.__esModule=!0,t.exports.default=t.exports},448:function(t,e,r){var n=r(437);t.exports=function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,n(t,e)},t.exports.__esModule=!0,t.exports.default=t.exports},449:function(t,e){},450:function(t,e,r){var n=r(437),o=r(440);function c(e,r,f){return o()?(t.exports=c=Reflect.construct.bind(),t.exports.__esModule=!0,t.exports.default=t.exports):(t.exports=c=function(t,e,r){var a=[null];a.push.apply(a,e);var o=new(Function.bind.apply(t,a));return r&&n(o,r.prototype),o},t.exports.__esModule=!0,t.exports.default=t.exports),c.apply(null,arguments)}t.exports=c,t.exports.__esModule=!0,t.exports.default=t.exports},451:function(t,e,r){var n=r(437);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&n(t,e)},t.exports.__esModule=!0,t.exports.default=t.exports},549:function(t,e,r){"use strict";r.r(e),r.d(e,"TheatreButton",(function(){return A}));r(1),r(70);var n=r(18),o=r(17),c=r(38),f=r(44),_=r(25),l=r(439),O=r(438);function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(_.a)(t);if(e){var o=Object(_.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}var A=function(t){Object(c.a)(r,t);var e=d(r);function r(t){var o;return Object(n.a)(this,r),(o=e.call(this,t)).isEnabled=!1,o.addClass("vjs-theatre-button"),o}return Object(o.a)(r,[{key:"handleClick",value:function(){this.isEnabled=!this.isEnabled,Object(O.THEATRE_MODE_CHANGED)(this.player()).trigger({isEnabled:this.isEnabled})}}]),r}(l.default.getComponent("Button"))}}]);