exports.ids = [3];
exports.modules = {

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/windicss-webpack-plugin/dist/loaders/pitcher.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/transform-template.js!./components/card/Activity.vue?vue&type=template&id=5fa985fa&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"\n    flex\n    items-center\n    gap-x-3\n    w-full\n    py-3\n    px-2\n    border-b border-gray-100\n    hover:bg-gray-100\n    cursor-pointer\n  "},[_vm._ssrNode("<div class=\"text-lg rounded-full flex justify-center items-center w-10 h-10\">\n    🎉\n  </div> <div class=\"w-full\"><div class=\"text-base font-medium\">"+_vm._ssrEscape(_vm._s(_vm.activity.title))+"</div> <div class=\"text-sm text-gray-400 pb-2\">"+_vm._ssrEscape(_vm._s(_vm.activity.desc))+"</div> <div class=\"text-xs text-gray-400 flex items-center\">"+_vm._ssrEscape("\n      "+_vm._s(_vm.ago(_vm.activity.created_at))+"\n    ")+"</div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/card/Activity.vue?vue&type=template&id=5fa985fa&

// EXTERNAL MODULE: external "javascript-time-ago"
var external_javascript_time_ago_ = __webpack_require__(42);
var external_javascript_time_ago_default = /*#__PURE__*/__webpack_require__.n(external_javascript_time_ago_);

// EXTERNAL MODULE: external "javascript-time-ago/locale/ko.json"
var ko_json_ = __webpack_require__(43);
var ko_json_default = /*#__PURE__*/__webpack_require__.n(ko_json_);

// CONCATENATED MODULE: ./node_modules/windicss-webpack-plugin/dist/loaders/pitcher.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/transform-template.js!./components/card/Activity.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Activityvue_type_script_lang_js_ = ({
  props: ['activity'],
  methods: {
    ago(date) {
      const fromDate = Date.parse(date);
      return timeAgo.format(fromDate);
    }

  }
});
// CONCATENATED MODULE: ./components/card/Activity.vue?vue&type=script&lang=js&
 /* harmony default export */ var card_Activityvue_type_script_lang_js_ = (Activityvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/card/Activity.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  card_Activityvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "895fb594"
  
)

/* harmony default export */ var Activity = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=card-activity.js.map