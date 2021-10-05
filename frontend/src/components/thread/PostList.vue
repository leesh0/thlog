<template>
  <div>
    <div v-if="thread.comments.length < 1">
      <a-empty
        class="py-20"
        description="작성된 코멘트가 없습니다. 코멘트를 작성해주세요."
      >
      </a-empty>
    </div>
    <div v-else>
      <threadPost
        :id="comment.id"
        class="threadContent"
        v-for="comment in thread.comments"
        :key="comment.id"
        :comment="comment"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ['thread'],
}
</script>

<style scoped>
.threadContent {
  @apply relative;
}
.threadContent:before {
  @apply absolute top-11 bottom-0 w-0.5 left-4.5 sm:bg-gray-100 -z-0;
  content: '';
}
</style>
