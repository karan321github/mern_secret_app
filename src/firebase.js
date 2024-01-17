// Import the functions you need from the SDKs you need
import { constants } from "buffer";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-c7064.firebaseapp.com",
  projectId: "mern-auth-c7064",
  storageBucket: "mern-auth-c7064.appspot.com",
  messagingSenderId: "842443011346",
  appId: "1:842443011346:web:a06dbefbc58998132bafcb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);