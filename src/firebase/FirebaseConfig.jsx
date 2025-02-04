// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgc3Ogmy_wuJ-7p8haVNNRphUxoc03p48",
  authDomain: "myecommerce-a6ad0.firebaseapp.com",
  projectId: "myecommerce-a6ad0",
  storageBucket: "myecommerce-a6ad0.firebasestorage.app",
  messagingSenderId: "486028201277",
  appId: "1:486028201277:web:af549d33a03b389a7ac954",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };
