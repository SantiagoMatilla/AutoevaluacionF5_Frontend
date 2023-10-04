import { createRouter, createWebHistory } from 'vue-router'
import Bootcamp from '../views/Bootcamp.vue';
import Teacher from '../views/Teacher.vue';
import AssignPage from '../components/AssignPage.vue';



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

   {
    path: '/',
    name: 'Bootcamp',
    component: Bootcamp
   },
   {
    path: '/teacher-view',
    name: 'Teacher',
    component: Teacher
  },
  {
    path: '/assign-page',
    name: 'AssignPage',
    component: AssignPage
  },
  ]
})

export default router
