// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNDr4qUZ1D1iRIdch0nI7nr7scYJR-s8s",
  authDomain: "my-project-name-65983.firebaseapp.com",
  projectId: "my-project-name-65983",
  storageBucket: "my-project-name-65983.appspot.com",
  messagingSenderId: "438284596278",
  appId: "1:438284596278:web:e998b0b23df8f220241497",
  measurementId: "G-54NS1T5KEH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);