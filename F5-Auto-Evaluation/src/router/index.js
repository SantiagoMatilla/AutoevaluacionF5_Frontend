import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue"
import Dashboard from "../views/Dashboard.vue";
import Stacks from "../views/Stacks.vue"
import Evaluation from "../views/Evaluation.vue";
import Teacher from "../views/Teacher.vue";
import AssignCoders from "../views/AssignCoders.vue"
import AssignContents from "../views/AssignContents.vue"
import AssignSkills from "../views/AssignSkills.vue"
import AssignStacks from "../views/AssignStacks.vue"

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

    {
      path: "/teacher",
      name: "Teacher",
      component: Teacher,
    },

    {
      path: "/assign-coders",
      name: "AssignCoders",
      component: AssignCoders,
    },

    {
      path: "/assign-contents",
      name: "AssignContents",
      component: AssignContents,
    },

    {
      path: "/assign-skills",
      name: "AssignSkills",
      component: AssignSkills,
    },

    {
      path: "/assign-stacks",
      name: "AssignStacks",
      component: AssignStacks,
    },
  ],
});

export default router;
