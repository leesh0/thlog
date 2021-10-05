<template>
  <div class="h-full">
    <div class="pb-10 mt-3">
      <h1 class="text-base pl-2 items-center flex">✨ 최근 갱신된 쓰레드</h1>
      <div class="bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <cardThread
          v-for="thread in threads"
          :key="thread.id"
          :thread="thread"
        />
      </div>
      <client-only>
        <infinite-loading @infinite="nextPage"></infinite-loading>
      </client-only>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    let { data } = await $axios.get('/api/search/')
    return {
      threads: data.results,
      next: data.next,
    }
  },
  methods: {
    async nextPage($state) {
      if (!this.next) {
        $state.complete()
        return
      }
      let { data } = await this.$axios.get(this.next)
      this.threads.push(...data.results)
      this.next = data.next
      $state.loaded()
      if (!this.next) {
        $state.complete()
      }
    },
  },
}
</script>
