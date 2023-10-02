import { createRouter, createWebHistory } from 'vue-router'
import StackCard from '../views/StackCard.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
       path: '/stacks',
        name: 'Stack',
      component: StackCard
    },


  ]
})

export default router
