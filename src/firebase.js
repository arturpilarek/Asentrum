import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDq6HJqM08BBt_nfeHF_c6nwSm99PX3RUU",
  authDomain: "asentrum-4b06b.firebaseapp.com",
  projectId: "asentrum-4b06b",
  storageBucket: "asentrum-4b06b.appspot.com",
  messagingSenderId: "272866243253",
  appId: "1:272866243253:web:3433b31638882a021784fc",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const tasksCollection = collection(db, "tasks");
export default tasksCollection;
