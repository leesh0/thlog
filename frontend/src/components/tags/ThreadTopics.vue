<template>
  <div class="flex gap-x-3 flex-wrap gap-y-2 items-center">
    <div v-for="topic in topics" :key="topic.name" class="flex items-center">
      <div class="topic-box">
        <div
          class="
            w-6
            h-6
            mx-auto
            flex
            justify-center
            items-center
            rounded-full
            p-1
          "
        >
          <i
            v-if="topic.devicon"
            :class="`devicon-${topic.name}-plain text-base `"
          />
          <div v-else class="text-cyan-500 text-base italic select-none">#</div>
        </div>
        <div class="tag-name">{{ topic.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import list from 'ant-design-vue/lib/list'
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
        name: e.name,
        slug: lowerTag.slug,
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

export default {
  created() {
    console.log(this.topicList)
  },
  data() {
    return {
      devicons,
    }
  },
  props: {
    topicList: {
      default: [],
    },
  },
  computed: {
    topics() {
      let retTags = []
      for (let tag of this.topicList) {
        retTags.push(findDevicon(tag))
      }
      return retTags
    },
  },
}
</script>

<style scoped>
.topic-box {
  @apply flex gap-x-1 items-center select-none cursor-pointer rounded-full border border-gray-100  hover:bg-gray-100 border-gray-100 text-gray-500 text-xs;
}

.tag-name {
  @apply text-xs text-center py-1 pr-2;
  overflow-wrap: break-word;
}
</style>
