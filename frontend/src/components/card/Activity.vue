<template>
  <div
    class="
      flex
      items-center
      gap-x-3
      w-full
      py-3
      px-2
      border-b border-gray-100
      hover:bg-gray-100
      cursor-pointer
    "
  >
    <div
      class="text-lg rounded-full flex justify-center items-center w-10 h-10"
    >
      🎉
    </div>
    <div class="w-full">
      <div class="text-base font-medium">{{ activity.title }}</div>
      <div class="text-sm text-gray-400 pb-2">{{ activity.desc }}</div>
      <div class="text-xs text-gray-400 flex items-center">
        {{ ago(activity.created_at) }}
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
  props: ['activity'],
  methods: {
    ago(date) {
      const fromDate = Date.parse(date)
      return timeAgo.format(fromDate)
    },
  },
}
</script>
