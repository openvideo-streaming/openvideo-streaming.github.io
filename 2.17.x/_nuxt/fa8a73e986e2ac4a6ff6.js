(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{245:function(e,t,r){var content=r(297);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(59).default)("a6682e8c",content,!0,{sourceMap:!1})},296:function(e,t,r){"use strict";var n=r(245);r.n(n).a},297:function(e,t,r){(t=r(58)(!1)).push([e.i,"body{background:transparent!important}",""]),e.exports=t},336:function(e,t,r){"use strict";r.r(t);r(6),r(3),r(2),r(1),r(5);var n=r(0),o=(r(47),r(13)),c=r(11),f=r(14),l=r(23),O=r(15),d=r(24),j=r(12),y=r(239),v=r(257),h=r(116);function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function w(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var P,R=function(e,t,r,desc){var n,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(j.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(c=(o<3?n(c):o>3?n(t,r,c):n(t,r))||c);return o>3&&c&&Object.defineProperty(t,r,c),c},D=function(e,t){if("object"===("undefined"==typeof Reflect?"undefined":Object(j.a)(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},k=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(O.a)(t).apply(this,arguments))}var r;return Object(d.a)(t,e),Object(f.a)(t,[{key:"mounted",value:(r=Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.$gtm.push(w({event:"RedirectError"},this.errorData)),e.next=3,Object(h.sleep)(250);case 3:location.href=this.errorData.url;case 4:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)})},{key:"errorData",get:function(){var e=this.$route.query.data;if(!e||"string"!=typeof e)throw new Error("Query Param videodata is missing or malformed!");return Object(h.decodeUrlParamToObject)(e)}}]),t}(y.f);R([Object(y.e)("ov-player"),D("design:type","function"==typeof(P=void 0!==v.a&&v.a)?P:Object)],k.prototype,"playerComponent",void 0);var x=k=R([Object(y.a)({})],k),E=(r(296),r(54)),component=Object(E.a)(x,void 0,void 0,!1,null,null,null);t.default=component.exports}}]);