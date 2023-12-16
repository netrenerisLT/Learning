const express = require("express");
const path = require("path");

const defaultRoutes = require("./routes/default");
const restRoutes = require("./routes/restaurants");

const app = express();
app.use(express.static("public")); //checks if the static file in public folder (like css, js) can be delivered to route
app.use(express.urlencoded({ extended: false })); //let read/write data to JSON

app.set("views", path.join(__dirname, "views")); //we tell express where to find template files which be use bu template engine
app.set("view engine", "ejs"); //we tell express to use "template engine" for process our view files before sending them as html

app.use("/", defaultRoutes);
app.use("/", restRoutes);

app.use(function (req, res) {
  res.status(404).render("404");
});

//we need to write all the parameters and then express will understood that this handles other erro types
app.use(function (error, req, res, next) {
  res.status(500).render("500");
});

app.listen(3000);
