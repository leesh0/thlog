<template>
  <div>
    <div v-if="!edit">
      <article v-html="$md.render(md)" class="prose -sm:prose-sm px-2" />
    </div>
    <div v-else>
      <input
        type="file"
        accept="image/*"
        class="hidden"
        ref="cmImage"
        @change="uploadImage"
      />
      <div class="flex items-center leading-15">
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
            @click="$refs.cmImage.click()"
          >
            <a-icon type="picture" class="mr-2" /> 이미지 추가
          </div>
        </div>

        <a-textarea
          placeholder="코멘트를 추가하기"
          spellcheck="false"
          ref="mta"
          v-model="mdOg"
          :rows="10"
          class="markdown-ta"
        />
      </div>
      <div v-else>
        <article v-html="$md.render(mdOg)" class="prose -sm:prose-sm py-10" />
      </div>
      <div class="py-3 w-full flex items-center gap-x-3 justify-end">
        <a-button type="dashed" @click="$emit('closeEdit', false)">
          <div class="flex items-center">취소</div>
        </a-button>
        <a-button
          type="primary"
          ghost
          :loading="writeLoading"
          @click="$emit('update', mdOg)"
        >
          <div class="flex items-center">수정하기</div>
        </a-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['md', 'edit', 'reply'],
  data() {
    return {
      mdOg: this.md,
      writeLoading: false,
      commentTab: 1,
    }
  },
  methods: {
    write() {},
    uploadImage() {
      const frm = new FormData()
      var imageFile = this.$refs.cmImage.files[0]
      frm.append('image', imageFile)
      let loading = this.$message.loading('사진을 업로드중...', 0)
      this.$axios
        .post('/api/upload/image/', frm)
        .then((r) => {
          console.log(r.data)
          this.$message.destroy()
          this.$message.success('업로드 완료.')
          this.insertImage(r.data.image)
          this.$refs.cmImage.value = null
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
      let ta = this.$refs.mta
      let cp = ta.$el.selectionStart
      let og = this.mdOg
      const imageMd = `![](${img})`
      let inserted = og.substring(0, cp) + imageMd + og.substring(cp, og.length)
      this.mdOg = inserted
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
  @apply border bg-white p-3 rounded-md
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
