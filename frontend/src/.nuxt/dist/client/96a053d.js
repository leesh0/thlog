(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{1394:function(t,e,n){"use strict";n.r(e);var r=n(25),c=(n(69),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,e.next=3,n.get("/auth/user");case 3:return r=e.sent,data=r.data,e.abrupt("return",{user:data,nickname:data.nickname,avatar:data.avatar,introduce:data.introduce,github:data.github,website:data.website});case 6:case"end":return e.stop()}}),e)})))()},middleware:"auth",methods:{save:function(){var t=this;this.$axios.patch("auth/user/",{nickname:this.nickname,introduce:this.introduce,github:this.github,website:this.website}).then((function(e){t.$notification.success({message:"프로필을 갱신하였습니다.",description:"정상적으로 프로필이 갱신되었습니다."}),t.$auth.setUser(e.data)})).catch((function(e){t.$message.error("프로필 갱신에 실패하였습니다. 다시 시도해 주세요.")}))},changeAvatar:function(){var t=this,e=new FormData,n=this.$refs.avatar.files[0];e.append("avatar",n);this.$message.loading("프로필 사진을 업로드중...",0);this.$axios.patch("/auth/user/",e).then((function(e){t.avatar=e.data.avatar,t.$message.destroy(),t.$message.success("프로필 사진이 변경되었습니다."),t.$auth.setUser(e.data)})).catch((function(e){t.$message.destroy(),t.$message.error("프로필 사진 변경에 실패하였습니다.")}))}}}),o=n(68),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"max-w-screen-sm mx-auto px-3 mt-5"},[n("input",{ref:"avatar",staticClass:"hidden",attrs:{type:"file",accept:"image/*"},on:{change:t.changeAvatar}}),t._v(" "),n("h1",{staticClass:"text-xl"},[t._v("프로필 설정")]),t._v(" "),n("div",{staticClass:"flex"},[n("div",[n("div",{staticClass:"p-3 text-center",attrs:{id:"profile-image"}},[n("img",{staticClass:"rounded-full w-20 h-20 mx-auto cursor-pointer",attrs:{src:t.avatar},on:{click:function(e){return t.$refs.avatar.click()}}}),t._v(" "),n("a-button",{staticClass:"mt-3",attrs:{type:"dashed"},on:{click:function(e){return t.$refs.avatar.click()}}},[t._v("\n          프로필 변경\n        ")])],1)]),t._v(" "),n("div",{staticClass:"flex-1"},[n("div",{staticClass:"text-sm"},[t._v("닉네임")]),t._v(" "),n("a-input",{model:{value:t.nickname,callback:function(e){t.nickname=e},expression:"nickname"}}),t._v(" "),n("div",{staticClass:"text-sm mt-3"},[t._v("한줄소개")]),t._v(" "),n("a-textarea",{model:{value:t.introduce,callback:function(e){t.introduce=e},expression:"introduce"}})],1)]),t._v(" "),n("div",{staticClass:"mt-10"},[n("h1",{staticClass:"text-xl mb-3"},[t._v("SNS연결")]),t._v(" "),n("div",{staticClass:"flex items-center py-1"},[n("a-icon",{staticClass:"mr-2",attrs:{type:"github"}}),t._v("Github 유저명\n    ")],1),t._v(" "),n("a-input",{attrs:{"addon-before":"https://github.com/","default-value":"github"},model:{value:t.github,callback:function(e){t.github=e},expression:"github"}}),t._v(" "),n("div",{staticClass:"flex items-center py-1 mt-5"},[n("a-icon",{staticClass:"mr-2",attrs:{type:"link"}}),t._v("웹사이트\n    ")],1),t._v(" "),n("a-input",{attrs:{"default-value":"https://example.com"},model:{value:t.website,callback:function(e){t.website=e},expression:"website"}})],1),t._v(" "),n("div",{staticClass:"flex justify-end mt-10"},[n("a-button",{attrs:{type:"primary",size:"large"},on:{click:t.save}},[t._v("저장하기")])],1)])}),[],!1,null,null,null);e.default=component.exports}}]);