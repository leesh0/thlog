exports.ids = [6];
exports.modules = {

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/windicss-webpack-plugin/dist/loaders/pitcher.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/transform-template.js!./components/card/Thread.vue?vue&type=template&id=c7b64d9a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"\n    flex\n    p-5\n    -sm:px-2 -sm: -sm: -sm: -sm: -sm: -sm: -sm:py-3 -sm: -sm: -sm: -sm: -sm: -sm: -sm:border-b -sm:border-gray-100\n    gap-x-4\n    w-full\n    hover:bg-gray-50\n  "},[_vm._ssrNode("<div id=\"avatar\" data-v-c7b64d9a>","</div>",[_c('a-avatar',{staticClass:"ring-1 ring-gray-200 cursor-pointer",attrs:{"size":"large","src":_vm.thread.owner.avatar},on:{"click":function($event){return _vm.$router.push({
          name: 'user',
          params: { user: _vm.thread.owner.username },
        })}}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"text-center text-gray-300\" data-v-c7b64d9a>","</div>",[_c('a-icon',{attrs:{"type":_vm.thread.public ? 'unlock' : 'lock'}})],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"w-full\" data-v-c7b64d9a>","</div>",[_c('router-link',{attrs:{"to":{
        name: 'user-thread-read',
        params: { user: _vm.thread.owner.username, read: _vm.thread.id },
      }}},[_c('h1',{staticClass:"text-base md:text-base lg:text-lg font-semibold line-clamp-2"},[_vm._v("\n        "+_vm._s(_vm.thread.title)+"\n      ")])]),_vm._ssrNode(" <div class=\"flex text-xs justify-between items-center text-gray-400 gap-x-3\" data-v-c7b64d9a><div class=\"flex flex-wrap gap-x-2 items-center text-xs text-gray-400 pb-2\" data-v-c7b64d9a>"+(_vm._ssrList((_vm.thread.topics),function(topic){return ("<div class=\"min-w-min\" data-v-c7b64d9a>"+_vm._ssrEscape("\n          # "+_vm._s(topic)+"\n        ")+"</div>")}))+"</div></div> "),_vm._ssrNode("<div class=\"text-xs mt-2 items-center flex justify-between\" data-v-c7b64d9a>","</div>",[_vm._ssrNode("<div data-v-c7b64d9a><span"+(_vm._ssrClass("open-badge",_vm.thread.closed ? 'close' : 'open'))+" data-v-c7b64d9a>"+_vm._ssrEscape(_vm._s(_vm.thread.closed ? 'Close' : 'Open'))+"</span> <span data-v-c7b64d9a>"+_vm._ssrEscape(_vm._s(_vm.thread.owner.nickname)+" ・")+"</span> <span clas=\"text-gray-500\" data-v-c7b64d9a>"+_vm._ssrEscape(_vm._s(_vm.ago(_vm.thread.updated_at)))+"</span></div> "),_vm._ssrNode("<div class=\"item items-center gap-x-3\" data-v-c7b64d9a>","</div>",[_vm._ssrNode("<div class=\"item\" data-v-c7b64d9a>","</div>",[_vm._ssrNode("<div class=\"items-center flex mr-1\" data-v-c7b64d9a>","</div>",[_c('a-icon',{attrs:{"type":"message"}})],1),_vm._ssrNode(" <span data-v-c7b64d9a>"+_vm._ssrEscape(_vm._s(_vm.thread.comments_count))+"</span>")],2)])],2)],2),_vm._ssrNode(" <div class=\"flex gap-x-5 items-center text-gray-400 text-sm\" data-v-c7b64d9a></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/card/Thread.vue?vue&type=template&id=c7b64d9a&scoped=true&

// EXTERNAL MODULE: external "javascript-time-ago"
var external_javascript_time_ago_ = __webpack_require__(42);
var external_javascript_time_ago_default = /*#__PURE__*/__webpack_require__.n(external_javascript_time_ago_);

// EXTERNAL MODULE: external "javascript-time-ago/locale/ko.json"
var ko_json_ = __webpack_require__(43);
var ko_json_default = /*#__PURE__*/__webpack_require__.n(ko_json_);

// CONCATENATED MODULE: ./node_modules/windicss-webpack-plugin/dist/loaders/pitcher.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/transform-template.js!./components/card/Thread.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



if (external_javascript_time_ago_default.a.getDefaultLocale() != 'ko') {
  external_javascript_time_ago_default.a.addDefaultLocale(ko_json_default.a);
}

const timeAgo = new external_javascript_time_ago_default.a('ko-KR');
/* harmony default export */ var Threadvue_type_script_lang_js_ = ({
  props: ['thread'],
  methods: {
    ago(date) {
      const fromDate = Date.parse(date);
      return timeAgo.format(fromDate);
    }

  }
});
// CONCATENATED MODULE: ./components/card/Thread.vue?vue&type=script&lang=js&
 /* harmony default export */ var card_Threadvue_type_script_lang_js_ = (Threadvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/card/Thread.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(91)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  card_Threadvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "c7b64d9a",
  "18c3c271"
  
)

/* harmony default export */ var Thread = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(92);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("58acc9b8", content, true, context)
};

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_windicss_webpack_plugin_dist_loaders_pitcher_js_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_transform_template_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Thread_vue_vue_type_style_index_0_id_c7b64d9a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56);
/* harmony import */ var _node_modules_windicss_webpack_plugin_dist_loaders_pitcher_js_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_transform_template_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Thread_vue_vue_type_style_index_0_id_c7b64d9a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_windicss_webpack_plugin_dist_loaders_pitcher_js_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_transform_template_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Thread_vue_vue_type_style_index_0_id_c7b64d9a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_windicss_webpack_plugin_dist_loaders_pitcher_js_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_transform_template_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Thread_vue_vue_type_style_index_0_id_c7b64d9a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_windicss_webpack_plugin_dist_loaders_pitcher_js_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_transform_template_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Thread_vue_vue_type_style_index_0_id_c7b64d9a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".open-badge[data-v-c7b64d9a]{border-radius:9999px;border-width:1px;font-size:.75rem;line-height:1rem;margin-right:.5rem;padding:.125rem .5rem}.open-badge.open[data-v-c7b64d9a]{border-color:rgba(6,182,212,var(--tw-border-opacity));color:rgba(6,182,212,var(--tw-text-opacity))}.open-badge.close[data-v-c7b64d9a],.open-badge.open[data-v-c7b64d9a]{--tw-border-opacity:1;--tw-text-opacity:1}.open-badge.close[data-v-c7b64d9a]{border-color:rgba(239,68,68,var(--tw-border-opacity));color:rgba(239,68,68,var(--tw-text-opacity))}.item[data-v-c7b64d9a],.item-sm-hidden[data-v-c7b64d9a]{display:flex;align-items:center}.item-sm-hidden[data-v-c7b64d9a]{-webkit-column-gap:.25rem;-moz-column-gap:.25rem;grid-column-gap:.25rem;column-gap:.25rem}@media (max-width:640px){.item-sm-hidden[data-v-c7b64d9a]{display:none}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=card-thread.js.map