<template>
  <div class="px-5 -sm:px-0 mt-0">
    <a-back-top />
    <a-affix :offset-top="0" @change="tabsAffix">
      <a-tabs
        :activeKey="$route.name"
        @change="callback"
        hideAdd
        :class="tabClass"
        :tabBarStyle="{ Color: '#000000' }"
        :tabBarGutter="5"
      >
        <template slot="tabBarExtraContent">
          <a-dropdown>
            <a-icon
              type="more"
              class="
                p-2
                rounded-full
                cursor-pointer
                hover:(bg-gray-50
                text-cyan-500) text-lg
              "
            />
            <a-menu slot="overlay" class="min-w-30">
              <a-menu-item key="0">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://www.alipay.com/"
                  >공지사항</a
                >
              </a-menu-item>
              <a-menu-item key="1">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://www.taobao.com/"
                  >이용규칙</a
                >
              </a-menu-item>
              <a-menu-divider />
              <a-menu-item key="3"> 사용방법 </a-menu-item>
            </a-menu>
          </a-dropdown>
        </template>
        <a-tab-pane key="index" force-render>
          <template slot="tab">
            <div class="t"><a-icon type="bar-chart" />트렌딩</div>
          </template>
        </a-tab-pane>
        <a-tab-pane key="index-latest" force-render>
          <template slot="tab">
            <div class="t"><a-icon type="sort-descending" />최신</div>
          </template>
        </a-tab-pane>
      </a-tabs>
    </a-affix>

    <nuxt-child class="mt-5 max-w-screen-xl mx-auto" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabClass: null,
    }
  },
  methods: {
    callback(key) {
      this.$router.push({ name: key })
    },
    tabsAffix(affixed) {
      if (affixed) {
        this.tabClass = 'index-affixed'
      } else {
        this.tabClass = null
      }
    },
  },
}
</script>

<style>
.ant-tabs-bar {
  @apply border-b-0 mb-0;
}

.index-affixed {
  @apply bg-white;
}
.index-affixed > .ant-tabs-bar {
  @apply px-0 mb-0 border-b;
}
</style>

<style scoped>
.t {
  @apply flex items-center;
  font-size: 0.9rem;
}
</style>
