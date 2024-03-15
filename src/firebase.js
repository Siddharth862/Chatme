import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBVK3lqJTXK2Rxi6bg9bbBr_6uloS9J4RE",
  authDomain: "chatapp-c317d.firebaseapp.com",
  projectId: "chatapp-c317d",
  storageBucket: "chatapp-c317d.appspot.com",
  messagingSenderId: "804111303809",
  appId: "1:804111303809:web:ddd4b5a17568e46b703980",
  measurementId: "G-N4T606J8G8"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()








