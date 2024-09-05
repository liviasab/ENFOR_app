// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBo1ztc7FFn-9RS4Vm5HurAvyUmOqXA5A",
  authDomain: "enfor-app.firebaseapp.com",
  projectId: "enfor-app",
  storageBucket: "enfor-app.appspot.com",
  messagingSenderId: "476813303625",
  appId: "1:476813303625:web:4a28c1ceb9c9d8a28bc498"
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);