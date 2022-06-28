import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  apiKey: "AIzaSyDfotpqczOFl2VOzw9Iyo1FstEJb0lwOqM",
  authDomain: "galytix-form.firebaseapp.com",
  projectId: "galytix-form",
  storageBucket: "galytix-form.appspot.com",
  messagingSenderId: "757106082815",
  appId: "1:757106082815:web:3dc1a6b18a96808ef11dca",
  measurementId: "G-9XCQG84EYC"
});

const db = firebaseApp.firestore();

// Export the database for component use
export { db }