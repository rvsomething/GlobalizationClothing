// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2X0qPe8VQFC2W5r2QwKX2h20xIlbUZoo",
  authDomain: "globalization-clothing.firebaseapp.com",
  projectId: "globalization-clothing",
  storageBucket: "globalization-clothing.appspot.com",
  messagingSenderId: "928397268613",
  appId: "1:928397268613:web:e3da30ac02da91acf07bec",
  measurementId: "G-MDHC1KM33X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
