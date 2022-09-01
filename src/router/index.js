import Vue from 'vue'
import Router, { createWebHashHistory } from 'vue-router'
import Home from './views/Home/'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  base: process.env.BASE_URL,
  routes
})