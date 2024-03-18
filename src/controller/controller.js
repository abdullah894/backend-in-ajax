const express = require("express");
const admin = require("../model/model");
var jwt = require('jsonwebtoken');
const session = require("express-session");
const flash = require("express-flash");
const bcrypt = require('bcrypt');
const app = express();

const signup = (req, res) => {
    res.render('signup');
  };
const login = (req, res) => {
    res.render('login');
  };
  app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
}));

app.use(flash());
  const userregisterion = async (req, res) => {
    // console.log("body =", req.body);
    try {
        const password = req.body.password;
      const confirmPassword = req.body.conformpassword; 
  
      if (password === confirmPassword) {
        const registerUser = new admin({
          Username: req.body.Username,
          email: req.body.Email,
        });
  

        const hashedPassword = await bcrypt.hash(password, 10);
        registerUser.password = hashedPassword;
        const registered = await registerUser.save();
        res.status(201).render('login');
      } 
      else 
      { 
        errorMessage = 'Password and confirm password do not match';
        req.flash('error', errorMessage);
        res.redirect('/signup',errorMessage);
      }
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  };

  module.exports = {
    signup,
    userregisterion,
    login
  };