// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC85FRgLHHFrJFTfZQmWGxwAUf86YIM1ok",
  authDomain: "clone-july21.firebaseapp.com",
  projectId: "clone-july21",
  storageBucket: "clone-july21.appspot.com",
  messagingSenderId: "237330024872",
  appId: "1:237330024872:web:f93d67241741c74d4d359d",
  measurementId: "G-SW5CXZ28X0",
});

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
