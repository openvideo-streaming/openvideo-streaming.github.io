/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{390:function(t,e,n){"use strict";n.d(e,"a",(function(){return P})),n.d(e,"f",(function(){return r.default})),n.d(e,"b",(function(){return M})),n.d(e,"c",(function(){return $})),n.d(e,"d",(function(){return D})),n.d(e,"e",(function(){return F})),n.d(e,"g",(function(){return C}));var r=n(10);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function f(t){return function(t){if(Array.isArray(t)){for(var i=0,e=new Array(t.length);i<t.length;i++)e[i]=t[i];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function l(){return"undefined"!=typeof Reflect&&Reflect.defineMetadata&&Reflect.getOwnMetadataKeys}function d(t,e){y(t,e),Object.getOwnPropertyNames(e.prototype).forEach((function(n){y(t.prototype,e.prototype,n)})),Object.getOwnPropertyNames(e).forEach((function(n){y(t,e,n)}))}function y(t,e,n){(n?Reflect.getOwnMetadataKeys(e,n):Reflect.getOwnMetadataKeys(e)).forEach((function(r){var o=n?Reflect.getOwnMetadata(r,e,n):Reflect.getOwnMetadata(r,e);n?Reflect.defineMetadata(r,o,t,n):Reflect.defineMetadata(r,o,t)}))}var v={__proto__:[]}instanceof Array;function h(t){return function(e,n,r){var o="function"==typeof e?e:e.constructor;o.__decorators__||(o.__decorators__=[]),"number"!=typeof r&&(r=void 0),o.__decorators__.push((function(e){return t(e,n,r)}))}}function m(t,e){var n=e.prototype._init;e.prototype._init=function(){var e=this,n=Object.getOwnPropertyNames(t);if(t.$options.props)for(var r in t.$options.props)t.hasOwnProperty(r)||n.push(r);n.forEach((function(n){Object.defineProperty(e,n,{get:function(){return t[n]},set:function(e){t[n]=e},configurable:!0})}))};var data=new e;e.prototype._init=n;var r={};return Object.keys(data).forEach((function(t){void 0!==data[t]&&(r[t]=data[t])})),r}var O=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];function j(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.name=e.name||t._componentTag||t.name;var n=t.prototype;Object.getOwnPropertyNames(n).forEach((function(t){if("constructor"!==t)if(O.indexOf(t)>-1)e[t]=n[t];else{var r=Object.getOwnPropertyDescriptor(n,t);void 0!==r.value?"function"==typeof r.value?(e.methods||(e.methods={}))[t]=r.value:(e.mixins||(e.mixins=[])).push({data:function(){return c({},t,r.value)}}):(r.get||r.set)&&((e.computed||(e.computed={}))[t]={get:r.get,set:r.set})}})),(e.mixins||(e.mixins=[])).push({data:function(){return m(this,t)}});var o=t.__decorators__;o&&(o.forEach((function(t){return t(e)})),delete t.__decorators__);var f=Object.getPrototypeOf(t.prototype),y=f instanceof r.default?f.constructor:r.default,v=y.extend(e);return _(v,t,y),l()&&d(v,t),v}var w={prototype:!0,arguments:!0,callee:!0,caller:!0};function _(t,e,n){Object.getOwnPropertyNames(e).forEach((function(r){if(!w[r]){var c=Object.getOwnPropertyDescriptor(t,r);if(!c||c.configurable){var f,l,d=Object.getOwnPropertyDescriptor(e,r);if(!v){if("cid"===r)return;var y=Object.getOwnPropertyDescriptor(n,r);if(f=d.value,l=o(f),null!=f&&("object"===l||"function"===l)&&y&&y.value===d.value)return}0,Object.defineProperty(t,r,d)}}}))}function R(t){return"function"==typeof t?j(t):function(e){return j(e,t)}}R.registerHooks=function(t){O.push.apply(O,f(t))};var P=R,k=function(){for(var s=0,i=0,t=arguments.length;i<t;i++)s+=arguments[i].length;var e=Array(s),n=0;for(i=0;i<t;i++)for(var a=arguments[i],r=0,o=a.length;r<o;r++,n++)e[n]=a[r];return e},S=/\B([A-Z])/g;function M(t){return function(e,n,r){var o=n.replace(S,"-$1").toLowerCase(),c=r.value;r.value=function(){for(var e=this,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var f=function(r){var c=t||o;void 0===r?0===n.length?e.$emit(c):1===n.length?e.$emit(c,n[0]):e.$emit.apply(e,k([c],n)):(n.unshift(r),e.$emit.apply(e,k([c],n)))},l=c.apply(this,n);return A(l)?l.then(f):f(l),l}}}function A(t){return t instanceof Promise||t&&"function"==typeof t.then}var E="undefined"!=typeof Reflect&&void 0!==Reflect.getMetadata;function x(t,e,n){if(E&&!Array.isArray(t)&&"function"!=typeof t&&!t.hasOwnProperty("type")&&void 0===t.type){var r=Reflect.getMetadata("design:type",e,n);r!==Object&&(t.type=r)}}function $(t,e){return void 0===e&&(e={}),function(n,r){x(e,n,r),h((function(n,r){(n.props||(n.props={}))[r]=e,n.model={prop:r,event:t||r}}))(n,r)}}function D(t){return void 0===t&&(t={}),function(e,n){x(t,e,n),h((function(e,n){(e.props||(e.props={}))[n]=t}))(e,n)}}function F(t){return h((function(e,n){e.computed=e.computed||{},e.computed[n]={cache:!1,get:function(){return this.$refs[t||n]}}}))}function C(path,t){void 0===t&&(t={});var e=t.deep,n=void 0!==e&&e,r=t.immediate,o=void 0!==r&&r;return h((function(t,e){"object"!=typeof t.watch&&(t.watch=Object.create(null));var r=t.watch;"object"!=typeof r[path]||Array.isArray(r[path])?void 0===r[path]&&(r[path]=[]):r[path]=[r[path]],r[path].push({handler:e,deep:n,immediate:o})}))}},435:function(t,e,n){"use strict";n.r(e);var r=n(21),o=n(22),c=n(45),f=n(57),l=n(32),d=n(27),y=(n(5),n(1),n(148),n(93),n(390));function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var h,m=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},O=function(t,e){if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},j=function(t){Object(c.a)(n,t);var e=v(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).url="",t.urlState=null,t}return Object(o.a)(n,[{key:"visibilityChanged",value:function(){return this.visible}},{key:"checkFormValidity",value:function(){var t=this.form.checkValidity();return this.urlState=t?"valid":"invalid",t}},{key:"resetModal",value:function(){this.url="",this.urlState=null}},{key:"handleOk",value:function(t){t.preventDefault(),this.handleSubmit()}},{key:"handleSubmit",value:function(){var t=this;this.checkFormValidity()&&(this.$nextTick((function(){t.visible=!1})),this.submit(this.url))}},{key:"submit",value:function(t){return t}}]),n}(y.f);m([Object(y.c)("change",{default:!1}),O("design:type",Boolean)],j.prototype,"visible",void 0),m([Object(y.g)("visible"),Object(y.b)("change"),O("design:type",Function),O("design:paramtypes",[]),O("design:returntype",void 0)],j.prototype,"visibilityChanged",null),m([Object(y.e)("form"),O("design:type","function"==typeof(h="undefined"!=typeof HTMLFormElement&&HTMLFormElement)?h:Object)],j.prototype,"form",void 0),m([Object(y.b)("submit"),O("design:type",Function),O("design:paramtypes",[String]),O("design:returntype",void 0)],j.prototype,"submit",null);var w=j=m([Object(y.a)({})],j),_=n(78),component=Object(_.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-modal",{attrs:{id:"modal-prevent-closing",title:"Add Subtitles from Url"},on:{show:t.resetModal,hidden:t.resetModal,ok:t.handleOk},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[n("form",{ref:"form",on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[n("b-form-group",{attrs:{state:t.urlState,label:"Url","label-for":"url-input","invalid-feedback":"Url is required"}},[n("b-form-input",{attrs:{id:"url-input",state:t.urlState,required:""},model:{value:t.url,callback:function(e){t.url=e},expression:"url"}})],1)],1)])}),[],!1,null,null,null);e.default=component.exports}}]);