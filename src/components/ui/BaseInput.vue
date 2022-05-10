<template>
  <div class="input-wrapper">
    <p>{{ labelText }}</p>
    <input
      :type="type"
      :placeholder="placeholder"
      :style="{ borderRadius: `${radius}px` }"
      @change="inputChange"
      v-model="inputData"
    />
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  data() {
    return {
      inputData: null,
    };
  },
  props: {
    labelText: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: false,
      default: "",
    },
    radius: {
      type: Number,
      required: false,
      default: 8,
    },
    type: {
      type: String,
      required: false,
      default: "text",
    },
  },
  methods: {
    inputChange() {
      this.$emit("inputChange", this.inputData);
    },
  },
};
</script>

<style scoped lang="scss">
.input-wrapper {
  text-align: left;
  padding: 8px;

  input {
    padding: 12px 16px;
    outline: none;
    border: none;
    width: 200px;
  }
  p {
    font-weight: 600;
    color: white;
    padding-bottom: 6px;
  }
}
</style>
