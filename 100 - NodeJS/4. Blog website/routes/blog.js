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
  } else {
    res.render("post-detail", { post: posts[0] });
    console.log(posts);
  }
});

// router.get("/update-post/:2", async function (req, res) {
//   const postId = req.params.id;
//   const [postInfo] = await db.query("SELECT * FROM posts");
//   for (const iterator of postInfo) {
//     if (iterator.id === 1) {
//       return res.render("/update-post", { postInfo: postInfo });
//     }
//   }
//   console.log(postInfo);
//   console.log(req.params.id);
// });
module.exports = router;
