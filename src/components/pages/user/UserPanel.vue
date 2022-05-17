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
import router from "../../../router";
import { mapGetters } from "vuex";

export default {
  name: "UserPanel",
  computed: {
    ...mapGetters(["displayName", "photoURL"]),
  },
  methods: {
    signout() {
      router.push("/");
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style scoped lang="scss">
.user-panel {
  @include flex-center;
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
      font-size: 21px;
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
  }
}
</style>
