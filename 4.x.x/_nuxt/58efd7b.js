(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{460:function(e,t,n){"use strict";n.r(t);n(29),n(1),n(70);var r,l=n(18),c=n(17),o=n(38),f=n(46),d=n(25),m=(n(13),n(210),n(9)),v=n(164);function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(d.a)(e);if(t){var l=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,l)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var y=function(e){Object(o.a)(n,e);var t=h(n);function n(){var e;return Object(l.a)(this,n),(e=t.apply(this,arguments)).name="",e.url="",e.nameState=null,e}return Object(c.a)(n,[{key:"visibilityChanged",value:function(){return this.visible}},{key:"checkFormValidity",value:function(){var e=this.form.checkValidity();return this.nameState=e?"valid":"invalid",e}},{key:"resetModal",value:function(){this.name="",this.url="",this.nameState=null}},{key:"handleOk",value:function(e){e.preventDefault(),this.handleSubmit()}},{key:"handleSubmit",value:function(){var e=this;if(this.checkFormValidity()){var t=this.url.match(/(https?:\/\/)?(www.)?([^/]*)(\/.*)?/);t?(this.$nextTick((function(){e.visible=!1})),this.submit({name:this.name,url:t[3]})):this.nameState="invalid"}}},{key:"submit",value:function(data){return data}}]),n}(v.f);Object(m.b)([Object(v.c)("change",{default:!1}),Object(m.c)("design:type",Boolean)],y.prototype,"visible",void 0),Object(m.b)([Object(v.g)("visible"),Object(v.b)("change"),Object(m.c)("design:type",Function),Object(m.c)("design:paramtypes",[]),Object(m.c)("design:returntype",void 0)],y.prototype,"visibilityChanged",null),Object(m.b)([Object(v.e)("form"),Object(m.c)("design:type","function"==typeof(r="undefined"!=typeof HTMLFormElement&&HTMLFormElement)?r:Object)],y.prototype,"form",void 0),Object(m.b)([Object(v.b)("submit"),Object(m.c)("design:type",Function),Object(m.c)("design:paramtypes",[Object]),Object(m.c)("design:returntype",void 0)],y.prototype,"submit",null);var O=y=Object(m.b)([Object(v.a)({})],y),j=n(86),component=Object(j.a)(O,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("b-modal",{attrs:{id:"modal-prevent-closing",title:"Add page to search"},on:{show:e.resetModal,hidden:e.resetModal,ok:e.handleOk},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[t("form",{ref:"form",on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[t("b-form-group",{attrs:{state:e.nameState,label:"Page name","label-for":"page-name-input","invalid-feedback":"Name is required"}},[t("b-form-input",{attrs:{id:"page-name-input",state:e.nameState,placeholder:"eg. YouTube",required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),e._v(" "),t("b-form-group",{attrs:{state:e.nameState,label:"Page url","label-for":"page-url-input","invalid-feedback":"Url is required"}},[t("b-form-input",{attrs:{id:"page-url-input",state:e.nameState,placeholder:"eg. youtube.com",required:""},model:{value:e.url,callback:function(t){e.url=t},expression:"url"}})],1)],1)])}),[],!1,null,null,null);t.default=component.exports}}]);