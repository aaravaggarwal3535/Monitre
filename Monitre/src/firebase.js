// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Use Vite's `import.meta.env` to access environment variables
const firebaseConfig = {
    apiKey: "AIzaSyCuLb_Gq6C0YEHjxHo_qqBfpN0uOfGabYo",
    authDomain: "monitre-bfcdf.firebaseapp.com",
    projectId: "monitre-bfcdf",
    storageBucket: "monitre-bfcdf.firebasestorage.app",
    messagingSenderId: "271827213137",
    appId: "1:271827213137:web:2412b9499bbdec6d021170",
    measurementId: "G-RY4HWQN4VC"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Google Auth Provider
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
