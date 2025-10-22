// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQuMS1qmN_9zGR4iFCZ_AV82TPmkW5ECA",
  authDomain: "toy-topia-f6ccd.firebaseapp.com",
  projectId: "toy-topia-f6ccd",
  storageBucket: "toy-topia-f6ccd.firebasestorage.app",
  messagingSenderId: "804905852659",
  appId: "1:804905852659:web:b4242ddfb0f3221018a186"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);