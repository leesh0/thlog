<template>
  <div class="h-full">
    <div class="/sm:border-b">
      <div class="px-5 -sm:px-2 sm:pb-5 max-w-screen-xl mx-auto">
        <div class="flex justify-between">
          <div class="flex flex-shrink-0 items-center gap-x-3">
            <span
              class="open-badge"
              :class="thread.closed ? 'close' : 'open'"
              >{{ thread.closed ? 'Close' : 'Open' }}</span
            >
            <div class="flex items-center text-gray-400 text-sm">
              <a-icon type="message" class="mr-1" />{{ thread.comments_count }}
            </div>
            <div class="text-gray-400">・</div>
            <div class="flex items-center text-gray-400 text-sm">
              {{ ago(thread.updated_at) }} 갱신
            </div>
          </div>
          <div class="text-xl flex items-center"><a-icon type="more" /></div>
        </div>
        <div id="header" class="text-2xl sm:text-3xl flex items-center mt-2">
          <!-- TITLE SETUP -->

          <h1 class="font-medium" v-if="!titleEdit">{{ thread.title }}</h1>
          <div
            class="flex font-medium items-end"
            v-if="!titleEdit && thread.is_owner"
          >
            <div
              class="
                flex
                items-center
                text-xl text-gray-400
                select-none
                cursor-pointer
              "
              @click="titleEdit = true"
            >
              <a-icon type="edit" class="ml-2" />
            </div>
          </div>
          <div v-if="titleEdit" class="flex items-center w-full">
            <a-input v-model="threadTitle" size="large" class="w-full" />
            <a-button @click="editTitle" size="large" class="ml-2"
              >변경</a-button
            >
            <a-button
              @click="titleEdit = false"
              size="large"
              class="ml-2"
              type="danger"
              ghost
              >취소</a-button
            >
          </div>
          <!--  -->
        </div>
        <div>
          <!-- Tags Editable -->
          <div class="mt-5 flex items-center flex-wrap">
            <tagsThreadTopics
              v-show="!tagsEdit"
              class="flex items-center pb-4"
              :topicList="thread.topics"
            />
            <div v-if="!tagsEdit">
              <a-button
                type="link"
                @click="tagsEdit = true"
                v-if="thread.is_owner"
              >
                <div class="flex items-center">
                  <a-icon type="plus" class="mr-2" />토픽
                  {{ thread.topics.length < 5 ? '추가하기' : '편집하기' }}
                </div>
              </a-button>
            </div>
            <div v-else class="flex items-center gap-x-3 w-full flex-nowrap">
              <a-select
                v-model="threadTopics"
                :maxTagCount="5"
                mode="tags"
                style="width: 100%"
                placeholder="토픽을 추가해보세요"
                @change="inputTopics"
              >
                <a-select-option v-for="ts in topicSuggests" :key="ts">
                  {{ ts }}
                </a-select-option>
              </a-select>
              <a-button type="link" @click="editTopics"> 저장하기 </a-button>
              <a-button type="link" @click="tagsEdit = false"> 취소 </a-button>
            </div>
          </div>
          <!--  -->
        </div>
      </div>
    </div>
    <div class="sm:hidden">
      <a-divider>
        <div class="text-lg text-cyan-500">
          <a-icon type="thunderbolt" theme="filled" />
        </div>
      </a-divider>
    </div>

    <div class="pb-10 sm:pt-5 sm:()">
      <div class="max-w-screen-xl mx-auto sm:flex">
        <div class="sm:w-[calc(100%-384px)] -sm:px-0">
          <div class="w-full">
            <threadPostList :thread="thread" />
            <div v-if="thread.closed">
              <a-divider>
                <div class="flex items-center text-red-500">
                  <a-icon type="check-circle" class="mr-2" />
                  <span class="text-black">Closed</span>
                </div>
              </a-divider>
            </div>
            <div v-else class="border-t-2 border-gray-100 -sm:hidden" />
            <threadCommentWriter
              v-if="
                (thread.public && $auth.loggedIn) ||
                (!thread.public && thread.is_owner)
              "
              id="comment-writer"
              class="mt-5"
              :thread="thread"
              @close="closeThread"
              @addComment="
                (cm) => {
                  thread.comments.push(cm)
                  thread.comments_count += 1
                }
              "
            />
            <div v-else class="text-center py-20">
              <p class="text-base">로그인 후 코멘트를 작성하실 수 있습니다.</p>
              <a-button type="primary" ghost @click="$nuxt.$emit('login')"
                >로그인</a-button
              >
            </div>
          </div>
        </div>
        <div class="relative sm:w-96">
          <div class="w-full px-2 sm:(sticky top-10 px-5)">
            <threadSide :thread="thread" @close="closeThread" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TimeAgo from 'javascript-time-ago'
import ko from 'javascript-time-ago/locale/ko.json'
import devicons from '~/assets/icons/devicon.json'

if (TimeAgo.getDefaultLocale() != 'ko') {
  TimeAgo.addDefaultLocale(ko)
}
const timeAgo = new TimeAgo('ko-KR')
export default {
  layout: 'empty',
  async asyncData({ $axios, $auth, params }) {
    let { data } = await $axios.get(`api/thread/${params.user}/${params.read}`)
    return {
      thread: data,
      threadTopics: data.topics,
      threadTitle: data.title,
    }
  },
  data() {
    return {
      titleEdit: false,
      tagsEdit: false,
    }
  },
  computed: {
    topicSuggests() {
      let ts = []
      for (let di of devicons) {
        ts.push(di.name)
      }
      return ts
    },
  },
  methods: {
    closeThread(value) {
      this.thread.closed = value
    },
    ago(date) {
      const fromDate = Date.parse(date)
      return timeAgo.format(fromDate)
    },
    inputTopics() {
      if (this.threadTopics.length > 5) {
        this.threadTopics.pop()
        this.$message.error('토픽은 최대 5개까지 추가 가능합니다.')
      }
    },
    editTitle() {
      const user = this.$route.params.user
      const read = this.$route.params.read
      this.$axios
        .patch(`api/thread/${user}/${read}`, { title: this.threadTitle })
        .then((r) => {
          this.thread.title = r.data.title
          this.titleEdit = false
        })
        .catch((e) => {
          this.$message.error('네트워크 오류')
          this.titleEdit = false
        })
    },
    editTopics() {
      const user = this.$route.params.user
      const read = this.$route.params.read
      this.$axios
        .patch(`api/thread/${user}/${read}`, { topics: this.threadTopics })
        .then((r) => {
          this.thread.topics = r.data.topics
          this.tagsEdit = false
        })
        .catch((e) => {
          this.$message.error('네트워크 오류')
          this.tagsEdit = false
        })
    },
  },
}
</script>

<style scoped>
.open-badge {
  @apply border rounded-full px-3 py-0.5 text-sm mr-2;
}
.open-badge.close {
  @apply border-red-500 text-red-500;
}
.open-badge.open {
  @apply border-cyan-500 text-cyan-500;
}
</style>
