import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";
import "firebase/storage";

import firebase from "firebase/app";
import { firebaseConfig } from "./config-fb";

if (!firebase.apps || !firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const firestore = firebase.firestore();
const fns = firebase.functions();
const storageRef = firebase.storage().ref();

export { firebase, auth, firestore, fns, storageRef };
