import { auth, firestoreDb } from "../lib/firebase";
import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth"; //helps listen current user on firebase

export function useUserData() {
  const [user] = useAuthState(auth);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    // turn off realtime subscription
    let unsubscribe;

    if (user) {
      try {
        unsubscribe = onSnapshot(doc(firestoreDb, "users", user.uid), (doc) => {
          setUsername(doc.data()?.username);
        });
      } catch (e) {
        console.log(e.message);
      }
    } else {
      setUsername(null);
    }
    return unsubscribe;
  }, [user]);

  return { user, username };
}
