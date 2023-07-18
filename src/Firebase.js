// import firebase from 'firebase/app';
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDpf6g29lP7V_nX4negidE-mrSGDZ5tqJg",
    authDomain: "eshop-85d05.firebaseapp.com",
    projectId: "eshop-85d05",
    storageBucket: "eshop-85d05.appspot.com",
    messagingSenderId: "720859124141",
    appId: "1:720859124141:web:ea036bb18f04dadd7ed124",
    measurementId: "G-TJHJPCHCKE"
};

// const firebaseApp = firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
const db = getFirestore(app);

// const auth = firebase.auth();
const auth = getAuth();

export { db, auth, signInWithEmailAndPassword, createUserWithEmailAndPassword };