require("dotenv").config();
//====================================================================//
const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
//====================================================================//

//====================================================================//
//------------ UNCOMMENT BELOW TO TEST DATABASE CONNECTION -----------//
// const mongoose = require("./config/db-connect");
//====================================================================//

//====================================================================//
const app = express();
//====================================================================//
const PORT = process.env.PORT || 8000;
//====================================================================//
const membersRoutes = require("./routes/members.js");
//====================================================================//
app.use(express.json());
//====================================================================//
app.use((req, res, next) => {
  console.log(`A ${req.method} request was made to ${req.url}`);
  next();
});
//====================================================================//
// Landing page
app.get("/", (request, response) => {
  response.send("Welcome To My First Express Application");
});
//====================================================================//
// Members page
app.use("/members", membersRoutes);
//====================================================================//
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
