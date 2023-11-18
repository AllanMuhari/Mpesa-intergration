/** @format */

const express = require("express");
const app = express();
const TokenRoute = require("./routes/token");

app.listen(5000, () => {
  console.log("Server has started on port 5000");
});
app.get("/", (req, res) => {
  res.send("Payment in Progress");
});

app.use("/token", TokenRoute)