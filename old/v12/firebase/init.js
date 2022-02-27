import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD61M_RMf8QcsJV8jJlKKZN3nqis5dd8Z8",
  authDomain: "nk-logistics.firebaseapp.com",
  projectId: "nk-logistics",
  storageBucket: "nk-logistics.appspot.com",
  messagingSenderId: "120439283490",
  appId: "1:120439283490:web:e9562964dd25ad6b2a4f7b",
  measurementId: "G-49QEEMPZ94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export default db
