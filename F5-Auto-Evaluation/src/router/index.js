import { createRouter, createWebHistory } from 'vue-router'
import Bootcamp from '../views/Bootcamp.vue'
import Evaluation from '../views/Evaluation.vue';



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

   {
    path: '/',
    name: 'bootcamp',
    component: Bootcamp
   },
   {
    path: '/evaluation',
    name: 'Evaluation',
    component: Evaluation
   }


  ]
})

export default router
