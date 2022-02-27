import * as firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getfirestore, where, query } from 'firebase/firestore';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD61M_RMf8QcsJV8jJlKKZN3nqis5dd8Z8",
  authDomain: "nk-logistics.firebaseapp.com",
  projectId: "nk-logistics",
  storageBucket: "nk-logistics.appspot.com",
  messagingSenderId: "120439283490",
  appId: "1:120439283490:web:e9562964dd25ad6b2a4f7b",
  measurementId: "G-49QEEMPZ94"
};



firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// const db = getFirestore(app);

export default getFirestore(app);
