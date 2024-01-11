const path = require("path");

const express = require("express");
const session = require("express-session");
const csrf = require("csurf");

const authMiddleware = require("./middlewares/auth-middleware");
const sessionConfig = require("./config/sessions");
const db = require("./data/database");
const blogRoutes = require("./routes/blog");
const authRoutes = require("./routes/auth");
const addCSRFToken = require("./middlewares/csrf-token");

const mondgoDbSessionStore = sessionConfig.createSessionStore(session);

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.use(session(sessionConfig.createSessionConfig(mondgoDbSessionStore)));

app.use(csrf());
app.use(addCSRFToken);

app.use(authMiddleware);

app.use(blogRoutes);
app.use(authRoutes);

app.use(function (error, req, res, next) {
  res.render("500");
});

db.connectToDatabase().then(function () {
  app.listen(3000);
});
