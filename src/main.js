import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

//import vuex store
import vuexPlayground from "./store/vuexPlayground";
import userStore from "./store/index";
import firebase from "./firebase";

createApp(App)
  .use(router)
  .use(vuexPlayground)
  .use(userStore)
  .use(firebase)
  .mount("#app");
