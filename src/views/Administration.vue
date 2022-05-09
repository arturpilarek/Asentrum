<template>
  <AddUser />
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <h2>Edit City</h2>
          <form @submit.prevent="updateCity">
            <div class="form-group">
              <input
                type="text"
                class="form-control mb-2"
                placeholder="City"
                v-model="cityInfo.name"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control mb-2"
                placeholder="County"
                v-model="cityInfo.county"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control mb-2"
                placeholder="Country"
                v-model="cityInfo.country"
              />
            </div>
            <button class="btn btn-primary">Update City</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddUser from "../components/AddUser";
import citiesColRef from "../firebase";
import { getDoc, doc, setDoc } from "firebase/firestore";
export default {
  components: { AddUser },
  data() {
    return {
      selectedCity: {},
      cityId: null,
      docRef: null,
      cityInfo: {
        name: null,
        county: null,
        country: null,
      },
    };
  },

  methods: {
    async getCity() {
      let cityRef = doc(citiesColRef, this.cityId);
      this.docRef = cityRef;
      let city = await getDoc(this.docRef);
      let cityData = city.data();
      this.cityInfo.name = cityData.name;
      this.cityInfo.county = cityData.county;
      this.cityInfo.country = cityData.country;
    },
    async updateCity() {
      await setDoc(this.docRef, this.cityInfo);
      alert(
        `The city with ID of ${this.cityId} has been updated successfully!`
      );
      this.$router.push("/");
    },
  },

  created() {
    let cityId = this.$route.params.cityId;
    this.cityId = cityId;
    this.getCity();
  },
};
</script>

<style></style>

<!--<template>-->
<!--  <h1>Administration</h1>-->
<!--  <div>-->
<!--    <h2>Create new user</h2>-->
<!--    <p><input type="text" placeholder="Email" v-model="email" /></p>-->
<!--    <p><input type="password" placeholder="Password" v-model="password" /></p>-->
<!--    <p><button @click="register">Register</button></p>-->
<!--  </div>-->
<!--</template>-->

<!--<script setup>-->
<!--import { ref } from "vue";-->
<!--import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";-->
<!--import { useRouter } from "vue-router";-->

<!--const email = ref("");-->
<!--const password = ref("");-->
<!--const router = useRouter(); //get a reference to our vue router-->

<!--const register = () => {-->
<!--  // get Auth takes email and password value and returns a promise-->
<!--  createUserWithEmailAndPassword(getAuth(), email.value, password.value)-->
<!--    .then((data) => {-->
<!--      console.log("Successfully registered");-->
<!--      console.log(data);-->
<!--      router.push("/tasks");-->
<!--    })-->
<!--    .catch((error) => {-->
<!--      console.log(error.code);-->
<!--      alert(error.message);-->
<!--    });-->
<!--};-->

<!--// export default {-->
<!--//   name: "Administration.vue",-->
<!--// };-->
<!--</script>-->

<!--<style scoped></style>-->
