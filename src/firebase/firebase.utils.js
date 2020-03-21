import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD0Ah38vWGJPPHPF661cmzJfbU4k6mgvng",
  authDomain: "shopping-cart-a3aa4.firebaseapp.com",
  databaseURL: "https://shopping-cart-a3aa4.firebaseio.com",
  projectId: "shopping-cart-a3aa4",
  storageBucket: "shopping-cart-a3aa4.appspot.com",
  messagingSenderId: "67830803554",
  appId: "1:67830803554:web:c06a63809e6a8e05e5353b"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
