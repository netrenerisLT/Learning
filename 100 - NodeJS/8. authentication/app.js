const path = require("path");

const express = require("express");
const session = require("express-session");
const mongoDbStore = require("connect-mongodb-session");

const db = require("./data/database");
const demoRoutes = require("./routes/demo");

const MongoDBstore = mongoDbStore(session);
const sessionStore = new MongoDBstore({
  uri: "mongodb://localhost:27017",
  databaseName: "auth-demo",
  collection: "sessions",
});

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    secret: "random-code-for-secure",
    resave: false, //session is updated in the database only
    saveUninitialized: false,
    store: sessionStore,
  })
);

app.use(async function (error, req, res, next) {
  const user = req.session.user;
  if (!user) {
    return next();
  }
  const userDoc = await db
    .getDb()
    .collection("users")
    .findOne({ _id: user.id });

  const isAdmin = userDoc.isAdmin;
  res.locals.isAdmin = isAdmin;

  next();
});

app.use(demoRoutes);

app.use(function (error, req, res, next) {
  res.render("500");
});

db.connectToDatabase().then(function () {
  app.listen(3000);
});
