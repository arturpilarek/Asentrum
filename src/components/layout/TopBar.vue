<template>
  <aside class="top-bar">
    <h2>{{ getCurrentRouteName }}</h2>
  </aside>
</template>

<script>
export default {
  name: "TopBar",
  computed: {
    getCurrentRouteName() {
      return this.$route.name;
    },
  },
};
</script>

<style scoped lang="scss">
.top-bar {
  padding: 0 50px;
  display: flex;
  align-items: center;
  height: 132px;
  background-color: $top-bar;
  h2 {
    font-size: $big-text;
    font-weight: 600;
  }
}
</style>
