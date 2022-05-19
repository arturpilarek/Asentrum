<template>
  <div class="statistics">
    <h3 class="statistics__name">{{ statName }}</h3>
    <p class="statistics__result">{{ statResult }}</p>
    <div class="wrapper">
      <p
        class="statistics__compare"
        :style="[decrease ? 'color: #E64D15' : 'color: #27B981']"
      >
        {{ statCompare }}
      </p>
      <arrow-icon :class="{ iconDecrease: decrease }" />
    </div>
  </div>
</template>

<script>
import ArrowIcon from "../../../assets/icons/ArrowIcon";

export default {
  name: "Statistics",
  components: { ArrowIcon },
  props: {
    decrease: {
      type: Boolean,
      required: true,
    },
    statName: {
      type: String,
      required: true,
    },
    statResult: {
      type: String,
      required: true,
    },
    statCompare: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.statistics {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 600;
  &__name {
    font-size: 24px;
  }
  &__result {
    padding-top: 24px;
    font-size: 28px;
  }
  .wrapper {
    padding-top: 12px;
    display: flex;
    align-items: center;
    .iconDecrease {
      fill: #e64d15;
      transform: rotate(180deg);
    }
  }
  &__compare {
    padding-right: 3px;
    font-size: 20px;
  }
}
</style>
