const fs = require("fs");
const path = require("path");
const express = require("express");
const { CLIENT_RENEG_LIMIT } = require("tls");

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get("/currenttime", function (request, response) {
  response.send(`<h1> ${new Date().toISOString()} </h1>`);
});

app.get("/", function (req, res) {
  res.send(
    `<form action="/store-user" method="POST">
    <label>Name</label>
    <input type="text" name="username">
    <button>Submit</button>
    </form>
    `
  );
});

app.post("/store-user", function (req, res) {
  const userName = req.body.username;

  const filePath = path.join(__dirname, "data", "users.json");
  const fileData = fs.readFileSync(filePath);
  const parsedData = JSON.parse(fileData);
  parsedData.push(userName);

  fs.writeFileSync(filePath, JSON.stringify(parsedData));

  console.log(parsedData);

  res.send("<h1>Username stored</h1>");
});

app.get("/users", function (req, res) {
  const filePath = path.join(__dirname, "data", "users.json");
  const fileData = fs.readFileSync(filePath);
  const parsedData = JSON.parse(fileData);

  let responseData = "";

  for (const iterator of parsedData) {
    responseData += `<ul><li>${iterator}</li></ul>`;
  }

  res.send(responseData);
});

app.listen(3000);

// function handleRequest(request, response) {
//   if (request.url === "/currentime") {
//     response.statusCode = 200;
//     response.end(`<h1> ${new Date().toISOString()} </h1>`);
//   } else if (request.url === "/") {
//     response.statusCode = 200;
//     response.end("<h1>Hello</h1>");
//   }
// }

// const server = http.createServer(handleRequest);
// server.listen(3000);
