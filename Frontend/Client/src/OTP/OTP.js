// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3_f0ahqVEtIODM0xYWE5E7WjNhi59x3A",
  authDomain: "otp-validation-c173d.firebaseapp.com",
  projectId: "otp-validation-c173d",
  storageBucket: "otp-validation-c173d.appspot.com",
  messagingSenderId: "396273789660",
  appId: "1:396273789660:web:d0dc9a7904d3aa03a36219",
  measurementId: "G-NKD7T2PMXD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);