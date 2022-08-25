// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { onSnapshot } from "firebase/firestore";
import { getFirestore, collection, query, orderBy, limit, where, getDocs, updateDoc, deleteField, deleteDoc,increment, addDoc, collectionGroup, doc, setDoc } from "firebase/firestore/lite";
import {ref, onValue} from "firebase/database";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCoiuKasTTon4sPbAX9uNnl05ZPqN9ljk",
  authDomain: "thoughts-app-bf090.firebaseapp.com",
  databaseURL: "https://thoughts-app-bf090-default-rtdb.firebaseio.com",
  projectId: "thoughts-app-bf090",
  storageBucket: "thoughts-app-bf090.appspot.com",
  messagingSenderId: "22927590019",
  appId: "1:22927590019:web:baf5410c838e598a8ed1b6",
  measurementId: "G-2PDEQMRDM9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export {
  analytics, 
  db,
  collection, 
  getAuth, 
  query, 
  signOut, 
  addDoc, 
  collectionGroup, 
  getDocs, 
  doc, 
  setDoc, 
  auth, 
  where, 
  createUserWithEmailAndPassword, 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  ref,
  onValue,
  deleteDoc,
  deleteField,
  updateDoc,
  increment,
  onSnapshot,
  orderBy, 
  limit,
  storage
}