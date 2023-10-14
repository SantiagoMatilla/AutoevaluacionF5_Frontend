import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue"
import Dashboard from "../views/Dashboard.vue";
import Stacks from "../views/Stacks.vue"
import Evaluation from "../views/Evaluation.vue";
import Teacher from "../views/Teacher.vue";

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
      name: 'Stacks',
      component: Stacks
    },

    {
      path: "/evaluation/:id",
      name: "Evaluation",
      component: Evaluation,
    },

    {
      path: "/teacher",
      name: "Teacher",
      component: Teacher,
    },
  ],
});

export default router;
