// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Firebase config
const firebaseConfig = {
  apiKey: "",
  authDomain: "jskilllink.firebaseapp.com",
  projectId: "jskilllink",
  storageBucket: "jskilllink.appspot.com",
  messagingSenderId: "74779883744",
  appId: "1:74779883744:web:70198d069b033026283885",
  measurementId: "G-5SWEPTW5MF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Button Click
document.getElementById("loginBtn").addEventListener("click", () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log("User:", result.user.displayName);
      alert("Welcome, " + result.user.displayName);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
