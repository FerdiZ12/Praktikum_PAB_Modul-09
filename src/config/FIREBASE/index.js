import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
  apiKey: "AIzaSyCOfL74OpI9b7-BS0SwEDzLMM4dI9pAj8Y",
  authDomain: "noteapp-16dfb.firebaseapp.com",
  projectId: "noteapp-16dfb",
  storageBucket: "noteapp-16dfb.firebasestorage.app",
  messagingSenderId: "469186145649",
  appId: "1:469186145649:web:9e9690e6f8829142539ad0"
});

const FIREBASE = firebase;

export default FIREBASE;
