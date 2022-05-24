<template>
  <ContentContainer
    title="Rediger bruger"
    class="content-wrapper"
    :title-centered="Boolean(true)"
  >
    <div class="edit-user">
      <div class="edit-user__input-container">
        <label>Navn</label>
        <input
          type="text"
          :placeholder="user.displayName"
          v-model="displayName"
        />
      </div>
      <div class="edit-user__input-container">
        <label>Email</label>
        <input type="text" :placeholder="user.email" v-model="email" disabled />
      </div>
      <div class="edit-user__input-container">
        <label>Billede URL</label>
        <input type="text" :placeholder="user.photoURL" v-model="photoURL" />
      </div>
      <BaseButton text="Opdater" @click="updateProfile()" />
    </div>
  </ContentContainer>
</template>

<script>
import { mapGetters } from "vuex";
import ContentContainer from "../../ui/ContentContainer";
import BaseButton from "../../ui/BaseButton";

export default {
  name: "EditUser",
  components: { ContentContainer, BaseButton },
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
        if (this.email) {
          await this.$store.dispatch("updateEmail", {
            email: this.email,
          });
        }
        if (this.photoURL) {
          await this.$store.dispatch("updatePhotoURL", {
            photoURL: this.photoURL,
          });
        }
        alert("Data opdateret succesfuld, log ind igen");
        this.$store.dispatch("logout");
      } catch (error) {
        console.log(error.code);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.content-wrapper {
  width: max-content;
  .edit-user {
    padding-top: 18px;
    @include flex-column;
    align-items: center;
    gap: 13px;
    &__input-container {
      width: 100%;
      @include flex-column;
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
  }
}
</style>
