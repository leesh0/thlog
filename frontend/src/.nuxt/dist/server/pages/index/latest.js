exports.ids = [44];
exports.modules = {

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/windicss-webpack-plugin/dist/loaders/pitcher.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/transform-template.js!./pages/index/latest.vue?vue&type=template&id=0bf9def6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"h-full"},[_vm._ssrNode("<div class=\"pb-10 mt-3\">","</div>",[_vm._ssrNode("<h1 class=\"text-base pl-2 items-center flex\">✨ 최근 갱신된 쓰레드</h1> "),_vm._ssrNode("<div class=\"bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3\">","</div>",_vm._l((_vm.threads),function(thread){return _c('cardThread',{key:thread.id,attrs:{"thread":thread}})}),1),_vm._ssrNode(" "),_c('client-only',[_c('infinite-loading',{on:{"infinite":_vm.nextPage}})],1)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index/latest.vue?vue&type=template&id=0bf9def6&

// CONCATENATED MODULE: ./node_modules/windicss-webpack-plugin/dist/loaders/pitcher.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/transform-template.js!./pages/index/latest.vue?vue&type=script&lang=js&
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
/* harmony default export */ var latestvue_type_script_lang_js_ = ({
  async asyncData({
    $axios
  }) {
    let {
      data
    } = await $axios.get('/api/search/');
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
// CONCATENATED MODULE: ./pages/index/latest.vue?vue&type=script&lang=js&
 /* harmony default export */ var index_latestvue_type_script_lang_js_ = (latestvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index/latest.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  index_latestvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "c2711aa0"
  
)

/* harmony default export */ var latest = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=latest.js.map