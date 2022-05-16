<template>
  <AddData />
  <TasksList />
</template>

<script>
import AddData from "../components/pages/tasks/CreateTask";
import TasksList from "../components/pages/tasks/TasksList";

export default {
  name: "Tasks.vue",
  components: { AddData, TasksList },
  computed: {},
  methods: {},
};
</script>

<style scoped></style>
