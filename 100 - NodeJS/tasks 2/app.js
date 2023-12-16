const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
app.use(express.static("public")); //checks if the static file in public folder (like css, js) can be delivered to route
app.use(express.urlencoded({ extended: false }));

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

app.post("/recommend", function (req, res) {
  const restaurant = req.body; //extract data from input form
  const filePath = path.join(__dirname, "data", "restaurants.json"); //access the data file

  const fileData = fs.readFileSync(filePath); //read data in file
  const storedRestaurants = JSON.parse(fileData); //translate data to JS format

  storedRestaurants.push(restaurant); // push data to file's array
  fs.writeFileSync(filePath, JSON.stringify(storedRestaurants)); // save this data and convert data to JSON format

  res.redirect("/confirm");
});

app.get("/about", function (req, res) {
  res.sendFile(htmlFilePath("about"));
});

app.get("/confirm", function (req, res) {
  res.sendFile(htmlFilePath("confirm"));
});

app.listen(3000);
