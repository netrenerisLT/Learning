const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "..", "data", "restaurants.json"); //access the data file
function getRestaurants() {
  const fileData = fs.readFileSync(filePath); //read data in file
  const storedRestaurants = JSON.parse(fileData); //translate data to JS format
  return storedRestaurants;
}

function storeToFile(params) {
  fs.writeFileSync(filePath, JSON.stringify(params)); // save this data and convert data to JSON format
}

module.exports = {
  getStoredRestaurants: getRestaurants,
  storedRestaurants: storeToFile,
};
