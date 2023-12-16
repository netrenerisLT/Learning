const express = require("express");
const path = require("path");
const fs = require("fs");
const uuid = require("uuid");

const restaData = require("./util/restaurant-data.js");

const app = express();
app.use(express.static("public")); //checks if the static file in public folder (like css, js) can be delivered to route
app.use(express.urlencoded({ extended: false })); //let and read/write data to JSON

app.set("views", path.join(__dirname, "views")); //we tell express where to find template files which be use bu template engine
app.set("view engine", "ejs"); //we tell express to use "template engine" for process our view files before sending them as html

// const htmlFilePath = (fileName) => {
//   return path.join(__dirname, "views", `${fileName}.html`);
// };

app.get("/", function (req, res) {
  //   res.sendFile(htmlFilePath("index"));
  res.render("index"); //parse template file with help of template engine and converts data to HTML which is sent back to the browser
});

app.get("/restaurants", function (req, res) {
  const storedRestaurants = restaData.getStoredRestaurants();

  res.render("restaurants", {
    numberOfRestaurants: storedRestaurants.length,
    restaurants: storedRestaurants,
  });
});

app.get("/restaurants/:id", function (req, res) {
  const restaurantId = req.params.id;
  const storedRestaurants = restaData.getStoredRestaurants();
  for (const iterator of storedRestaurants) {
    if (iterator.id === restaurantId) {
      return res.render("restaurant-detail", { restaurant: iterator });
    }
  }
  res.status(404).render("404");
});

app.get("/recommend", function (req, res) {
  //   res.sendFile(htmlFilePath("recommend"));
  res.render("recommend");
});

app.post("/recommend", function (req, res) {
  const restaurant = req.body; //extract data from input form
  restaurant.id = uuid.v4();
  const restaurants = restaData.getStoredRestaurants();
  restaurants.push(restaurant); // push data to file's array
  restaData.storedRestaurants(restaurants); // function in util folder

  res.redirect("/confirm");
});

app.get("/about", function (req, res) {
  //   res.sendFile(htmlFilePath("about"));
  res.render("about");
});

app.get("/confirm", function (req, res) {
  //   res.sendFile(htmlFilePath("confirm"));
  res.render("confirm");
});

app.use(function (req, res) {
  res.status(404).render("404");
});

//we need to write all the parameters and then express will understood that this handles other erro types
app.use(function (error, req, res, next) {
  res.status(500).render("500");
});

app.listen(3000);
