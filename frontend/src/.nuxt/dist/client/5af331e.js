(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{1297:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r(217);var c=r(316),o=r(154);function l(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||Object(c.a)(e)||Object(o.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},1397:function(e,t,r){"use strict";r.r(t);var n=r(1297),c=r(25),o=(r(69),{asyncData:function(e){return Object(c.a)(regeneratorRuntime.mark((function t(){var r,n,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$axios,t.next=3,r.get("/api/search/");case 3:return n=t.sent,data=n.data,t.abrupt("return",{threads:data.results,next:data.next});case 6:case"end":return t.stop()}}),t)})))()},methods:{nextPage:function(e){var t=this;return Object(c.a)(regeneratorRuntime.mark((function r(){var c,o,data;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t.next){r.next=3;break}return e.complete(),r.abrupt("return");case 3:return r.next=5,t.$axios.get(t.next);case 5:o=r.sent,data=o.data,(c=t.threads).push.apply(c,Object(n.a)(data.results)),t.next=data.next,e.loaded(),t.next||e.complete();case 11:case"end":return r.stop()}}),r)})))()}}}),l=r(68),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"h-full"},[r("div",{staticClass:"pb-10 mt-3"},[r("h1",{staticClass:"text-base pl-2 items-center flex"},[e._v("✨ 최근 갱신된 쓰레드")]),e._v(" "),r("div",{staticClass:"bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"},e._l(e.threads,(function(e){return r("cardThread",{key:e.id,attrs:{thread:e}})})),1),e._v(" "),r("client-only",[r("infinite-loading",{on:{infinite:e.nextPage}})],1)],1)])}),[],!1,null,null,null);t.default=component.exports}}]);