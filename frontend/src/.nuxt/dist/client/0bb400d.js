(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{1401:function(e,r,t){"use strict";t.r(r);var n=t(25),c=(t(69),{asyncData:function(e){return Object(n.a)(regeneratorRuntime.mark((function r(){var t,n,c,data;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.$axios,n=e.params,r.next=3,t.get("/api/folder/".concat(n.user,"/"));case 3:return c=r.sent,data=c.data,r.abrupt("return",{folders:data});case 6:case"end":return r.stop()}}),r)})))()}}),o=t(68),component=Object(o.a)(c,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",e._l(e.folders,(function(e){return t("cardFolder",{key:e.id,attrs:{folder:e}})})),1)}),[],!1,null,null,null);r.default=component.exports}}]);