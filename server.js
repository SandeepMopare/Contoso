var express = require("express"); // importing Express from Node Libraries
var app = express();

var onAboutUs = function (req, res) {
  res.send("This Id The Contuso Pvt.Ltd Company");
};
var onDefault = function (req, res) {
  res.send(
    "<h1> Contoso Pvt. Ltd </h1>" +
      "<hr/>" +
      "<ol>" +
      " <li>Located At Address: Pune: 411047</li>" +
      " <li>Has World wide 50 Locations</li>" +
      " <li>We are product Based company on E-Commerce Platform</li>" +
      "</ol>"
  );
};
app.get("/", onDefault); // Request handler functions are registered
app.get("/aboutus", onAboutUs); // Request handler functions are registered
var server = app.listen(8081);
console.log("Server is running on port 8081");
