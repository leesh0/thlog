exports.ids = [43];
exports.modules = {

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/windicss-webpack-plugin/dist/loaders/pitcher.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/transform-template.js!./pages/index/index.vue?vue&type=template&id=f9af1bfe&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"h-full"},[_vm._ssrNode("<div class=\"py-3\">","</div>",[_vm._ssrNode("<h1 class=\"text-base pl-2 items-center flex\">","</h1>",[_c('a-icon',{staticClass:"mr-2",attrs:{"type":"rise"}}),_vm._ssrNode("토픽TOP\n    ")],2),_vm._ssrNode(" "),_c('tagsThreadTopics',{staticClass:"py-3",attrs:{"topicList":_vm.hotTopic}})],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"pb-10 mt-10\">","</div>",[_vm._ssrNode("<h1 class=\"text-base pl-2 items-center flex\">","</h1>",[_c('a-icon',{staticClass:"mr-2",attrs:{"type":"bar-chart"}}),_vm._ssrNode("트렌딩\n      "),_c('a-dropdown',{attrs:{"trigger":['click']}},[_c('div',{staticClass:"ml-3 text-xs flex items-center select-none cursor-pointer",on:{"click":function (e) { return e.preventDefault(); }}},[_vm._v("\n          이번주 "),_c('a-icon',{staticClass:"ml-1",attrs:{"type":"down"}})],1),_vm._v(" "),_c('a-menu',{attrs:{"slot":"overlay"},slot:"overlay"},[_c('a-menu-item',{key:"이번달"},[_vm._v(" 이번달 ")]),_vm._v(" "),_c('a-menu-item',{key:"오늘"},[_vm._v(" 오늘 ")]),_vm._v(" "),_c('a-menu-divider'),_vm._v(" "),_c('a-menu-item',{key:"이번주"},[_vm._v(" 이번주 ")])],1)],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3\">","</div>",_vm._l((_vm.threads),function(thread){return _c('cardThread',{key:thread.id,attrs:{"thread":thread}})}),1),_vm._ssrNode(" "),_c('client-only',[_c('infinite-loading',{on:{"infinite":_vm.nextPage}})],1)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index/index.vue?vue&type=template&id=f9af1bfe&

// CONCATENATED MODULE: ./node_modules/windicss-webpack-plugin/dist/loaders/pitcher.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/transform-template.js!./pages/index/index.vue?vue&type=script&lang=js&
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
/* harmony default export */ var indexvue_type_script_lang_js_ = ({
  async asyncData({
    $axios
  }) {
    let trending = $axios.get('/api/search', {
      params: {
        trending: true,
        order: 'week'
      }
    });
    let hotTopics = $axios.get('/api/search/hot-topics?limit=10');
    let values = await Promise.all([trending, hotTopics]);
    return {
      threads: values[0].data.results,
      next: values[0].data.next,
      hotTopic: values[1].data
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
// CONCATENATED MODULE: ./pages/index/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_indexvue_type_script_lang_js_ = (indexvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_indexvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "72119039"
  
)

/* harmony default export */ var index = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map