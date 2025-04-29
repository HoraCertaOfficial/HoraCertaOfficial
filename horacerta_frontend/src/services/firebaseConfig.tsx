// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBu5expSAHW9LAk2Cl-UGUpUMNcDKFeUcI",
  authDomain: "horacertaweb.firebaseapp.com",
  projectId: "horacertaweb",
  storageBucket: "horacertaweb.firebasestorage.app",
  messagingSenderId: "858799087768",
  appId: "1:858799087768:web:d2f5c3a2409b71e8b7f0ed",
  measurementId: "G-0K756VYPCT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);