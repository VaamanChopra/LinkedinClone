import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyAVtGBqwXt19A4WlLKdZANtnyE0A5jQ1N8",
    // apikey:process.env.FIREBASE_API_KEY,
    authDomain: "linkedinn-683b7.firebaseapp.com",
    projectId: "linkedinn-683b7",
    storageBucket: "linkedinn-683b7.appspot.com",
    messagingSenderId: "826798230328",
    appId: "1:826798230328:web:bbbf3b9d71f824f1bb4fcd"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};