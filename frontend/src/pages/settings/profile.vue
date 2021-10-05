<template>
  <div class="max-w-screen-sm mx-auto px-3 mt-5">
    <input
      type="file"
      accept="image/*"
      class="hidden"
      ref="avatar"
      @change="changeAvatar"
    />
    <h1 class="text-xl">프로필 설정</h1>
    <div class="flex">
      <div>
        <div id="profile-image" class="p-3 text-center">
          <img
            :src="avatar"
            class="rounded-full w-20 h-20 mx-auto cursor-pointer"
            @click="$refs.avatar.click()"
          />
          <a-button type="dashed" class="mt-3" @click="$refs.avatar.click()">
            프로필 변경
          </a-button>
        </div>
      </div>
      <div class="flex-1">
        <div class="text-sm">닉네임</div>
        <a-input v-model="nickname" />
        <div class="text-sm mt-3">한줄소개</div>
        <a-textarea v-model="introduce" />
      </div>
    </div>
    <div class="mt-10">
      <h1 class="text-xl mb-3">SNS연결</h1>
      <div class="flex items-center py-1">
        <a-icon type="github" class="mr-2" />Github 유저명
      </div>
      <a-input
        v-model="github"
        addon-before="https://github.com/"
        default-value="github"
      />

      <div class="flex items-center py-1 mt-5">
        <a-icon type="link" class="mr-2" />웹사이트
      </div>
      <a-input v-model="website" default-value="https://example.com" />
    </div>
    <div class="flex justify-end mt-10">
      <a-button type="primary" size="large" @click="save">저장하기</a-button>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    let { data } = await $axios.get('/auth/user')
    return {
      user: data,
      nickname: data.nickname,
      avatar: data.avatar,
      introduce: data.introduce,
      github: data.github,
      website: data.website,
    }
  },
  middleware: 'auth',
  methods: {
    save() {
      this.$axios
        .patch(`auth/user/`, {
          nickname: this.nickname,
          introduce: this.introduce,
          github: this.github,
          website: this.website,
        })
        .then((r) => {
          this.$notification['success']({
            message: '프로필을 갱신하였습니다.',
            description: '정상적으로 프로필이 갱신되었습니다.',
          })
          this.$auth.setUser(r.data)
        })
        .catch((e) => {
          this.$message.error(
            '프로필 갱신에 실패하였습니다. 다시 시도해 주세요.'
          )
        })
    },
    changeAvatar() {
      const avatarFrm = new FormData()
      var avatarFile = this.$refs.avatar.files[0]
      avatarFrm.append('avatar', avatarFile)
      let loading = this.$message.loading('프로필 사진을 업로드중...', 0)
      this.$axios
        .patch('/auth/user/', avatarFrm)
        .then((r) => {
          this.avatar = r.data.avatar
          this.$message.destroy()
          this.$message.success('프로필 사진이 변경되었습니다.')
          this.$auth.setUser(r.data)
        })
        .catch((e) => {
          this.$message.destroy()
          this.$message.error('프로필 사진 변경에 실패하였습니다.')
        })
    },
  },
}
</script>
