<template>
  <div id="app">
    <div class="flex-parent center">
      <router-link to="/">index</router-link>
      |
      <router-link to="detail/1">detail</router-link>
    </div>

    <router-view />
  </div>
</template>
<script></script>
<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
}
</style>
