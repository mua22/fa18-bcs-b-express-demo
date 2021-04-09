const express = require("express");
const app = express();
app.use(express.json());
app.set("view engine", "pug");

app.get("/hobbies", function (req, res) {
  return res.render("hobbies");
});
app.get("/api/customers", function (req, res) {
  return res.send(["Noman", "Ali", "Kamran"]);
});
app.get("/", function (req, res) {
  return res.render("homepage");
});
app.listen(process.env.PORT || 4000, function () {
  console.log(`Listening on Port 4000....`);
});
