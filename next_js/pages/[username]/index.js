import { orderBy, queryEqual } from "firebase/firestore";
import PostFeed from "../../components/PostFeed";
import UserProfile from "../../components/UserProfile";
import { getUserWithUsername, postToJSON } from "../../lib/firebase";
import {
  getFirestore,
  getDoc,
  onSnapshot,
  collection,
  query,
  where,
  getDocs,
  limit,
  writeBatch,
} from "firebase/firestore";
import { firestoreDb } from "../../lib/firebase";

export async function getServerSideProps(q) {
  const { username } = q;
  const docSnap = await getUserWithUsername("admin");

  let user = null;
  let posts = null;

  if (docSnap) {
    user = docSnap.docs[0].data();
    const postsQuery = query(
      collection(firestoreDb, "posts"),
      where("published", "==", true),
      orderBy("createdAt", "desc"),
      limit(5)
    );

    const posts = (await getDocs(postsQuery)).docs.map(postToJSON);
  }

  return {
    props: { user, posts }, // will be passed to the page component as props
  };
}

export default function UserProfilePage({ user, posts }) {
  return (
    <main>
      <UserProfile user={user} />
      <PostFeed posts={posts} />
    </main>
  );
}
