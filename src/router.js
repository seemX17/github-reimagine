import Vue from 'vue'
import Router from 'vue-router'
import homeViewComponent from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'homeViewComponent',
      component: homeViewComponent
    },
    {
      path: '/repo:data',
      name: 'repoViewComponent',
      component: () => import('@/views/Repo.vue')
    },
    {
      path: '/content:data',
      name: 'contentViewComponent',
      component: () => import('@/views/Content.vue')
    }
  ]
})