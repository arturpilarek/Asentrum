import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Administration from "../views/Administration";
import Login from "../views/Login";
import Tasks from "../views/Tasks";
import Task from "../views/Task";
import Navigation from "../components/layout/Navigation";
import TopBar from "../components/layout/TopBar";
import Settings from "../views/Settings";
import { getAuth } from "firebase/auth";

const routes = [
  {
    path: "/dashboard/",
    name: "Dashboard",
    components: {
      navigation: Navigation,
      topBar: TopBar,
      default: Dashboard,
    },
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/administration/",
    name: "Administration",
    components: {
      navigation: Navigation,
      topBar: TopBar,
      default: Administration,
    },
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/tasks/",
    name: "Tasks",
    components: {
      navigation: Navigation,
      topBar: TopBar,
      default: Tasks,
    },
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/task/:taskId",
    name: "Task",
    components: {
      navigation: Navigation,
      topBar: TopBar,
      default: Task,
    },
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/settings/",
    name: "Settings",
    components: {
      navigation: Navigation,
      topBar: TopBar,
      default: Settings,
    },
    meta: {
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

//Function to redirect to login screen if user is not logged in
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (getAuth().currentUser) {
      next();
    } else {
      alert("You don't have an access");
      next("/");
    }
  } else {
    next();
  }
});

export default router;
