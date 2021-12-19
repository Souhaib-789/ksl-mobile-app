
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc, addDoc, collection, getDocs, query, where } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAvy0cgOxnC7-NxpjQQVGJc8ZkY61rK_hs",
  authDomain: "react-native-90c16.firebaseapp.com",
  projectId: "react-native-90c16",
  storageBucket: "react-native-90c16.appspot.com",
  messagingSenderId: "766919725139",
  appId: "1:766919725139:web:1db15118195ff6aac3f6a6",
  measurementId: "G-QH1QLYNLBZ"
};

const app = initializeApp(firebaseConfig);
// const storage = getStorage(firebaseConfig);
const db = getFirestore();

export {
  db,
  // storage,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  doc,
  setDoc,
  addDoc,
  collection,
  getDocs,
  query,
  getDoc,
}