// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  limit,
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
export const firestoreDb = getFirestore(app);
export const storage = getStorage(app);

/// Helper functions

/**`
 * Gets a users/{uid} document with username
 * @param  {string} username
 */
export async function getUserWithUsername(username) {
  const q = query(
    collection(firestoreDb, "users"),
    where("username", "==", username),
    limit(1)
  );
  const docSnap = await getDocs(q);

  return docSnap;
}

/**`
 * Converts a firestore document to JSON
 * @param  {DocumentSnapshot} doc
 */
export function postToJSON(doc) {
  const data = doc.data();
  return {
    ...data,
    // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
    createdAt: data?.createdAt.toMillis() || 0,
    updatedAt: data?.updatedAt.toMillis() || 0,
  };
}
