import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtF5Jnq7p6e0DKAgQZ2prwa2GoCyyyMlk",
  authDomain: "hanukaclone.firebaseapp.com",
  projectId: "hanukaclone",
  storageBucket: "hanukaclone.appspot.com",
  messagingSenderId: "556677926260",
  appId: "1:556677926260:web:78044a6410e22e89887021"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
