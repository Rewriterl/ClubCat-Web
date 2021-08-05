import { createRouter, createWebHistory } from 'vue-router'

import Party from '../components/Party/index.vue'
import User from '../components/User/index.vue'

const routes = [
  {
    path: '/',
    name: 'party',
    component: Party
  },
  {
    path: '/userinfo',
    name: 'user',
    component: User
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
