import { createRouter, createWebHistory } from 'vue-router'
import Bootcamp from '../views/Bootcamp.vue'
 import Dashboard from '../views/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

   {
        path: '/',
        name: 'Bootcamp',
     component: Bootcamp
    },

    {
      path: '/dashboard',
       name: 'Dashboard',
   component: Dashboard
   },

  
  ]
})

export default router
