<template>
  <div class="activity">
    <RoundImage class="activity__image" :photo-source="imageSource" />
    <p class="activity__text" v-if="activityType === 'statusChange'">
      <span class="bold">{{ userName }}&nbsp;</span>
      <span>{{ activityText }}&nbsp;</span>
      <span class="bold">{{ taskId }} til&nbsp;</span>
      <span class="bold">{{ taskStatus }}</span>
    </p>
    <p class="activity__text" v-else>
      <span class="bold">{{ userName }}&nbsp;</span>
      <span>{{ activityText }} på&nbsp;</span>
      <span class="bold">{{ taskId }}</span>
    </p>
  </div>
</template>

<script>
import RoundImage from "../../ui/RoundImage";

export default {
  name: "Activity",
  props: {
    imageSource: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    activityType: {
      type: String,
      required: true,
    },
    taskId: {
      type: String,
      required: true,
    },
    taskStatus: {
      type: String,
      required: false,
      default: "",
    },
  },
  computed: {
    activityText() {
      return this.activityType === "statusChange"
        ? "ændrede status på"
        : "har tilføjet et kommentar på";
    },
  },
  components: { RoundImage },
};
</script>

<style scoped lang="scss">
.activity {
  display: flex;
  align-items: center;
  padding-bottom: 12px;
  &__text {
    padding-left: 12px;
    .bold {
      font-weight: 600;
    }
  }
}
</style>
