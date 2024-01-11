const express = require("express");

const db = require("./data/database");
const quoteRoutes = require("./routes/quotes.routes");

const app = express();

app.use("/quote", quoteRoutes);

app.use(function (error, req, res, next) {
  res.status(500).json({
    message: "something",
  });
});

db.initDb().then(function () {
  app.listen(3000);
});
