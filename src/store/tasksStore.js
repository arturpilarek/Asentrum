import tasksCollection from "../firebase";
import { addDoc, doc, getDocs, getDoc } from "firebase/firestore";

export default {
  state: {
    tasks: [],
    task: null,
  },
  mutations: {
    setTasks(state, payload) {
      state.tasks = payload;
      console.log("tasks state changed:", payload);
    },
    setTask(state, payload) {
      state.task = payload;
      console.log("task state changed:", payload);
    },
    // setTodoStatus(state, payload) {
    //   state.task.todoList[payload.index].status = payload;
    //   console.log("task state changed:", payload);
    // },
  },
  getters: {
    tasks: (state) => state.tasks,
    task: (state) => state.task,
    // singleTask: (state, id) => state.tasks.filter((task) => task.id === id),
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
        created,
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
        created,
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
    async fetchTask(context, payload) {
      const taskRef = doc(tasksCollection, payload.id);
      const dataSnapshot = await getDoc(taskRef).then((res) => res.data());
      context.commit("setTask", dataSnapshot);
    },
    // async updateTodoStatus(context, payload) {
    //   const taskRef = doc(tasksCollection, payload.id);
    //   const todoLocation = taskRef.todoList[payload.index];
    //   const snapshotUpdate = await updateDoc(todoLocation, {
    //     status: payload.status,
    //   });
    //   context.commit("setTodoStatus", snapshotUpdate);
    // },
  },
  modules: {},
};
