// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhlxn39TetcWdzA5Lyoo7jvLDUVHQUbdU",
  authDomain: "reactnative-b4451.firebaseapp.com",
  projectId: "reactnative-b4451",
  storageBucket: "reactnative-b4451.appspot.com",
  messagingSenderId: "1058702936337",
  appId: "1:1058702936337:web:efafcf47a1606c1cf2a4b0",
  measurementId: "G-YWFWEW24TL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
