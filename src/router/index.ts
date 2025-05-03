import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShortView from '../views/ShortView.vue'
import CheckView from '@/views/CheckView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/check',
      name: 'check',
      component: CheckView,
    },
    {
      path: '/sh/:slug',
      name: 'shorten',
      component: ShortView,
    },
  ],
})

export default router
