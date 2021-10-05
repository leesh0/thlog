exports.ids = [36];
exports.modules = {

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/windicss-webpack-plugin/dist/loaders/pitcher.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/transform-template.js!./pages/_user/folders.vue?vue&type=template&id=e94b4ce6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._l((_vm.folders),function(folder){return _c('cardFolder',{key:folder.id,attrs:{"folder":folder}})}),1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/_user/folders.vue?vue&type=template&id=e94b4ce6&

// CONCATENATED MODULE: ./node_modules/windicss-webpack-plugin/dist/loaders/pitcher.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/transform-template.js!./pages/_user/folders.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var foldersvue_type_script_lang_js_ = ({
  async asyncData({
    $axios,
    params
  }) {
    let {
      data
    } = await $axios.get(`/api/folder/${params.user}/`);
    return {
      folders: data
    };
  }

});
// CONCATENATED MODULE: ./pages/_user/folders.vue?vue&type=script&lang=js&
 /* harmony default export */ var _user_foldersvue_type_script_lang_js_ = (foldersvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/_user/folders.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _user_foldersvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "48cf3078"
  
)

/* harmony default export */ var folders = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=folders.js.map