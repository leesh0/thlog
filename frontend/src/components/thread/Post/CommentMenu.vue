<template>
  <a-dropdown :trigger="['click']">
    <div class="comment-menu">
      <a-icon type="more" />
    </div>
    <a-menu slot="overlay">
      <a-menu-item class="flex-center" @click="$emit('action', { edit: true })">
        <a-icon type="edit" />
        편집
      </a-menu-item>
      <a-menu-item class="flex-center">
        <a-icon type="eye-invisible" />숨기기
      </a-menu-item>
      <a-menu-item>
        <div class="flex-center text-red-500">
          <a-icon type="delete" class="mr-2" />삭제
        </div>
      </a-menu-item>
    </a-menu>
  </a-dropdown>
</template>

<style>
.flex-center {
  @apply flex items-center;
}
.comment-menu {
  @apply text-lg
        hover:text-cyan-500
        cursor-pointer
        text-gray-500
        rounded-full
        select-none
        flex
        items-center
        px-1;
}
</style>
