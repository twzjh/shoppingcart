import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      // path: '/about',
      // name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    },
    {
      path: '/ShoppingCart',
      name: 'ShoppingCart',
      component: () => import('@/views/ShoppingCart.vue')
    },
    {
      path: '/ConfirmPurchase',
      name: 'ConfirmPurchase',
      component: () => import('@/views/ConfirmPurchase.vue')
    },
    {
      path: '/CompleteShopping',
      name: 'CompleteShopping',
      component: () => import('@/views/CompleteShopping.vue')
    },
  ]
})

export default router
