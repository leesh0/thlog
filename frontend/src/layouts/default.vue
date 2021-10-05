<template>
  <div class="h-full w-full font-sans" style="height: 100% !important">
    <div class="relative wrapper flex flex-col h-full">
      <!-- Navbar -->
      <div>
        <layoutNavbar />
      </div>
      <div id="content" class="h-full">
        <nuxt />
      </div>
    </div>
    <footer>
      <layoutFooter />
    </footer>
  </div>
</template>

<script>
export default {}
</script>

<style>
* {
  /* @apply text-black; */
}
div#__nuxt,
#__layout,
#__layout > div,
#app {
  height: 100%;
}
html,
body {
  height: 100% !important;
  width: 100%;
}

#app {
  height: 100%;
}
.container {
  @apply max-w-screen-xl mx-auto;
}

.wrapper {
  height: auto;
  min-height: 100%;
  width: 100%;
  padding-bottom: 104px;
}

footer {
  height: 104px;
  position: relative;
  transform: translateY(-100%);
}
</style>
