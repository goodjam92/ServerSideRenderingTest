import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCg63LX9vbgZmBJGaL2SR9Fr6goDu5DPL0",
  authDomain: "ssr1-3b375.firebaseapp.com",
  projectId: "ssr1-3b375",
  storageBucket: "ssr1-3b375.appspot.com",
  messagingSenderId: "16913094288",
  appId: "1:16913094288:web:618a76769a031389876a15",
  measurementId: "G-2RXWPDVMHJ",
};

export const FIREBASE_TOKEN =
  "1//0e0UT10K8W4b4CgYIARAAGA4SNwF-L9IrjkLAy-nM-EazJL_5r-xNQyXCNaMeieDgmFIgDZWpqqp5Nw7LvvwMCKWT5MICiybrIwE";

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

export const authService = getAuth(firebaseApp);
export const dbService = getFirestore(firebaseApp);
