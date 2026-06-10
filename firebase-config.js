// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFFZvpTY292Ilq_vCGaSFOk4MNQersDtg",
  authDomain: "asistenciabifml.firebaseapp.com",
  databaseURL: "https://asistenciabifml-default-rtdb.firebaseio.com",
  projectId: "asistenciabifml",
  storageBucket: "asistenciabifml.firebasestorage.app",
  messagingSenderId: "831773431166",
  appId: "1:831773431166:web:90c37497734c43a84e8f2f",
  measurementId: "G-VVG07BDQGH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);