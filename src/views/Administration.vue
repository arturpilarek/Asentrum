<template>
  <section>
    <UserCreate />
    <CreateTask />
  </section>
</template>

<script>
import UserCreate from "../components/pages/user/UserCreate";
import CreateTask from "../components/pages/tasks/CreateTask";

export default {
  components: { UserCreate, CreateTask },
};
</script>

<style></style>
