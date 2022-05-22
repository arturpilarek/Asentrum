<template>
  <section class="task">
    <div class="task__grid">
      <ContentContainer class="task__info">
        <TaskInfo v-if="task" :task="task" />
      </ContentContainer>
      <ContentContainer class="task__chat">
        <TaskChat />
      </ContentContainer>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import ContentContainer from "../components/ui/ContentContainer";
import TaskInfo from "../components/pages/tasks/TaskInfo";
import TaskChat from "../components/pages/tasks/TaskChat";

export default {
  name: "Task",
  components: { ContentContainer, TaskInfo, TaskChat },
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
    height: 100%;
    gap: 25px;
    display: grid;
    grid-template-columns: 9fr 5fr;
    @media screen and (max-width: 825px) {
      @include flex-column;
      gap: 25px;
    }
  }
}
</style>
