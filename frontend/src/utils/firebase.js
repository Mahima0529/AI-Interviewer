import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "ai-interviewer-5e6bb.firebaseapp.com",
  projectId: "ai-interviewer-5e6bb",
  storageBucket: "ai-interviewer-5e6bb.firebasestorage.app",
  messagingSenderId: "464423150770",
  appId: "1:464423150770:web:350849256c037a134595ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth= getAuth(app);

const provider= new GoogleAuthProvider();

export {auth, provider}