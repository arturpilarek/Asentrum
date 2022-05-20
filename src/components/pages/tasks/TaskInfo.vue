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
        <li
          class="todo__item"
          v-for="(todo, index) in task.todoList"
          :key="index"
        >
          <p class="todo__item__text">
            <span>done</span>
            {{ todo.name }}
          </p>
          <p class="todo__item__text">{{ todo.hours }}</p>
          <p class="todo__item__text">status</p>
          <p class="todo__item__text">{{ todo.price }}kr</p>
        </li>
      </ul>
    </div>
    <div class="user-added>">
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

export default {
  name: "TaskInfo",
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  components: { EditIcon },
  computed: {
    statusColor() {
      return this.task.status === "Active"
        ? "#27B981"
        : this.status === "Solved"
        ? "#EECA44"
        : "#ADADAD";
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
      grid-template-columns: 1fr 1fr 1fr 1fr;
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
