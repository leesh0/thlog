<template>
  <div class="w-full max-w-md mx-auto mt-10 px-3">
    <div class="text-center mt-20 mb-10">
      <div
        id="brand"
        class="inline-flex items-center gap-x-1 text-black hover:text-black"
      >
        <img src="~/assets/logo.svg" class="w-8 h-8" />
        thlog
      </div>
    </div>
    <h1 class="text-center text-base">
      현재 가입을 진행중입니다. 닉네임과 아이디를 설정해서 가입을 완료해 주세요.
    </h1>

    <div class="py-5">
      <a-steps :current="step" size="small">
        <a-step title="아이디설정" />
        <a-step title="프로필설정" />
      </a-steps>
    </div>

    <div v-if="step == 0">
      <div class="bg-gray-50 rounded-md p-5 mt-5">
        <div>
          <label class="font-medium text-base">닉네임</label>
          <a-input placeholder="닉네임" v-model="nickname"/>
        </div>

        <div class="mt-5">
          <label class="font-medium text-base">유저명</label>
          <a-input
            v-model="userId"
            placeholder="유저명"
            addon-before="https://thlog.me/"
          />
        </div>
      </div>
      <div class="py-5 flex justify-end gap-x-5">
        <a-button @click="cancel" type="dashed">가입취소</a-button>
        <a-button @click="step2" type="primary" ghost>다음단계로</a-button>
      </div>
    </div>
    <div v-if="step == 1">
      <div class="bg-gray-50 rounded-md p-5 mt-5">
        <div class="flex justify-center items-center">
          <input type="file" accept="image/*" class="hidden" ref="avatar" @change="changeAvatar"/>
          <img :src="userAvatar" class="rounded-full w-30 h-30 border cursor-pointer bg-white shadow-sm" @click="$refs.avatar.click()"/>
        </div>
        <div class="text-center mt-3">
          <a-button  @click="$refs.avatar.click()">이미지 변경</a-button>
        </div>

        <div class="mt-5">
          <label class="font-medium text-base">한줄소개</label>
          <a-textarea placeholder="" :rows="4" v-model="introduce"/>
        </div>
      </div>
      <div class="py-5 flex justify-end gap-x-5">
        <a-button @click="step-=1" type="dashed">이전으로</a-button>
        <a-button type="primary" ghost :loading="loading" @click="complete">Thlog 시작하기</a-button>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  layout: 'empty',
  data() {
    return {
      userId: this.$auth.user.username,
      step: 0,
      nickname: this.$auth.user.nickname,
      userAvatar: this.$auth.user.avatar,
      introduce: this.$auth.user.introduce,
      loading:false
    }
  },
  methods: {
    changeAvatar(){
      const avatarFrm = new FormData()
      var avatarFile = this.$refs.avatar.files[0]
      avatarFrm.append('avatar', avatarFile)
      let loading = this.$message.loading('프로필 사진을 업로드중...',0)
      this.$axios.patch('/auth/user/', avatarFrm)
      .then(r=>{
        this.userAvatar = r.data.avatar
        this.$message.destroy()
        this.$message.success("프로필 사진이 변경되었습니다.")
      }).catch(e=>{
        this.$message.destroy()
        this.$message.error("프로필 사진 변경에 실패하였습니다.")
      })
    },
    cancel() {
      this.$axios
        .post('/auth/delete/')
        .then((r) => {
          this.$auth.logout()
        })
        .catch((e) => {
          this.$message.error('가입취소에 실패하였습니다. 다시 시도해주세요.')
        })
    },
    complete(){
      this.loading = true
      let registerData = {
        nickname:this.nickname,
        introduce:this.introduce
      }
      if(this.userId != this.$auth.user.username){
        registerData.username = this.userId
      }
      this.$axios.patch('/auth/user/',registerData).then(r=>{
        this.loading = false
        this.$message.success("가입을 완료하였습니다.")
        this.$auth.setUser(r.data)
        this.$router.push('/')
      }).catch(e=>{
        this.loading = false
        let resp = e.response.data
        if(resp.username){
          this.$message.error("이미 존재하거나 유효하지 않은 유저명입니다.")
        }else if(resp.nickname){
          this.$message.error("유효하지 않은 닉네임입니다.")
        }else if(resp.introduce){
          this.$message.error(resp.introduce)
        }else{
          this.$message.error("네트워크오류로 가입에 실패하였습니다. 다시 시도해주세요.")
        }
      })
    },
    step2(){
      if(![null,''].includes(this.nickname) && ![null,''].includes(this.userId)){
        this.step = 1
      }else{
        this.$message.error("닉네임 혹은 아이디가 입력되지 않았습니다.")
      }
    }
  },
}
</script>
