<template>
  <section class="tasks">
    <ContentContainer
      :title="addString('Aktive cases')"
      class="active-cases container"
    >
      <ActiveCases class="active-cases-component" />
    </ContentContainer>
    <ContentContainer :title="addString('Status')" class="status container">
      <TasksStatus />
    </ContentContainer>
    <ContentContainer
      :title="addString('Seneste aktiviteter')"
      class="recent-activity container"
    >
      <RecentActivities />
    </ContentContainer>
    <ContentContainer class="tasks-overview container" title="Opgaveoversigt">
      <TasksOverview />
    </ContentContainer>
  </section>
</template>

<script>
import ActiveCases from "../components/pages/tasks/ActiveCases";
import TasksStatus from "../components/pages/tasks/TasksStatus";
import RecentActivities from "../components/pages/tasks/RecentActivities";
import ContentContainer from "../components/ui/ContentContainer";
import TasksOverview from "../components/pages/tasks/TasksOverview";

export default {
  name: "Tasks.vue",
  components: {
    ActiveCases,
    TasksStatus,
    RecentActivities,
    ContentContainer,
    TasksOverview,
  },
  computed: {},
  methods: {
    addString(string) {
      return string;
    },
  },
};
</script>

<style scoped lang="scss">
.tasks {
  display: grid;
  min-height: calc(100vh - 132px);
  gap: 25px;
  grid-template-columns: 2fr 1fr 2fr;
  grid-template-rows: auto;
  grid-template-areas:
    "activeCases status recentActivity"
    "tasksOverview tasksOverview tasksOverview";
  @media screen and (max-width: 1400px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 0.5fr 1fr 1fr;
    grid-template-areas:
      "activeCases status"
      "activeCases recentActivity"
      "tasksOverview tasksOverview";
  }
  @media screen and (max-width: 825px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    .container {
      width: 100%;
    }
  }
  .active-cases {
    grid-area: activeCases;
  }
  .active-cases-component {
    max-height: 80%;
  }
  .status {
    grid-area: status;
  }
  .recent-activity {
    grid-area: recentActivity;
  }
  .tasks-overview {
    grid-area: tasksOverview;
  }
}
</style>
