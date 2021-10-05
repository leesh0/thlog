<template>
  <a-popover title="Notifications" trigger="click" placement="bottomRight">
    <template slot="content">
      <layoutNavbarNotificationsCard />
    </template>
    <a-badge dot>
      <div class="cursor-pointer p-1">
        <a-icon type="notification" />
      </div>
    </a-badge>
  </a-popover>
</template>
