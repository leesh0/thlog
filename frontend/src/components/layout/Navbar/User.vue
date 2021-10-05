<template>
  <div>
    <a-popover placement="bottomRight" trigger="click">
      <template slot="content">
        <nuxt-link :to="{ name: 'new' }" class="text-black menu-item">
          <a-icon type="thunderbolt" class="mr-2" />신규 쓰레드
        </nuxt-link>
        <nuxt-link
          :to="{ name: 'settings-profile' }"
          class="menu-item text-black"
        >
          <a-icon type="user" class="mr-2" />프로필 수정
        </nuxt-link>
        <div class="menu-item text-black" @click="$auth.logout()">
          <a-icon type="logout" class="mr-2" />로그아웃
        </div>
      </template>
      <div
        @click="
          $router.push({ name: 'user', params: { user: $auth.user.username } })
        "
        slot="title"
        class="text-black hover:text-cyan-500 cursor-pointer"
      >
        <div class="font-normal py-1">
          <p class="font-medium mb-0">{{ $auth.user.username }}</p>
          <p class="text-xs text-gray-400 mb-0">MyPage</p>
        </div>
      </div>
      <div class="flex items-center cursor-pointer">
        <a-avatar
          :size="36"
          :src="$auth.user.avatar"
          class="fill-current fill-white"
        />
        <div style="font-size: 0.7rem">
          <a-icon type="caret-down" class="" />
        </div>
      </div>
    </a-popover>
  </div>
</template>

<style scoped>
.menu-item {
  @apply cursor-pointer select-none flex items-center hover:text-cyan-500 py-1;
}
</style>
