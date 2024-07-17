// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAuth , signInWithEmailAndPassword ,createUserWithEmailAndPassword , onAuthStateChanged , signOut , sendEmailVerification } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIy8A6CmpxZ-B429isf5FlC0_WlCq1MTE",
  authDomain: "st-firebase-facd5.firebaseapp.com",
  projectId: "st-firebase-facd5",
  storageBucket: "st-firebase-facd5.appspot.com",
  messagingSenderId: "1070912470972",
  appId: "1:1070912470972:web:0555f2e35a593fc22d75b9",
  measurementId: "G-W3ESFQ1DD1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export{
    auth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    sendEmailVerification 
}
