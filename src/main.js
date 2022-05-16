import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuex from "vuex";

//import vuex store

createApp(App).use(router).use(vuex).use(store).mount("#app");
