<template>
  <div class="flex gap-x-3 overflow-x-auto py-2 px-2">
    <div v-for="topic in topics" :key="topic.name" class="flex items-center">
      <div class="topic-box">
        <div class="w-5 h-5 mx-auto flex justify-center items-center">
          <img v-if="topic.devicon" :src="topic.svg" class="w-5 h-5 mx-auto" />
          <div v-else class="font-bold text-gray-300 italic select-none">#</div>
        </div>
        <div class="tag-name">{{ topic.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import devicons from '~/resources/devicons.json'

function prefixCap(string) {
  const pref = String(string.slice(0, 1)).toUpperCase()
  const text = String(string.slice(1, string.length)).toLowerCase()
  return pref + text
}

function findDevicon(tag) {
  let lowerTag = tag.toLowerCase()
  for (let e of devicons) {
    if (e.name === lowerTag) {
      let svgType = e.versions.svg[0]
      return {
        devicon: true,
        name: prefixCap(e.name),
        svg: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${e.name}/${e.name}-${svgType}.svg`,
      }
    }
  }
  return {
    devicon: false,
    name: prefixCap(lowerTag),
    svg: prefixCap(lowerTag.slice(0, 2)),
  }
}
const tags = ['python', 'django', 'go', 'ruby', 'nuxtjs', 'linux', 'help']

export default {
  data() {
    return {
      devicons,
      tags,
    }
  },
  computed: {
    topics() {
      let retTags = []
      for (let tag of this.tags) {
        retTags.push(findDevicon(tag))
      }
      return retTags
    },
  },
}
</script>

<style scoped>
.topic-box {
  @apply flex gap-x-1 items-center select-none cursor-pointer rounded-full  border-gray-100  hover:bg-gray-100 border-gray-100 text-gray-500  py-1 px-2 text-xs;
}

.tag-name {
  @apply text-xs text-center;
  overflow-wrap: break-word;
}
</style>
