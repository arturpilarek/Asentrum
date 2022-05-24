<template>
  <div class="task-info">
    <div class="top-bar">
      <p class="top-bar__id">#{{ task.internalId }}</p>
      <h3 class="top-bar__title">{{ task.title }}</h3>
      <EditIcon class="top-bar__edit-icon" />
    </div>
    <p class="task-info__created">Oprettet den {{ task.created }}</p>
    <p class="task-info__status">
      Status:
      <span :style="{ color: statusColor }">{{ task.status }}</span>
    </p>
    <div class="description">
      <p class="description__title">Beskrivelse</p>
      <div class="description__description">
        <p>{{ task.description }}</p>
      </div>
    </div>
    <div class="description">
      <p class="description__title">Intern note</p>
      <div class="description__description internal">
        <p>{{ task.internDescription }}</p>
      </div>
    </div>
    <div class="todo">
      <p class="todo__title">To-do</p>
      <ul class="todo__wrapper">
        <li class="todo__item todo__header">
          <p class="todo__item__text invisible"></p>
          <p class="todo__item__text">Antal timer</p>
          <p class="todo__item__text">Status</p>
          <p class="todo__item__text">Pris</p>
        </li>
        <li class="todo__item" v-for="(todo, index) in todoList" :key="index">
          <div class="checkbox-wrapper">
            <div
              @click="changeTodoStatus(index, todo.status)"
              class="checkbox__container"
              :class="[
                todo.status === 'toDo'
                  ? 'checkbox__container--unchecked'
                  : todo.status === 'done'
                  ? 'checkbox__container--checked'
                  : 'checkbox__container--doing',
              ]"
            >
              <CheckboxIcon v-if="todo.status === 'done'" />
              <DoingIcon v-else-if="todo.status === 'doing'" />
            </div>
            <p class="todo__item__text">
              {{ todo.name }}
            </p>
          </div>

          <p class="todo__item__text">{{ todo.hours }}</p>
          <p class="todo__item__text">
            {{
              todo.status === "toDo"
                ? "To-do"
                : todo.status === "done"
                ? "Færdig"
                : "I gang"
            }}
          </p>
          <p class="todo__item__text">{{ todo.price }}kr</p>
        </li>
      </ul>
    </div>
    <div v-if="task.addedUsers.length > 0" class="user-added>">
      <p class="user-added__title">Tildelt adgang</p>
      <ul class="user-added__wrapper">
        <li
          class="user"
          v-for="(addedUser, index) in task.addedUsers"
          :key="index"
        >
          <p>{{ addedUser }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import EditIcon from "../../../assets/icons/EditIcon";
import CheckboxIcon from "../../../assets/icons/CheckboxIcon";
import DoingIcon from "../../../assets/icons/DoingIcon";
import { setDoc, doc } from "firebase/firestore";
import tasksCollection from "../../../firebase";

export default {
  name: "TaskInfo",
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      todoList: this.task.todoList,
      taskId: this.$route.params.taskId,
    };
  },
  components: { EditIcon, CheckboxIcon, DoingIcon },
  computed: {
    statusColor() {
      return this.task.status === "Active"
        ? "#27B981"
        : this.status === "Solved"
        ? "#EECA44"
        : "#ADADAD";
    },
    getCurrentId() {
      return this.taskId.toString();
    },
  },
  methods: {
    changeTodoStatus(index, status) {
      status === "toDo"
        ? (this.todoList[index].status = "done")
        : status === "done"
        ? (this.todoList[index].status = "doing")
        : (this.todoList[index].status = "to-do");
      this.updateTodoStatus();
    },
    async updateTodoStatus() {
      let taskRef = doc(tasksCollection, this.taskId);
      await setDoc(taskRef, { ...this.task, todoList: this.todoList });
    },
  },
};
</script>

<style scoped lang="scss">
.task-info {
  font-size: 17px;
  .top-bar {
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    font-weight: 600;
    padding-bottom: 24px;
  }
  &__created {
    padding-bottom: 12px;
  }
  &__status {
    font-weight: 600;
    padding-bottom: 24px;
  }
  .description {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-bottom: 24px;
    .internal {
      background-color: $top-bar;
    }
    &__title {
      font-weight: 600;
    }
    &__description {
      width: 100%;
      max-height: 150px;
      overflow-y: auto;
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.16);
      padding: 24px;
      border-radius: 8px;
    }
  }
  .todo {
    padding-bottom: 24px;
    &__wrapper {
      @include flex-column;
      gap: 6px;
    }
    &__header {
      font-weight: 600;
      font-size: 16px;
      padding-bottom: 12px;
    }
    &__title {
      font-weight: 600;
      padding-bottom: 12px;
    }
    &__item {
      display: grid;
      max-width: 600px;
      grid-template-columns: 2fr 1fr 1fr 1fr;
    }
    .checkbox-wrapper {
      display: flex;
      gap: 12px;
      .checkbox__container {
        cursor: pointer;
        width: 25px;
        height: 25px;
        border-radius: 50%;

        display: flex;
        justify-content: center;
        align-items: center;
      }
      .checkbox__container--unchecked {
        border: 1px solid rgba(36, 36, 36, 0.46);
        background-color: white;
      }
      .checkbox__container--checked {
        border: none;
        background-color: #27b981;
      }
      .checkbox__container--doing {
        padding-left: 2px;
        background-color: #eeca44;
      }
    }
  }
  .user-added {
    &__title {
      font-weight: 600;
      padding-bottom: 12px;
    }
    .user-added__wrapper {
    }
    .user {
    }
  }
}
</style>
