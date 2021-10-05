<template>
  <div class="flex justify-between px-2 sm:px-5 items-center leading-17">
    <router-link
      :to="{ name: 'index' }"
      id="brand"
      class="inline-flex items-center gap-x-1 text-black hover:text-black"
    >
      <img src="~/assets/logo.svg" class="w-8 h-8" />
      thlog
    </router-link>
    <div class="flex gap-x-3 items-center">
      <router-link
        :to="{ name: 'search' }"
        class="
          text-2xl
          p-3
          rounded-full
          select-none
          cursor-pointer
          hover:text-cyan-500
          text-black
        "
      >
        <a-icon type="search" />
      </router-link>

      <div v-if="$auth.loggedIn" class="flex items-center gap-x-3">
        <layoutNavbarUser />
        <div class="-md:hidden">
          <a-button @click="$router.push({ name: 'new' })" type="link">
            <div class="flex items-center">
              <a-icon type="plus" class="mr-2" />
              새 쓰레드
            </div>
          </a-button>
        </div>
      </div>
      <div v-else>
        <modalLogin v-model="loginOpen" />
        <a-button type="link" @click="loginOpen = true"> 로그인 </a-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$nuxt.$on('login', this.openLogin)
  },
  destroyed() {
    this.$nuxt.$off('login', this.openLogin)
  },
  data() {
    return {
      loginOpen: false,
    }
  },
  methods: {
    openLogin() {
      this.loginOpen = true
    },
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');

.brand,
#brand {
  @apply text-3xl select-none cursor-pointer;
  font-family: 'Montserrat', sans-serif;
}
</style>
