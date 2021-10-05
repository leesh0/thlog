<template>
  <div>
    <cardUserThread
      :thread="thread"
      v-for="thread in threads"
      :key="thread.id"
    />
    <client-only>
      <infinite-loading @infinite="nextPage"></infinite-loading>
    </client-only>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    let { data } = await $axios.get(`/api/thread/${params.user}/`)
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
