const express = require("express");
const bcrypt = require("bcrypt");

const db = require("../data/database");

const router = express.Router();

router.get("/", function (req, res) {
  res.render("welcome");
});

router.get("/signup", function (req, res) {
  res.render("signup");
});

router.get("/login", function (req, res) {
  res.render("login");
});

router.post("/signup", async function (req, res) {
  const userData = req.body;
  const enteredEmail = userData.email;
  const enteredConfirmEmail = userData["confirm-email"];
  const enteredPassword = userData.password;

  if (
    !enteredEmail ||
    !enteredConfirmEmail ||
    !enteredPassword ||
    enteredPassword.trim() < 6 ||
    enteredEmail !== enteredConfirmEmail ||
    !enteredEmail.includes("@")
  ) {
    console.log("incorect data");
    return res.redirect("/signup");
  }

  const existingUser = await db
    .getDb()
    .collection("users")
    .findOne({ email: enteredEmail });

  if (existingUser) {
    console.log("user exist");
    return res.redirect("/signup");
  }

  const hashedPassword = await bcrypt.hash(enteredPassword, 12);

  const userInfo = {
    email: enteredEmail,
    password: hashedPassword,
  };

  const result = await db.getDb().collection("users").insertOne(userInfo);

  res.redirect("/login");
});

router.post("/login", async function (req, res) {
  const userData = req.body;
  const enteredEmail = userData.email;
  const enteredConfirmEmail = userData["confirm-email"];
  const enteredPassword = userData.password;

  const existingUser = await db
    .getDb()
    .collection("users")
    .findOne({ email: enteredEmail });

  if (!existingUser) {
    return red.redirect("/login");
  }

  const passwordEqual = await bcrypt.compare(
    enteredPassword,
    existingUser.password
  );

  if (!passwordEqual) {
    return res.redirect("/login");
  }

  req.session.user = {
    id: existingUser._id,
    email: existingUser.email,
  };

  //we need save session, because redirect can be completed faster than saving the cokkies information and that stops user from authentication
  req.session.save(function () {
    res.redirect("/admin");
  });
});

router.get("/admin", function (req, res) {
  if (!req.session.user) {
    return res.status(401).render("401");
  }
  res.render("admin");
});

router.post("/logout", function (req, res) {
  req.session.user = null;
  res.redirect("/");
});

module.exports = router;
