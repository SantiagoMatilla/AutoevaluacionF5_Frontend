import { createRouter, createWebHistory } from 'vue-router'
import Bootcamp from '../views/Bootcamp.vue';
import Teacher from '../views/Teacher.vue';
// import TeacherCabinet from '../components/TeacherCabinet.vue';
import AssignCoders from '../components/TeacherFolder/AssignCoders.vue';
import AssignStacks from '../components/TeacherFolder/AssignStacks.vue';
import AssignSkills from '../components/TeacherFolder/AssignSkills.vue';
import AssignContents from '../components/TeacherFolder/AssignContents.vue';




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
    routes: [

   {
    path: '/',
    name: 'Bootcamp',
    component: Bootcamp
   },
   
  //  {
  //   path: '/dashboard',
  //   name: 'Dashboard',
  //   component: Dashboard
  //  },
  // {
  //   path: '/evaluation',
  //   name: 'Evaluation',
  //   component: Evaluation
  // },
   {
    path: '/teacher-view',
    name: 'Teacher',
    component: Teacher
  },
  // {
  //   path: '/teacher-cabinet',
  //   name: 'TeacherCabinet',
  //   component: TeacherCabinet
  // },
  {
    path: '/assign-coders',
    name: 'AssignCoders',
    component: AssignCoders
  },
  {
    path: '/assign-stacks',
    name: 'AssignStacks',
    component: AssignStacks
  },
  {
    path: '/assign-skills',
    name: 'AssignSkills',
    component: AssignSkills
  },
  {
    path: '/assign-contents',
    name: 'AssignContents',
    component: AssignContents
  },
  
  ]
})

export default router
