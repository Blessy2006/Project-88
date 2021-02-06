import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyC7Q_m2HdXQAUHR3zGRDwxkiwXHTF3MRR8",
  authDomain: "santa-book-f9d8d.firebaseapp.com",
  databaseURL: "https://santa-book-f9d8d-default-rtdb.firebaseio.com",
  projectId: "santa-book-f9d8d",
  storageBucket: "santa-book-f9d8d.appspot.com",
  messagingSenderId: "1035819223532",
  appId: "1:1035819223532:web:3b61a5c275e3f6c19e58c9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
