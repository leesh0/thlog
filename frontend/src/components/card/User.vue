<template>
  <div
    class="p-3 hover:bg-gray-50 border-gray-100"
    :class="card ? '-sm:border rounded-md' : 'border-b'"
  >
    <div class="flex justify-between items-center w-full">
      <div class="flex items-center gap-x-1">
        <div class="w-10 h-10 rounded-full">
          <img
            src="https://avatars.githubusercontent.com/u/57043683?v=4"
            class="rounded-full"
          />
        </div>
        <div>
          <div class="font-semibold">이진혁</div>
          <div class="text-xs text-gray-400">@leesh0</div>
        </div>
      </div>
      <div>
        <a-button type="primary" ghost>
          <div class="flex items-center"><a-icon type="plus" />팔로우</div>
        </a-button>
      </div>
    </div>
    <div class="py-2 px-2 text-sm">
      도쿄에서 유학중인 Python, Golang유저입니다. 백엔드 지망중!
    </div>
    <div class="pt-2 px-2 flex items-center text-gray-400 text-xs">
      <a-icon type="user" />123 팔로워
    </div>
  </div>
</template>

<script>
export default {
  props: ['card'],
}
</script>
