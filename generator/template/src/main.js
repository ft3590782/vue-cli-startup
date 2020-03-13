import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import dayjs from 'dayjs'
import FastClick from 'fastclick'

import 'lib-flexible'//移动端自适应方案
import 'normalize.css/normalize.css'//初始化css
import '@/scss/main.scss'


Vue.config.productionTip = false

//挂载dayjs到vue实例
Vue.prototype.$dayjs = dayjs

//fastclick
if ('addEventListener' in document && 'ontouchstart' in window) {
  FastClick.prototype.focus = function (targetElement) {
    targetElement.focus()
  }
  document.addEventListener(
    'DOMContentLoaded',
    function () {
      FastClick.attach(document.body)
    },
    false
  )
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
