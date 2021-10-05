<template>
  <div class="rounded-full cursor-pointer select-none">
    <img :src="src" class="w-10 h-10 rounded-full border border-gray-200" />
  </div>
</template>

<script>
export default {
  props: ['src'],
}
</script>
