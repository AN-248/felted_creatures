import { createRouter, createWebHashHistory } from 'vue-router'

const routes= [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/new',
    name: 'new',
    component: () => import('../views/New.vue')
  },
  {
    path: '/felt',
    name: 'felt',
    component: () => import('../views/Felt.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  base: process.env.BASE_URL,
  routes: routes,
})

export default router