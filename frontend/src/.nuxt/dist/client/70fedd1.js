(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{1317:function(t,r,n){var content=n(1360);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(96).default)("69524771",content,!0,{sourceMap:!1})},1359:function(t,r,n){"use strict";n(1317)},1360:function(t,r,n){var e=n(95)(!1);e.push([t.i,".tag-icon[data-v-297e7840]{--tw-border-opacity:1;border-color:rgba(255,255,255,var(--tw-border-opacity));border-radius:9999px;border-width:1px;cursor:pointer;display:flex;align-items:center;justify-content:center;height:3rem;margin-left:auto;margin-right:auto;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),0 0 transparent;box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 transparent);--tw-ring-opacity:1;--tw-ring-color:rgba(243,244,246,var(--tw-ring-opacity));width:3rem}.tag-icon>img[data-v-297e7840]{height:2.5rem;width:2.5rem}.tag-name[data-v-297e7840]{font-size:.75rem;line-height:1rem;padding-top:.5rem;padding-bottom:.5rem;text-align:center;word-wrap:break-word}",""]),t.exports=e},1413:function(t,r,n){"use strict";n.r(r);n(81),n(60),n(119),n(28),n(82),n(51),n(59),n(83),n(84),n(52);var e=n(1301);function o(t,r){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,r){if(!t)return;if("string"==typeof t)return c(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,r)}(t))||r&&t&&"number"==typeof t.length){n&&(t=n);var i=0,e=function(){};return{s:e,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,f=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return l=t.done,t},e:function(t){f=!0,o=t},f:function(){try{l||null==n.return||n.return()}finally{if(f)throw o}}}}function c(t,r){(null==r||r>t.length)&&(r=t.length);for(var i=0,n=new Array(r);i<r;i++)n[i]=t[i];return n}function l(t){return String(t.slice(0,1)).toUpperCase()+String(t.slice(1,t.length)).toLowerCase()}function f(t){var r,n=t.toLowerCase(),c=o(e);try{for(c.s();!(r=c.n()).done;){var f=r.value;if(f.name===n){var d=f.versions.svg[0];return{devicon:!0,name:l(f.name),svg:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/".concat(f.name,"/").concat(f.name,"-").concat(d,".svg")}}}}catch(t){c.e(t)}finally{c.f()}return{devicon:!1,name:l(n),svg:l(n.slice(0,2))}}var d=["android","django","go","clojurescript","nuxtjs","linux","help"],v={data:function(){return{devicons:e,tags:d}},computed:{topics:function(){var t,r=[],n=o(this.tags);try{for(n.s();!(t=n.n()).done;){var e=t.value;r.push(f(e))}}catch(t){n.e(t)}finally{n.f()}return r}}},w=(n(1359),n(68)),component=Object(w.a)(v,(function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"px-2 py-2 flex gap-x-5 overflow-x-auto"},t._l(t.topics,(function(r){return n("div",{key:r.name,staticClass:"w-14"},[n("div",{staticClass:"tag-icon"},[r.devicon?n("img",{attrs:{src:r.svg}}):n("div",{staticClass:"text-xl"},[t._v(t._s(r.svg))])]),t._v(" "),n("p",{staticClass:"tag-name"},[t._v("\n      "+t._s(r.name)+"\n    ")])])})),0)}),[],!1,null,"297e7840",null);r.default=component.exports}}]);