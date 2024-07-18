
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {collection,getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQ3C7BqIwQCXxElPC76tWaNe3cI36TgUk",
  authDomain: "zoom-clone-8701a.firebaseapp.com",
  projectId: "zoom-clone-8701a",
  storageBucket: "zoom-clone-8701a.appspot.com",
  messagingSenderId: "466735104476",
  appId: "1:466735104476:web:b3171bb4ce41d41e938f19",
  measurementId: "G-V4CFX4113N"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);
export const userRef=collection(firebaseDB,"users");
export const meetingsRef=collection(firebaseDB,"meetings");
