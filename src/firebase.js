import firebase from "firebase/compat/app";
import"firebase/compat/auth";
import "firebase/compat/firestore"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBF8p4OLqnD8PGNuzdB9zlTiUq332YadbM",
    authDomain: "receipt-797e6.firebaseapp.com",
    projectId: "receipt-797e6",
    storageBucket: "receipt-797e6.appspot.com",
    messagingSenderId: "487108806314",
    appId: "1:487108806314:web:a8c12684250dd485a872d3"
})
const db = firebaseApp.firestore()
const auth = firebase.auth()
export {auth,db}