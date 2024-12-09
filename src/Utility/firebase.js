import firebase from "firebase/compat/app";
// auth
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCopmUJ_edzVT6H-LOdE1oI5lqBo2t4wmg",
  authDomain: "clone-bde90.firebaseapp.com",
  projectId: "clone-bde90",
  storageBucket: "clone-bde90.firebasestorage.app",
  messagingSenderId: "645503726180",
  appId: "1:645503726180:web:a3fffecdf71c69b1fee571",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
