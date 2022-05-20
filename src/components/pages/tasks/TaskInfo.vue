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
          <p class="invisible">Placeholder</p>
          <p>Status</p>
          <p>Pris</p>
          <p>Antal timer</p>
        </li>
        <li v-for="(todo, index) in task.todo" :key="index">
          <p>done</p>
          <p>{{ todo.name }}</p>
          <p>{{ todo.hours }}</p>
          <p>{{ todo.price }}</p>
        </li>
      </ul>
    </div>
    <div class="user-added>">
      <p>Tildelt adgang</p>
      <ul>
        <li v-for="(addedUser, index) in task.addedUsers" :key="index">
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
}
</style>
