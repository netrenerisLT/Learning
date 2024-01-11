const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
let database;

async function initDb() {
  const client = await MongoClient.connect("mongodb://localhost:27017");
  database = client.db("first-api");
}

function getDb() {
  if (!database) {
    throw new Error("DB not connected");
  }
  return database;
  s;
}

module.exports = {
  initDb: initDb,
  getDb: getDb,
};
