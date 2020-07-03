import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
      path:'/',
      component: ()=>import('@/views/home/index.vue'),
    },
    {
      path:'/setting',
      component:()=>import('@/views/setting/index.vue'),
    },
    {
      path:'/archives',
      component:()=>import('@/views/archives/index.vue')
    },
    {
      path:'/canvas',
      component:()=>import('@/views/canvas/index.vue')
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
