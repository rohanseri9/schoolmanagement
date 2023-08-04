// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBH6_WKuqBWpeh9irEylK44tN1M2F2jX7w",
  authDomain: "student-d991f.firebaseapp.com",
  projectId: "student-d991f",
  storageBucket: "student-d991f.appspot.com",
  messagingSenderId: "121079417969",
  appId: "1:121079417969:web:263e05d42ece8f13cc1fd0"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export{db};
