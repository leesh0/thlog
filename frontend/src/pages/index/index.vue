<template>
  <div class="h-full">
    <div class="py-3">
      <h1 class="text-base pl-2 items-center flex">
        <a-icon type="rise" class="mr-2" />토픽TOP
      </h1>
      <tagsThreadTopics class="py-3" :topicList="hotTopic" />
    </div>

    <div class="pb-10 mt-10">
      <h1 class="text-base pl-2 items-center flex">
        <a-icon type="bar-chart" class="mr-2" />트렌딩
        <a-dropdown :trigger="['click']">
          <div
            class="ml-3 text-xs flex items-center select-none cursor-pointer"
            @click="(e) => e.preventDefault()"
          >
            이번주 <a-icon type="down" class="ml-1" />
          </div>
          <a-menu slot="overlay">
            <a-menu-item key="이번달"> 이번달 </a-menu-item>
            <a-menu-item key="오늘"> 오늘 </a-menu-item>
            <a-menu-divider />
            <a-menu-item key="이번주"> 이번주 </a-menu-item>
          </a-menu>
        </a-dropdown>
      </h1>
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
    let trending = $axios.get('/api/search', {
      params: {
        trending: true,
        order: 'week',
      },
    })
    let hotTopics = $axios.get('/api/search/hot-topics?limit=10')
    let values = await Promise.all([trending, hotTopics])

    return {
      threads: values[0].data.results,
      next: values[0].data.next,
      hotTopic: values[1].data,
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
