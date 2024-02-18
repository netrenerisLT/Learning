export default function BlogPost({ params }) {
  return (
    <main>
      <h1>Blog post</h1>
      <p>{params.posts}</p>
    </main>
  );
}
