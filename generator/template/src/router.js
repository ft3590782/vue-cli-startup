import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: index,
      meta: {
        index: 1
      }
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: () =>
        import(/* webpackChunkName: "detail" */ './views/detail.vue'),
      meta: {
        index: 2
      }
    }
  ]
})
