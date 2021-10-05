exports.ids = [46];
exports.modules = {

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/windicss-webpack-plugin/dist/loaders/pitcher.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/transform-template.js!./pages/register.vue?vue&type=template&id=79abbada&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"w-full max-w-md mx-auto mt-10 px-3"},[_vm._ssrNode("<div class=\"text-center mt-20 mb-10\"><div id=\"brand\" class=\"inline-flex items-center gap-x-1 text-black hover:text-black\"><img"+(_vm._ssrAttr("src",__webpack_require__(46)))+" class=\"w-8 h-8\">\n      thlog\n    </div></div> <h1 class=\"text-center text-base\">\n    현재 가입을 진행중입니다. 닉네임과 아이디를 설정해서 가입을 완료해 주세요.\n  </h1> "),_vm._ssrNode("<div class=\"py-5\">","</div>",[_c('a-steps',{attrs:{"current":_vm.step,"size":"small"}},[_c('a-step',{attrs:{"title":"아이디설정"}}),_vm._v(" "),_c('a-step',{attrs:{"title":"프로필설정"}})],1)],1),_vm._ssrNode(" "),(_vm.step == 0)?_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<div class=\"bg-gray-50 rounded-md p-5 mt-5\">","</div>",[_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<label class=\"font-medium text-base\">닉네임</label> "),_c('a-input',{attrs:{"placeholder":"닉네임"},model:{value:(_vm.nickname),callback:function ($$v) {_vm.nickname=$$v},expression:"nickname"}})],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"mt-5\">","</div>",[_vm._ssrNode("<label class=\"font-medium text-base\">유저명</label> "),_c('a-input',{attrs:{"placeholder":"유저명","addon-before":"https://thlog.me/"},model:{value:(_vm.userId),callback:function ($$v) {_vm.userId=$$v},expression:"userId"}})],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"py-5 flex justify-end gap-x-5\">","</div>",[_c('a-button',{attrs:{"type":"dashed"},on:{"click":_vm.cancel}},[_vm._v("가입취소")]),_vm._ssrNode(" "),_c('a-button',{attrs:{"type":"primary","ghost":""},on:{"click":_vm.step2}},[_vm._v("다음단계로")])],2)],2):_vm._e(),_vm._ssrNode(" "),(_vm.step == 1)?_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<div class=\"bg-gray-50 rounded-md p-5 mt-5\">","</div>",[_vm._ssrNode("<div class=\"flex justify-center items-center\"><input type=\"file\" accept=\"image/*\" class=\"hidden\"> <img"+(_vm._ssrAttr("src",_vm.userAvatar))+" class=\"rounded-full w-30 h-30 border cursor-pointer bg-white shadow-sm\"></div> "),_vm._ssrNode("<div class=\"text-center mt-3\">","</div>",[_c('a-button',{on:{"click":function($event){return _vm.$refs.avatar.click()}}},[_vm._v("이미지 변경")])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"mt-5\">","</div>",[_vm._ssrNode("<label class=\"font-medium text-base\">한줄소개</label> "),_c('a-textarea',{attrs:{"placeholder":"","rows":4},model:{value:(_vm.introduce),callback:function ($$v) {_vm.introduce=$$v},expression:"introduce"}})],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"py-5 flex justify-end gap-x-5\">","</div>",[_c('a-button',{attrs:{"type":"dashed"},on:{"click":function($event){_vm.step-=1}}},[_vm._v("이전으로")]),_vm._ssrNode(" "),_c('a-button',{attrs:{"type":"primary","ghost":"","loading":_vm.loading},on:{"click":_vm.complete}},[_vm._v("Thlog 시작하기")])],2)],2):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/register.vue?vue&type=template&id=79abbada&

// CONCATENATED MODULE: ./node_modules/windicss-webpack-plugin/dist/loaders/pitcher.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/transform-template.js!./pages/register.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var registervue_type_script_lang_js_ = ({
  middleware: 'auth',
  layout: 'empty',

  data() {
    return {
      userId: this.$auth.user.username,
      step: 0,
      nickname: this.$auth.user.nickname,
      userAvatar: this.$auth.user.avatar,
      introduce: this.$auth.user.introduce,
      loading: false
    };
  },

  methods: {
    changeAvatar() {
      const avatarFrm = new FormData();
      var avatarFile = this.$refs.avatar.files[0];
      avatarFrm.append('avatar', avatarFile);
      let loading = this.$message.loading('프로필 사진을 업로드중...', 0);
      this.$axios.patch('/auth/user/', avatarFrm).then(r => {
        this.userAvatar = r.data.avatar;
        this.$message.destroy();
        this.$message.success("프로필 사진이 변경되었습니다.");
      }).catch(e => {
        this.$message.destroy();
        this.$message.error("프로필 사진 변경에 실패하였습니다.");
      });
    },

    cancel() {
      this.$axios.post('/auth/delete/').then(r => {
        this.$auth.logout();
      }).catch(e => {
        this.$message.error('가입취소에 실패하였습니다. 다시 시도해주세요.');
      });
    },

    complete() {
      this.loading = true;
      let registerData = {
        nickname: this.nickname,
        introduce: this.introduce
      };

      if (this.userId != this.$auth.user.username) {
        registerData.username = this.userId;
      }

      this.$axios.patch('/auth/user/', registerData).then(r => {
        this.loading = false;
        this.$message.success("가입을 완료하였습니다.");
        this.$auth.setUser(r.data);
        this.$router.push('/');
      }).catch(e => {
        this.loading = false;
        let resp = e.response.data;

        if (resp.username) {
          this.$message.error("이미 존재하거나 유효하지 않은 유저명입니다.");
        } else if (resp.nickname) {
          this.$message.error("유효하지 않은 닉네임입니다.");
        } else if (resp.introduce) {
          this.$message.error(resp.introduce);
        } else {
          this.$message.error("네트워크오류로 가입에 실패하였습니다. 다시 시도해주세요.");
        }
      });
    },

    step2() {
      if (![null, ''].includes(this.nickname) && ![null, ''].includes(this.userId)) {
        this.step = 1;
      } else {
        this.$message.error("닉네임 혹은 아이디가 입력되지 않았습니다.");
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/register.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_registervue_type_script_lang_js_ = (registervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/register.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_registervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "312d4c6f"
  
)

/* harmony default export */ var register = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.68bf749.svg";

/***/ })

};;
//# sourceMappingURL=register.js.map