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
    path: '/felts',
    name: 'felts',
    component: () => import('../views/Felts.vue')
  },
  {
    path: '/needles',
    name: 'needles',
    component: () => import('../views/Needles.vue')
  },
  {
    path: '/accessories',
    name: 'accessories',
    component: () => import('../views/Accessories.vue')
  },
  {
    path: '/name',
    name: 'name',
    component: () => import('../views/Name.vue')
  },
  {
    path: '/creatures',
    name: 'creatures',
    component: () => import('../views/Creatures.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  base: process.env.BASE_URL,
  routes: routes,
})

export default router