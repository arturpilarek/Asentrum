<template>
  <div class="active-cases">
    <ul class="active-cases__cases">
      <li class="case case--header">
        <p class="case__status">Status</p>
        <p class="case__id">Id</p>
        <p class="case__mangler-svar">Mangler Svar</p>
        <p class="case__title">Titel</p>
      </li>
      <li class="case" v-for="(task, index) in tasksSortId" :key="index">
        <StatusIcon class="case__status" :status="task.status" />
        <p class="case__id">#{{ task.internalId }}</p>
        <BellIcon v-if="task.needsAttention" class="case__mangler-svar" />
        <p v-else class="case__mangler-svar"></p>
        <p class="case--title">{{ task.title }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import StatusIcon from "../../../assets/icons/StatusIcon";
import BellIcon from "../../../assets/icons/BellIcon";

export default {
  name: "ActiveCases",
  components: { BellIcon, StatusIcon },
  computed: {
    ...mapGetters(["tasks"]),
    tasksSortId() {
      return [...this.tasks].sort((a, b) => a.internalId - b.internalId);
    },
  },
  created() {
    this.$store.dispatch("fetchTasks");
  },
};
</script>

<style scoped lang="scss">
.active-cases {
  max-height: 200px;
  overflow-y: scroll;
  margin-top: 50px;
  width: 100%;
  height: 100%;
  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .case {
    margin-bottom: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 120px 4fr;
    justify-items: center;
    align-items: flex-start;
    width: 100%;
    position: relative;
    &:after {
      content: "";
      position: absolute;
      bottom: -10px;
      width: 100%;
      left: 0;
      right: 0;
      height: 1px;
      background-color: $accent-gray;
    }
  }
  .case--header {
    font-weight: 600;
    margin-bottom: 10px;
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 2;
    padding-bottom: 10px;
    border-bottom: $accent-gray 2px solid;

    &:after {
      display: none;
    }
  }
}
</style>
