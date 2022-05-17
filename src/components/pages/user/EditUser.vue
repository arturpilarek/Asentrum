<template>
  <div>
    <h2>Edit User</h2>
    <div>
      <div>
        <h4>Display Name</h4>
        <input
          type="text"
          :placeholder="user.displayName"
          v-model="displayName"
        />
      </div>
      <div>
        <h4>Email</h4>
        <input type="text" :placeholder="user.email" v-model="email" />
      </div>
      <div>
        <h4>Photo URL</h4>
        <input type="text" :placeholder="user.photoURL" v-model="photoURL" />
      </div>
      <button @click="updateProfile()">Update Profile</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "EditUser",
  data() {
    return {
      displayName: "",
      email: "",
      photoURL: "",
    };
  },
  computed: {
    ...mapGetters(["user"]),
  },
  methods: {
    async updateProfile() {
      try {
        if (this.displayName) {
          await this.$store.dispatch("updateDisplayName", {
            displayName: this.displayName,
          });
        }
      } catch (error) {
        console.log(error.code);
      }
    },
  },
};
</script>

<style scoped></style>
