import tasksCollection from "../firebase";
import { addDoc, getDocs } from "firebase/firestore";

export default {
  state: {
    tasks: [],
  },
  mutations: {
    setTasks(state, payload) {
      state.tasks = payload;
      console.log("task state changed:", payload);
    },
  },
  getters: {
    tasks: (state) => state.tasks,
  },
  actions: {
    async createTask(
      context,
      { title, description, internDescription, client, deadline, todoList }
    ) {
      await addDoc(tasksCollection, {
        title,
        description,
        internDescription,
        client,
        deadline,
        todoList,
      });
    },
    async fetchTasks(context) {
      const docs = (await getDocs(tasksCollection)).docs;
      const data = docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      console.log();
      context.commit("setTasks", data);
    },
  },
  modules: {},
};
