import firebase from "firebase/compat";
import { ref, onMounted, onUnmounted } from "vue";

const config = {
  apiKey: "AIzaSyDq6HJqM08BBt_nfeHF_c6nwSm99PX3RUU",
  authDomain: "asentrum-4b06b.firebaseapp.com",
  projectId: "asentrum-4b06b",
  storageBucket: "asentrum-4b06b.appspot.com",
  messagingSenderId: "272866243253",
  appId: "1:272866243253:web:3433b31638882a021784fc",
};

const firebaseApp = firebase.initializeApp(config);
const userCollection = db.collection("users");

export const getUser = async (id) => {
  const user = await userCollection.doc(id).get();
  return user.exists ? user.data() : null;
};

export const updateUser = (id, user) => {
  return userCollection.doc(id).update(user);
};

export const deleteUser = (id) => {
  return userCollection.doc(id).delete();
};

export const useLoadUsers = () => {
  const users = ref([]);
  const close = userCollection.onSnapshot((snapshot) => {
    users.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  });
  onUnmounted(close);
  return users;
};
