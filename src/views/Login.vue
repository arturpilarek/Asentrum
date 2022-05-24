<template>
  <div class="login">
    <Logo class="login__logo" />
    <div class="login__form" @keyup.enter="login">
      <BaseInput label-text="Email" @input-change="updateEmail" />
      <p class="hint">For censor og eksaminator: admin@admin.com</p>
      <BaseInput
        label-text="Kodeord"
        type="password"
        model-value="password"
        @input-change="updatePassword"
      />
      <p class="hint">For censor og eksaminator: admin1234</p>
      <p v-if="errorMsg" class="login__form__error-message">{{ errorMsg }}</p>
      <BaseButton @click="login" text="Log ind" />
    </div>
  </div>
</template>

<script>
import router from "../router";
import BaseButton from "../components/ui/BaseButton";
import BaseInput from "../components/ui/BaseInput";
import Logo from "../assets/icons/LogoIcon";

export default {
  components: { BaseButton, BaseInput, Logo },
  data() {
    return {
      email: null,
      password: null,
      errorMsg: null,
    };
  },
  methods: {
    updateEmail(value) {
      this.email = value;
    },
    updatePassword(value) {
      this.password = value;
    },
    async login() {
      try {
        await this.$store.dispatch("login", {
          email: this.email,
          password: this.password,
        });
        router.push("/dashboard");
      } catch (error) {
        switch (error.code) {
          case "auth/invalid-email":
            this.errorMsg = "Forkert email";
            break;
          case "auth/user-not-found":
            this.errorMsg = "Inden bruger fundet";
            break;
          case "auth/wrong-password":
            this.errorMsg = "Forkert kodeord";
            break;
          default:
            this.errorMsg = "Email eller kodeord er ikke korrekt";
            break;
        }
      }
    },
  },
};
</script>

<style scoped lang="scss">
.login {
  @include flex-column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: $main-color;
  &__logo {
    margin-bottom: 100px;
    width: 230px;
    height: auto;
  }
  &__form {
    @include flex-column;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: auto;
    &__error-message {
      padding-top: 8px;
      color: $accent-color;
    }
  }
  .hint {
    color: white;
  }
}
</style>
