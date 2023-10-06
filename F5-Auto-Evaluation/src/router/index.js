import { createRouter, createWebHistory } from 'vue-router'
import Bootcamp from '../views/Bootcamp.vue'
 import ProgressEvaluation from '../views/ProgressEvaluation.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

   {
        path: '/',
        name: 'Bootcamp',
     component: Bootcamp
    },

    {
      path: '/progress',
       name: 'Progress',
   component: ProgressEvaluation
   },

  
  ]
})

export default router
