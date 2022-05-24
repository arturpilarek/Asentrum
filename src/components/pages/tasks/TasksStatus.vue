<template>
  <div class="tasks-status">
    <div class="wrapper">
      <p>Aktive cases:</p>
      <span class="active-cases">{{ tasksStatus.activeCases }}</span>
    </div>
    <div class="wrapper">
      <p>Mangler svar:</p>
      <span class="needs-attention">{{ tasksStatus.needsAttention }}</span>
    </div>
    <div class="wrapper">
      <p>Cases løst:</p>
      <span class="solved-cases">{{ tasksStatus.solvedCases }}</span>
    </div>
    <div></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TasksStatus",
  computed: {
    ...mapGetters(["tasksStatus"]),
  },
};
</script>

<style scoped lang="scss">
.tasks-status {
  font-weight: 600;
  padding-top: 30px;
  .wrapper {
    display: grid;
    grid-template-columns: 125px 100px;
    padding-bottom: 12px;
  }
  .active-cases {
    color: #27b981;
  }
  .needs-attention {
    color: #fa1a0f;
  }
  .solved-cases {
    color: #adadad;
  }
}
</style>
