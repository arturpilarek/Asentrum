<template>
  <div class="recent-activities">
    <Activity
      task-status="løst"
      task-id="#5"
      activity-type="statusChange"
      user-name="Nadia Grabein"
      image-source="https://i.ibb.co/ZWXQkF6/nadiagrabein.png"
    />
    <Activity
      task-id="#3"
      activity-type="commentAdded"
      user-name="Maria Pilarek"
      image-source="https://i.ibb.co/K9X6TXC/mariapilarek.png"
    />
    <Activity
      task-status="venter"
      task-id="#1"
      activity-type="statusChange"
      user-name="Allan Larsen"
      image-source="https://i.ibb.co/yRVSwPm/allanlarsen.png"
    />
  </div>
</template>

<script>
import Activity from "./Activity";

export default {
  name: "RecentActivities",
  components: { Activity },
};
</script>

<style scoped lang="scss">
.recent-activities {
  margin-top: 24px;
}
</style>
