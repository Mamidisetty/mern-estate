// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-b3c0d.firebaseapp.com",
  projectId: "mern-estate-b3c0d",
  storageBucket: "mern-estate-b3c0d.appspot.com",
  messagingSenderId: "376898388868",
  appId: "1:376898388868:web:9ce18a84c594e69505d3d1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);