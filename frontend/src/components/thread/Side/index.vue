<template>
  <div>
    <div
      class="
        flex
        items-center
        text-gray-500
        p-3
        mb-5
        justify-evenly
        rounded-full
      "
    >
      <div class="flex items-center cursor-pointer" @click="likeThread">
        <div class="flex items-center mr-1 text-cyan-500 text-2xl">
          <a-icon type="like" :theme="thread.liked ? 'filled' : 'outlined'" />
        </div>
        {{ thread.likes }}
      </div>
      <a-divider type="vertical" />
      <div class="flex items-center">
        <div class="flex items-center mr-1 text-gray-500 text-2xl">
          <a-icon type="share-alt" />
        </div>
        Share
      </div>
    </div>
    <div class="bg-gray-50 bg-opacity-60 border border-gray-100 rounded-md p-5">
      <div v-if="!thread.is_owner">
        <div class="flex items-center justify-between">
          <div class="inline-flex items-center">
            <Avatar class="mr-2" :src="thread.owner.avatar" />
            <div class="text-base font-medium">{{ thread.owner.nickname }}</div>
          </div>
          <a-button type="dashed"> 팔로우 </a-button>
        </div>
        <div class="py-3">
          {{ thread.owner.introduce }}
        </div>
        <div class="flex items-center justify-end">
          <div class="flex items-center gap-x-1">
            <div class="flex items-center mr-1 text-lg p-2 rounded-full">
              <a-icon type="github" />
            </div>

            <div class="flex items-center mr-1 text-lg p-2 rounded-full">
              <a-icon type="link" />
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <a-button type="dashed" class="w-full" @click="close">
          <div class="flex items-center justify-center">
            <span
              class="flex items-center mr-2"
              :class="thread.closed ? 'text-green-500' : 'text-red-500'"
            >
              <a-icon type="check-circle" />
            </span>
            {{ thread.closed ? 'Open' : 'Close' }}
          </div>
        </a-button>
        <div class="mt-5 flex items-center gap-x-2">
          <a-switch
            v-model="thread.public"
            id="lock"
            default-checked
            @change="publicSetting"
          />
          <label>본인이외의 글쓰기를 허용</label>
        </div>
      </div>
    </div>
    <div class="mt-5">
      <div class="text-base font-medium flex items-center">
        <a-icon type="team" class="mr-2" />Users
        <span class="text-gray-500 font-normal">{{ users.length }}</span>
      </div>
      <Avatars class="py-2" :users="users" />
    </div>

    <div class="mt-5 -sm:hidden">
      <div class="text-base font-medium flex items-center">
        <a-icon type="link" class="mr-2" />Anchor
      </div>
      <a-anchor class="py-2">
        <a-anchor-link
          :href="`#${anc.id}`"
          :title="anc.title"
          v-for="anc in ancs"
          :key="anc.id"
        />
      </a-anchor>
    </div>
  </div>
</template>

<script>
export default {
  props: ['thread'],
  mounted() {
    console.log(this.thread.comments)
  },
  computed: {
    users() {
      let comments = this.thread.comments
      let users = {}
      for (let com of comments) {
        users[com.user.username] = com.user
      }
      return Object.values(users)
    },
    ancs() {
      let comments = this.thread.comments
      let anchors = []
      const env = {}
      for (let com of comments) {
        let keyl = com.text.trim().split('\n')[0]
        this.$md.render(keyl)
        let title = this.$md.plainText.trim()
        if (title.length == '') {
          title = com.id
        }
        anchors.push({ title, id: com.id })
      }
      return anchors
    },
  },
  methods: {
    publicSetting() {
      const user = this.$route.params.user
      const read = this.$route.params.read
      this.$axios
        .patch(`api/thread/${user}/${read}`, { public: this.thread.public })
        .then((r) => {
          this.thread.public = r.data.public
        })
        .catch((e) => {
          this.thread.public = !this.thread.public
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
    likeThread() {
      if (!this.$auth.loggedIn) {
        this.$nuxt.$emit('login')
        return
      }
      const user = this.$route.params.user
      const read = this.$route.params.read
      this.$axios
        .post(`api/thread/${user}/${read}/like`)
        .then((r) => {
          if (r.status == 201) {
            this.thread.liked = true
          } else {
            this.thread.liked = false
          }
          this.thread.likes = r.data.like
        })
        .catch((e) => {
          // this.thread.closed = !this.thread.closed
        })
    },
  },
}
</script>
