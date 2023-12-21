const express = require("express");
const router = express.Router();

const db = require("../data/database");

router.get("/", function (req, res) {
  res.redirect("/posts");
});

router.get("/posts", async function (req, res) {
  const [posts] = await db.query(
    "SELECT posts.*, authors.name AS author_name FROM posts INNER JOIN authors ON posts.author_id = authors.id"
  );
  res.render("posts-list", { allPosts: posts });
});

router.get("/new-post", async function (req, res) {
  const [authors] = await db.query("SELECT * FROM authors");
  res.render("create-post", { authors: authors });
});

router.post("/posts", async function (req, res) {
  const data = [
    req.body.title,
    req.body.summary,
    req.body.content,
    req.body.author,
  ];
  await db.query(
    "INSERT INTO posts (title, summary, body, author_id) VALUES (?)",
    [data]
  );
  res.redirect("/posts");
});

router.get("/posts/:id", async function (req, res) {
  const postId = req.params.id;
  const [posts] = await db.query(
    "SELECT posts.*, authors.name AS author_name, authors.email AS author_email FROM posts INNER JOIN authors ON posts.author_id = authors.id WHERE posts.id = ?",
    [postId]
  );

  if (!posts || posts.length === 0) {
    return res.status(404).render("404");
  }

  const postData = {
    ...posts[0],
    date: posts[0].date.toISOString(),
    date: posts[0].date.toISOString(),
    humanReadableDate: posts[0].date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  };

  res.render("post-detail", { post: postData });
});

router.get("/posts/:id/edit", async function (req, res) {
  const postId = req.params.id;
  const [postInfo] = await db.query("SELECT * FROM posts WHERE id = ?", [
    postId,
  ]);

  if (!postInfo || postInfo.length === 0) {
    return res.status(404).render("404");
  }

  res.render("update-post", { postInfo: postInfo[0] });
});

router.post("/posts/:id/edit", async function (req, res) {
  await db.query(
    "UPDATE posts SET title = ?, summary = ?, body = ? WHERE id = ?",
    [req.body.title, req.body.summary, req.body.content, req.params.id]
  );
  res.redirect(`/posts/${req.params.id}`);
});

router.post("/posts/:id/delete", async function (req, res) {
  await db.query("DELETE FROM posts WHERE id = ?", [req.params.id]);
  res.redirect("/posts");
});
module.exports = router;
