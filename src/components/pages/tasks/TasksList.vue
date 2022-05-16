<template>
  <div>
    <h3>Task list</h3>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <p>{{ task.taskName }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TasksList",
  computed: {
    ...mapGetters(["tasks"]),
  },
  created() {
    this.$store.dispatch("fetchTasks");
  },
};
</script>

<style scoped></style>
