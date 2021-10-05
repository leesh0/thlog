exports.ids = [39];
exports.modules = {

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/windicss-webpack-plugin/dist/loaders/pitcher.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/transform-template.js!./pages/_user/index.vue?vue&type=template&id=e5eb0024&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._l((_vm.threads),function(thread){return _c('cardUserThread',{key:thread.id,attrs:{"thread":thread}})}),_vm._ssrNode(" "),_c('client-only',[_c('infinite-loading',{on:{"infinite":_vm.nextPage}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/_user/index.vue?vue&type=template&id=e5eb0024&

// CONCATENATED MODULE: ./node_modules/windicss-webpack-plugin/dist/loaders/pitcher.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/transform-template.js!./pages/_user/index.vue?vue&type=script&lang=js&
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
/* harmony default export */ var _uservue_type_script_lang_js_ = ({
  async asyncData({
    $axios,
    params
  }) {
    let {
      data
    } = await $axios.get(`/api/thread/${params.user}/`);
    return {
      threads: data.results,
      next: data.next
    };
  },

  methods: {
    async nextPage($state) {
      if (!this.next) {
        $state.complete();
        return;
      }

      let {
        data
      } = await this.$axios.get(this.next);
      this.threads.push(...data.results);
      this.next = data.next;
      $state.loaded();

      if (!this.next) {
        $state.complete();
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/_user/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_uservue_type_script_lang_js_ = (_uservue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/_user/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_uservue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "ce3dc3de"
  
)

/* harmony default export */ var _user = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map