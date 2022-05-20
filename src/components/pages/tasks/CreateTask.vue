<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <h2>Create Task</h2>
          <div class="form-group">
            <input
              type="text"
              class="form-control mb-2"
              placeholder="Task Name"
              v-model="taskName"
            />
          </div>
          <div class="form-group">
            <h4>Beskrivelse</h4>
            <textarea v-model="taskDescription"></textarea>
          </div>
          <div>
            <h4>Kunde</h4>
            <select v-model="taskClient">
              <option disabled value="">Valg kunde</option>
              <option>Demo</option>
            </select>
          </div>
          <div class="form-group">
            <h4>Intern Beskrivelse</h4>
            <textarea v-model="internTaskDescription"></textarea>
          </div>
          <div>
            <h4>Deadline</h4>
            <input type="text" v-model="taskDeadline" />
          </div>
          <div>
            <div>
              <p>To-do</p>
              <input type="text" v-model="todo" placeholder="Tilføj opgaven" />
              <button @click="updateTodo">+</button>
            </div>
            <div>
              <ul>
                <li v-for="(todo, index) in todoList" :key="index">
                  <p>{{ todo.name }}</p>
                  <input
                    type="number"
                    v-model="todoList[index].hours"
                    :placeholder="0"
                  />
                  <input
                    type="number"
                    v-model="todoList[index].price"
                    :placeholder="0"
                  />
                  <button @click="removeTodo(index)">Remove todo</button>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div>
              <p>Tildelt adgang</p>
              <select v-model="user">
                <option value="" disabled>Tilføj bruger</option>
                <option>John Larsen</option>
                <option>Sofie Jørgensen</option>
                <option>Mads Hansen</option>
              </select>
              <button @click="addUser">+</button>
            </div>
            <div>
              <p>Tilføjet</p>
              <ul>
                <li v-for="(user, index) in addedUsers" :key="index">
                  <p>{{ user }}</p>
                  <button @click="removeUser(index)">-</button>
                </li>
              </ul>
            </div>
          </div>
          <button @click="createTask" class="btn btn-primary">
            Opret case
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      taskName: "",
      taskDescription: "",
      internTaskDescription: "",
      taskClient: "",
      taskDeadline: "",
      todo: "",
      todoList: [],
      user: "",
      addedUsers: [],
    };
  },
  computed: {
    ...mapGetters(["tasksLength"]),
    createInternalId() {
      return this.tasksLength + 1;
    },
    getTodayDate() {
      const today = new Date();
      return `${today.getDate()}.${("0" + today.getMonth()).slice(
        -2
      )}.${today.getFullYear()}`;
    },
  },
  methods: {
    async createTask() {
      try {
        await this.$store.dispatch("createTask", {
          title: this.taskName,
          description: this.taskDescription,
          internDescription: this.internTaskDescription,
          client: this.taskClient,
          deadline: this.taskDeadline,
          todoList: this.todoList,
          addedUsers: this.addedUsers,
          status: "Active",
          internalId: this.createInternalId,
          needsAttention: false,
          created: this.getTodayDate,
        });
        await this.$store.dispatch("fetchTasks");
        this.taskName = "";
        this.taskDescription = "";
        this.internTaskDescription = "";
        this.taskClient = "";
        this.taskDeadline = "";
        this.todoList = [];
        this.addedUsers = [];
      } catch (error) {
        alert("Something went wrong, try again later");
        console.log(error.code);
      }
    },
    updateTodo() {
      const todoData = {
        name: this.todo,
        hours: 0,
        price: 0,
      };
      this.todoList.push(todoData);
      this.todo = "";
    },
    removeTodo(index) {
      this.todoList.splice(index, 1);
    },
    addUser() {
      this.addedUsers.push(this.user);
      this.user = "";
    },
    removeUser(index) {
      this.addedUsers.splice(index, 1);
    },
  },
};
</script>

<style scoped></style>
