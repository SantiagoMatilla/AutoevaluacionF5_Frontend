import { createRouter, createWebHistory } from 'vue-router'
import Bootcamp from '../views/Bootcamp.vue'
import Evaluation from '../views/Evaluation.vue';
// import Teacher from '../views/Teacher.vue';
// import Dashboard from '../views/Dashboard.vue';



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

   {
    path: '/',
    name: 'bootcamp',
    component: Bootcamp
   },
   {
    path: '/evaluation:id',
    name: 'evaluation',
    component: Evaluation
   },
  //  {
  //   path: '/teacher-view',
  //   name: 'Teacher',
  //   component: Teacher
  //  },
  // {
  //   path: '/dashboard',
  //   name: 'Dashboard',
  //   component: Dashboard
  //  },


  ]
})

export default router
