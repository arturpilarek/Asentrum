<template>
  <div class="most-sold">
    <ProduktStat
      product-name="1. Hamstersko"
      product-nr="53242189"
      product-amount-sold="231"
    />
    <ProduktStat
      product-name="2. Original Kaki"
      product-nr="512142119"
      product-amount-sold="210"
    />
    <ProduktStat
      product-name="3. Clark Flower"
      product-nr="90242165"
      product-amount-sold="193"
    />
    <ProduktStat
      product-name="4. Stef Desert"
      product-nr="122421758"
      product-amount-sold="71"
    />
    <ProduktStat
      product-name="5. Colette Black"
      product-nr="122421758"
      product-amount-sold="63"
    />
  </div>
</template>

<script>
import ProduktStat from "./ProductStat";

export default {
  name: "MostSold",
  components: { ProduktStat },
};
</script>

<style scoped lang="scss">
.most-sold {
  padding-top: 48px;
}
</style>
