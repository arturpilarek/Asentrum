<template>
  <h1>Login to your account</h1>
  <p><input type="text" placeholder="Email" v-model="email" /></p>
  <p><input type="password" placeholder="Password" v-model="password" /></p>
  <p v-if="errorMsg">{{ errorMsg }}</p>
  <p><button @click="login">Submit</button></p>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import router from "../router";

export default {
  data() {
    return {
      email: null,
      password: null,
      errorMsg: null,
    };
  },
  methods: {
    async login() {
      await signInWithEmailAndPassword(getAuth(), this.email, this.password)
        .then((data) => {
          console.log("Registered", data);
          router.push("/");
        })
        .catch((error) => {
          console.log(error.code);
          switch (error.code) {
            case "auth/invalid-email":
              this.errorMsg = "Invalid Email";
              break;
            case "auth/user-not-found":
              this.errorMsg = "No user found";
              break;
            case "auth/wrong-password":
              this.errorMsg = "Incorrect password";
              break;
            default:
              this.errorMsg = "Email or password was incorrect";
              break;
          }
        });
    },
  },
};
</script>

<style scoped></style>
