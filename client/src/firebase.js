// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-post.firebaseapp.com",
  projectId: "mern-blog-post",
  storageBucket: "mern-blog-post.appspot.com",
  messagingSenderId: "698516953817",
  appId: "1:698516953817:web:bf4c3861108d08b6f7fcc8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

