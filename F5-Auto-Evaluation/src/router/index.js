import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Evaluation from "../views/Evaluation.vue";
import Teacher from "../views/Teacher.vue";
import Login from "../views/Login.vue"
import Stacks from "../views/Stacks.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {

      path: '/',
      name: 'Login',
      component: Login
    },

    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard,
    },

    {
      path: '/stacks',
      name: 'Stack',
      component: Stacks
    },



    {
      path: "/evaluation/:id",
      name: "Evaluation",
      component: Evaluation,
    },


    {
      path: "/teacher-view",
      name: "Teacher",
      component: Teacher,
    },
  ],
});

export default router;
