require("./db");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
var dataRoute = require("./controllers/dataController");

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:3000" }));
app.listen(9000, () => console.log("server started at :9000"));
app.use("/user", dataRoute);
