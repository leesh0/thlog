<template>
  <div class="p-5" :class="toComment ? 'sticky bottom-0 bg-white border' : ''">
    <input
      type="file"
      accept="image/*"
      class="hidden"
      ref="commentImage"
      @change="uploadImage"
    />
    <div v-if="toComment" class="flex items-center justify-between">
      <div class="flex items-center gap-x-2">
        <div class="py-1 px-3 rounded-full bg-gray-100 border max-w-max">
          {{ toComment }}
        </div>
        에 답글을 작성
      </div>
      <div
        class="flex items-center cursor-pointer select-none"
        @click="toComment = false"
      >
        <a-icon type="close" />
      </div>
    </div>
    <div class="flex items-center leading-15">
      <Avatar class="mr-2 flex-shrink-0 -sm:hidden" :src="$auth.user.avatar" />
      <a-tabs
        v-model="commentTab"
        :default-active-key="1"
        :tabBarGutter="5"
        class="!p-0"
      >
        <a-tab-pane :key="1" tab="Write" />
        <a-tab-pane :key="2" tab="Preview" />
      </a-tabs>
    </div>
    <div v-if="commentTab == 1">
      <div class="toolbar">
        <div
          class="cursor-pointer select-none"
          @click="$refs.commentImage.click()"
        >
          <a-icon type="picture" class="mr-2" /> 이미지 추가
        </div>
        <!-- <div @click="insertTa('asas')">
        <a-icon type="plus" class="mr-2" /> 임베드
      </div> -->
      </div>

      <a-textarea
        placeholder="코멘트를 추가하기"
        spellcheck="false"
        ref="ta"
        v-model="mdArea"
        :rows="10"
        @focus="areaActive = true"
        @blur="areaActive = false"
        class="markdown-ta"
      />
    </div>
    <div v-else>
      <threadMdView :md="mdArea" />
    </div>
    <div class="py-3 w-full flex items-center gap-x-3 justify-end">
      <a-button
        type="dashed"
        v-if="!thread.closed && !toComment"
        @click="close"
      >
        <div class="flex items-center">
          <span class="text-red-500 flex items-center mr-2">
            <a-icon type="check-circle" />
          </span>
          Close
        </div>
      </a-button>
      <a-button
        v-if="!toComment"
        type="primary"
        ghost
        :loading="writeLoading"
        @click="write"
      >
        <div class="flex items-center">Comment</div>
      </a-button>
      <a-button
        v-else
        type="primary"
        ghost
        :loading="writeLoading"
        @click="reply"
      >
        <div class="flex items-center">Reply</div>
      </a-button>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$nuxt.$on('toComment', (tc) => {
      this.toComment = tc
    })
  },
  destroyed() {
    this.$nuxt.$off('toComment')
  },
  props: ['thread'],
  data() {
    return {
      areaActive: false,
      mdArea: '',
      commentTab: 1,
      writeLoading: false,
      toComment: false,
    }
  },
  methods: {
    reply() {
      const user = this.$route.params.user
      const read = this.$route.params.read
      this.writeLoading = true
      this.$axios
        .post(`api/reply/create/${this.toComment}`, {
          text: this.mdArea,
        })
        .then((r) => {
          console.log(r.data)
          this.writeLoading = false
          this.toComment = false
          this.mdArea = ''
          this.$nuxt.$emit(`replyUp-${r.data.comment}`, r.data)
        })
        .catch((e) => {
          this.$message.error('네트워크 오류로 답글작성에 실패하였습니다.')
          this.writeLoading = false
        })
    },
    write() {
      const user = this.$route.params.user
      const read = this.$route.params.read
      this.writeLoading = true
      this.$axios
        .post(`api/thread/${user}/${read}/comments`, {
          text: this.mdArea,
        })
        .then((r) => {
          console.log(r.data)
          this.writeLoading = false
          this.mdArea = ''
          this.$emit('addComment', r.data)
        })
        .catch((e) => {
          this.$message.error(
            '코멘트 작성에 실패하였습니다. 다시 시도해주세요.'
          )
          this.writeLoading = false
        })
    },
    close() {
      const user = this.$route.params.user
      const read = this.$route.params.read
      this.$axios
        .patch(`api/thread/${user}/${read}`, { closed: !this.thread.closed })
        .then((r) => {
          this.thread.closed = r.data.closed
          this.$emit('close', r.data.closed)
        })
        .catch((e) => {
          // this.thread.closed = !this.thread.closed
        })
    },
    uploadImage() {
      const frm = new FormData()
      var imageFile = this.$refs.commentImage.files[0]
      frm.append('image', imageFile)
      let loading = this.$message.loading('사진을 업로드중...', 0)
      this.$axios
        .post('/api/upload/image/', frm)
        .then((r) => {
          console.log(r.data)
          this.$message.destroy()
          this.$message.success('업로드 완료.')
          this.insertImage(r.data.image)
          this.$refs.commentImage.value = null
        })
        .catch((e) => {
          this.$message.destroy()
          if (e.response?.data.image) {
            this.$message.error(e.response.data.image)
          } else {
            this.$message.error(
              '알 수 없는 오류로 인하여 업로드에 실패하였습니다.'
            )
          }
          this.$refs.commentImage.value = null
        })
    },
    insertImage(img) {
      let ta = this.$refs.ta
      let cp = ta.$el.selectionStart
      let og = this.mdArea
      const imageMd = `![](${img})`
      let inserted = og.substring(0, cp) + imageMd + og.substring(cp, og.length)
      this.mdArea = inserted
    },
  },
}
</script>

<style scoped>
.toolbar {
  @apply flex items-center py-2 text-gray-400 gap-x-2;
}

.toolbar > div {
  @apply flex items-center px-2 py-1 rounded-md select-none cursor-pointer hover:(bg-gray-50 text-cyan-500);
}
.markdown-ta {
  @apply border-none bg-gray-50 p-3 rounded-md
  text-base
        !border-0
        !ring-0
        !hover:(!border-r-0
        !border-0
        border-transparent)
        focus:(border-0
        ring-0
        border-r-0);
  resize: none;
}
</style>
