import { createRouter, createWebHashHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Administration from "../views/Administration";
import Login from "../views/Login";
import Tasks from "../components/Tasks";
// import { getAuth, onAuthStateChanged } from "firebase/auth";

const routes = [
  {
    path: "/dashboard/",
    name: "Dashboard",
    component: Dashboard,
    //add this meta tag to create guarding class
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/administration/",
    name: "Administration",
    component: Administration,
  },
  {
    path: "/tasks/",
    name: "Tasks",
    component: Tasks,
  },
  {
    path: "/",
    name: "Login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
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
// router.beforeEach((to, from, next) => {
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     if (getAuth().currentUser) {
//       next();
//     } else {
//       alert("you dont have access");
//       next("/");
//     }
//   } else {
//     next();
//   }
// });

export default router;
