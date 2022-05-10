<template>
  <h1>Create an Account</h1>
  <p><input type="text" placeholder="Email" v-model="email" /></p>
  <p><input type="password" placeholder="Password" v-model="password" /></p>
  <p><button @click="register">Submit</button></p>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import router from "../../../router";

export default {
  data() {
    return {
      email: null,
      password: null,
    };
  },
  methods: {
    async register() {
      await createUserWithEmailAndPassword(getAuth(), this.email, this.password)
        .then((data) => {
          console.log("Registered", data);
          router.push("/");
        })
        .catch((error) => {
          console.log(error.code);
          alert(error.message);
        });
    },
  },
};
</script>

<style scoped></style>
