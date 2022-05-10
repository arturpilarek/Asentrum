<template>
  <button
    class="button"
    :style="{ borderRadius: `${radius}px`, backgroundColor: color }"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    text: {
      type: String,
      required: true,
    },
    radius: {
      type: Number,
      required: false,
      default: 8,
    },
    color: {
      type: String,
      required: false,
      default: "#E08C2A",
    },
  },
};
</script>

<style scoped>
.button {
  display: block;
  padding: 12px 0;
  color: white;
  font-size: 16px;
  width: 200px;
  font-weight: 600;
  margin-top: 16px;
  cursor: pointer;
  border: none;
}
</style>
