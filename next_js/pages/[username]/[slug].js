import {
  getUserWithUsername,
  postToJSON,
  firestoreDb,
} from "../../lib/firebase";

export async function getStaticProps({ params }) {
  const { username, slug } = params;
  const userDoc = await getUserWithUsername("admin");

  let post;
  let path;

  if (userDoc) {
    const postRef = query(
      collection(firestoreDb, "posts"),
      where("published", "==", true),
      orderBy("createdAt", "desc"),
      limit(5)
    );

    // post = (await getDocs(postRef)).docs.map(postToJSON);
    post = postToJSON(await getDocs(postRef));
  }
  return {
    props: { post, path }, // will be passed to the page component as props
    revalidate: 100,
  };
}

export default function Post({}) {
  return (
    <main>
      <h1>user Post post</h1>
    </main>
  );
}
