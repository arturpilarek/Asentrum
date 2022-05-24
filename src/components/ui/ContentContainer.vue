<template>
  <div class="content-container">
    <h3
      v-if="title"
      :style="[titleCentered ? 'textAlign: center' : 'textAlign: initial']"
    >
      {{ title }}
    </h3>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ContentContainer",
  props: {
    title: {
      type: String,
      required: false,
      default: "",
    },
    titleCentered: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style scoped lang="scss">
.content-container {
  background-color: white;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.16);
  h3 {
    font-size: 22px;
  }
}
</style>
