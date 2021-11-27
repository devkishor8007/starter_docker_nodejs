const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello I am kishor and learning docker with nodejs.");
});

app.get("/name", (req, res) => {
  res.send("hello run from docker " + req.query.name);
});

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
