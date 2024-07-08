// Import the functions you need from the SDKs you need
import { initializeApp } from "@firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPlZPC3-lJUDn3V6D7iHSmiMtuHS3E7PQ",
  authDomain: "urban-txt-9cbe6.firebaseapp.com",
  projectId: "urban-txt-9cbe6",
  storageBucket: "urban-txt-9cbe6.appspot.com",
  messagingSenderId: "50334608769",
  appId: "1:50334608769:web:a1d2b0b0c856e15a724c80",
  measurementId: "G-KFKBBJ950E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
