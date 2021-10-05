exports.ids = [34];
exports.modules = {

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/windicss-webpack-plugin/dist/loaders/pitcher.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/transform-template.js!./pages/_user/activities.vue?vue&type=template&id=6c79c6cf&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._l((_vm.activities),function(activity){return _c('cardActivity',{key:activity.id,attrs:{"activity":activity}})}),_vm._ssrNode(" "),_c('client-only',[_c('infinite-loading',{on:{"infinite":_vm.nextPage}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/_user/activities.vue?vue&type=template&id=6c79c6cf&

// CONCATENATED MODULE: ./node_modules/windicss-webpack-plugin/dist/loaders/pitcher.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/transform-template.js!./pages/_user/activities.vue?vue&type=script&lang=js&
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
/* harmony default export */ var activitiesvue_type_script_lang_js_ = ({
  async asyncData({
    $axios,
    params
  }) {
    let {
      data
    } = await $axios.get(`/api/user/activities`);
    return {
      activities: data.results,
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
      this.activities.push(...data.results);
      this.next = data.next;
      $state.loaded();

      if (!this.next) {
        $state.complete();
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/_user/activities.vue?vue&type=script&lang=js&
 /* harmony default export */ var _user_activitiesvue_type_script_lang_js_ = (activitiesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/_user/activities.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _user_activitiesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "cd5b3684"
  
)

/* harmony default export */ var activities = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=activities.js.map