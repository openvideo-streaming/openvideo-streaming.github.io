(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{474:function(t,e,r){var content=r(519);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(105).default)("00dd9123",content,!1,{sourceMap:!1})},518:function(t,e,r){"use strict";r(474)},519:function(t,e,r){var n=r(104)(!1);n.push([t.i,"body{background:transparent !important}",""]),t.exports=n},558:function(t,e,r){"use strict";r.r(e);r(1),r(70);var n,o=r(18),c=r(17),f=r(38),l=r(46),d=r(25),h=(r(51),r(9)),v=r(164),y=r(213),O=r(452);function j(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}function m(t){var e=t.query.data;if(!e||"string"!=typeof e)throw new Error("Query Param videodata is missing or malformed!");return Object(y.a)(e)}var w=function(t){Object(f.a)(r,t);var e=j(r);function r(){return Object(o.a)(this,r),e.apply(this,arguments)}return Object(c.a)(r,[{key:"errorData",get:function(){return m(this.$route)}},{key:"mounted",value:function(){return Object(h.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.$gtm.push({event:"redirect-error",hoster:this.errorData.hoster,originUrl:this.errorData.url,errorMsg:this.errorData.msg,errorType:this.errorData.type}),t.next=3,Object(y.c)(250);case 3:location.href=this.errorData.url;case 4:case"end":return t.stop()}}),t,this)})))}}]),r}(v.f);Object(h.b)([Object(v.e)("ov-player"),Object(h.c)("design:type","function"==typeof(n=void 0!==O.default&&O.default)?n:Object)],w.prototype,"playerComponent",void 0);var R=w=Object(h.b)([Object(v.a)({meta:{analytics:{pageviewTemplate:function(t){var data=m(t);return{page:"/error/".concat(data.hoster)}}}}})],w),k=(r(518),r(86)),component=Object(k.a)(R,undefined,undefined,!1,null,null,null);e.default=component.exports}}]);