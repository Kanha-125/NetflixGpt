// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZUjRcYUg04Azmb78dNiizF0KLKLYNw9I",
  authDomain: "netflixgpt-874d4.firebaseapp.com",
  projectId: "netflixgpt-874d4",
  storageBucket: "netflixgpt-874d4.appspot.com",
  messagingSenderId: "608646515678",
  appId: "1:608646515678:web:0b01a480536ca2edb6ab4f",
  measurementId: "G-BWB9RX0NTN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
