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
  box-shadow: 3px 1px 14px rgba(25, 1, 1, 0.16);
  @media screen and (max-width: 1000px) {
    position: sticky;
    z-index: 3;
    top: 125px;
    padding: 0 25px;
    height: 80px;
  }
  h2 {
    font-size: $big-text;
    font-weight: 600;
  }
}
</style>
