import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/calc'
    },
    {
      path: '/calc',
      component: () => import('@/views/Calc.vue')
    }
    // {
    //   path: '/test',
    //   component: () => import('@/views/test.vue')
    // }
  ]
})

export default router
