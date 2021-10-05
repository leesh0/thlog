<template>
  <div
    class="rounded-lg hover:bg-gray-100 flex justify-center items-center p-3"
  >
    <div>
      <div class="tag-icon">
        <img v-if="topicObj.devicon" :src="topicObj.svg" />
        <div v-else class="text-xl">{{ topicObj.svg }}</div>
      </div>
      <p class="tag-name">
        {{ topicObj.name }}
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

export default {
  props: ['topic'],
  data() {
    return {
      devicons,
    }
  },
  computed: {
    topicObj() {
      return findDevicon(this.topic)
    },
  },
}
</script>

<style scoped>
.tag-icon {
  @apply w-12 h-12 rounded-full  ring-1 ring-gray-100 flex justify-center items-center mx-auto cursor-pointer;
}

.tag-icon > img {
  @apply w-8 h-8;
}

.tag-name {
  @apply py-2 text-xs text-center;
  overflow-wrap: break-word;
}
</style>
