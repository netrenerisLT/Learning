import styles from "../styles/Home.module.css";
import Loader from "../components/Loader";
import { toast } from "react-toastify";
import PostFeed from "../components/PostFeed";

import {
  query,
  where,
  getDocs,
  limit,
  orderBy,
  collectionGroup,
  Timestamp,
  startAfter,
} from "firebase/firestore";
import { firestoreDb, postToJSON } from "../lib/firebase";
import { useState } from "react";
import { async } from "@firebase/util";

const LIMIT = 1;

export async function getServerSideProps(context) {
  const postsQuery = query(
    collectionGroup(firestoreDb, "posts"),
    where("published", "==", true),
    orderBy("createdAt", "desc"),
    limit(LIMIT)
  );

  const posts = (await getDocs(postsQuery)).docs.map(postToJSON);

  return {
    props: { posts },
  };
}

export default function Home(props) {
  const [posts, setPosts] = useState(props.posts);
  const [loading, setLoading] = useState(false);
  const [postsEnd, setPostsEnd] = useState(false);

  const getMorePosts = async () => {
    setLoading(true);
    const last = posts[posts.length - 1];
    const cursor =
      typeof last.createdAt === "number"
        ? Timestamp.fromMillis(last.createdAt)
        : last.createdAt;

    const newQuery = query(
      collectionGroup(firestoreDb, "posts"),
      where("published", "==", true),
      orderBy("createdAt", "desc"),
      startAfter(cursor),
      limit(LIMIT)
    );

    const newPosts = (await getDocs(newQuery)).docs.map(postToJSON);
    setPosts(posts.concat(newPosts));
    setLoading(false);

    if (newPosts.length < LIMIT) {
      setPostsEnd(true);
    }
  };

  return (
    <main>
      <PostFeed posts={posts} />
      {!loading && !postsEnd && (
        <button onClick={getMorePosts}>Load More</button>
      )}

      <Loader show={loading} />
      {postsEnd && "No more posts available. :("}
    </main>
  );
}
