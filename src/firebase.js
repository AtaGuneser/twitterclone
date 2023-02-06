import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/database";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBes9spX5DzNuPG7P5_t6JoMsJCBzRomPk",
  authDomain: "twitter-clone-49aea.firebaseapp.com",
  projectId: "twitter-clone-49aea",
  storageBucket: "twitter-clone-49aea.appspot.com",
  messagingSenderId: "91477895713",
  appId: "1:91477895713:web:e8b2c2b14ac82da16e9160",
  measurementId: "G-ST75ZSBC1S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;