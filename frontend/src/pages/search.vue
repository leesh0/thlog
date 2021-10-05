<template>
  <div class="max-w-screen-md mx-auto px-3">
    <div class="mt-5">
      <formsInput />
    </div>

    <div class="mt-5">
      <h1 class="text-base font-semibold pb-2">🏷️ 인기토픽</h1>
      <div class="grid gap-x-2 grid-cols-4 sm:grid-cols-5 md:grid-cols-7">
        <tagsTopicBox v-for="topic in hotTopics" :key="topic" :topic="topic" />
      </div>
    </div>

    <div class="mt-5">
      <h1 class="text-base font-semibold pb-2">🏷️ 인기유저</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2">
        <cardUser />
      </div>
    </div>
  </div>
</template>

<script>
const hotTopics = ['django', 'vuejs', 'python', 'help', 'nuxtjs']
export default {
  data() {
    return {
      hotTopics,
    }
  },
  methods: {
    onSearch(aa) {
      return aa
    },
  },
}
</script>
