<template>
  <div
    class="
      flex
      items-center
      gap-x-3
      py-3
      px-2
      border-b border-gray-100
      hover:bg-gray-100
      cursor-pointer
    "
  >
    <div
      class="
        bg-gray-100
        rounded-full
        flex
        justify-center
        items-center
        w-10
        h-10
      "
    >
      <a-icon type="folder" />
    </div>
    <div>
      <div class="text-base font-medium pb-2">{{ folder.name }}</div>
      <div class="text-xs text-gray-400 flex items-center">
        <a-icon type="thunderbolt" />{{ folder.threads_count }} threads
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['folder'],
}
</script>
