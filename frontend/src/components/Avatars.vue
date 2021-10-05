<template>
  <div class="flex -space-x-1 overflow-hidden">
    <img
      class="inline-block h-6 w-6 rounded-full ring-2 ring-white cursor-pointer"
      :src="user.avatar"
      alt=""
      v-for="user in users"
      :key="user.username"
      @click="$router.push({ name: 'user', params: { user: user.username } })"
    />
  </div>
</template>

<script>
export default {
  props: ['users'],
}
</script>
