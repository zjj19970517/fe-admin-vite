import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import AppLayout from '../components/AppLayout.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/admin/home'
  },
  {
    path: '/admin',
    component: AppLayout,
    children: [
      {
        path: 'home', // 默认子路由
        name: 'home',
        component: () => import('../views/Home/HomePage.vue'),
        meta: { title: '首页' }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
