<template>
  <div class="status-icon" :style="statusBackgroundColor">
    <span>{{ statusLetter }}</span>
  </div>
</template>

<script>
export default {
  name: "StatusIcon",
  props: {
    status: {
      type: String,
      required: true,
    },
  },
  computed: {
    statusLetter() {
      return this.status === "Active"
        ? "A"
        : this.status === "Solved"
        ? "L"
        : "V";
    },
    statusBackgroundColor() {
      return this.status === "Active"
        ? "backgroundColor: #27B981"
        : this.status === "Solved"
        ? "backgroundColor: #ADADAD"
        : "backgroundColor: #EECA44";
    },
  },
};
</script>

<style scoped lang="scss">
.status-icon {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  font-weight: 600;
  color: white;
  @include flex-center;
}
</style>
