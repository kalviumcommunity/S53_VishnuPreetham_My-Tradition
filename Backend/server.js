
const express = require("express");
const cors = require("cors");
const route = require("./Routes/Routes.js");
const databaseconnection = require("./db");
const razorrouter = require("./RazorPay/razorroutes");
const bodyParser = require("body-parser");

require("dotenv").config();
databaseconnection();


const app = express();


app.use(cors());

app.use(express.json());
app.use(razorrouter);
app.use(route);

app.get("/", (req, res) => {
  res.send("Hello There👋!. Welcome to Capstone. My API is Working");
});

module.exports = app;
