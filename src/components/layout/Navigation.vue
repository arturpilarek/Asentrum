<template>
  <div class="navigation">
    <div class="absolute__wrapper">
      <div class="fixed-wrapper">
        <LogoIcon class="navigation__logo" />
        <NavigationLinks class="navigation__nav" />
        <UserPanel class="navigation__user" />
      </div>
    </div>
  </div>
</template>

<script>
import LogoIcon from "../../assets/icons/LogoIcon";
import NavigationLinks from "./NavigationLinks";
import UserPanel from "../pages/user/UserPanel";

export default {
  name: "Navigation",
  components: {
    LogoIcon,
    NavigationLinks,
    UserPanel,
  },
};
</script>

<style scoped lang="scss">
.navigation {
  width: 360px;
  min-width: 360px;
  background-color: $main-color;
  position: relative;
  .absolute__wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 360px;
    height: 100%;
    display: flex;
    justify-content: center;
    background-color: $main-color;
  }
  .fixed-wrapper {
    position: fixed;
    height: 100%;
    width: 360px;
    @include flex-column;
    align-items: center;
  }
  &__logo {
    width: 151px;
    height: auto;
    margin-top: 24px;
    @media screen and (max-width: 1100px) {
      width: 113px;
      height: 60px;
    }
  }
  &__nav {
    margin-top: 74px;
    @include flex-column;
  }
  &__user {
    position: absolute;
    bottom: 24px;
  }
}
@media screen and (max-width: 1400px) {
  .navigation {
    width: 240px;
    min-width: 240px;
    .absolute__wrapper {
      width: 240px;
      .fixed-wrapper {
        width: 240px;
      }
    }
  }
}

@media screen and (max-width: 1000px) {
  .navigation {
    width: 100vw;
    height: 125px;
    position: sticky;
    max-width: initial;
    top: 0;
    z-index: 4;
    .absolute__wrapper {
      width: 100vw;
      position: initial;
      .fixed-wrapper {
        width: 100%;
        position: initial;
        flex-direction: row;
        bottom: initial;
        justify-content: space-between;
        padding: 25px;
      }
    }
    &__logo {
      margin-top: 0;
    }
    &__nav {
      flex-direction: initial;
      margin-top: initial;
    }
    &__user {
      position: initial;
    }
  }
}
</style>
