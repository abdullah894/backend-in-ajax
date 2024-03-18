const express = require("express");
const mongoose =require("mongoose");
const ejs = require("ejs");
const session = require("express-session");
const flash = require("express-flash");
const admin = require("./src/model/model");
const router = require("./src/routes/routes");
require("./src/db/connect");
const jwt = require("jsonwebtoken");

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true
}));

app.use(flash());

app.use('/', router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });