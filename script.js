// Import Firebase functions from firebase.js
import { app } from './firebase.js';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

// Setup Firebase Auth
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Login with Google function
function loginWithGoogle() {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      alert(`Welcome ${user.displayName}!`);
      console.log("User Info:", user);
    })
    .catch((error) => {
      console.error("Error during login:", error.message);
      alert("Login failed: " + error.message);
    });
}

// Attach login function to button click
document.getElementById("loginBtn").addEventListener("click", loginWithGoogle);
