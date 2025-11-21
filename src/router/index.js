import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
