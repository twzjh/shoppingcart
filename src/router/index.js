import { createRouter, createWebHistory } from 'vue-router'
import shooping from '@/views/shooping.vue'
import ShoppingCart from '@/views/ShoppingCart.vue'
import ConfirmPurchase from '@/views/ConfirmPurchase.vue'
import CompleteShopping from '@/views/CompleteShopping.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/shooping',
      name: 'shooping',
      component: shooping
    },
    {
      path: '/ShoppingCart',
      name: 'ShoppingCart',
      component: ShoppingCart
      // component: () => import('@/views/ShoppingCart.vue')
    },
    {
      path: '/ConfirmPurchase',
      name: 'ConfirmPurchase',
      component: ConfirmPurchase
      // component: () => import('@/views/ConfirmPurchase.vue')
    },
    {
      path: '/CompleteShopping',
      name: 'CompleteShopping',
      component: CompleteShopping
      // component: () => import('@/views/CompleteShopping.vue')
    },
  ]
})

export default router
