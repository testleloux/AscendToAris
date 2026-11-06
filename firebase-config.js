// Sostituisci null con la configurazione del tuo progetto Firebase (vedi SETUP.md):
// window.FIREBASE_CONFIG={apiKey:"...",authDomain:"...",projectId:"...",appId:"..."};
window.FIREBASE_CONFIG={apiKey:"...",authDomain:"...",projectId:"...",appId:"..."}
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbSY3l4W-u0woRXDQdlpHnCtpFX4JRyKU",
  authDomain: "ascend-f2970.firebaseapp.com",
  projectId: "ascend-f2970",
  storageBucket: "ascend-f2970.firebasestorage.app",
  messagingSenderId: "477132846039",
  appId: "1:477132846039:web:77c82a05e14a81177bd192"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
