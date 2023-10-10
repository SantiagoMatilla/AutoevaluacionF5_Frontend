import { createRouter, createWebHistory } from 'vue-router'
import Bootcamp from '../views/Bootcamp.vue'
import Dashboard from '../views/Dashboard.vue'
import Evaluation from '../views/Evaluation.vue';
// import Teacher from '../views/Teacher.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [


   {
    path: '/evaluation/:id',
    name: 'Evaluation',
    component: Evaluation
   },
  //  {
  //   path: '/teacher-view',
  //   name: 'Teacher',
  //   component: Teacher
  //  },

    {
      path: '/',
      name: 'Bootcamp',
      component: Bootcamp
    },

    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    }

   

  ]
})

export default router
