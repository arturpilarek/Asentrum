<template>
  <h1>Create an Account</h1>
  <p><input type="text" placeholder="Email" v-model="email" /></p>
  <p><input type="text" placeholder="Display name" v-model="displayName" /></p>
  <p><input type="text" placeholder="Image URL" v-model="photoUrl" /></p>
  <p><input type="password" placeholder="Password" v-model="password" /></p>
  <p><button @click="register">Submit</button></p>
  <p>{{ email }}</p>
  <p>{{ password }}</p>
</template>

<script>
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import router from "../../../router";

export default {
  data() {
    return {
      email: null,
      password: null,
      displayName: null,
      photoUrl: null,
    };
  },
  methods: {
    async register() {
      await createUserWithEmailAndPassword(getAuth(), this.email, this.password)
        .then((res) => {
          alert("User created!");
          console.log(res.user);
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
    },
  },
};
</script>

<style scoped></style>
