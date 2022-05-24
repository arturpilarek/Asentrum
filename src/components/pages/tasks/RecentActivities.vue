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
      user-name="Maria Simonsen"
      image-source="https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&fbclid=IwAR1ULf2LpuakJR2UwGBowNWDJp0Eo9E5SxvUb5HN9qsFrnfJYMPJodRxa7E"
    />
    <Activity
      task-status="venter"
      task-id="#2"
      activity-type="statusChange"
      user-name="Allan Larsen"
      image-source="https://images.unsplash.com/photo-1590086782957-93c06ef21604?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287"
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
