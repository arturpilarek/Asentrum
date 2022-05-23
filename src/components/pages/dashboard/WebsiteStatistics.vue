<template>
  <div class="website-stats">
    <Statistics
      :decrease="Boolean(false)"
      stat-name="Antal besøgende"
      stat-result="13.502 kr"
      stat-compare="5%"
      class="website-stats__stat"
    />
    <Statistics
      :decrease="Boolean(true)"
      stat-name="Omsætning"
      stat-result="135032 kr"
      stat-compare="1%"
      class="website-stats__stat"
    />
    <Statistics
      :decrease="Boolean(false)"
      stat-name="Konverteringer"
      stat-result="10.254 kr"
      stat-compare="5%"
    />
  </div>
</template>

<script>
import Statistics from "./Statistics";

export default {
  name: "WebsiteStats",
  components: { Statistics },
};
</script>

<style scoped lang="scss">
.website-stats {
  height: 100%;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 25px 0;
  @media screen and (max-width: 825px) {
    min-height: initial;
    gap: 12px;
  }
  &__stat {
    position: relative;
    &:after {
      @media screen and (max-width: 825px) {
        display: none;
      }
      content: "";
      position: absolute;
      height: 1px;
      background-color: rgba(112, 112, 112, 0.6);
      width: 150px;
      bottom: -50%;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
</style>
