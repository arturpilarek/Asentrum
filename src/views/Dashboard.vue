<template>
  <div class="home">
    <h1>hi</h1>
    <p>{{ points }}</p>
    <button @click="addPoints(3)">Add</button>
  </div>
</template>

<script>
//use store is necessary if youre using composition api
// import { useStore } from "vuex";

export default {
  name: "Dashboard",
  computed: {
    points() {
      return this.$store.state.points;
    },
  },
  methods: {
    addPoints(points) {
      this.$store.commit("updatePoints", points);
    },
  },
};
</script>
