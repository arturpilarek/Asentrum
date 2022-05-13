<template>
  <h1>Tasks</h1>
  <p>{{ displayCurrentUser }} here</p>
  <button @click="setCurrentUser('Stara')">Name me</button>
</template>

<script>
export default {
  name: "Tasks.vue",
  computed: {
    displayCurrentUser() {
      return this.$store.state.user.displayName;
    },
  },
  methods: {
    setCurrentUser(user) {
      this.$store.commit("setUser", user);
    },
  },
};
</script>

<style scoped></style>
