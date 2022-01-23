// Import the functions you need from the SDKs you need
import firebase, { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCr5t-FwN6EDfsv3rYiB0wyskkkYYQ8ZVc",
  authDomain: "minnehack-geese.firebaseapp.com",
  projectId: "minnehack-geese",
  storageBucket: "minnehack-geese.appspot.com",
  messagingSenderId: "902836102357",
  appId: "1:902836102357:web:1ffccdfe8f1df3a6caae5c",
  measurementId: "G-PS6DR1WJ4J",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const storage = getStorage();
export const analytics = getAnalytics(app);
export const auth = getAuth();
