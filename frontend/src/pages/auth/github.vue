<template>
  <div>
    <div class="flex justify-center items-center py-10 text-5xl">
      <a-icon type="loading" v-if="loading" />
    </div>
    <p class="text-base text-center">Github 로그인중...</p>
  </div>
</template>

<script>
export default {
  auth: 'guest',
  data() {
    return {
      loading: false,
    }
  },
  mounted() {
    const githubCode = this.$route.query.code
    if (!githubCode) {
      this.$router.push('/')
    } else {
      this.loading = true
      this.$auth
        .loginWith('local', { data: { code: githubCode } })
        .then(() => {
          this.$router.push('/')
          this.$message.success('로그인되었습니다.')
        })
        .catch((e) => {
          this.$message.error('로그인에 실패하였습니다.')
        })
    }
  },
  methods: {},
}
</script>
