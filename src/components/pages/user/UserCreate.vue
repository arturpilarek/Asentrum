<template>
  <section class="user-create">
    <div class="input-container">
      <label for="email">Email</label>
      <input type="text" name="email" placeholder="Email" v-model="email" />
    </div>
    <div class="input-container">
      <label for="display-name">Navn</label>
      <input
        type="text"
        name="display-name"
        placeholder="Navn"
        v-model="displayName"
      />
    </div>
    <div class="input-container">
      <label for="photo-url">Link til billedet</label>
      <input
        type="text"
        name="photo-url"
        placeholder="Billede URL"
        v-model="photoUrl"
      />
    </div>
    <div class="input-container">
      <label for="password">Kodeord</label>
      <input
        name="password"
        type="password"
        placeholder="Kodeord"
        v-model="password"
      />
    </div>
    <div class="input-container">
      <label for="repeat-password">Gentag kodeord</label>
      <input
        name="repeat-password"
        type="password"
        placeholder="Gentag kodeord"
        v-model="repeatPassword"
      />
      <p v-if="!passwordsMatching" class="not-matching">Kodeord er ikke ens</p>
    </div>
    <BaseButton text="Opret" @click="register" />
  </section>
</template>

<script>
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import router from "../../../router";
import BaseButton from "../../ui/BaseButton";

export default {
  components: { BaseButton },
  data() {
    return {
      email: null,
      password: null,
      repeatPassword: null,
      displayName: null,
      photoUrl: null,
      passwordsMatching: true,
    };
  },
  computed: {
    passwordsDoMatch() {
      return this.password === this.repeatPassword;
    },
  },
  methods: {
    async register() {
      if (this.passwordsDoMatch) {
        this.passwordsMatching = true;
        await createUserWithEmailAndPassword(
          getAuth(),
          this.email,
          this.password
        )
          .then(() => {
            alert("Bruger oprettet!");
            updateProfile(getAuth().currentUser, {
              displayName: this.displayName,
              photoURL: this.photoUrl,
            });

            router.push("/");
          })
          .catch((error) => {
            console.log(error.code);
            alert(error.message);
          });
      } else {
        this.passwordsMatching = false;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.user-create {
  padding-top: 24px;
  @include flex-column;
  align-items: center;
  gap: 13px;
  .input-container {
    @include flex-column;
    width: 50%;
    @media screen and (max-width: 1100px) {
      width: 100%;
    }
    label {
      padding-bottom: 3px;
      font-weight: 600;
    }
    input {
      padding: 12px 12px;
      border: none;
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.16);
      border-radius: 4px;
    }
  }
  .not-matching {
    color: red;
    padding-top: 8px;
  }
}
</style>
