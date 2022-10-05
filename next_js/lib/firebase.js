// //bundles these SDKs to main Js bunndle
// import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";
// import "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyDnWY6tdOSvZbk0WdqOwnSAS1ZAuTXon1I",
//   authDomain: "test-ea119.firebaseapp.com",
//   projectId: "test-ea119",
//   storageBucket: "test-ea119.appspot.com",
//   messagingSenderId: "943960141847",
//   appId: "1:943960141847:web:d89ec6a57b4fb2f5d0ec52",
//   measurementId: "G-4RY9P4XZWZ",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);

// export const auth = firebase.auth();
// export const googleAuthProvided = new firebase.auth.GoogleAuthProvided();
// export const firestore = firebase.firestore();
// export const storage = firebase.storage();

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDnWY6tdOSvZbk0WdqOwnSAS1ZAuTXon1I",
  authDomain: "test-ea119.firebaseapp.com",
  projectId: "test-ea119",
  storageBucket: "test-ea119.appspot.com",
  messagingSenderId: "943960141847",
  appId: "1:943960141847:web:d89ec6a57b4fb2f5d0ec52",
  measurementId: "G-4RY9P4XZWZ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
