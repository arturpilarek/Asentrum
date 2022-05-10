<template>
  <button v-if="isLoggedIn">Sign Out</button>
</template>

<script>
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import router from "../../../router";

export default {
  name: "SignOut",
  data() {
    return {
      auth: null,
      isLoggedIn: false,
    };
  },
  mounted() {
    this.auth = getAuth();
    onAuthStateChanged(this.auth, (user) => {
      user ? (this.isLoggedIn = true) : (this.isLoggedIn = false);
    });
  },
  methods: {
    async signOut() {
      signOut(this.auth).then(() => {
        router.push("/login/");
      });
    },
  },
};
</script>

<style scoped></style>
