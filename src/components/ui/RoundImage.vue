<template>
  <div
    class="roundImage"
    :style="{
      backgroundImage: `url('${photoSource}')`,
      width: `${size}px`,
      height: `${size}px`,
    }"
  ></div>
</template>

<script>
export default {
  name: "RoundImage",
  props: {
    photoSource: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      required: false,
      default: 45,
    },
  },
};
</script>

<style scoped lang="scss">
.roundImage {
  border-radius: 50%;
  background-color: red;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
