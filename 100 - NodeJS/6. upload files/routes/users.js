const express = require("express");
const multer = require("multer");

const storageMulter = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const router = express.Router();
const upload = multer({ storage: storageMulter });

router.get("/", function (req, res) {
  res.render("profiles");
});

router.get("/new-user", function (req, res) {
  res.render("new-user");
});

router.post("/profiles", upload.single("image"), function (req, res) {
  const uploadedImage = req.file;
  const userData = req.body;
  console.log(uploadedImage);
  console.log(userData);
  res.redirect("/");
});

module.exports = router;
