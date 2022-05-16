import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  getAuth,
} from "firebase/auth";
// import { createUserWithEmailAndPassword } from "firebase/auth";

export default {
  state: {
    user: {
      displayName: "No user found",
      photoURL:
        "https://images.unsplash.com/photo-1519755898819-cef8c3021d6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
      console.log("user state changed:", payload);
    },
  },
  getters: {
    photoURL: (state) => state.user.photoURL,
    displayName: (state) => state.user.displayName,
  },
  actions: {
    // Add to the UserCreate later on
    async login(context, { email, password }) {
      const res = await signInWithEmailAndPassword(getAuth(), email, password);
      if (res) {
        context.commit("setUser", res.user);
      } else {
        throw new Error("something went wrong");
      }
    },

    async logout(context) {
      console.log("logout");
      await signOut(getAuth());
      context.commit("setUser", null);
    },

    async signup(context, { email, password }) {
      const res = await createUserWithEmailAndPassword(
        getAuth(),
        email,
        password
      );
      if (res) {
        await context.commit("setUser", res.user);
      } else {
        throw new Error("Der er opstået en fejl");
      }
    },
  },
};
