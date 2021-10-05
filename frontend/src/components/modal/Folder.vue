<template>
  <a-modal
    v-model="modalOpen"
    title="신규폴더 추가"
    @cancel="close"
    @ok="close"
    :ok-button-props="{ props: { disabled: true } }"
    :cancel-button-props="{ props: { disabled: true } }"
  >
    <a-input v-model="folderName" size="large" placeholder="폴더명" />

    <div slot="footer" class="pb-2 pr-2">
      <a-button key="submit" type="primary" @click="createFolder"
        ><div class="flex items-center">
          <a-icon type="plus" class="mr-2" /> 추가하기
        </div></a-button
      >
    </div>
  </a-modal>
</template>

<script>
export default {
  props: ['value'],
  data() {
    return {
      folderName: null,
    }
  },
  computed: {
    modalOpen: {
      get: function () {
        return this.value
      },
      set: function (nv) {
        this.$emit('input', nv)
      },
    },
  },
  methods: {
    close() {
      this.$emit('input', false)
    },
    createFolder() {
      this.$axios
        .post(`/api/folder/${this.$auth.user.username}/`, {
          name: this.folderName,
        })
        .then((r) => {
          this.$emit('addFolder', r.data)
          this.$emit('input', false)
        })
        .catch((e) => {
          this.$message.error('폴더 생성에 실패하였습니다. 다시 시도해주세요')
        })
    },
  },
}
</script>

<style>
.ant-modal-close-x {
  @apply flex items-center justify-center;
}
.ant-modal-header,
.ant-modal-footer {
  @apply border-b-0 border-t-0;
}
</style>
