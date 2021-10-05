<template>
  <div
    class="
      flex
      px-3
      py-2
      -sm:(px-2
      py-3
      )
      gap-x-4
      border-b border-gray-100
      w-full
      hover:bg-gray-50
    "
  >
    <div class="flex-1">
      <router-link
        :to="{
          name: 'user-thread-read',
          params: { user: thread.owner.username, read: thread.id },
        }"
      >
        <h1
          class="text-base md:text-base lg:text-lg font-semibold line-clamp-2"
        >
          {{ thread.title }}
        </h1>
      </router-link>
      <div
        class="flex text-xs justify-between items-center text-gray-400 gap-x-3"
      >
        <div
          class="flex flex-wrap gap-x-2 items-center text-xs text-gray-400 pb-2"
        >
          <div class="min-w-min" v-for="topic in thread.topics" :key="topic">
            #{{ topic }}
          </div>
        </div>
      </div>
      <div class="text-xs mt-2 items-center flex justify-between">
        <div>
          <span class="open-badge" :class="thread.closed ? 'close' : 'open'">{{
            thread.closed ? 'Closed' : 'Open'
          }}</span>
          <span clas="text-gray-500">{{ ago(thread.updated_at) }} 갱신</span>
        </div>
      </div>
    </div>
    <div
      class="
        flex
        gap-x-3
        sm:gap-x-5
        items-center
        text-gray-400 text-sm
        -sm:text-xs
      "
    >
      <div class="item items-center gap-x-3">
        <div class="item">
          <div class="items-center flex mr-1">
            <a-icon type="message" />
          </div>
          <span>{{ thread.comments_count }}</span>
        </div>
      </div>
      <div class="item items-center gap-x-3">
        <div class="item">
          <div class="items-center flex mr-1 text-cyan-500">
            <a-icon type="like" />
          </div>
          <span>{{ thread.likes }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TimeAgo from 'javascript-time-ago'

import ko from 'javascript-time-ago/locale/ko.json'

if (TimeAgo.getDefaultLocale() != 'ko') {
  TimeAgo.addDefaultLocale(ko)
}
const timeAgo = new TimeAgo('ko-KR')
export default {
  props: ['thread'],
  methods: {
    ago(date) {
      const fromDate = Date.parse(date)
      return timeAgo.format(fromDate)
    },
  },
}
</script>

<style scoped>
.open-badge {
  @apply border rounded-full px-2 py-0.5 text-xs mr-2;
}
.open-badge.open {
  @apply border-cyan-500 text-cyan-500;
}
.open-badge.close {
  @apply border-red-500 text-red-500;
}
.item {
  @apply flex items-center;
}

.item-sm-hidden {
  @apply -sm:hidden flex items-center gap-x-1;
}
</style>
