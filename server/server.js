const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const PORT = process.env.PORT;

// Middlewares
const app = express();
app.use(bodyParser.json());

// Routes

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, (req, res) => {
  console.log(`Server is running on port ${PORT}`);
});
