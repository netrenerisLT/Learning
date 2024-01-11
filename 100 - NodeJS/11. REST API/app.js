const express = require("express");

const quoteRoutes = require("./routes/quotes.routes");
const db = require("./data/database");

const app = express();

app.use("/routes", quoteRoutes);

app.use(function (error, req, res, next) {
  res.status(500).json({
    message: "something",
  });
});

db.initDb().then(function () {
  app.listen(3000);
});
