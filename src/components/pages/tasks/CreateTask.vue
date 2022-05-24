<template>
  <section class="create-task">
    <div class="create-task__input-container">
      <label for="task-name">Opgave navn</label>
      <input
        name="task-name"
        type="text"
        placeholder="Opgave navn"
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
        <option disabled value="">Vælg kunde</option>
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
    <div class="todo">
      <div class="todo__wrapper create-task__input-container">
        <label>To-do</label>
        <div class="todo__input">
          <input type="text" v-model="todo" placeholder="Tilføj opgaven" />
          <AddIcon class="add" @click="updateTodo" />
        </div>
      </div>
      <ul class="todo-added">
        <li class="todo-added__header" v-if="todoList.length > 0">
          <p>Titlen</p>
          <p>Antal timer</p>
          <p>Pris</p>
          <p></p>
        </li>
        <li
          class="todo-added__task"
          v-for="(todo, index) in todoList"
          :key="index"
        >
          <p class="todo-added__task__title">{{ todo.name }}</p>
          <input
            class="number-input"
            type="number"
            v-model="todoList[index].hours"
            :placeholder="0"
          />
          <input
            class="number-input"
            type="number"
            v-model="todoList[index].price"
            :placeholder="0"
          />
          <RemoveIcon class="remove-icon" @click="removeTodo(index)" />
        </li>
      </ul>
    </div>
    <div class="give-access">
      <div class="create-task__input-container">
        <label>Tildelt adgang</label>
        <div class="give-access__input">
          <select v-model="user">
            <option value="" disabled>Tilføj bruger</option>
            <option>John Larsen</option>
            <option>Nadia Grabein</option>
            <option>Nicoline Larsen</option>
            <option>Maria Pilarek</option>
            <option>Sofie Jørgensen</option>
            <option>Mads Hansen</option>
            <option>Artur Pilarek</option>
          </select>
          <AddIcon class="add" @click="addUser" />
        </div>
      </div>
      <div class="give-access__created">
        <p class="give-access__created__title">Tilføjet</p>
        <ul class="users-created">
          <li
            class="users-created__user"
            v-for="(user, index) in addedUsers"
            :key="index"
          >
            <p>{{ user }}</p>
            <RemoveIcon class="create-btn" @click="removeUser(index)" />
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
import AddIcon from "../../../assets/icons/AddIcon";

export default {
  components: { BaseButton, RemoveIcon, AddIcon },
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
        alert("Noget gik galt, prøv igen senere");
        console.log(error.code);
      }
    },
    updateTodo() {
      const todoData = {
        name: this.todo,
        hours: 0,
        price: 0,
        status: "toDo",
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
  @include flex-column;
  gap: 18px;
  padding-top: 24px;
  align-items: center;
  &__input-container {
    width: 78%;
    @media screen and (max-width: 1100px) {
      width: 100%;
    }
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

  .todo {
    margin-left: 12px;
    width: 80%;
    @media screen and (max-width: 1100px) {
      width: 100%;
    }
    &__wrapper {
      width: 100%;
    }
    &__input {
      width: 100%;
      display: flex;
      align-items: center;
      input {
        height: 44px;
        display: block;
        min-width: calc(100% - 80px);
      }
      .add {
        margin-left: 6px;
        cursor: pointer;
      }
    }
    .todo-added {
      padding-top: 24px;
      @include flex-column;
      gap: 6px;
      &__header,
      &__task {
        display: grid;
        gap: 6px;
        grid-template-columns: 1fr 90px 80px 20px;
        align-items: center;
      }
      &__header {
        justify-items: center;
        padding-bottom: 6px;
        font-weight: 600;
      }
      &__task__title {
        justify-self: center;
      }
      .number-input {
        padding: 3px 6px;
        border: none;
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.16);
        border-radius: 4px;
      }
      .remove-icon {
        svg {
          height: 100%;
          width: auto;
        }
        cursor: pointer;
      }
    }
  }
  .give-access {
    width: 100%;
    @include flex-column;
    align-items: center;
    &__input {
      display: flex;
      align-items: center;
      select {
        width: 40%;
      }
    }
    &__created {
      &__title {
        font-weight: 600;
      }
      width: 78%;
      @media screen and (max-width: 1100px) {
        width: 100%;
      }
      margin-left: 13px;
      padding-top: 6px;
      .users-created {
        margin-top: 6px;
        width: 50%;
        border: none;
        border-radius: 4px;
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.16);
        padding: 12px;
        @include flex-column;
        gap: 6px;
        &__user {
          display: grid;
          grid-template-columns: 130px 20px;
        }
      }
    }
  }
  .create-btn {
    align-self: flex-start;
  }
}
</style>
