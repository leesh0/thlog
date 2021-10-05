<template>
  <div>
    <cardFolder :folder="folder" v-for="folder in folders" :key="folder.id" />
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    let { data } = await $axios.get(`/api/folder/${params.user}/`)
    return {
      folders: data,
    }
  },
}
</script>
