<template>
  <div class="user-panel">
    <div
      class="user-panel__image-container"
      :style="{ backgroundImage: `url('${photoURL}')` }"
    ></div>
    <div class="link-wrapper">
      <p class="user-panel__info__link" v-if="displayName">{{ displayName }}</p>
      <p class="user-panel__info__link" v-else>User unknown</p>
      <router-link class="user-panel__info__link" to="/settings"
        >Indstillinger</router-link
      >
      <span class="user-panel__info__link" @click="signout">Log ud</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "UserPanel",
  computed: {
    ...mapGetters(["displayName", "photoURL"]),
  },
  methods: {
    signout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style scoped lang="scss">
.user-panel {
  @include flex-center;
  @media screen and (max-width: 1400px) {
    flex-direction: column;
  }
  gap: 16px;
  .link-wrapper {
    height: 90px;
    @include flex-column;
    justify-content: space-between;
    a,
    span,
    p {
      color: $secondary-color;
      font-weight: 600;
      font-size: 20px;
      @media screen and (max-width: 1400px) {
        font-size: 18px;
      }
    }
    span {
      cursor: pointer;
    }
  }
  &__image-container {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background-color: white;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    @media screen and (max-width: 1400px) {
      width: 75px;
      height: 75px;
    }
  }
}
@media screen and (max-width: 1000px) {
  .user-panel {
    position: relative;
    &__image-container {
      z-index: 3;
    }
    &__info__link {
      color: $main-color !important;
    }
    .link-wrapper {
      z-index: 2;
      position: absolute;
      right: 0;
      height: 79px;
      top: 101%;
      background-color: $top-bar;
      color: $main-color;
      width: max-content;
      padding: 6px 12px 6px 6px;
    }
  }
}
</style>
