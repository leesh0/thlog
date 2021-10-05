<template>
  <div>
    <div
      class="flex items-center mt-7 p-3 leading-10 border-gray-100"
      :class="comment.reply_count > 0 ? 'border-b' : ''"
    >
      <div
        class="
          max-w-max
          hover:underline
          select-none
          cursor-pointer
          flex
          items-center
        "
        @click="$nuxt.$emit('toComment', comment.id)"
      >
        <a-icon type="message" class="mr-2" />
        답글
        <span class="text-gray-400 text-sm ml-1">{{
          comment.reply_count
        }}</span>
      </div>
    </div>
    <div>
      <threadPostComments
        class="mt-5"
        v-for="reply in comment.replies"
        :key="reply.id"
        :reply="reply"
      />
    </div>
    <div
      class="pt-3 mb-5"
      v-if="comment.replies.length > 0"
      @click="$nuxt.$emit('toComment', comment.id)"
    >
      <a-button type="link">
        <div class="flex-center">
          <a-icon type="plus" class="mr-2" />답글 추가하기
        </div>
      </a-button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['comment'],
}
</script>
