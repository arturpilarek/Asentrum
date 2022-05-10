<template>
  <div class="navigation">
    <div class="fixed-wrapper">
      <LogoIcon class="navigation__logo" />
      <NavigationLinks class="navigation__nav" />
      <UserPanel class="navigation__user" />
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
  width: 330px;
  height: 300vh;
  background-color: $main-color;
  .fixed-wrapper {
    position: fixed;
    width: 330px;
    @include flex-column;
    align-items: center;
    height: 100vh;
  }
  &__logo {
    width: 151px;
    height: 81px;
    margin-top: 24px;
  }
  &__nav {
    margin-top: 74px;
    @include flex-column;
  }
  &__user {
    position: absolute;
    bottom: 60px;
  }
}
</style>
