<template>
  <div class="home">
    <div>
      <h3>Active Cases</h3>
      <ul>
        <li v-for="(task, index) in tasks" :key="index">
          <p>{{ task.status }}</p>
          <p>{{ task.id }}</p>
          <p>{{ task.title }}</p>
          <p>{{ task.addedUsers }}</p>
        </li>
      </ul>
    </div>
    <div>
      <h3>Status</h3>
      <div>Aktive cases:</div>
      <span>{{ amountOfActiveCases }}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Dashboard",
  computed: {
    ...mapGetters(["tasks"]),
    amountOfActiveCases() {
      return this.tasks.reduce((total, task) => {
        task.status === "New" || task.status === "Active" ? ++total : null;
        return total;
      }, 0);
    },
  },
  methods: {},
};
</script>
