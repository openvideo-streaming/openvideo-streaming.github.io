(window.webpackJsonp=window.webpackJsonp||[]).push([[10,9],{395:function(t,e){function r(e,p){return t.exports=r=Object.setPrototypeOf||function(t,p){return t.__proto__=p,t},t.exports.__esModule=!0,t.exports.default=t.exports,r(e,p)}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports},396:function(t,e,r){"use strict";var o;function n(t){return function(e){return{trigger:function(r){return e.trigger(t,r)},on:function(r){e.on(t,(function(t,e){r(e)}))}}}}r.r(e),r.d(e,"THEATRE_MODE_CHANGED",(function(){return c})),r.d(e,"DOWNLOAD_VIDEO_SRC",(function(){return f})),r.d(e,"DOWNLOAD_ACTIVE_VIDEO_SRC",(function(){return _})),r.d(e,"ADD_TO_PLAYLIST",(function(){return l})),r.d(e,"REMOVE_FROM_PLAYLIST",(function(){return O})),r.d(e,"PATREON_BUTTON_CLICKED",(function(){return d})),r.d(e,"QUALITY_CHANGED",(function(){return A})),r.d(e,"DOWNLOAD_TRACK_SRC",(function(){return D})),r.d(e,"LOAD_TRACK_FROM_URL",(function(){return R})),r.d(e,"LOAD_TRACK_FROM_FILE",(function(){return x})),function(t){t.THEATRE_MODE_CHANGED="theatre-mode-changed",t.DOWNLOAD_VIDEO_SRC="download-video-source",t.DOWNLOAD_ACTIVE_VIDEO_SRC="download-active-video-source",t.ADD_TO_PLAYLIST="add-to-playlist",t.REMOVE_FROM_PLAYLIST="remove-from-playlist",t.PATREON_BUTTON_CLICKED="patreon-button-clicked",t.QUALITY_CHANGED="quality-changed",t.DOWNLOAD_TRACK_SRC="download-track-src",t.LOAD_TRACK_FROM_URL="load-track-from-url",t.LOAD_TRACK_FROM_FILE="load-track-from-file"}(o||(o={}));var c=n(o.THEATRE_MODE_CHANGED),f=n(o.DOWNLOAD_VIDEO_SRC),_=n(o.DOWNLOAD_ACTIVE_VIDEO_SRC),l=n(o.ADD_TO_PLAYLIST),O=n(o.REMOVE_FROM_PLAYLIST),d=n(o.PATREON_BUTTON_CLICKED),A=n(o.QUALITY_CHANGED),D=n(o.DOWNLOAD_TRACK_SRC),R=n(o.LOAD_TRACK_FROM_URL),x=n(o.LOAD_TRACK_FROM_FILE)},397:function(t,e){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}},t.exports.__esModule=!0,t.exports.default=t.exports},403:function(t,e){function r(){return t.exports=r=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var e in source)Object.prototype.hasOwnProperty.call(source,e)&&(t[e]=source[e])}return t},t.exports.__esModule=!0,t.exports.default=t.exports,r.apply(this,arguments)}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports},405:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t},t.exports.__esModule=!0,t.exports.default=t.exports},406:function(t,e,r){var o=r(395);t.exports=function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,o(t,e)},t.exports.__esModule=!0,t.exports.default=t.exports},407:function(t,e){},408:function(t,e,r){var o=r(395),n=r(397);function c(e,r,f){return n()?(t.exports=c=Reflect.construct,t.exports.__esModule=!0,t.exports.default=t.exports):(t.exports=c=function(t,e,r){var a=[null];a.push.apply(a,e);var n=new(Function.bind.apply(t,a));return r&&o(n,r.prototype),n},t.exports.__esModule=!0,t.exports.default=t.exports),c.apply(null,arguments)}t.exports=c,t.exports.__esModule=!0,t.exports.default=t.exports},409:function(t,e,r){var o=r(395);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&o(t,e)},t.exports.__esModule=!0,t.exports.default=t.exports},424:function(t,e,r){"use strict";r.r(e),r.d(e,"DownloadButton",(function(){return A}));r(1),r(78);var o=r(19),n=r(20),c=r(40),f=r(49),_=r(28),l=r(398),O=r(396);function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,o=Object(_.a)(t);if(e){var n=Object(_.a)(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return Object(f.a)(this,r)}}var A=function(t){Object(c.a)(r,t);var e=d(r);function r(t){var n;return Object(o.a)(this,r),(n=e.call(this,t)).addClass("vjs-download-button"),n}return Object(n.a)(r,[{key:"handleClick",value:function(){Object(O.DOWNLOAD_ACTIVE_VIDEO_SRC)(this.player()).trigger()}}]),r}(l.default.getComponent("Button"))}}]);