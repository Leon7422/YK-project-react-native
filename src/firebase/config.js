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
  apiKey: "AIzaSyDL4D4xvd6P4jz0UWp1IrOTJX_N6qje6-U",
  authDomain: "react-native-social-725000725.firebaseapp.com",
  projectId: "react-native-social-725000725",
  storageBucket: "react-native-social-725000725.appspot.com",
  messagingSenderId: "57885908913",
  appId: "1:57885908913:web:a59663734e462b116f6790",
  measurementId: "G-BSHN25TR49",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
