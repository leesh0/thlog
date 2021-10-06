<template>
  <div>
    <div class="flex sm:justify-center items-center mt-5">
      <div class="w-40 h-40 -sm:(w-20 h-20)">
        <img :src="user.avatar" class="rounded-full" />
      </div>
    </div>
    <div class="pt-5">
      <h2 class="text-2xl -sm:text-lg font-medium py-0 mb-0">
        {{ user.nickname }}
      </h2>
      <div class="flex justify-between">
        <h4 class="text-base font-normal text-gray-500 -sm:text-sm">
          @{{ user.username }}
        </h4>
        <div class="text-lg flex items-center gap-x-3">
          <a-icon type="github" />
          <a-icon type="home" />
        </div>
      </div>
      <p class="text-sm py-3">
        {{ user.introduce }}
      </p>
    </div>
    <nuxt-link :to="{ name: 'settings-profile' }">
      <a-button type="primary" class="w-full" ghost> 프로필 수정</a-button>
    </nuxt-link>
    <div
      class="
        -sm:(flex
        justify-between
        bg-transparent)
        mt-3
        rounded-md
        bg-gray-50
        sm:p-4
      "
    >
      <div class="flex items-center text-sm text-gray-500">
        <a-icon type="team" class="mr-2" />
        <nuxt-link
          :to="{ name: 'user-follower' }"
          class="hover:(underline text-gray-500) cursor-pointer text-gray-500"
        >
          팔로워 <span class="text-black">12 </span>
        </nuxt-link>
        ・
        <nuxt-link
          :to="{ name: 'user-following' }"
          class="hover:(underline text-gray-500) cursor-pointer text-gray-500"
        >
          팔로잉
          <span class="text-black">1</span>
        </nuxt-link>
      </div>
      <div class="flex items-center sm:mt-5 text-gray-500">
        <div class="text-cyan-500 min-w-0 min-h-0 flex items-center">
          <a-icon type="heart" theme="filled" class="mr-2" />
        </div>
        112 Likes
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.user)
  },
  props: ['user'],
}
</script>
