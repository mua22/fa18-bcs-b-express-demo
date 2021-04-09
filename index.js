const express = require("express");
const app = express();
app.use(express.json());

app.get("/", function (req, res) {
  return res.send("Hello B Section");
});
app.get("/api/customers", function (req, res) {
  return res.send(["Noman", "Ali", "Kamran"]);
});

const port = 3000;
app.listen(port, function () {
  console.log(`Listening on Port 3000....`);
});
