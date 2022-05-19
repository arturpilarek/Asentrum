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
    tasksLength: (state) => state.tasks.length,
    tasksStatus: (state) => {
      return {
        activeCases: state.tasks.filter(
          (task) => task.status === "Active" || "Waiting"
        ).length,
        needsAttention: state.tasks.filter((task) => task.needsAttention)
          .length,
        solvedCases: state.tasks.filter((task) => task.status === "Solved")
          .length,
      };
    },
  },
  actions: {
    async createTask(
      context,
      {
        title,
        description,
        internDescription,
        client,
        deadline,
        todoList,
        addedUsers,
        status,
        internalId,
        needsAttention,
      }
    ) {
      await addDoc(tasksCollection, {
        title,
        description,
        internDescription,
        client,
        deadline,
        todoList,
        addedUsers,
        status,
        internalId,
        needsAttention,
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
