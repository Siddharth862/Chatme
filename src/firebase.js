import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXAx3oy6gpDWJgp8HhgzjGa9y-3nhbSqE",
  authDomain: "chat-me-9d904.firebaseapp.com",
  projectId: "chat-me-9d904",
  storageBucket: "chat-me-9d904.appspot.com",
  messagingSenderId: "515009463684",
  appId: "1:515009463684:web:aa21f1758e8639253d49d1",
  measurementId: "G-3J1WHQFRY7"
};

// Initialize Firebase

//const analytics = getAnalytics(app);

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
