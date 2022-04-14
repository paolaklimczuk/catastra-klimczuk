// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDr6edllRPsEN5k3r8JoM-aRFoZzzHPKAs",
  authDomain: "catrasca-klimczuk.firebaseapp.com",
  projectId: "catrasca-klimczuk",
  storageBucket: "catrasca-klimczuk.appspot.com",
  messagingSenderId: "171032627934",
  appId: "1:171032627934:web:ed24d1cb70233a32e9904f",
  measurementId: "G-M9EP56QDD4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore (app)

export default db;