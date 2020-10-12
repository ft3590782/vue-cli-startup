<template>
  <div id="app">
    <div class="flex-parent center">
      <router-link to="/">index</router-link>
      |
      <router-link to="detail/1">detail</router-link>
    </div>

    <transition :name="transitionName">
      <router-view />
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      transitionName: "slide-left",
      bgColor: "#fff",
    };
  },
  watch: {
    $route(to, from) {
      //通过router.js中meta.index定义页面跳转动画层级,供载入退出动画使用
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if (to.meta.index > from.meta.index) {
        this.transitionName = "slide-left";
      } else {
        this.transitionName = "slide-right";
      }
      this.bgColor = to.meta.bgColor || "#fff";
    },
  },
};
</script>
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
