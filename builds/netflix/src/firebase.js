import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyA8Dr-3jB3XMk3MleNdgz_kWCynSko4UnE",
  authDomain: "netflix-clone-56cdf.firebaseapp.com",
  projectId: "netflix-clone-56cdf",
  storageBucket: "netflix-clone-56cdf.appspot.com",
  messagingSenderId: "395661025536",
  appId: "1:395661025536:web:720b16d5337693c581d3e5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore;
const auth = firebase.auth();

export { auth };
export default db;
