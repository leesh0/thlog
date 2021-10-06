exports.ids = [33];
exports.modules = {

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/windicss-webpack-plugin/dist/loaders/pitcher.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/transform-template.js!./pages/_user.vue?vue&type=template&id=0c0a1a68&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.$route.name != 'user-thread-read')?_vm._ssrNode("<div class=\"max-w-screen-lg mx-auto min-w-70\" data-v-0c0a1a68>","</div>",[_vm._ssrNode("<div class=\"md:absolute md:w-80 mt-10 -sm:mt-3 px-3 rounded-lg\" data-v-0c0a1a68>","</div>",[_c('cardProfile',{attrs:{"user":_vm.user}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"md:pl-80 -md:mt-5\" data-v-0c0a1a68>","</div>",[_c('a-tabs',{staticClass:"user-affixed",attrs:{"activeKey":_vm.$route.name,"hideAdd":"","tabBarStyle":{ Color: '#000000' },"tabBarGutter":3},on:{"change":_vm.tabChange}},[_c('a-tab-pane',{key:"user"},[_c('template',{slot:"tab"},[_c('div',{staticClass:"t"},[_c('a-icon',{attrs:{"type":"thunderbolt"}}),_vm._v("Threads")],1)])],2),_vm._v(" "),_c('a-tab-pane',{key:"user-folders"},[_c('template',{slot:"tab"},[_c('div',{staticClass:"t"},[_c('a-icon',{attrs:{"type":"folder"}}),_vm._v("Folders")],1)])],2),_vm._v(" "),(_vm.$auth.loggedIn && _vm.$auth.user.username == _vm.user.username)?_c('a-tab-pane',{key:"user-activities"},[_c('template',{slot:"tab"},[_c('div',{staticClass:"t"},[_c('a-icon',{attrs:{"type":"rocket"}}),_vm._v("Activities")],1)])],2):_vm._e()],1),_vm._ssrNode(" "),_c('nuxt-child')],2)],2):_vm._ssrNode("<div class=\"pt-3 sm:pt-10\" data-v-0c0a1a68>","</div>",[_c('nuxt-child')],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/_user.vue?vue&type=template&id=0c0a1a68&scoped=true&

// CONCATENATED MODULE: ./node_modules/windicss-webpack-plugin/dist/loaders/pitcher.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/transform-template.js!./pages/_user.vue?vue&type=script&lang=js&
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
const screenSize = 1024 - 768;
/* harmony default export */ var _uservue_type_script_lang_js_ = ({
  async asyncData({
    $axios,
    params,
    redirect,
    error
  }) {
    let {
      data
    } = await $axios.get(`/api/${params.user}/`);

    if (!data) {
      redirect('/');
    }

    return {
      user: data
    };
  },

  methods: {
    tabChange(key) {
      this.$router.push({
        name: key
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/_user.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_uservue_type_script_lang_js_ = (_uservue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/_user.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(82)
if (style0.__inject__) style0.__inject__(context)
var style1 = __webpack_require__(84)
if (style1.__inject__) style1.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_uservue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0c0a1a68",
  "8fee4be4"
  
)

/* harmony default export */ var _user = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(83);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("48e90322", content, true, context)
};

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(85);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("16c1636c", content, true, context)
};

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_windicss_webpack_plugin_dist_loaders_pitcher_js_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_transform_template_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
/* harmony import */ var _node_modules_windicss_webpack_plugin_dist_loaders_pitcher_js_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_transform_template_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_windicss_webpack_plugin_dist_loaders_pitcher_js_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_transform_template_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_windicss_webpack_plugin_dist_loaders_pitcher_js_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_transform_template_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_windicss_webpack_plugin_dist_loaders_pitcher_js_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_transform_template_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".ant-tabs-bar{border-bottom-width:0;margin-bottom:0;padding-left:.5rem;padding-right:.5rem}@media (max-width:640px){.ant-tabs-bar{padding-left:0}}.user-affixed{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.user-affixed>.ant-tabs-bar{margin-bottom:0;padding-left:0;padding-right:0}@media (max-width:640px){.user-affixed>.ant-tabs-bar{border-bottom-width:1px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_windicss_webpack_plugin_dist_loaders_pitcher_js_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_transform_template_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_style_index_1_id_0c0a1a68_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);
/* harmony import */ var _node_modules_windicss_webpack_plugin_dist_loaders_pitcher_js_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_transform_template_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_style_index_1_id_0c0a1a68_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_windicss_webpack_plugin_dist_loaders_pitcher_js_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_transform_template_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_style_index_1_id_0c0a1a68_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_windicss_webpack_plugin_dist_loaders_pitcher_js_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_transform_template_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_style_index_1_id_0c0a1a68_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_windicss_webpack_plugin_dist_loaders_pitcher_js_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_transform_template_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_style_index_1_id_0c0a1a68_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".t[data-v-0c0a1a68]{display:flex;align-items:center;font-size:.9rem}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=_user.js.map