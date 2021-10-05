<template>
  <div class="px-2 py-2 flex gap-x-5 overflow-x-auto">
    <div class="w-14" v-for="topic in topics" :key="topic.name">
      <div class="tag-icon">
        <img v-if="topic.devicon" :src="topic.svg" />
        <div v-else class="text-xl">{{ topic.svg }}</div>
      </div>
      <p class="tag-name">
        {{ topic.name }}
      </p>
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
const tags = [
  'android',
  'django',
  'go',
  'clojurescript',
  'nuxtjs',
  'linux',
  'help',
]

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
.tag-icon {
  @apply w-12 h-12 rounded-full border border-white ring-1 ring-gray-100 flex justify-center items-center mx-auto cursor-pointer;
}

.tag-icon > img {
  @apply w-10 h-10;
}

.tag-name {
  @apply py-2 text-xs text-center;
  overflow-wrap: break-word;
}
</style>
