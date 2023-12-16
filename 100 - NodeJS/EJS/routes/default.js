const express = require("express");
const router = express.Router();
// const htmlFilePath = (fileName) => {
//   return path.join(__dirname, "views", `${fileName}.html`);
// };

router.get("/", function (req, res) {
  //   res.sendFile(htmlFilePath("index"));
  res.render("index"); //parse template file with help of template engine and converts data to HTML which is sent back to the browser
});

router.get("/about", function (req, res) {
  //   res.sendFile(htmlFilePath("about"));
  res.render("about");
});

module.exports = router;
