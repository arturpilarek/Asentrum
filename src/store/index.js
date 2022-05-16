import { createStore } from "vuex";
import userStore from "./userStore";
import tasksStore from "./tasksStore";

export default createStore({
  modules: {
    userStore,
    tasksStore,
  },
});
