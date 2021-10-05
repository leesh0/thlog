exports.ids = [41];
exports.modules = {

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/windicss-webpack-plugin/dist/loaders/pitcher.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/transform-template.js!./pages/auth/github.vue?vue&type=template&id=08006258&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"flex justify-center items-center py-10 text-5xl\">","</div>",[(_vm.loading)?_c('a-icon',{attrs:{"type":"loading"}}):_vm._e()],1),_vm._ssrNode(" <p class=\"text-base text-center\">Github 로그인중...</p>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/auth/github.vue?vue&type=template&id=08006258&

// CONCATENATED MODULE: ./node_modules/windicss-webpack-plugin/dist/loaders/pitcher.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/transform-template.js!./pages/auth/github.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
/* harmony default export */ var githubvue_type_script_lang_js_ = ({
  auth: 'guest',

  data() {
    return {
      loading: false
    };
  },

  mounted() {
    const githubCode = this.$route.query.code;

    if (!githubCode) {
      this.$router.push('/');
    } else {
      this.loading = true;
      this.$auth.loginWith('local', {
        data: {
          code: githubCode
        }
      }).then(() => {
        this.$router.push('/');
        this.$message.success('로그인되었습니다.');
      }).catch(e => {
        this.$message.error('로그인에 실패하였습니다.');
      });
    }
  },

  methods: {}
});
// CONCATENATED MODULE: ./pages/auth/github.vue?vue&type=script&lang=js&
 /* harmony default export */ var auth_githubvue_type_script_lang_js_ = (githubvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/auth/github.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  auth_githubvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "275d5e8e"
  
)

/* harmony default export */ var github = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=github.js.map