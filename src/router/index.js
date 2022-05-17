import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Administration from "../views/Administration";
import Login from "../views/Login";
import Tasks from "../views/Tasks";
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
    //add this meta tag to create guarding navigation
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

// const getCurrentUser = () => {
//   return new Promise((resolve, reject) => {
//     const changedState = onAuthStateChanged(
//       getAuth(),
//       (user) => {
//         changedState();
//         resolve(user);
//       },
//       reject
//     );
//   });
// };

// router.beforeEach(async (to, from, next) => {
//   const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
//   if (requiresAuth && !(await getCurrentUser())) {
//     next();
//   } else {
//     // alert("you dont have an access");
//     next("/");
//   }
// });

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
