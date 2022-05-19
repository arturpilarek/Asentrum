<template>
  <div class="visitors">
    <VisitorsGraph />
    <div class="wrapper">
      <div class="visitors__legend">
        <div class="square square--orange" />
        <p>Tilbagevendende besøgende</p>
      </div>
      <div class="visitors__legend">
        <div class="square square--black" />
        <p>Nye besøgende</p>
      </div>
    </div>
  </div>
</template>

<script>
import VisitorsGraph from "../../../assets/icons/VisitorsGraph";

export default {
  name: "Visitors",
  components: { VisitorsGraph },
};
</script>

<style scoped lang="scss">
.visitors {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  &__legend {
    padding: 12px 0;
    display: flex;
    p {
      padding-left: 12px;
    }
    .square {
      width: 16px;
      height: 16px;
      border-radius: 2px;
    }
    .square--orange {
      background-color: $accent-color;
    }
    .square--black {
      background-color: black;
    }
  }
}
</style>
