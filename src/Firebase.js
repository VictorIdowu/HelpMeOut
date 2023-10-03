// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHgLgBkp86p3FIINNvrX3xqAGNdz6SlEQ",
  authDomain: "helpmeout-be431.firebaseapp.com",
  projectId: "helpmeout-be431",
  storageBucket: "helpmeout-be431.appspot.com",
  messagingSenderId: "31052037798",
  appId: "1:31052037798:web:28c00700b88c8aac3efe67",
  measurementId: "G-TJLP61N8NM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };
