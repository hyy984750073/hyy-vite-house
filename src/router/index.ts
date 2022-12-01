import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import user from './modules/user'
import demo from './modules/demo'

// 2. 配置路由
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login',
    component: () => import('../components/HelloWorld.vue'),
    children: []
  },
  {
    path: '/home',
    component: () => import('../views/home/Home.vue')
  },
  user,
  demo
]

// 1.返回一个 router 实列，为函数，里面有配置项（对象） history
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
