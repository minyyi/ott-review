import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAb0gIcPPglh5lrjw0V63PBu_Wq-KZsPe0",
  authDomain: "miny-1.firebaseapp.com",
  projectId: "miny-1",
  storageBucket: "miny-1.appspot.com",
  messagingSenderId: "272478030559",
  appId: "1:272478030559:web:198f916cd265d41c70376a",
  measurementId: "G-0NK1DF7CB0",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { app, auth, db };
