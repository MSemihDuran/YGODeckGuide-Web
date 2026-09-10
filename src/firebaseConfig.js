import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCDtpYZqCx5Qi-zOa0Oh-MhmJM0AMIXbBM",
  authDomain: "ygodeckguide.firebaseapp.com",
  projectId: "ygodeckguide",
  storageBucket: "ygodeckguide.firebasestorage.app",
  messagingSenderId: "1081367409168",
  appId: "1:1081367409168:web:b4faf2fbd49e9d26981095"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
