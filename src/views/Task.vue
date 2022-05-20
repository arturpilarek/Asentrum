<template>
  <section class="task">
    <div class="task__grid">
      <ContentContainer class="task__info">
        <TaskInfo v-if="task" :task="task" />
      </ContentContainer>
      <ContentContainer class="task__chat"></ContentContainer>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import ContentContainer from "../components/ui/ContentContainer";
import TaskInfo from "../components/pages/tasks/TaskInfo";

export default {
  name: "Task",
  components: { ContentContainer, TaskInfo },
  data() {
    return {
      taskId: null,
    };
  },
  computed: {
    ...mapGetters(["task"]),
  },
  created() {
    let routerTaskId = this.$route.params.taskId;
    console.log(typeof routerTaskId);
    this.taskId = routerTaskId;
    this.$store.dispatch("fetchTask", { id: routerTaskId });
  },
};
</script>

<style scoped lang="scss">
.task {
  &__grid {
    height: calc(100vh - 228px);
    gap: 25px;
    display: grid;
    grid-template-columns: 8fr 6fr;
  }
}
</style>
