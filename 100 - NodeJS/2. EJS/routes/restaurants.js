const express = require("express");
const restaData = require("../util/restaurant-data");
const router = express.Router();
const uuid = require("uuid");

router.get("/restaurants", function (req, res) {
  let orderFilter = req.query.order;
  let nextOrder = "desc";
  if (orderFilter !== "asc" && orderFilter !== "desc") {
    orderFilter = "asc";
  }
  if (orderFilter === "desc") {
    nextOrder = "asc";
  }
  const storedRestaurants = restaData.getStoredRestaurants();

  storedRestaurants.sort((a, b) => {
    if (orderFilter === "asc" && a.name > b.name) {
      return 1;
    } else if (orderFilter === "desc" && b.name > a.name) {
      return 1;
    }
    return -1;
  });

  res.render("restaurants", {
    numberOfRestaurants: storedRestaurants.length,
    restaurants: storedRestaurants,
    curentOrderFilter: nextOrder,
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
