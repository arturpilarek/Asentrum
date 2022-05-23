<template>
  <div class="tasks-overview">
    <ul class="tasks-overview__cases">
      <li class="case case-header">
        <p>Status</p>
        <p>Id</p>
        <p class="mobile-hidden-450">Kunde</p>
        <p>Titel</p>
        <p class="mobile-hidden">Oprettet</p>
        <p class="mobile-hidden-450">Deadline</p>
        <p class="mobile-hidden">Tildelt adgang</p>
      </li>
      <li v-for="(task, index) in tasksSortId" :key="index">
        <router-link class="case case-link" :to="{ path: `/task/${task.id}` }">
          <StatusIcon
            v-if="task.status"
            :status="task.status"
            class="case__status"
          />
          <p>#{{ task.internalId }}</p>
          <p class="mobile-hidden-450">{{ task.client }}</p>
          <p>{{ task.title }}</p>
          <p class="mobile-hidden-850">{{ task.created }}</p>
          <p class="mobile-hidden-450">{{ task.deadline }}</p>
          <div class="mobile-hidden-850">
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
    align-items: center;
    position: relative;
    @media screen and (max-width: 850px) {
      grid-template-columns: repeat(5, 1fr);
      .mobile-hidden {
        display: none;
      }
    }
    @media screen and (max-width: 850px) {
      grid-template-columns: repeat(5, 1fr);
      .mobile-hidden-850 {
        display: none;
      }
    }
    @media screen and (max-width: 450px) {
      grid-template-columns: repeat(3, 1fr);
      .mobile-hidden-450 {
        display: none;
      }
    }
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
