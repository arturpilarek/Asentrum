<template>
  <div class="product">
    <p class="bold">{{ productName }}</p>
    <p>Varenr&nbsp;{{ productNr }}</p>
    <p class="bold">{{ productAmountSold }}&nbsp;stk</p>
  </div>
</template>

<script>
export default {
  name: "ProduktStat",
  props: {
    productName: {
      type: String,
      required: true,
    },
    productNr: {
      type: String,
      required: true,
    },
    productAmountSold: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.product {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-bottom: 24px;
  p {
    transform: translateX(25%);
  }
  .bold {
    font-weight: 600;
  }
}
</style>
