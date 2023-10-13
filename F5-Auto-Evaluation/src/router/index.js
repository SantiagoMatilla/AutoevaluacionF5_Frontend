import { createRouter, createWebHistory } from 'vue-router'
 import Stacks from '../views/Stacks.vue'
import Bootcamp from '../views/Bootcamp.vue'
import Evaluation from '../views/Evaluation.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
     name: 'bootcamp',
      component: Bootcamp
     },


      {
        path: '/stacks',
       name: 'Stack',
        component: Stacks
       },

       {
        path: '/evaluation',
       name: 'Evaluation',
        component: Evaluation
       },



  ]
})

export default router
