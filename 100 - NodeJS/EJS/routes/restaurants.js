const express = require("express");
const restaData = require("../util/restaurant-data");
const router = express.Router();
const uuid = require("uuid");

router.get("/restaurants", function (req, res) {
  const storedRestaurants = restaData.getStoredRestaurants();

  res.render("restaurants", {
    numberOfRestaurants: storedRestaurants.length,
    restaurants: storedRestaurants,
  });
});

router.get("/restaurants/:id", function (req, res) {
  const restaurantId = req.params.id;
  const storedRestaurants = restaData.getStoredRestaurants();
  for (const iterator of storedRestaurants) {
    if (iterator.id === restaurantId) {
      return res.render("restaurant-detail", { restaurant: iterator });
    }
  }
  res.status(404).render("404");
});

router.get("/recommend", function (req, res) {
  //   res.sendFile(htmlFilePath("recommend"));
  res.render("recommend");
});

router.post("/recommend", function (req, res) {
  const restaurant = req.body; //extract data from input form
  restaurant.id = uuid.v4();
  const restaurants = restaData.getStoredRestaurants();
  restaurants.push(restaurant); // push data to file's array
  restaData.storedRestaurants(restaurants); // function in util folder

  res.redirect("/confirm");
});

router.get("/confirm", function (req, res) {
  //   res.sendFile(htmlFilePath("confirm"));
  res.render("confirm");
});

module.exports = router;
