(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{1297:function(t,e,r){"use strict";r.d(e,"a",(function(){return l}));var n=r(217);var c=r(316),o=r(154);function l(t){return function(t){if(Array.isArray(t))return Object(n.a)(t)}(t)||Object(c.a)(t)||Object(o.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},1396:function(t,e,r){"use strict";r.r(e);var n=r(1297),c=r(25),o=(r(69),r(28),r(51),r(52),{asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r,n,c,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$axios,n=r.get("/api/search",{params:{trending:!0,order:"week"}}),c=r.get("/api/search/hot-topics?limit=10"),e.next=5,Promise.all([n,c]);case 5:return o=e.sent,e.abrupt("return",{threads:o[0].data.results,next:o[0].data.next,hotTopic:o[1].data});case 7:case"end":return e.stop()}}),e)})))()},methods:{nextPage:function(t){var e=this;return Object(c.a)(regeneratorRuntime.mark((function r(){var c,o,data;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e.next){r.next=3;break}return t.complete(),r.abrupt("return");case 3:return r.next=5,e.$axios.get(e.next);case 5:o=r.sent,data=o.data,(c=e.threads).push.apply(c,Object(n.a)(data.results)),e.next=data.next,t.loaded(),e.next||t.complete();case 11:case"end":return r.stop()}}),r)})))()}}}),l=r(68),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"h-full"},[r("div",{staticClass:"py-3"},[r("h1",{staticClass:"text-base pl-2 items-center flex"},[r("a-icon",{staticClass:"mr-2",attrs:{type:"rise"}}),t._v("토픽TOP\n    ")],1),t._v(" "),r("tagsThreadTopics",{staticClass:"py-3",attrs:{topicList:t.hotTopic}})],1),t._v(" "),r("div",{staticClass:"pb-10 mt-10"},[r("h1",{staticClass:"text-base pl-2 items-center flex"},[r("a-icon",{staticClass:"mr-2",attrs:{type:"bar-chart"}}),t._v("트렌딩\n      "),r("a-dropdown",{attrs:{trigger:["click"]}},[r("div",{staticClass:"ml-3 text-xs flex items-center select-none cursor-pointer",on:{click:function(t){return t.preventDefault()}}},[t._v("\n          이번주 "),r("a-icon",{staticClass:"ml-1",attrs:{type:"down"}})],1),t._v(" "),r("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[r("a-menu-item",{key:"이번달"},[t._v(" 이번달 ")]),t._v(" "),r("a-menu-item",{key:"오늘"},[t._v(" 오늘 ")]),t._v(" "),r("a-menu-divider"),t._v(" "),r("a-menu-item",{key:"이번주"},[t._v(" 이번주 ")])],1)],1)],1),t._v(" "),r("div",{staticClass:"bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"},t._l(t.threads,(function(t){return r("cardThread",{key:t.id,attrs:{thread:t}})})),1),t._v(" "),r("client-only",[r("infinite-loading",{on:{infinite:t.nextPage}})],1)],1)])}),[],!1,null,null,null);e.default=component.exports}}]);