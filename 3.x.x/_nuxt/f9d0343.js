/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{390:function(e,t,r){"use strict";r.d(t,"a",(function(){return R})),r.d(t,"f",(function(){return n.default})),r.d(t,"b",(function(){return A})),r.d(t,"c",(function(){return T})),r.d(t,"d",(function(){return $})),r.d(t,"e",(function(){return I})),r.d(t,"g",(function(){return S}));var n=r(10);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e){return function(e){if(Array.isArray(e)){for(var i=0,t=new Array(e.length);i<e.length;i++)t[i]=e[i];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function l(){return"undefined"!=typeof Reflect&&Reflect.defineMetadata&&Reflect.getOwnMetadataKeys}function d(e,t){y(e,t),Object.getOwnPropertyNames(t.prototype).forEach((function(r){y(e.prototype,t.prototype,r)})),Object.getOwnPropertyNames(t).forEach((function(r){y(e,t,r)}))}function y(e,t,r){(r?Reflect.getOwnMetadataKeys(t,r):Reflect.getOwnMetadataKeys(t)).forEach((function(n){var o=r?Reflect.getOwnMetadata(n,t,r):Reflect.getOwnMetadata(n,t);r?Reflect.defineMetadata(n,o,e,r):Reflect.defineMetadata(n,o,e)}))}var v={__proto__:[]}instanceof Array;function h(e){return function(t,r,n){var o="function"==typeof t?t:t.constructor;o.__decorators__||(o.__decorators__=[]),"number"!=typeof n&&(n=void 0),o.__decorators__.push((function(t){return e(t,r,n)}))}}function m(e,t){var r=t.prototype._init;t.prototype._init=function(){var t=this,r=Object.getOwnPropertyNames(e);if(e.$options.props)for(var n in e.$options.props)e.hasOwnProperty(n)||r.push(n);r.forEach((function(r){Object.defineProperty(t,r,{get:function(){return e[r]},set:function(t){e[r]=t},configurable:!0})}))};var data=new t;t.prototype._init=r;var n={};return Object.keys(data).forEach((function(e){void 0!==data[e]&&(n[e]=data[e])})),n}var O=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];function j(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.name=t.name||e._componentTag||e.name;var r=e.prototype;Object.getOwnPropertyNames(r).forEach((function(e){if("constructor"!==e)if(O.indexOf(e)>-1)t[e]=r[e];else{var n=Object.getOwnPropertyDescriptor(r,e);void 0!==n.value?"function"==typeof n.value?(t.methods||(t.methods={}))[e]=n.value:(t.mixins||(t.mixins=[])).push({data:function(){return c({},e,n.value)}}):(n.get||n.set)&&((t.computed||(t.computed={}))[e]={get:n.get,set:n.set})}})),(t.mixins||(t.mixins=[])).push({data:function(){return m(this,e)}});var o=e.__decorators__;o&&(o.forEach((function(e){return e(t)})),delete e.__decorators__);var f=Object.getPrototypeOf(e.prototype),y=f instanceof n.default?f.constructor:n.default,v=y.extend(t);return w(v,e,y),l()&&d(v,e),v}var _={prototype:!0,arguments:!0,callee:!0,caller:!0};function w(e,t,r){Object.getOwnPropertyNames(t).forEach((function(n){if(!_[n]){var c=Object.getOwnPropertyDescriptor(e,n);if(!c||c.configurable){var f,l,d=Object.getOwnPropertyDescriptor(t,n);if(!v){if("cid"===n)return;var y=Object.getOwnPropertyDescriptor(r,n);if(f=d.value,l=o(f),null!=f&&("object"===l||"function"===l)&&y&&y.value===d.value)return}0,Object.defineProperty(e,n,d)}}}))}function P(e){return"function"==typeof e?j(e):function(t){return j(t,e)}}P.registerHooks=function(e){O.push.apply(O,f(e))};var R=P,U=function(){for(var s=0,i=0,e=arguments.length;i<e;i++)s+=arguments[i].length;var t=Array(s),r=0;for(i=0;i<e;i++)for(var a=arguments[i],n=0,o=a.length;n<o;n++,r++)t[r]=a[n];return t},x=/\B([A-Z])/g;function A(e){return function(t,r,n){var o=r.replace(x,"-$1").toLowerCase(),c=n.value;n.value=function(){for(var t=this,r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var f=function(n){var c=e||o;void 0===n?0===r.length?t.$emit(c):1===r.length?t.$emit(c,r[0]):t.$emit.apply(t,U([c],r)):(r.unshift(n),t.$emit.apply(t,U([c],r)))},l=c.apply(this,r);return k(l)?l.then(f):f(l),l}}}function k(e){return e instanceof Promise||e&&"function"==typeof e.then}var E="undefined"!=typeof Reflect&&void 0!==Reflect.getMetadata;function M(e,t,r){if(E&&!Array.isArray(e)&&"function"!=typeof e&&!e.hasOwnProperty("type")&&void 0===e.type){var n=Reflect.getMetadata("design:type",t,r);n!==Object&&(e.type=n)}}function T(e,t){return void 0===t&&(t={}),function(r,n){M(t,r,n),h((function(r,n){(r.props||(r.props={}))[n]=t,r.model={prop:n,event:e||n}}))(r,n)}}function $(e){return void 0===e&&(e={}),function(t,r){M(e,t,r),h((function(t,r){(t.props||(t.props={}))[r]=e}))(t,r)}}function I(e){return h((function(t,r){t.computed=t.computed||{},t.computed[r]={cache:!1,get:function(){return this.$refs[e||r]}}}))}function S(path,e){void 0===e&&(e={});var t=e.deep,r=void 0!==t&&t,n=e.immediate,o=void 0!==n&&n;return h((function(e,t){"object"!=typeof e.watch&&(e.watch=Object.create(null));var n=e.watch;"object"!=typeof n[path]||Array.isArray(n[path])?void 0===n[path]&&(n[path]=[]):n[path]=[n[path]],n[path].push({handler:t,deep:r,immediate:o})}))}},407:function(e,t,r){"use strict";r.d(t,"addRefererToUrl",(function(){return o})),r.d(t,"isRefererInUrl",(function(){return c}));var n=r(197);function o(e){var t=e.url,r=e.referer;return Object(n.appendToQuery)({url:t,key:"ovreferer",value:btoa(r)})}function c(e){var t=Object(n.parseUrl)(e).query,r=t.ovreferer,o=t.OVReferer;return!!r||!!o}r.o(n,"decodeUrlParamToObject")&&r.d(t,"decodeUrlParamToObject",(function(){return n.decodeUrlParamToObject})),r.o(n,"setIgnoreUrlFlag")&&r.d(t,"setIgnoreUrlFlag",(function(){return n.setIgnoreUrlFlag})),r.o(n,"sleep")&&r.d(t,"sleep",(function(){return n.sleep}))},498:function(e,t,r){"use strict";r.r(t);var n=r(21),o=r(22),c=r(45),f=r(56),l=r(31),d=r(27),y=(r(5),r(1),r(92),r(390)),v=r(407);function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(l.a)(e);if(t){var o=Object(l.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}var m=function(e,t,r,desc){var n,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(c=(o<3?n(c):o>3?n(t,r,c):n(t,r))||c);return o>3&&c&&Object.defineProperty(t,r,c),c},O=function(e){Object(c.a)(r,e);var t=h(r);function r(){return Object(n.a)(this,r),t.apply(this,arguments)}return Object(o.a)(r,[{key:"originUrl",get:function(){var e=this.$route.query.url;if(!e||"string"!=typeof e)throw new Error("Query Param url is missing or malformed!");return Object(v.setIgnoreUrlFlag)(Object(v.decodeUrlParamToObject)(e))}}]),r}(y.f),j=O=m([Object(y.a)({head:function(){return{title:"No Video! – OpenVideo"}}})],O),_=r(77),component=Object(_.a)(j,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"d-flex fixed-top fixed-bottom bg-dark"},[r("b-media",{staticClass:"m-auto",scopedSlots:e._u([{key:"aside",fn:function(){return[r("b-img",{attrs:{src:"/logos/logo256.png",alt:"OpenVideo Icon",width:"100"}})]},proxy:!0}])},[e._v(" "),r("h2",[e._v("No Video was found!")]),e._v(" "),r("p",[e._v("\n      The video was probably deleted. Try using a different hoster or a\n      different link. "),r("br"),e._v("\n      If you think this is a mistake you can visit the original site\n      "),r("a",{attrs:{href:e.originUrl}},[e._v("here")]),e._v(".\n    ")])])],1)}),[],!1,null,null,null);t.default=component.exports}}]);