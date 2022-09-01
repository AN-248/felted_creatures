import { createRouter, createWebHashHistory } from 'vue-router'

const routes= [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  base: process.env.BASE_URL,
  routes: routes,
})

export default router