// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/compat/firestore"

import myfirebase from "firebase/compat/app"

const firebaseConfig = {
  apiKey: "AIzaSyAq7tkKubOoqSU5Bx3SLi62gTWceCaTwWM",
  authDomain: "contactapp-34f87.firebaseapp.com",
  projectId: "contactapp-34f87",
  storageBucket: "contactapp-34f87.appspot.com",
  messagingSenderId: "570062679804",
  appId: "1:570062679804:web:89f13ed8d8c0e92034b179",
  measurementId: "G-6JF4Z9VT70"
};

// Initialize Firebase
const app = myfirebase.initializeApp(firebaseConfig);
export const db = myfirebase.firestore()
const analytics = getAnalytics(app);