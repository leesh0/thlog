<template>
  <div>
    <div
      v-if="$route.name != 'user-thread-read'"
      class="max-w-screen-lg mx-auto min-w-70"
    >
      <div class="md:(absolute w-80) mt-10 -sm:mt-3 px-3 rounded-lg">
        <cardProfile :user="user" />
      </div>
      <div class="md:pl-80 -md:mt-5">
        <a-tabs
          :activeKey="$route.name"
          hideAdd
          @change="tabChange"
          class="user-affixed"
          :tabBarStyle="{ Color: '#000000' }"
          :tabBarGutter="3"
        >
          <a-tab-pane key="user">
            <template slot="tab">
              <div class="t"><a-icon type="thunderbolt" />Threads</div>
            </template>
          </a-tab-pane>
          <a-tab-pane key="user-folders">
            <template slot="tab">
              <div class="t"><a-icon type="folder" />Folders</div>
            </template>
          </a-tab-pane>
          <a-tab-pane
            key="user-activities"
            v-if="$auth.loggedIn && $auth.user.username == user.username"
          >
            <template slot="tab">
              <div class="t"><a-icon type="rocket" />Activities</div>
            </template>
          </a-tab-pane>
        </a-tabs>
        <nuxt-child />
      </div>
    </div>
    <div v-else class="pt-3 sm:pt-10">
      <nuxt-child />
    </div>
  </div>
</template>

<script>
const screenSize = 1024 - 768
export default {
  async asyncData({ $axios, params, redirect, error }) {
    let { data } = await $axios.get(`/api/${params.user}/`)
    if (!data) {
      redirect('/')
    }
    return {
      user: data,
    }
  },
  methods: {
    tabChange(key) {
      this.$router.push({ name: key })
    },
  },
}
</script>

<style>
.ant-tabs-bar {
  @apply -sm:pl-0 border-b-0 px-2 mb-0;
}

.user-affixed {
  @apply bg-white;
}
.user-affixed > .ant-tabs-bar {
  @apply px-0 mb-0 -sm:border-b;
}
</style>

<style scoped>
.t {
  @apply flex items-center;
  font-size: 0.9rem;
}
</style>
