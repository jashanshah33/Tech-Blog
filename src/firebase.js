import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAErlEu3ZPHseEIr3VKo7DMqffh9Ym4sMY",
  authDomain: "react-hooks-blog-9dd09.firebaseapp.com",
  projectId: "react-hooks-blog-9dd09",
  storageBucket: "react-hooks-blog-9dd09.appspot.com",
  messagingSenderId: "131585621539",
  appId: "1:131585621539:web:bde83dac08d1abb3d5bb96"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

// export default firebaseConfig;