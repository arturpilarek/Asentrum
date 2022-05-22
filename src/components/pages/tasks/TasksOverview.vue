<template>
  <div class="tasks-overview">
    <ul class="tasks-overview__cases">
      <li class="case case-header">
        <p>Status</p>
        <p>Id</p>
        <p>Kunde</p>
        <p>Titel</p>
        <p>Oprettet</p>
        <p>Deadline</p>
        <p>Tildelt adgang</p>
      </li>
      <li v-for="(task, index) in tasksSortId" :key="index">
        <router-link class="case case-link" :to="{ path: `/task/${task.id}` }">
          <StatusIcon :status="task.status" class="case__status" />
          <p>#{{ task.internalId }}</p>
          <p>{{ task.client }}</p>
          <p>{{ task.title }}</p>
          <p>{{ task.created }}</p>
          <p>{{ task.deadline }}</p>
          <div>
            <p v-for="(user, index) in task.addedUsers" :key="index">
              {{ user }}
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import StatusIcon from "../../../assets/icons/StatusIcon";

export default {
  name: "TasksOverview",
  components: { StatusIcon },
  computed: {
    ...mapGetters(["tasks"]),
    tasksSortId() {
      return [...this.tasks].sort((a, b) => a.internalId - b.internalId);
    },
  },
};
</script>

<style scoped lang="scss">
.tasks-overview {
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 450px;
  width: 100%;
  height: 100%;
  margin-top: 36px;
  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .case {
    display: grid;
    margin-bottom: 20px;
    grid-template-columns: repeat(7, 1fr);
    justify-items: center;
    position: relative;
  }
  .case-link {
    height: 100%;
    width: 100%;
    z-index: 2;
    &:hover {
      :before {
        content: "";
        position: absolute;
        height: calc(100% + 20px);
        width: 100%;
        top: -10px;
        background-color: #f0f0f0;
        z-index: -1;
      }
    }
  }
  .case-header {
    font-weight: 600;
    margin-bottom: 10px;
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 3;
    padding-bottom: 10px;
    border-bottom: rgba(36, 36, 36, 0.13) 2px solid;
  }
}
</style>
