exports.ids = [16];
exports.modules = {

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/windicss-webpack-plugin/dist/loaders/pitcher.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/transform-template.js!./components/modal/Login.vue?vue&type=template&id=5ea2d7e2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a-modal',{attrs:{"ok-button-props":{ props: { disabled: true } },"cancel-button-props":{ props: { disabled: true } }},on:{"cancel":_vm.close,"ok":_vm.close},model:{value:(_vm.modalOpen),callback:function ($$v) {_vm.modalOpen=$$v},expression:"modalOpen"}},[_c('div',{staticClass:"flex justify-center items-center py-5",attrs:{"slot":"title"},slot:"title"},[_c('div',{staticClass:"\n        brand\n        inline-flex\n        items-center\n        gap-x-1\n        text-black\n        hover:text-black\n      "},[_c('img',{staticClass:"w-8 h-8",attrs:{"src":__webpack_require__(46)}}),_vm._v("\n      thlog\n    ")])]),_vm._v(" "),_c('div',{staticClass:"sm:px-10"},[_c('p',[_vm._v("다음으로 로그인")]),_vm._v(" "),_c('a-button',{staticClass:"w-full mt-5",attrs:{"type":"dashed","size":"large"},on:{"click":_vm.githubLogin}},[_c('div',{staticClass:"flex justify-center items-center text-black-500"},[_c('a-icon',{staticClass:"mr-2",attrs:{"type":"github"}}),_vm._v(" "),_c('span',{staticClass:"text-black"},[_vm._v("Github 계정으로 로그인")])],1)])],1),_vm._v(" "),_c('div',{attrs:{"slot":"footer"},slot:"footer"})])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/modal/Login.vue?vue&type=template&id=5ea2d7e2&

// CONCATENATED MODULE: ./node_modules/windicss-webpack-plugin/dist/loaders/pitcher.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/transform-template.js!./components/modal/Login.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Loginvue_type_script_lang_js_ = ({
  props: ['value'],

  data() {
    return {};
  },

  computed: {
    modalOpen: {
      get: function () {
        return this.value;
      },
      set: function (nv) {
        this.$emit('input', nv);
      }
    }
  },
  methods: {
    githubLogin() {
      this.$auth.loginWith('github').then(e => {
        console.log(e);
      });
    },

    googleLogin() {
      this.$auth.loginWith('google');
    },

    close() {
      this.$emit('input', false);
    }

  }
});
// CONCATENATED MODULE: ./components/modal/Login.vue?vue&type=script&lang=js&
 /* harmony default export */ var modal_Loginvue_type_script_lang_js_ = (Loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/modal/Login.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(93)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  modal_Loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "07f95ecf"
  
)

/* harmony default export */ var Login = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.68bf749.svg";

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(94);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("61bf8988", content, true, context)
};

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_windicss_webpack_plugin_dist_loaders_pitcher_js_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_transform_template_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57);
/* harmony import */ var _node_modules_windicss_webpack_plugin_dist_loaders_pitcher_js_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_transform_template_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_windicss_webpack_plugin_dist_loaders_pitcher_js_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_transform_template_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_windicss_webpack_plugin_dist_loaders_pitcher_js_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_transform_template_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_windicss_webpack_plugin_dist_loaders_pitcher_js_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_transform_template_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".ant-modal-close-x{display:flex;align-items:center;justify-content:center}.ant-modal-footer,.ant-modal-header{border-bottom-width:0;border-top-width:0}.brand{cursor:pointer;font-size:1.875rem;line-height:2.25rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:\"Montserrat\",sans-serif}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=modal-login.js.map