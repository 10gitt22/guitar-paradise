// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBziazGxxyh03HV4CfS0UkQi74HQLUpveQ",
  authDomain: "guitar-paradise-store.firebaseapp.com",
  projectId: "guitar-paradise-store",
  storageBucket: "guitar-paradise-store.appspot.com",
  messagingSenderId: "230049728349",
  appId: "1:230049728349:web:ff5c3af6a50f2f937c8ab4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const firestore = getFirestore(app)