import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'
import { authGuard } from './guard';
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(authGuard);

export default router
