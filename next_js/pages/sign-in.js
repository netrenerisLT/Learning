import { auth, firestore, googleAuthProvider } from "../lib/firebase";
import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { UserContext } from "../lib/context";
import { useCallback, useContext, useEffect, useState } from "react";
import {
  doc,
  getDoc,
  onSnapshot,
  collection,
  query,
  where,
  getDocs,
  writeBatch,
} from "firebase/firestore";
import debounce from "lodash.debounce";

export default function SignIn({}) {
  const { user, username } = useContext(UserContext);

  // 1. user signed out <SignInButton />
  // 1. user signed in, but missing username <UsernameForm />
  // 1. user signed out <SignInButton />
  return (
    <main>
      {user ? (
        !username ? (
          <UsernameForm />
        ) : (
          <SignOutButton />
        )
      ) : (
        <SignInButton />
      )}
    </main>
  );
}
//signin with google account
function SignInButton() {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const signInPopup = async () => {
    const result = await signInWithPopup(auth, provider);
  };
  return (
    <button className="btn-google" onClick={signInPopup}>
      Sign in with Google
    </button>
  );
}

function SignOutButton() {
  return (
    <button className="btn-google" onClick={() => auth.signOut()}>
      sign out
    </button>
  );
}

function UsernameForm() {
  const [formValue, setFormValue] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const { user, username } = useContext(UserContext);

  const onChange = (event) => {
    const val = event.target.value.toLowerCase();
    const regex = /^(?=[a-zA-Z0-9._]{3,15}$)(?!.*[_.]{2})[^_.].*[^_.]$/;

    // Only set form value if length is < 3 OR it passes regex
    if (val.length < 3) {
      setFormValue(val);
      setLoading(false);
      setIsValid(false);
    }

    if (regex.test(val)) {
      setFormValue(val);
      setLoading(true);
      setIsValid(false);
    }
  };

  useEffect(() => {
    checkUsername(formValue);
  }, [formValue]);

  // Hit the database for username match after each debounced change
  // useCallback is required for debounce to work
  const checkUsername = useCallback(
    debounce(async (username) => {
      if (username.length >= 3) {
        const docRef = doc(firestore, "usernames", username);
        const docSnap = await getDoc(docRef);
        if (!docSnap.exists()) {
          setIsValid(true);
        }
        setLoading(false);
      }
    }, 500),
    []
  );

  const onSubmit = async (e) => {
    e.preventDefault();

    // Create refs for both documents
    const userDoc = doc(firestore, "users", user.uid);
    const usernameDoc = doc(firestore, "usernames", formValue);

    // Commit both docs together as a batch write.
    const batch = writeBatch(firestore);
    batch.set(userDoc, {
      username: formValue,
      photoURL: user.photoURL,
      displayName: user.displayName,
    });
    batch.set(usernameDoc, { uid: user.uid });

    await batch.commit();
  };

  return (
    !username && (
      <section>
        <h3>Choose username</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={formValue}
            onChange={onChange}
          />
          <UsernameMessage
            username={formValue}
            isValid={isValid}
            loading={loading}
          />
          <button type="submit" className="btn-green" disabled={!isValid}>
            Choose
          </button>
          <h3>Debug state</h3>
          <div>
            username: {formValue}
            <br />
            loading: {loading.toString()}
            <br />
            username valid: {isValid.toString()}
          </div>
        </form>
      </section>
    )
  );

  function UsernameMessage({ username, isValid, loading }) {
    if (loading) {
      return <p>Checking...</p>;
    } else if (username.length < 3 && username.length > 0) {
      return <p className="text-danger">Username is to short!</p>;
    } else if (isValid) {
      return <p className="text-success">{username} is available!</p>;
    } else if (username && !isValid) {
      return <p className="text-danger">That username is taken!</p>;
    } else {
      return <p></p>;
    }
  }
}
