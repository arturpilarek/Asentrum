<template>
  <section class="create-task">
    <div class="create-task__input-container">
      <label for="task-name">Task navn</label>
      <input
        name="task-name"
        type="text"
        placeholder="Task Navn"
        v-model="taskName"
      />
    </div>
    <div class="create-task__input-container">
      <label>Beskrivelse</label>
      <textarea class="text-area" v-model="taskDescription"></textarea>
    </div>
    <div class="create-task__input-container">
      <label>Kunde</label>
      <select v-model="taskClient">
        <option disabled value="">Valg kunde</option>
        <option>Demo</option>
      </select>
    </div>
    <div class="create-task__input-container">
      <label>Intern Beskrivelse</label>
      <textarea v-model="internTaskDescription"></textarea>
    </div>
    <div class="create-task__input-container">
      <label>Deadline</label>
      <input type="text" v-model="taskDeadline" />
    </div>
    <div class="todo-wrapper">
      <div class="create-task__input-container">
        <label>To-do</label>
        <input type="text" v-model="todo" placeholder="Tilføj opgaven" />
        <button @click="updateTodo">+</button>
      </div>
      <div>
        <ul>
          <li>
            <p>placeholder</p>
            <p>Antal timer</p>
            <p>Pris</p>
          </li>
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
            <RemoveIcon class="remove-icon" @click="removeTodo(index)" />
          </li>
        </ul>
      </div>
    </div>
    <div class="give-access-wrapper">
      <div class="create-task__input-container">
        <label>Tildelt adgang</label>
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
    <BaseButton text="Opret" @click="createTask" />
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import BaseButton from "../../ui/BaseButton";
import RemoveIcon from "../../../assets/icons/RemoveIcon";

export default {
  components: { BaseButton, RemoveIcon },
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

<style scoped lang="scss">
.create-task {
  &__input-container {
    width: 50%;
    @include flex-column;
    label {
      padding-bottom: 3px;
      font-weight: 600;
    }
    input,
    select,
    textarea {
      padding: 12px 12px;
      border: none;
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.16);
      border-radius: 4px;
    }
  }
  .remove-icon {
    cursor: pointer;
  }
}
</style>
