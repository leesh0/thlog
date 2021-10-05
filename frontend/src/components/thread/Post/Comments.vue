<template>
  <div class="w-full">
    <div>
      <div class="flex items-center justify-between w-full">
        <div class="flex items-center">
          <img
            :src="reply.user.avatar"
            class="w-8 h-8 border border-gray-100 rounded-full mr-2"
          />
          <div class="font-medium text-sm">{{ reply.user.nickname }}</div>
        </div>
        <threadPostCommentMenu @action="action" />
      </div>
      <threadMdView
        :md="reply.text"
        :edit="edit"
        @closeEdit="closeEdit"
        @update="update"
        :reply="replyMode"
        class="
          prose-sm
          sm:prose
          border border-gray-100
          max-w-none
          p-3
          rounded-md
          bg-gray-50
          mt-2
        "
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ['reply'],
  data() {
    return {
      edit: false,
      replyMode: false,
    }
  },
  methods: {
    update(text) {
      this.$axios
        .patch(`api/reply/${this.reply.id}`, {
          text,
        })
        .then((r) => {
          this.reply = r.data
          this.edit = false
        })
        .catch((e) => {
          this.$message.error(`네트워크 오류. ${e.$message}`)
        })
    },
    closeEdit(v) {
      this.edit = false
    },
    action(act) {
      if (act.edit) {
        this.edit = act.edit
      }
    },
  },
}
</script>
<style>
.ant-timeline-item-tail {
  @apply left-5;
}
.ant-timeline-item-head-custom {
  @apply relative transform -translate-x-6 top-0 w-full;
  line-height: inherit;
  text-align: inherit;
  color: inherit;
}

.ant-timeline-item {
  @apply pb-5 pl-5;
}
</style>
