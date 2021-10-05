<template>
  <a-modal
    v-model="modalOpen"
    @cancel="close"
    @ok="close"
    :ok-button-props="{ props: { disabled: true } }"
    :cancel-button-props="{ props: { disabled: true } }"
  >
    <div slot="title" class="flex justify-center items-center py-5">
      <div
        class="
          brand
          inline-flex
          items-center
          gap-x-1
          text-black
          hover:text-black
        "
      >
        <img src="~/assets/logo.svg" class="w-8 h-8" />
        thlog
      </div>
    </div>
    <div class="sm:px-10">
      <p>다음으로 로그인</p>
      <!-- <a-button type="dashed" size="large" class="w-full" @click="googleLogin">
        <div class="flex justify-center items-center text-red-500">
          <a-icon type="google" class="mr-2" />
          <span class="text-black">Google 계정으로 로그인</span>
        </div>
      </a-button> -->
      <a-button
        type="dashed"
        size="large"
        class="w-full mt-5"
        @click="githubLogin"
      >
        <div class="flex justify-center items-center text-black-500">
          <a-icon type="github" class="mr-2" />
          <span class="text-black">Github 계정으로 로그인</span>
        </div>
      </a-button>
    </div>
    <div slot="footer"></div>
  </a-modal>
</template>

<script>
export default {
  props: ['value'],
  data() {
    return {}
  },
  computed: {
    modalOpen: {
      get: function () {
        return this.value
      },
      set: function (nv) {
        this.$emit('input', nv)
      },
    },
  },
  methods: {
    githubLogin() {
      this.$auth.loginWith('github').then((e) => {
        console.log(e)
      })
    },
    googleLogin() {
      this.$auth.loginWith('google')
    },
    close() {
      this.$emit('input', false)
    },
  },
}
</script>

<style>
.ant-modal-close-x {
  @apply flex items-center justify-center;
}
.ant-modal-header,
.ant-modal-footer {
  @apply border-b-0 border-t-0;
}
.brand {
  @apply text-3xl select-none cursor-pointer;
  font-family: 'Montserrat', sans-serif;
}
</style>
