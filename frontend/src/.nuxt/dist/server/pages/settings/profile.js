exports.ids = [48];
exports.modules = {

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/windicss-webpack-plugin/dist/loaders/pitcher.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/transform-template.js!./pages/settings/profile.vue?vue&type=template&id=52227f8b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"max-w-screen-sm mx-auto px-3 mt-5"},[_vm._ssrNode("<input type=\"file\" accept=\"image/*\" class=\"hidden\"> <h1 class=\"text-xl\">프로필 설정</h1> "),_vm._ssrNode("<div class=\"flex\">","</div>",[_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<div id=\"profile-image\" class=\"p-3 text-center\">","</div>",[_vm._ssrNode("<img"+(_vm._ssrAttr("src",_vm.avatar))+" class=\"rounded-full w-20 h-20 mx-auto cursor-pointer\"> "),_c('a-button',{staticClass:"mt-3",attrs:{"type":"dashed"},on:{"click":function($event){return _vm.$refs.avatar.click()}}},[_vm._v("\n          프로필 변경\n        ")])],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flex-1\">","</div>",[_vm._ssrNode("<div class=\"text-sm\">닉네임</div> "),_c('a-input',{model:{value:(_vm.nickname),callback:function ($$v) {_vm.nickname=$$v},expression:"nickname"}}),_vm._ssrNode(" <div class=\"text-sm mt-3\">한줄소개</div> "),_c('a-textarea',{model:{value:(_vm.introduce),callback:function ($$v) {_vm.introduce=$$v},expression:"introduce"}})],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"mt-10\">","</div>",[_vm._ssrNode("<h1 class=\"text-xl mb-3\">SNS연결</h1> "),_vm._ssrNode("<div class=\"flex items-center py-1\">","</div>",[_c('a-icon',{staticClass:"mr-2",attrs:{"type":"github"}}),_vm._ssrNode("Github 유저명\n    ")],2),_vm._ssrNode(" "),_c('a-input',{attrs:{"addon-before":"https://github.com/","default-value":"github"},model:{value:(_vm.github),callback:function ($$v) {_vm.github=$$v},expression:"github"}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flex items-center py-1 mt-5\">","</div>",[_c('a-icon',{staticClass:"mr-2",attrs:{"type":"link"}}),_vm._ssrNode("웹사이트\n    ")],2),_vm._ssrNode(" "),_c('a-input',{attrs:{"default-value":"https://example.com"},model:{value:(_vm.website),callback:function ($$v) {_vm.website=$$v},expression:"website"}})],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flex justify-end mt-10\">","</div>",[_c('a-button',{attrs:{"type":"primary","size":"large"},on:{"click":_vm.save}},[_vm._v("저장하기")])],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/settings/profile.vue?vue&type=template&id=52227f8b&

// CONCATENATED MODULE: ./node_modules/windicss-webpack-plugin/dist/loaders/pitcher.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/transform-template.js!./pages/settings/profile.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var profilevue_type_script_lang_js_ = ({
  async asyncData({
    $axios
  }) {
    let {
      data
    } = await $axios.get('/auth/user');
    return {
      user: data,
      nickname: data.nickname,
      avatar: data.avatar,
      introduce: data.introduce,
      github: data.github,
      website: data.website
    };
  },

  middleware: 'auth',
  methods: {
    save() {
      this.$axios.patch(`auth/user/`, {
        nickname: this.nickname,
        introduce: this.introduce,
        github: this.github,
        website: this.website
      }).then(r => {
        this.$notification['success']({
          message: '프로필을 갱신하였습니다.',
          description: '정상적으로 프로필이 갱신되었습니다.'
        });
        this.$auth.setUser(r.data);
      }).catch(e => {
        this.$message.error('프로필 갱신에 실패하였습니다. 다시 시도해 주세요.');
      });
    },

    changeAvatar() {
      const avatarFrm = new FormData();
      var avatarFile = this.$refs.avatar.files[0];
      avatarFrm.append('avatar', avatarFile);
      let loading = this.$message.loading('프로필 사진을 업로드중...', 0);
      this.$axios.patch('/auth/user/', avatarFrm).then(r => {
        this.avatar = r.data.avatar;
        this.$message.destroy();
        this.$message.success('프로필 사진이 변경되었습니다.');
        this.$auth.setUser(r.data);
      }).catch(e => {
        this.$message.destroy();
        this.$message.error('프로필 사진 변경에 실패하였습니다.');
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/settings/profile.vue?vue&type=script&lang=js&
 /* harmony default export */ var settings_profilevue_type_script_lang_js_ = (profilevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/settings/profile.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  settings_profilevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "866e86ee"
  
)

/* harmony default export */ var profile = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=profile.js.map