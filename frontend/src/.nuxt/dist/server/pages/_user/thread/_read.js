exports.ids = [40];
exports.modules = {

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/windicss-webpack-plugin/dist/loaders/pitcher.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/transform-template.js!./pages/_user/thread/_read.vue?vue&type=template&id=241fade0&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"h-full"},[_vm._ssrNode("<div class=\"/sm:border-b\" data-v-241fade0>","</div>",[_vm._ssrNode("<div class=\"px-5 -sm:px-2 sm:pb-5 max-w-screen-xl mx-auto\" data-v-241fade0>","</div>",[_vm._ssrNode("<div class=\"flex justify-between\" data-v-241fade0>","</div>",[_vm._ssrNode("<div class=\"flex flex-shrink-0 items-center gap-x-3\" data-v-241fade0>","</div>",[_vm._ssrNode("<span"+(_vm._ssrClass("open-badge",_vm.thread.closed ? 'close' : 'open'))+" data-v-241fade0>"+_vm._ssrEscape(_vm._s(_vm.thread.closed ? 'Close' : 'Open'))+"</span> "),_vm._ssrNode("<div class=\"flex items-center text-gray-400 text-sm\" data-v-241fade0>","</div>",[_c('a-icon',{staticClass:"mr-1",attrs:{"type":"message"}}),_vm._ssrNode(_vm._ssrEscape(_vm._s(_vm.thread.comments_count)+"\n          "))],2),_vm._ssrNode(" <div class=\"text-gray-400\" data-v-241fade0>・</div> <div class=\"flex items-center text-gray-400 text-sm\" data-v-241fade0>"+_vm._ssrEscape("\n            "+_vm._s(_vm.ago(_vm.thread.updated_at))+" 갱신\n          ")+"</div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"text-xl flex items-center\" data-v-241fade0>","</div>",[_c('a-icon',{attrs:{"type":"more"}})],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div id=\"header\" class=\"text-2xl sm:text-3xl flex items-center mt-2\" data-v-241fade0>","</div>",[_vm._ssrNode(((!_vm.titleEdit)?("<h1 class=\"font-medium\" data-v-241fade0>"+_vm._ssrEscape(_vm._s(_vm.thread.title))+"</h1>"):"<!---->")+" "),(!_vm.titleEdit && _vm.thread.is_owner)?_vm._ssrNode("<div class=\"flex font-medium items-end\" data-v-241fade0>","</div>",[_vm._ssrNode("<div class=\"\n              flex\n              items-center\n              text-xl text-gray-400\n              select-none\n              cursor-pointer\n            \" data-v-241fade0>","</div>",[_c('a-icon',{staticClass:"ml-2",attrs:{"type":"edit"}})],1)]):_vm._e(),_vm._ssrNode(" "),(_vm.titleEdit)?_vm._ssrNode("<div class=\"flex items-center w-full\" data-v-241fade0>","</div>",[_c('a-input',{staticClass:"w-full",attrs:{"size":"large"},model:{value:(_vm.threadTitle),callback:function ($$v) {_vm.threadTitle=$$v},expression:"threadTitle"}}),_vm._ssrNode(" "),_c('a-button',{staticClass:"ml-2",attrs:{"size":"large"},on:{"click":_vm.editTitle}},[_vm._v("변경")]),_vm._ssrNode(" "),_c('a-button',{staticClass:"ml-2",attrs:{"size":"large","type":"danger","ghost":""},on:{"click":function($event){_vm.titleEdit = false}}},[_vm._v("취소")])],2):_vm._e()],2),_vm._ssrNode(" "),_vm._ssrNode("<div data-v-241fade0>","</div>",[_vm._ssrNode("<div class=\"mt-5 flex items-center flex-wrap\" data-v-241fade0>","</div>",[_c('tagsThreadTopics',{directives:[{name:"show",rawName:"v-show",value:(!_vm.tagsEdit),expression:"!tagsEdit"}],staticClass:"flex items-center pb-4",attrs:{"topicList":_vm.thread.topics}}),_vm._ssrNode(" "),(!_vm.tagsEdit)?_vm._ssrNode("<div data-v-241fade0>","</div>",[(_vm.thread.is_owner)?_c('a-button',{attrs:{"type":"link"},on:{"click":function($event){_vm.tagsEdit = true}}},[_c('div',{staticClass:"flex items-center"},[_c('a-icon',{staticClass:"mr-2",attrs:{"type":"plus"}}),_vm._v("토픽\n                "+_vm._s(_vm.thread.topics.length < 5 ? '추가하기' : '편집하기')+"\n              ")],1)]):_vm._e()],1):_vm._ssrNode("<div class=\"flex items-center gap-x-3 w-full flex-nowrap\" data-v-241fade0>","</div>",[_c('a-select',{staticStyle:{"width":"100%"},attrs:{"maxTagCount":5,"mode":"tags","placeholder":"토픽을 추가해보세요"},on:{"change":_vm.inputTopics},model:{value:(_vm.threadTopics),callback:function ($$v) {_vm.threadTopics=$$v},expression:"threadTopics"}},_vm._l((_vm.topicSuggests),function(ts){return _c('a-select-option',{key:ts},[_vm._v("\n                "+_vm._s(ts)+"\n              ")])}),1),_vm._ssrNode(" "),_c('a-button',{attrs:{"type":"link"},on:{"click":_vm.editTopics}},[_vm._v(" 저장하기 ")]),_vm._ssrNode(" "),_c('a-button',{attrs:{"type":"link"},on:{"click":function($event){_vm.tagsEdit = false}}},[_vm._v(" 취소 ")])],2)],2)])],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sm:hidden\" data-v-241fade0>","</div>",[_c('a-divider',[_c('div',{staticClass:"text-lg text-cyan-500"},[_c('a-icon',{attrs:{"type":"thunderbolt","theme":"filled"}})],1)])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"pb-10 sm:pt-5 sm:\" data-v-241fade0>","</div>",[_vm._ssrNode("<div class=\"max-w-screen-xl mx-auto sm:flex\" data-v-241fade0>","</div>",[_vm._ssrNode("<div class=\"sm:w-[calc(100%-384px)] -sm:px-0\" data-v-241fade0>","</div>",[_vm._ssrNode("<div class=\"w-full\" data-v-241fade0>","</div>",[_c('threadPostList',{attrs:{"thread":_vm.thread}}),_vm._ssrNode(" "),(_vm.thread.closed)?_vm._ssrNode("<div data-v-241fade0>","</div>",[_c('a-divider',[_c('div',{staticClass:"flex items-center text-red-500"},[_c('a-icon',{staticClass:"mr-2",attrs:{"type":"check-circle"}}),_vm._v(" "),_c('span',{staticClass:"text-black"},[_vm._v("Closed")])],1)])],1):_vm._ssrNode(("<div class=\"border-t-2 border-gray-100 -sm:hidden\" data-v-241fade0></div>")),_vm._ssrNode(" "),(
              (_vm.thread.public && _vm.$auth.loggedIn) ||
              (!_vm.thread.public && _vm.thread.is_owner)
            )?_c('threadCommentWriter',{staticClass:"mt-5",attrs:{"id":"comment-writer","thread":_vm.thread},on:{"close":_vm.closeThread,"addComment":function (cm) {
                _vm.thread.comments.push(cm)
                _vm.thread.comments_count += 1
              }}}):_c('div',{staticClass:"text-center py-20"},[_c('p',{staticClass:"text-base"},[_vm._v("로그인 후 코멘트를 작성하실 수 있습니다.")]),_vm._v(" "),_c('a-button',{attrs:{"type":"primary","ghost":""},on:{"click":function($event){return _vm.$nuxt.$emit('login')}}},[_vm._v("로그인")])],1)],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"relative sm:w-96\" data-v-241fade0>","</div>",[_vm._ssrNode("<div class=\"w-full px-2 sm:sticky sm:top-10 sm:px-5\" data-v-241fade0>","</div>",[_c('threadSide',{attrs:{"thread":_vm.thread},on:{"close":_vm.closeThread}})],1)])],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/_user/thread/_read.vue?vue&type=template&id=241fade0&scoped=true&

// EXTERNAL MODULE: external "javascript-time-ago"
var external_javascript_time_ago_ = __webpack_require__(42);
var external_javascript_time_ago_default = /*#__PURE__*/__webpack_require__.n(external_javascript_time_ago_);

// EXTERNAL MODULE: external "javascript-time-ago/locale/ko.json"
var ko_json_ = __webpack_require__(43);
var ko_json_default = /*#__PURE__*/__webpack_require__.n(ko_json_);

// EXTERNAL MODULE: ./assets/icons/devicon.json
var devicon = __webpack_require__(86);

// CONCATENATED MODULE: ./node_modules/windicss-webpack-plugin/dist/loaders/pitcher.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/transform-template.js!./pages/_user/thread/_read.vue?vue&type=script&lang=js&
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
/* harmony default export */ var _readvue_type_script_lang_js_ = ({
  layout: 'empty',

  async asyncData({
    $axios,
    $auth,
    params
  }) {
    let {
      data
    } = await $axios.get(`api/thread/${params.user}/${params.read}`);
    return {
      thread: data,
      threadTopics: data.topics,
      threadTitle: data.title
    };
  },

  data() {
    return {
      titleEdit: false,
      tagsEdit: false
    };
  },

  computed: {
    topicSuggests() {
      let ts = [];

      for (let di of devicon) {
        ts.push(di.name);
      }

      return ts;
    }

  },
  methods: {
    closeThread(value) {
      this.thread.closed = value;
    },

    ago(date) {
      const fromDate = Date.parse(date);
      return timeAgo.format(fromDate);
    },

    inputTopics() {
      if (this.threadTopics.length > 5) {
        this.threadTopics.pop();
        this.$message.error('토픽은 최대 5개까지 추가 가능합니다.');
      }
    },

    editTitle() {
      const user = this.$route.params.user;
      const read = this.$route.params.read;
      this.$axios.patch(`api/thread/${user}/${read}`, {
        title: this.threadTitle
      }).then(r => {
        this.thread.title = r.data.title;
        this.titleEdit = false;
      }).catch(e => {
        this.$message.error('네트워크 오류');
        this.titleEdit = false;
      });
    },

    editTopics() {
      const user = this.$route.params.user;
      const read = this.$route.params.read;
      this.$axios.patch(`api/thread/${user}/${read}`, {
        topics: this.threadTopics
      }).then(r => {
        this.thread.topics = r.data.topics;
        this.tagsEdit = false;
      }).catch(e => {
        this.$message.error('네트워크 오류');
        this.tagsEdit = false;
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/_user/thread/_read.vue?vue&type=script&lang=js&
 /* harmony default export */ var thread_readvue_type_script_lang_js_ = (_readvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/_user/thread/_read.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(87)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  thread_readvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "241fade0",
  "1ae0bb41"
  
)

/* harmony default export */ var _read = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(88);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("798c5c62", content, true, context)
};

/***/ }),

/***/ 86:
/***/ (function(module) {

module.exports = JSON.parse("[{\"name\":\"adonisjs\",\"tags\":[\"nodejs\",\"framework\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\"],\"font\":[\"original\",\"original-wordmark\"]},\"color\":\"#5A45FF\",\"aliases\":[{\"base\":\"original\",\"alias\":\"plain\"},{\"base\":\"original-wordmark\",\"alias\":\"plain-wordmark\"}]},{\"name\":\"aftereffects\",\"tags\":[\"video\",\"editor\"],\"versions\":{\"svg\":[\"original\",\"plain\"],\"font\":[\"plain\"]},\"color\":\"#1F0740\",\"aliases\":[]},{\"name\":\"amazonwebservices\",\"tags\":[\"cloud\",\"hosting\",\"server\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain-wordmark\"],\"font\":[\"original\",\"plain-wordmark\"]},\"color\":\"#F7A80D\",\"aliases\":[{\"base\":\"original\",\"alias\":\"plain\"}]},{\"name\":\"android\",\"tags\":[\"os\",\"mobile\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#A4C439\",\"aliases\":[]},{\"name\":\"aarch64\",\"tags\":[\"architecture\",\"programming\",\"language\",\"ARM\"],\"versions\":{\"svg\":[\"original\",\"plain\"],\"font\":[\"plain\"]},\"color\":\"#16358C\",\"aliases\":[]},{\"name\":\"angularjs\",\"tags\":[\"framework\",\"javascript\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#c4473a\",\"aliases\":[]},{\"name\":\"apache\",\"tags\":[\"php\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\",\"line\",\"line-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\",\"line\",\"line-wordmark\"]},\"color\":\"#303284\",\"aliases\":[]},{\"name\":\"apachekafka\",\"tags\":[\"streaming\",\"open-source\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\"],\"font\":[\"original\",\"original-wordmark\"]},\"color\":\"#231f20\",\"aliases\":[{\"base\":\"original\",\"alias\":\"plain\"},{\"base\":\"original-wordmark\",\"alias\":\"plain-wordmark\"}]},{\"name\":\"appcelerator\",\"tags\":[\"app\",\"mobile\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain-wordmark\"],\"font\":[\"original\",\"plain-wordmark\"]},\"color\":\"#ac162c\",\"aliases\":[{\"base\":\"original\",\"alias\":\"plain\"}]},{\"name\":\"apple\",\"tags\":[\"brand\",\"mobile\"],\"versions\":{\"svg\":[\"original\"],\"font\":[\"original\"]},\"color\":\"#000000\",\"aliases\":[{\"base\":\"original\",\"alias\":\"plain\"}]},{\"name\":\"appwrite\",\"tags\":[\"cloud\",\"platform\",\"server\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#f02e65\",\"aliases\":[{\"base\":\"plain\",\"alias\":\"original\"},{\"base\":\"plain-wordmark\",\"alias\":\"original-wordmark\"}]},{\"name\":\"arduino\",\"tags\":[\"microcontroller\",\"hardware\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#00979d\",\"aliases\":[]},{\"name\":\"atom\",\"tags\":[\"editor\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\"],\"font\":[\"original\",\"original-wordmark\"]},\"color\":\"#67595D\",\"aliases\":[{\"base\":\"original\",\"alias\":\"plain\"},{\"base\":\"original-wordmark\",\"alias\":\"plain-wordmark\"}]},{\"name\":\"azure\",\"tags\":[\"cloud\",\"devops\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#0089D6\",\"aliases\":[]},{\"name\":\"babel\",\"tags\":[\"javascript\",\"transpiler\"],\"versions\":{\"svg\":[\"original\",\"plain\"],\"font\":[\"plain\"]},\"color\":\"#f9dc3e\",\"aliases\":[{\"base\":\"plain\",\"alias\":\"original\"}]},{\"name\":\"backbonejs\",\"tags\":[\"javascript\",\"framework\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#002A41\",\"aliases\":[]},{\"name\":\"bash\",\"tags\":[\"shell\",\"command\"],\"versions\":{\"svg\":[\"original\",\"plain\"],\"font\":[\"plain\"]},\"color\":\"#293138\",\"aliases\":[]},{\"name\":\"behance\",\"tags\":[\"social\",\"website\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#0071e0\",\"aliases\":[]},{\"name\":\"bitbucket\",\"tags\":[],\"versions\":{\"svg\":[\"original\",\"original-wordmark\"],\"font\":[\"original\",\"original-wordmark\"]},\"color\":\"#205081\",\"aliases\":[{\"base\":\"original\",\"alias\":\"plain\"},{\"base\":\"original-wordmark\",\"alias\":\"plain-wordmark\"}]},{\"name\":\"bootstrap\",\"tags\":[\"css\",\"framework\"],\"versions\":{\"svg\":[\"original\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#59407f\",\"aliases\":[]},{\"name\":\"bulma\",\"tags\":[\"css\",\"framework\"],\"versions\":{\"svg\":[\"plain\"],\"font\":[\"plain\"]},\"color\":\"#00d1b2\",\"aliases\":[]},{\"name\":\"bower\",\"tags\":[\"package\",\"manager\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\",\"line\",\"line-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\",\"line\",\"line-wordmark\"]},\"color\":\"#ef5734\",\"aliases\":[]},{\"name\":\"c\",\"tags\":[\"language\"],\"versions\":{\"svg\":[\"original\",\"plain\",\"line\"],\"font\":[\"plain\",\"plain-wordmark\",\"line\",\"line-wordmark\"]},\"color\":\"#03599c\",\"aliases\":[{\"base\":\"plain\",\"alias\":\"plain-wordmark\"},{\"base\":\"line\",\"alias\":\"line-wordmark\"}]},{\"name\":\"cakephp\",\"tags\":[\"framework\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#D43D44\",\"aliases\":[]},{\"name\":\"canva\",\"tags\":[\"design\"],\"versions\":{\"svg\":[\"original\"],\"font\":[\"original\"]},\"color\":\"#00C4CC\",\"aliases\":[{\"base\":\"original\",\"alias\":\"plain\"}]},{\"name\":\"centos\",\"tags\":[\"server\",\"linux\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#932178\",\"aliases\":[]},{\"name\":\"ceylon\",\"tags\":[\"language\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\"]},\"color\":\"#AB710A\",\"aliases\":[]},{\"name\":\"chrome\",\"tags\":[\"browser\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#ce4e4e\",\"aliases\":[]},{\"name\":\"circleci\",\"tags\":[\"integration\",\"platform\"],\"versions\":{\"svg\":[\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#343434\",\"aliases\":[]},{\"name\":\"clojure\",\"tags\":[\"language\"],\"versions\":{\"svg\":[\"original\",\"line\"],\"font\":[\"line\",\"plain\"]},\"color\":\"#5881d8\",\"aliases\":[{\"base\":\"line\",\"alias\":\"plain\"}]},{\"name\":\"clojurescript\",\"tags\":[\"language\"],\"versions\":{\"svg\":[\"original\",\"plain\"],\"font\":[\"plain\"]},\"color\":\"#96ca4b\",\"aliases\":[]},{\"name\":\"codecov\",\"tags\":[\"platform\",\"integration\"],\"versions\":{\"svg\":[\"plain\"],\"font\":[\"plain\"]},\"color\":\"#e0225c\",\"aliases\":[]},{\"name\":\"codeigniter\",\"tags\":[\"php\",\"framework\"],\"versions\":{\"svg\":[\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#ee4323\",\"aliases\":[]},{\"name\":\"codepen\",\"tags\":[\"social\",\"website\",\"editor\"],\"versions\":{\"svg\":[\"plain\",\"original-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#231F20\",\"aliases\":[{\"base\":\"plain\",\"alias\":\"original\"}]},{\"name\":\"coffeescript\",\"tags\":[\"javascript\",\"language\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\"],\"font\":[\"original\",\"original-wordmark\"]},\"color\":\"#28334c\",\"aliases\":[{\"base\":\"original\",\"alias\":\"plain\"},{\"base\":\"original-wordmark\",\"alias\":\"plain-wordmark\"}]},{\"name\":\"composer\",\"tags\":[\"package\",\"manager\",\"php\"],\"versions\":{\"svg\":[\"original\",\"line\",\"line-wordmark\"],\"font\":[\"line\",\"line-wordmark\"]},\"color\":\"#000000\",\"aliases\":[{\"base\":\"line\",\"alias\":\"plain\"},{\"base\":\"line-wordmark\",\"alias\":\"plain-wordmark\"}]},{\"name\":\"confluence\",\"tags\":[],\"versions\":{\"svg\":[\"original\",\"original-wordmark\"],\"font\":[\"original\",\"original-wordmark\"]},\"color\":\"#205081\",\"aliases\":[{\"base\":\"original\",\"alias\":\"plain\"},{\"base\":\"original-wordmark\",\"alias\":\"plain-wordmark\"}]},{\"name\":\"couchdb\",\"tags\":[\"database\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#e42528\",\"aliases\":[]},{\"name\":\"cplusplus\",\"tags\":[\"language\"],\"versions\":{\"svg\":[\"original\",\"plain\",\"line\"],\"font\":[\"plain\",\"plain-wordmark\",\"line\",\"line-wordmark\"]},\"color\":\"#9c033a\",\"aliases\":[{\"base\":\"plain\",\"alias\":\"plain-wordmark\"},{\"base\":\"line\",\"alias\":\"line-wordmark\"}]},{\"name\":\"csharp\",\"tags\":[\"language\"],\"versions\":{\"svg\":[\"original\",\"plain\",\"line\"],\"font\":[\"plain\",\"plain-wordmark\",\"line\",\"line-wordmark\"]},\"color\":\"#68217a\",\"aliases\":[{\"base\":\"plain\",\"alias\":\"plain-wordmark\"},{\"base\":\"line\",\"alias\":\"line-wordmark\"}]},{\"name\":\"css3\",\"tags\":[\"language\",\"programming\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#3d8fc6\",\"aliases\":[]},{\"name\":\"cucumber\",\"tags\":[\"framework\"],\"versions\":{\"svg\":[\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#00a818\",\"aliases\":[]},{\"name\":\"crystal\",\"tags\":[\"programming\",\"language\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\"],\"font\":[\"original\",\"original-wordmark\"]},\"color\":\"#000000\",\"aliases\":[]},{\"name\":\"d3js\",\"tags\":[],\"versions\":{\"svg\":[\"original\",\"plain\"],\"font\":[\"plain\"]},\"color\":\"#f7974e\",\"aliases\":[]},{\"name\":\"dart\",\"tags\":[\"programming\",\"language\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#00A8E1\",\"aliases\":[]},{\"name\":\"debian\",\"tags\":[\"os\",\"server\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#A80030\",\"aliases\":[]},{\"name\":\"denojs\",\"tags\":[\"javascript\",\"rust\",\"language\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\"],\"font\":[\"original\",\"original-wordmark\"]},\"color\":\"#000000\",\"aliases\":[{\"base\":\"original\",\"alias\":\"plain\"},{\"base\":\"original-wordmark\",\"alias\":\"plain-wordmark\"}]},{\"name\":\"devicon\",\"tags\":[\"iconset\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\",\"line\",\"line-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\",\"line\",\"line-wordmark\"]},\"color\":\"#60BE86\",\"aliases\":[]},{\"name\":\"django\",\"tags\":[],\"versions\":{\"svg\":[\"original\",\"plain\",\"line\"],\"font\":[\"plain\",\"plain-wordmark\",\"line\",\"line-wordmark\"]},\"color\":\"#003A2B\",\"aliases\":[{\"base\":\"plain\",\"alias\":\"plain-wordmark\"},{\"base\":\"line\",\"alias\":\"line-wordmark\"}]},{\"name\":\"docker\",\"tags\":[\"platform\",\"deploy\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#019bc6\",\"aliases\":[]},{\"name\":\"doctrine\",\"tags\":[],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\",\"line\",\"line-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\",\"line\",\"line-wordmark\"]},\"color\":\"#f56d39\",\"aliases\":[]},{\"name\":\"dot-net\",\"tags\":[\"framework\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#1384c8\",\"aliases\":[]},{\"name\":\"dotnetcore\",\"tags\":[\"framework\"],\"versions\":{\"svg\":[\"original\",\"plain\"],\"font\":[\"plain\"]},\"color\":\"#623697\",\"aliases\":[]},{\"name\":\"drupal\",\"tags\":[\"cms\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#0073BA\",\"aliases\":[]},{\"name\":\"digitalocean\",\"tags\":[\"cloud\",\"hosting\",\"database\",\"storage\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#0080FF\",\"aliases\":[]},{\"name\":\"electron\",\"tags\":[\"framework\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\"],\"font\":[\"original\",\"original-wordmark\"]},\"color\":\"#47848f\",\"aliases\":[]},{\"name\":\"eleventy\",\"tags\":[\"ssg\",\"static site generator\"],\"versions\":{\"svg\":[\"original\",\"plain\"],\"font\":[\"plain\"]},\"color\":\"#1f1f1f\",\"aliases\":[]},{\"name\":\"elixir\",\"tags\":\"language\",\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#380A4D\",\"aliases\":[]},{\"name\":\"elm\",\"tags\":[\"framework\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#34495E\",\"aliases\":[]},{\"name\":\"ember\",\"tags\":[\"framework\"],\"versions\":{\"svg\":[\"original-wordmark\"],\"font\":[\"original-wordmark\"]},\"color\":\"#dd3f24\",\"aliases\":[{\"base\":\"original-wordmark\",\"alias\":\"plain-wordmark\"}]},{\"name\":\"embeddedc\",\"tags\":[\"language\",\"programming\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#444444\",\"aliases\":[]},{\"name\":\"erlang\",\"tags\":[],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#a90533\",\"aliases\":[]},{\"name\":\"express\",\"tags\":[\"framework\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\"],\"font\":[\"original\",\"original-wordmark\"]},\"color\":\"#444\",\"aliases\":[]},{\"name\":\"facebook\",\"tags\":[\"auth\"],\"versions\":{\"svg\":[\"original\",\"plain\"],\"font\":[\"plain\"]},\"color\":\"#3d5a98\",\"aliases\":[{\"base\":\"plain\",\"alias\":\"original\"}]},{\"name\":\"feathersjs\",\"tags\":[\"framework\",\"rest\"],\"versions\":{\"svg\":[\"original\"],\"font\":[\"original\"]},\"color\":\"#333333\",\"aliases\":[]},{\"name\":\"figma\",\"tags\":[\"design\"],\"versions\":{\"svg\":[\"original\",\"plain\"],\"font\":[\"plain\"]},\"color\":\"#f24e1e\",\"aliases\":[]},{\"name\":\"filezilla\",\"tags\":[\"ftp\"],\"versions\":{\"svg\":[\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#b30000\",\"aliases\":[]},{\"name\":\"firebase\",\"tags\":[\"auth\",\"hosting\",\"storage\",\"cloud\"],\"versions\":{\"svg\":[\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#f58220\",\"aliases\":[]},{\"name\":\"firefox\",\"tags\":[\"browser\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#DD732A\",\"aliases\":[]},{\"name\":\"flask\",\"tags\":[\"python\",\"framework\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\"],\"font\":[\"original\",\"original-wordmark\"]},\"color\":\"#010101\",\"aliases\":[{\"base\":\"original\",\"alias\":\"plain\"},{\"base\":\"original-wordmark\",\"alias\":\"plain-wordmark\"}]},{\"name\":\"flutter\",\"tags\":[\"framework\",\"sdk\"],\"versions\":{\"svg\":[\"original\",\"plain\"],\"font\":[\"plain\"]},\"color\":\"#3FB6D3\",\"aliases\":[]},{\"name\":\"foundation\",\"tags\":[\"framework\",\"css\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#008cba\",\"aliases\":[]},{\"name\":\"fsharp\",\"tags\":[\"language\"],\"versions\":{\"svg\":[\"original\",\"plain\"],\"font\":[\"plain\"]},\"color\":\"#378BBA\",\"aliases\":[]},{\"name\":\"gatling\",\"tags\":[\"framework\",\"testing\"],\"versions\":{\"svg\":[\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#E77500\",\"aliases\":[]},{\"name\":\"gatsby\",\"tags\":[\"reactjs\",\"framework\"],\"versions\":{\"svg\":[\"plain\",\"original\",\"original-wordmark\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#64328B\",\"aliases\":[]},{\"name\":\"gcc\",\"tags\":[\"compiler\",\"linux\"],\"versions\":{\"svg\":[\"original\",\"plain\"],\"font\":[\"plain\"]},\"color\":\"#ffcfab\",\"aliases\":[]},{\"name\":\"gimp\",\"tags\":[\"graphic\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\"]},\"color\":\"#716955\",\"aliases\":[]},{\"name\":\"git\",\"tags\":[\"version-control\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#f34f29\",\"aliases\":[]},{\"name\":\"github\",\"tags\":[\"version-control\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\"],\"font\":[\"original\",\"original-wordmark\"]},\"color\":\"#181616\",\"aliases\":[{\"base\":\"original\",\"alias\":\"plain\"}]},{\"name\":\"gitlab\",\"tags\":[\"version-control\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#E24329\",\"aliases\":[]},{\"name\":\"gitter\",\"tags\":[\"social\",\"chat\"],\"versions\":{\"svg\":[\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#000000\",\"aliases\":[]},{\"name\":\"go\",\"tags\":[\"language\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"line\"],\"font\":[\"original-wordmark\",\"plain\",\"line\"]},\"color\":\"#00acd7\",\"aliases\":[{\"base\":\"original-wordmark\",\"alias\":\"plain-wordmark\"}]},{\"name\":\"google\",\"tags\":[\"auth\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#587dbd\",\"aliases\":[{\"base\":\"plain\",\"alias\":\"original\"},{\"base\":\"plain-wordmark\",\"alias\":\"original-wordmark\"}]},{\"name\":\"googlecloud\",\"tags\":[\"google\",\"cloud\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#557ebf\",\"aliases\":[]},{\"name\":\"gradle\",\"tags\":[\"task-runner\"],\"versions\":{\"svg\":[\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#02303a\",\"aliases\":[]},{\"name\":\"grails\",\"tags\":[\"framework\"],\"versions\":{\"svg\":[\"original\",\"plain\"],\"font\":[\"plain\"]},\"color\":\"#feb672\",\"aliases\":[]},{\"name\":\"graphql\",\"tags\":[\"language\",\"data\",\"query\"],\"versions\":{\"svg\":[\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#e434aa\",\"aliases\":[]},{\"name\":\"groovy\",\"tags\":[\"programming\",\"language\"],\"versions\":{\"svg\":[\"original\",\"plain\"],\"font\":[\"plain\"]},\"color\":\"#619cbc\",\"aliases\":[]},{\"name\":\"grunt\",\"tags\":[\"task-runner\",\"nodejs\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\",\"line\",\"line-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\",\"line\",\"line-wordmark\"]},\"color\":\"#fcaa1a\",\"aliases\":[]},{\"name\":\"gulp\",\"tags\":[\"task-runner\",\"nodejs\"],\"versions\":{\"svg\":[\"plain\"],\"font\":[\"plain\"]},\"color\":\"#eb4a4b\",\"aliases\":[]},{\"name\":\"godot\",\"tags\":[\"game-engine\",\"open-source\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#478cbf\",\"aliases\":[]},{\"name\":\"haskell\",\"tags\":[\"language\",\"functional\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#5E5185\",\"aliases\":[]},{\"name\":\"handlebars\",\"tags\":[\"framework\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#000000\",\"aliases\":[]},{\"name\":\"haxe\",\"tags\":[\"language\"],\"versions\":{\"svg\":[\"original\",\"plain\"],\"font\":[\"plain\"]},\"color\":\"#EA8220\",\"aliases\":[]},{\"name\":\"heroku\",\"tags\":[\"cloud\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\",\"line\",\"line-wordmark\"]},\"color\":\"#6762a6\",\"aliases\":[{\"base\":\"line\",\"alias\":\"original\"},{\"base\":\"line-wordmark\",\"alias\":\"original-wordmark\"}]},{\"name\":\"html5\",\"tags\":[\"programming\",\"language\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#e54d26\",\"aliases\":[]},{\"name\":\"ie10\",\"tags\":[\"browser\"],\"versions\":{\"svg\":[\"original\"],\"font\":[\"original\"]},\"color\":\"#1EBBEE\",\"aliases\":[{\"base\":\"original\",\"alias\":\"plain\"}]},{\"name\":\"illustrator\",\"tags\":[\"editor\",\"vector\"],\"versions\":{\"svg\":[\"plain\",\"line\"],\"font\":[\"plain\",\"line\"]},\"color\":\"#faa625\",\"aliases\":[]},{\"name\":\"inkscape\",\"tags\":[\"editor\",\"vector\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#000000\",\"aliases\":[]},{\"name\":\"intellij\",\"tags\":[\"editor\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#136BA2\",\"aliases\":[]},{\"name\":\"ionic\",\"tags\":[\"framework\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\"],\"font\":[\"original\",\"original-wordmark\"]},\"color\":\"#4e8ef7\",\"aliases\":[]},{\"name\":\"jamstack\",\"tags\":[\"javascript\",\"markup\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain-wordmark\"],\"font\":[\"original\",\"plain-wordmark\"]},\"color\":\"#F0047F\",\"aliases\":[{\"base\":\"original\",\"alias\":\"plain\"}]},{\"name\":\"jasmine\",\"tags\":[\"testing\"],\"versions\":{\"svg\":[\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#8a4182\",\"aliases\":[]},{\"name\":\"java\",\"tags\":[\"programming\",\"language\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#EA2D2E\",\"aliases\":[]},{\"name\":\"javascript\",\"tags\":[\"programming\",\"language\"],\"versions\":{\"svg\":[\"original\",\"plain\"],\"font\":[\"plain\"]},\"color\":\"#f0db4f\",\"aliases\":[]},{\"name\":\"jeet\",\"tags\":[\"framework\",\"css\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#FF664A\",\"aliases\":[]},{\"name\":\"jest\",\"tags\":[\"testing\",\"javascript\"],\"versions\":{\"svg\":[\"plain\"],\"font\":[\"plain\"]},\"color\":\"#99425b\",\"aliases\":[]},{\"name\":\"jenkins\",\"tags\":[\"platform\",\"integration\",\"server\"],\"versions\":{\"svg\":[\"line\",\"original\",\"plain\"],\"font\":[\"line\",\"plain\"]},\"color\":\"#F0D6B7\",\"aliases\":[]},{\"name\":\"jetbrains\",\"tags\":[\"ide\"],\"versions\":{\"svg\":[\"original\",\"plain\"],\"font\":[\"plain\"]},\"color\":\"#FDCC21\",\"aliases\":[]},{\"name\":\"jira\",\"tags\":[\"platform\",\"organize\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#2684ff\",\"aliases\":[]},{\"name\":\"jquery\",\"tags\":[\"library\",\"javascript\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#0769ad\",\"aliases\":[]},{\"name\":\"julia\",\"tags\":[\"programming\",\"language\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#28a745\",\"aliases\":[]},{\"name\":\"jupyter\",\"tags\":[\"programming\",\"language\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#F37726\",\"aliases\":[]},{\"name\":\"karma\",\"tags\":[\"testing\",\"test-runner\"],\"versions\":{\"svg\":[\"original\",\"plain\"],\"font\":[\"plain\"]},\"color\":\"#56c5a8\",\"aliases\":[]},{\"name\":\"kotlin\",\"tags\":[\"language\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#7C6DB2\",\"aliases\":[]},{\"name\":\"knockout\",\"tags\":[\"framework\",\"javascript\"],\"versions\":{\"svg\":[\"plain-wordmark\"],\"font\":[\"plain-wordmark\"]},\"color\":\"#e42e16\",\"aliases\":[]},{\"name\":\"krakenjs\",\"tags\":[\"nodejs\",\"framework\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#0081C2\",\"aliases\":[]},{\"name\":\"kubernetes\",\"tags\":[\"container\",\"deployment\"],\"versions\":{\"svg\":[\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#486bb3\",\"aliases\":[]},{\"name\":\"labview\",\"tags\":[\"language\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#fed500\",\"aliases\":[]},{\"name\":\"laravel\",\"tags\":[\"php\",\"framework\"],\"versions\":{\"svg\":[\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#fd4f31\",\"aliases\":[]},{\"name\":\"less\",\"tags\":[\"css\",\"pre-processor\"],\"versions\":{\"svg\":[\"plain-wordmark\"],\"font\":[\"plain-wordmark\"]},\"color\":\"#2a4d80\",\"aliases\":[]},{\"name\":\"linkedin\",\"tags\":[\"social\",\"auth\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#0076b2\",\"aliases\":[]},{\"name\":\"lua\",\"tags\":[\"programming\",\"language\",\"object-oriented\",\"scripting\",\"procedural\",\"prototype-based\",\"functional\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#000080\",\"aliases\":[]},{\"name\":\"linux\",\"tags\":[\"os\"],\"versions\":{\"svg\":[\"original\",\"plain\"],\"font\":[\"plain\"]},\"color\":\"#000000\",\"aliases\":[]},{\"name\":\"materialui\",\"tags\":[\"framework\",\"design\",\"ui\"],\"versions\":{\"svg\":[\"original\",\"plain\"],\"font\":[\"plain\"]},\"color\":\"#1FA6CA\",\"aliases\":[]},{\"name\":\"matlab\",\"tags\":[\"programming\",\"language\"],\"versions\":{\"svg\":[\"original\",\"plain\",\"line\"],\"font\":[\"plain\",\"line\"]},\"color\":\"#6dd0c7\",\"aliases\":[]},{\"name\":\"magento\",\"tags\":[\"php\",\"framework\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"line\"],\"font\":[\"original\",\"original-wordmark\",\"line\"]},\"color\":\"#f26322\",\"aliases\":[]},{\"name\":\"markdown\",\"tags\":[\"markup\",\"language\"],\"versions\":{\"svg\":[\"original\"],\"font\":[\"original\"]},\"color\":\"#000000\",\"aliases\":[{\"base\":\"original\",\"alias\":\"plain\"}]},{\"name\":\"meteor\",\"tags\":[\"javascript\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#df5052\",\"aliases\":[]},{\"name\":\"minitab\",\"tags\":[\"package\",\"statistics\"],\"versions\":{\"svg\":[\"original\",\"plain\"],\"font\":[\"plain\"]},\"color\":\"#8dc63f\",\"aliases\":[]},{\"name\":\"mocha\",\"tags\":[\"testing\"],\"versions\":{\"svg\":[\"plain\"],\"font\":[\"plain\"]},\"color\":\"#8d6748\",\"aliases\":[]},{\"name\":\"modx\",\"tags\":[\"cms\",\"php\",\"framework\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#00decc\",\"aliases\":[]},{\"name\":\"mongodb\",\"tags\":[\"database\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#4FAA41\",\"aliases\":[]},{\"name\":\"moodle\",\"tags\":[\"platform\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#F7931E\",\"aliases\":[]},{\"name\":\"msdos\",\"tags\":[\"os\"],\"versions\":{\"svg\":[\"original\",\"plain\",\"line\"],\"font\":[\"line\"]},\"color\":\"#ff0000\",\"aliases\":[]},{\"name\":\"mysql\",\"tags\":[\"database\",\"language\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#00618a\",\"aliases\":[]},{\"name\":\"neo4j\",\"tags\":[\"database\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#018BFF\",\"aliases\":[]},{\"name\":\"nestjs\",\"tags\":[\"framework\"],\"versions\":{\"svg\":[\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#DF234F\",\"aliases\":[]},{\"name\":\"nextjs\",\"tags\":[\"framework\"],\"versions\":{\"svg\":[\"original\",\"line\",\"original-wordmark\"],\"font\":[\"original\",\"plain\",\"line\",\"original-wordmark\",\"plain-wordmark\"]},\"color\":\"#000000\",\"aliases\":[{\"base\":\"original\",\"alias\":\"plain\"},{\"base\":\"original-wordmark\",\"alias\":\"plain-wordmark\"}]},{\"name\":\"nginx\",\"tags\":[\"server\"],\"versions\":{\"svg\":[\"original\"],\"font\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"]},\"color\":\"#090\",\"aliases\":[{\"base\":\"original\",\"alias\":\"original-wordmark\"},{\"base\":\"original\",\"alias\":\"plain\"},{\"base\":\"original\",\"alias\":\"plain-wordmark\"}]},{\"name\":\"nixos\",\"tags\":[\"os\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#5277C3\",\"aliases\":[]},{\"name\":\"nodejs\",\"tags\":[\"javascript\",\"language\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#83CD29\",\"aliases\":[]},{\"name\":\"nodewebkit\",\"tags\":[],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\",\"line\",\"line-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\",\"line\",\"line-wordmark\"]},\"color\":\"#3d3b47\",\"aliases\":[]},{\"name\":\"npm\",\"tags\":[\"package\",\"manager\"],\"versions\":{\"svg\":[\"original-wordmark\"],\"font\":[\"original-wordmark\"]},\"color\":\"#cb3837\",\"aliases\":[]},{\"name\":\"numpy\",\"tags\":[\"library\",\"python\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\"],\"font\":[\"original\",\"original-wordmark\"]},\"color\":\"#4DABCF\",\"aliases\":[{\"base\":\"original\",\"alias\":\"plain\"}]},{\"name\":\"nuxtjs\",\"tags\":[\"js\",\"javascript\",\"framework\",\"frontend\",\"vuejs\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#00c48d\",\"aliases\":[]},{\"name\":\"objectivec\",\"tags\":[\"programming\",\"language\"],\"versions\":{\"svg\":[\"plain\"],\"font\":[\"plain\"]},\"color\":\"#0b5a9d\",\"aliases\":[]},{\"name\":\"opera\",\"tags\":[\"browser\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#f7192d\",\"aliases\":[]},{\"name\":\"ocaml\",\"tags\":[\"programming\",\"language\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#F18803\",\"aliases\":[]},{\"name\":\"opengl\",\"tags\":[\"library\",\"graphics\",\"game\",\"3d\"],\"versions\":{\"svg\":[\"original\",\"plain\"],\"font\":[\"plain\"]},\"color\":\"#5586a4\",\"aliases\":[]},{\"name\":\"oracle\",\"tags\":[\"database\"],\"versions\":{\"svg\":[\"original\"],\"font\":[\"original\"]},\"color\":\"#EA1B22\",\"aliases\":[{\"base\":\"original\",\"alias\":\"plain\"}]},{\"name\":\"pandas\",\"tags\":[\"library\",\"python\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\"],\"font\":[\"original\",\"original-wordmark\"]},\"color\":\"#130754\",\"aliases\":[{\"base\":\"original\",\"alias\":\"plain\"},{\"base\":\"original-wordmark\",\"alias\":\"plain-wordmark\"}]},{\"name\":\"perl\",\"tags\":[\"programming\",\"language\"],\"versions\":{\"svg\":[\"original\",\"plain\"],\"font\":[\"plain\"]},\"color\":\"#212177\",\"aliases\":[]},{\"name\":\"phalcon\",\"tags\":[\"php\",\"framework\"],\"versions\":{\"svg\":[\"original\",\"plain\"],\"font\":[\"plain\"]},\"color\":\"#76c39b\",\"aliases\":[]},{\"name\":\"photoshop\",\"tags\":[\"editor\",\"graphic\"],\"versions\":{\"svg\":[\"plain\",\"line\"],\"font\":[\"plain\",\"line\"]},\"color\":\"#80b5e2\",\"aliases\":[]},{\"name\":\"php\",\"tags\":[\"programming\",\"language\"],\"versions\":{\"svg\":[\"original\",\"plain\"],\"font\":[\"plain\"]},\"color\":\"#6181b6\",\"aliases\":[]},{\"name\":\"phpstorm\",\"tags\":[\"editor\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#5058A6\",\"aliases\":[]},{\"name\":\"postgresql\",\"tags\":[\"database\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#336791\",\"aliases\":[]},{\"name\":\"premierepro\",\"tags\":[\"editor\",\"video\"],\"versions\":{\"svg\":[\"plain\",\"original\"],\"font\":[\"plain\"]},\"color\":\"#2A0634\",\"aliases\":[]},{\"name\":\"processing\",\"tags\":[\"java\",\"python\",\"android\",\"application\",\"ide\",\"framework\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#000000\",\"aliases\":[]},{\"name\":\"protractor\",\"tags\":[\"framework\",\"javascript\"],\"versions\":{\"svg\":[\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#b7111d\",\"aliases\":[]},{\"name\":\"putty\",\"tags\":[\"ssh\",\"server\"],\"versions\":{\"svg\":[\"original\",\"plain\"],\"font\":[\"plain\"]},\"color\":\"#0000fc\",\"aliases\":[]},{\"name\":\"pycharm\",\"tags\":[\"editor\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#4D8548\",\"aliases\":[]},{\"name\":\"python\",\"tags\":[\"programming\",\"language\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#ffd845\",\"aliases\":[]},{\"name\":\"raspberrypi\",\"tags\":[\"arm\",\"computer\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"line\",\"line-wordmark\"],\"font\":[\"line\",\"line-wordmark\"]},\"color\":\"#c51850\",\"aliases\":[]},{\"name\":\"phoenix\",\"tags\":[\"framework\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#F15524\",\"aliases\":[]},{\"name\":\"qt\",\"tags\":[\"framework\"],\"versions\":{\"svg\":[\"original\"],\"font\":[\"original\"]},\"color\":\"#41cd52\",\"aliases\":[{\"base\":\"original\",\"alias\":\"plain\"}]},{\"name\":\"r\",\"tags\":[\"programming\",\"language\"],\"versions\":{\"svg\":[\"original\",\"plain\"],\"font\":[\"original\",\"plain\"]},\"color\":\"#2369bc\",\"aliases\":[]},{\"name\":\"rails\",\"tags\":[\"framework\"],\"versions\":{\"svg\":[\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#CC0000\",\"aliases\":[]},{\"name\":\"react\",\"tags\":[\"framework\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\"],\"font\":[\"original\",\"original-wordmark\"]},\"color\":\"#61dafb\",\"aliases\":[{\"base\":\"original\",\"alias\":\"plain\"},{\"base\":\"original-wordmark\",\"alias\":\"plain-wordmark\"}]},{\"name\":\"redhat\",\"tags\":[\"server\",\"linux\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#e93442\",\"aliases\":[]},{\"name\":\"redis\",\"tags\":[\"server\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#d82c20\",\"aliases\":[]},{\"name\":\"redux\",\"tags\":[\"framework\"],\"versions\":{\"svg\":[\"original\"],\"font\":[\"original\"]},\"color\":\"#764abc\",\"aliases\":[{\"base\":\"original\",\"alias\":\"plain\"}]},{\"name\":\"rocksdb\",\"tags\":[\"database\"],\"versions\":{\"svg\":[\"plain\"],\"font\":[\"plain\"]},\"color\":\"#f5be17\",\"aliases\":[]},{\"name\":\"ruby\",\"tags\":[\"programming\",\"language\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#d91404\",\"aliases\":[]},{\"name\":\"rubymine\",\"tags\":[\"editor\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#C12C4C\",\"aliases\":[]},{\"name\":\"rust\",\"tags\":[\"programming\",\"language\"],\"versions\":{\"svg\":[\"plain\"],\"font\":[\"plain\"]},\"color\":\"#000000\",\"aliases\":[]},{\"name\":\"safari\",\"tags\":[\"browser\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\",\"line-wordmark\",\"line\"],\"font\":[\"plain\",\"plain-wordmark\",\"line-wordmark\",\"line\"]},\"color\":\"#1B88CA\",\"aliases\":[]},{\"name\":\"salesforce\",\"tags\":[\"platform\",\"ecommerce\"],\"versions\":{\"svg\":[\"original\",\"plain\"],\"font\":[\"plain\"]},\"color\":\"#00a1e0\",\"aliases\":[]},{\"name\":\"rstudio\",\"tags\":[\"editor\",\"package\",\"statistics\"],\"versions\":{\"svg\":[\"original\",\"plain\"],\"font\":[\"plain\"]},\"color\":\"#75aadb\",\"aliases\":[]},{\"name\":\"sass\",\"tags\":[\"pre-processor\",\"css\"],\"versions\":{\"svg\":[\"original\"],\"font\":[\"original\"]},\"color\":\"#cc6699\",\"aliases\":[{\"base\":\"original\",\"alias\":\"plain\"}]},{\"name\":\"scala\",\"tags\":[\"programming\",\"language\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#de3423\",\"aliases\":[]},{\"name\":\"sequelize\",\"tags\":[\"database\",\"language\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#3b4b72\",\"aliases\":[{\"base\":\"plain\",\"alias\":\"plain\"},{\"base\":\"plain-wordmark\",\"alias\":\"plain-wordmark\"}]},{\"name\":\"shopware\",\"tags\":[\"cloud\",\"platform\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\"],\"font\":[\"original\",\"original-wordmark\"]},\"color\":\"#179eff\",\"aliases\":[]},{\"name\":\"sketch\",\"tags\":[\"application\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"line\",\"line-wordmark\"],\"font\":[\"line\",\"line-wordmark\"]},\"color\":\"#fdad00\",\"aliases\":[]},{\"name\":\"slack\",\"tags\":[\"chat\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#2D333A\",\"aliases\":[]},{\"name\":\"socketio\",\"tags\":[\"library\",\"networking\",\"websockets\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\"],\"font\":[\"original\",\"original-wordmark\"]},\"color\":\"#010101\",\"aliases\":[{\"base\":\"original\",\"alias\":\"plain\"},{\"base\":\"original-wordmark\",\"alias\":\"plain-wordmark\"}]},{\"name\":\"sourcetree\",\"tags\":[\"version-control\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\"],\"font\":[\"original\",\"original-wordmark\"]},\"color\":\"#205081\",\"aliases\":[{\"base\":\"original\",\"alias\":\"plain\"},{\"base\":\"original-wordmark\",\"alias\":\"plain-wordmark\"}]},{\"name\":\"spring\",\"tags\":[\"framework\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#5FB832\",\"aliases\":[]},{\"name\":\"spss\",\"tags\":[\"package\",\"statistics\"],\"versions\":{\"svg\":[\"original\",\"plain\"],\"font\":[\"plain\"]},\"color\":\"#cc1e4c\",\"aliases\":[]},{\"name\":\"sqlalchemy\",\"tags\":[\"python\",\"orm\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\"],\"font\":[\"plain\",\"original-wordmark\"]},\"color\":\"#333333\",\"aliases\":[{\"base\":\"original-wordmark\",\"alias\":\"plain-wordmark\"}]},{\"name\":\"subversion\",\"tags\":[\"svn\",\"version\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\"],\"font\":[\"original\"]},\"color\":\"#809cc8\",\"aliases\":[{\"base\":\"original\",\"alias\":\"plain\"}]},{\"name\":\"microsoftsqlserver\",\"tags\":[\"database\"],\"versions\":{\"svg\":[\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#909DAA\",\"aliases\":[]},{\"name\":\"ssh\",\"tags\":[\"security\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\"],\"font\":[\"original\",\"original-wordmark\"]},\"color\":\"#231F20\",\"aliases\":[{\"base\":\"original\",\"alias\":\"plain\"},{\"base\":\"original-wordmark\",\"alias\":\"plain-wordmark\"}]},{\"name\":\"stylus\",\"tags\":[\"css\",\"pre-processor\"],\"versions\":{\"svg\":[\"original\"],\"font\":[\"original\"]},\"color\":\"#333333\",\"aliases\":[]},{\"name\":\"svelte\",\"tags\":[\"javascript\",\"framework\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#ff3e00\",\"aliases\":[]},{\"name\":\"swift\",\"tags\":[\"language\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#F05138\",\"aliases\":[]},{\"name\":\"symfony\",\"tags\":[\"framework\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\"],\"font\":[\"original\",\"original-wordmark\"]},\"color\":\"#1A171B\",\"aliases\":[{\"base\":\"original\",\"alias\":\"plain\"},{\"base\":\"original-wordmark\",\"alias\":\"plain-wordmark\"}]},{\"name\":\"storybook\",\"tags\":[\"framework\",\"documentation\",\"ui\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#FF4785\",\"aliases\":[]},{\"name\":\"tailwindcss\",\"tags\":[\"css\",\"framework\"],\"versions\":{\"svg\":[\"original-wordmark\",\"plain\"],\"font\":[\"original-wordmark\",\"plain\"]},\"color\":\"#2298BD\",\"aliases\":[]},{\"name\":\"tensorflow\",\"tags\":[\"library\",\"machine-learning\",\"deep-learning\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"line\",\"line-wordmark\"],\"font\":[\"original\",\"original-wordmark\",\"line\",\"line-wordmark\"]},\"color\":\"#ff6f00\",\"aliases\":[]},{\"name\":\"threejs\",\"tags\":[\"javascript\",\"framework\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\"],\"font\":[\"original\",\"original-wordmark\"]},\"color\":\"#000000\",\"aliases\":[]},{\"name\":\"tomcat\",\"tags\":[\"server\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"line\",\"line-wordmark\"],\"font\":[\"line\",\"line-wordmark\"]},\"color\":\"#D1A41A\",\"aliases\":[]},{\"name\":\"tortoisegit\",\"tags\":[\"git\"],\"versions\":{\"svg\":[\"original\",\"plain\",\"line\"],\"font\":[\"plain\",\"line\"]},\"color\":\"#4a8fb5\",\"aliases\":[]},{\"name\":\"towergit\",\"tags\":[\"git\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#d18900\",\"aliases\":[]},{\"name\":\"travis\",\"tags\":[\"platform\",\"integration\"],\"versions\":{\"svg\":[\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#bb2031\",\"aliases\":[]},{\"name\":\"thealgorithms\",\"tags\":[\"organization\",\"algorithms\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#00BCB4\",\"aliases\":[]},{\"name\":\"trello\",\"tags\":[\"platform\",\"organize\"],\"versions\":{\"svg\":[\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#23719f\",\"aliases\":[]},{\"name\":\"twitter\",\"tags\":[\"auth\"],\"versions\":{\"svg\":[\"original\"],\"font\":[\"original\"]},\"color\":\"#1da1f2\",\"aliases\":[{\"base\":\"original\",\"alias\":\"plain\"}]},{\"name\":\"typescript\",\"tags\":[\"programming\",\"transpiler\"],\"versions\":{\"svg\":[\"original\",\"plain\"],\"font\":[\"plain\"]},\"color\":\"#007acc\",\"aliases\":[{\"base\":\"plain\",\"alias\":\"original\"}]},{\"name\":\"typo3\",\"tags\":[\"cms\",\"php\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#f49700\",\"aliases\":[]},{\"name\":\"ubuntu\",\"tags\":[\"os\"],\"versions\":{\"svg\":[\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#dd4814\",\"aliases\":[]},{\"name\":\"unity\",\"tags\":[\"csharp\",\"engine\",\"game\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\"],\"font\":[\"original\",\"original-wordmark\"]},\"color\":\"#212b35\",\"aliases\":[]},{\"name\":\"unix\",\"tags\":[\"os\"],\"versions\":{\"svg\":[\"original\"],\"font\":[\"original\"]},\"color\":\"#4051b5\",\"aliases\":[]},{\"name\":\"uwsgi\",\"tags\":[\"hosting\"],\"versions\":{\"svg\":[\"original\",\"plain\"],\"font\":[\"plain\"]},\"color\":\"#bad05e\",\"aliases\":[]},{\"name\":\"vagrant\",\"tags\":[\"platform\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#127eff\",\"aliases\":[]},{\"name\":\"vim\",\"tags\":[\"editor\"],\"versions\":{\"svg\":[\"original\",\"plain\"],\"font\":[\"plain\"]},\"color\":\"#179a33\",\"aliases\":[]},{\"name\":\"visualstudio\",\"tags\":[\"editor\"],\"versions\":{\"svg\":[\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#68217A\",\"aliases\":[]},{\"name\":\"vuejs\",\"tags\":[\"framework\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\",\"line\",\"line-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\",\"line\",\"line-wordmark\"]},\"color\":\"#41B883\",\"aliases\":[]},{\"name\":\"vuestorefront\",\"tags\":[\"framework\"],\"versions\":{\"svg\":[\"original\",\"plain\"],\"font\":[\"plain\"]},\"color\":\"#5ecf7b\",\"aliases\":[]},{\"name\":\"vscode\",\"tags\":[\"editor\",\"ide\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#3C99D4\",\"aliases\":[]},{\"name\":\"weblate\",\"tags\":[\"localization\"],\"versions\":{\"svg\":[\"original\",\"plain\",\"original-wordmark\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#2eccaa\",\"aliases\":[]},{\"name\":\"webpack\",\"tags\":[\"package\",\"manager\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#1C78C0\",\"aliases\":[]},{\"name\":\"webstorm\",\"tags\":[\"editor\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#2788B5\",\"aliases\":[]},{\"name\":\"windows8\",\"tags\":[\"os\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\"],\"font\":[\"original\",\"original-wordmark\"]},\"color\":\"#00adef\",\"aliases\":[{\"base\":\"original\",\"alias\":\"plain\"},{\"base\":\"original-wordmark\",\"alias\":\"plain-wordmark\"}]},{\"name\":\"woocommerce\",\"tags\":[\"ecommerce\"],\"versions\":{\"svg\":[\"original\",\"plain\",\"original-wordmark\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#7f54b3\",\"aliases\":[]},{\"name\":\"wordpress\",\"tags\":[\"cms\"],\"versions\":{\"svg\":[\"original\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#494949\",\"aliases\":[]},{\"name\":\"xd\",\"tags\":[\"design\",\"editor\",\"ui\"],\"versions\":{\"svg\":[\"plain\",\"line\"],\"font\":[\"plain\",\"line\"]},\"color\":\"#DD80BC\",\"aliases\":[]},{\"name\":\"yarn\",\"tags\":[\"package\",\"manager\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#2c8ebb\",\"aliases\":[]},{\"name\":\"yii\",\"tags\":[\"php\",\"framework\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#0073bb\",\"aliases\":[]},{\"name\":\"yunohost\",\"tags\":[\"os\"],\"versions\":{\"svg\":[\"original\",\"plain\"],\"font\":[\"plain\"]},\"color\":\"#ffffff\",\"aliases\":[]},{\"name\":\"zend\",\"tags\":[\"php\",\"framework\"],\"versions\":{\"svg\":[\"plain\",\"plain-wordmark\"],\"font\":[\"plain\",\"plain-wordmark\"]},\"color\":\"#68b604\",\"aliases\":[]},{\"name\":\"zig\",\"tags\":[\"language\"],\"versions\":{\"svg\":[\"original\",\"original-wordmark\",\"plain-wordmark\"],\"font\":[\"original\",\"plain-wordmark\"]},\"color\":\"#f7a41d\",\"aliases\":[{\"base\":\"original\",\"alias\":\"plain\"}]}]");

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_windicss_webpack_plugin_dist_loaders_pitcher_js_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_transform_template_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_read_vue_vue_type_style_index_0_id_241fade0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54);
/* harmony import */ var _node_modules_windicss_webpack_plugin_dist_loaders_pitcher_js_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_transform_template_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_read_vue_vue_type_style_index_0_id_241fade0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_windicss_webpack_plugin_dist_loaders_pitcher_js_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_transform_template_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_read_vue_vue_type_style_index_0_id_241fade0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_windicss_webpack_plugin_dist_loaders_pitcher_js_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_transform_template_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_read_vue_vue_type_style_index_0_id_241fade0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_windicss_webpack_plugin_dist_loaders_pitcher_js_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_transform_template_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_read_vue_vue_type_style_index_0_id_241fade0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".open-badge[data-v-241fade0]{border-radius:9999px;border-width:1px;font-size:.875rem;line-height:1.25rem;margin-right:.5rem;padding:.125rem .75rem}.open-badge.close[data-v-241fade0]{border-color:rgba(239,68,68,var(--tw-border-opacity));color:rgba(239,68,68,var(--tw-text-opacity))}.open-badge.close[data-v-241fade0],.open-badge.open[data-v-241fade0]{--tw-border-opacity:1;--tw-text-opacity:1}.open-badge.open[data-v-241fade0]{border-color:rgba(6,182,212,var(--tw-border-opacity));color:rgba(6,182,212,var(--tw-text-opacity))}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=_read.js.map