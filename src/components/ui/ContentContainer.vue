<template>
  <div class="content-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ContentContainer",
};
</script>

<style scoped lang="scss">
.content-container {
  background-color: white;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 0 8px hsla(0, 0, 0, 0.16);
}
</style>
