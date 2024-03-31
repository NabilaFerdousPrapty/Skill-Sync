// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBJp146qOfY-xgCH4OYFohPdR6ONW3hcs",
  authDomain: "skill-sync-1a737.firebaseapp.com",
  projectId: "skill-sync-1a737",
  storageBucket: "skill-sync-1a737.appspot.com",
  messagingSenderId: "862980979416",
  appId: "1:862980979416:web:430fd3de598182f0ddf5ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;