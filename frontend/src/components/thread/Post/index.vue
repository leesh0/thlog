<template>
  <div>
    <div class="flex">
      <div class="flex-shrink-0 -sm:hidden">
        <img :src="comment.user.avatar" class="w-10 h-10 rounded-full" />
      </div>

      <div class="w-full px-2">
        <div
          class="
            flex
            justify-between
            items-center
            text-black
            rounded-t-lg
            px-3
            -sm:px-0
            pt-2
            pb-3
          "
        >
          <div class="flex items-center">
            <img
              :src="comment.user.avatar"
              class="w-10 h-10 rounded-full mr-2 sm:hidden"
            />
            <div class="font-medium text-sm sm:text-base mr-3">
              {{ comment.user.nickname }}
            </div>
            <div class="text-gray-400 text-xs">
              {{ ago(comment.updated_at) }}
            </div>
          </div>
          <threadPostMenu @action="action" />
        </div>
        <div class="thread-content">
          <threadMdView :md="comment.text" :edit="edit" @update="update" />
          <!-- <threadPostReferences /> -->
          <threadPostFoot :comment="comment" />
        </div>
      </div>
    </div>
    <div class="sm:hidden">
      <a-divider>
        <div class="text-lg text-cyan-500">
          <a-icon type="bulb" />
        </div>
      </a-divider>
    </div>
  </div>
</template>
<script>
import TimeAgo from 'javascript-time-ago'
import ko from 'javascript-time-ago/locale/ko.json'

if (TimeAgo.getDefaultLocale() != 'ko') {
  TimeAgo.addDefaultLocale(ko)
}
const timeAgo = new TimeAgo('ko-KR')
import exMd from '~/assets/ex'
export default {
  created() {
    this.$nuxt.$on(`replyUp-${this.comment.id}`, (v) => {
      this.comment.replies.push(v)
      this.comment.reply_count += 1
    })
  },
  destroyed() {
    this.$nuxt.$off(`commentUp-${this.comment.id}`)
  },
  props: ['comment'],
  data() {
    return {
      exMd,
      edit: false,
    }
  },
  methods: {
    action(action) {
      if (action.edit) {
        this.edit = true
      }
    },
    update(text) {
      const user = this.$route.params.user
      const read = this.$route.params.read
      this.writeLoading = true
      this.$axios
        .patch(`api/thread/${user}/${read}/comments/${this.comment.id}`, {
          text,
        })
        .then((r) => {
          this.comment = r.data
          this.edit = false
        })
        .catch((e) => {
          this.$message.error(
            '코멘트 수정에 실패하였습니다. 다시 시도해주세요.'
          )
        })
    },
    ago(date) {
      const fromDate = Date.parse(date)
      return timeAgo.format(fromDate)
    },
  },
}
</script>
<style>
.thread-content {
  @apply max-w-none
            sm:p-4
            rounded-lg
            -sm:rounded-none
            bg-white;
}
</style>
