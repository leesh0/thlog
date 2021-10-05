<template>
  <div class="max-w-screen-sm mx-auto">
    <modalFolder v-model="folderCreate" @addFolder="newFolder" />
    <a-result title="신규 쓰레드">
      <div slot="subTitle" class="text-base text-gray-400">
        간단한 내용이나 그때그때 정보를 추가하고싶을때 가볍게 작성해보세요.<br />
        다른사람들과 의견을 교환할 수 있습니다.
      </div>
      <div slot="icon" class="text-7xl text-cyan-500">
        <a-icon type="thunderbolt" theme="filled" />
      </div>
      <template #extra>
        <a-button
          key="console"
          size="large"
          type="primary"
          class="w-40"
          @click="create"
        >
          쓰레드 생성하기
        </a-button>
      </template>

      <div>
        <a-input v-model="threadName" placeholder="쓰레드 이름" size="large" />
        <div class="mt-5 flex items-center gap-x-2">
          <label class="flex-shrink-0 mr-2 flex items-center"
            ><a-icon type="folder" class="mr-2" />폴더</label
          >
          <a-select v-model="folderId" default-value="선택안함" class="w-full">
            <a-select-option
              v-for="folder in folders"
              :key="folder.id"
              :value="folder.id"
            >
              {{ folder.name }}
            </a-select-option>
          </a-select>
          <a-button @click="folderCreate = true">폴더추가</a-button>
        </div>
        <div class="mt-5 flex items-center gap-x-2">
          <a-switch v-model="isPublic" id="lock" default-checked />
          <label>본인이외의 글쓰기를 허용</label>
        </div>
      </div>
    </a-result>
  </div>
</template>
<script>
export default {
  async asyncData({ $axios, $auth }) {
    let { data } = await $axios.get(`/api/folder/${$auth.user.username}/`)
    return {
      folders: data,
    }
  },
  data() {
    return {
      folderCreate: false,
      folderId: null,
      threadName: null,
      isPublic: false,
    }
  },
  methods: {
    newFolder(folder) {
      this.folderId = folder.id
      this.folders.push(folder)
    },
    async create() {
      this.$axios
        .post(`/api/thread/${this.$auth.user.username}/`, {
          title: this.threadName,
          public: this.isPublic,
          folder: this.folderId,
        })
        .then((r) => {
          let data = r.data
          this.$router.push({
            name: 'user-thread-read',
            params: {
              user: data.owner.username,
              read: data.id,
            },
          })
        })
        .catch((e) => {
          this.$message.error(
            '예기치못한 오류로 인하여 쓰레드를 생성하지 못했습니다. 다시 시도해주세요.'
          )
        })
    },
  },
}
</script>
<style>
.ant-result-content {
  @apply -sm:(px-0 bg-transparent);
}
</style>
<style scoped>
.desc p {
  margin-bottom: 1em;
}
</style>
