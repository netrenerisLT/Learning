const express = require("express");
const path = require("path");

const app = express();

const htmlFilePath = (fileName) => {
  return path.join(__dirname, "views", `${fileName}.html`);
};

app.get("/", function (req, res) {
  res.sendFile(htmlFilePath("index"));
});

app.get("/restaurants", function (req, res) {
  res.sendFile(htmlFilePath("restaurants"));
});

app.get("/recommend", function (req, res) {
  res.sendFile(htmlFilePath("recommend"));
});

app.get("/about", function (req, res) {
  res.sendFile(htmlFilePath("about"));
});

app.get("/confirm", function (req, res) {
  res.sendFile(htmlFilePath("confirm"));
});

app.listen(3000);
