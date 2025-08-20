// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAMl_aM59YWbIHWmGr7yewKKfKs9iU2wl8",
  authDomain: "eureka-craft.firebaseapp.com",
  projectId: "eureka-craft",
  storageBucket: "eureka-craft.firebasestorage.app",
  messagingSenderId: "278923694216",
  appId: "1:278923694216:web:97f0b7b5abf29d7e890f3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

