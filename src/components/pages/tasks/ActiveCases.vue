<template>
  <div class="active-cases">
    <ul class="active-cases__cases">
      <li class="case case--header">
        <p class="case__status">Status</p>
        <p class="case__id">Id</p>
        <p class="case__mangler-svar">Mangler Svar</p>
        <p class="case__title">Titel</p>
      </li>
      <li v-for="(task, index) in tasksSorted" :key="index">
        <router-link class="case case-link" :to="{ path: `/task/${task.id}` }">
          <StatusIcon
            v-if="task.status"
            class="case__status"
            :status="task.status"
          />
          <p class="case__id">#{{ task.internalId }}</p>
          <BellIcon v-if="task.needsAttention" class="case__mangler-svar" />
          <p v-else class="case__mangler-svar"></p>
          <p v-if="task.title" class="case--title">
            {{ displayTaskTitle(task.title) }}
          </p>
        </router-link>
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
    tasksSorted() {
      return [...this.tasks]
        .sort((a, b) => a.internalId - b.internalId)
        .filter((task) => task.status !== "Solved");
    },
  },
  methods: {
    async fetchTask(id) {
      await this.$store.dispatch("fetchTask", { id });
    },
    displayTaskTitle(title) {
      return title.length > 20 ? title.substring(0, 20) + "..." : title;
    },
  },
  async created() {
    await this.$store.dispatch("fetchTasks");
  },
};
</script>

<style scoped lang="scss">
.active-cases {
  max-height: 200px;
  overflow-y: auto;
  overflow-x: hidden;
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
  .case-link {
    height: 100%;
    width: 100%;
    z-index: 1;
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

  .case--header {
    font-weight: 600;
    margin-bottom: 10px;
    z-index: 2;
    position: sticky;
    top: 0;
    background-color: white;
    padding-bottom: 10px;
    border-bottom: $accent-gray 2px solid;

    &:after {
      display: none;
    }
  }
}
</style>
