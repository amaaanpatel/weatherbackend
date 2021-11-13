require('dotenv').config();
const express = require("express");
const debug = require("debug")("app*");
const bodyParser = require('body-parser');
const homeRoute = require('./routes/home');
const mongoose = require('mongoose');
const chalk = require('chalk');
const city = require('./routes/city');


const app = express();

//Connect to mongo database
mongoose.connect('mongodb://localhost:27017/weatherApp');

//on connection error
mongoose.connection.on('error', (err) => {
  console.error(err);
  console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk.red('✗'));
  process.exit();
});

//on mongodb connected 
mongoose.connection.on('connected', function () {
  console.log('%s MongoDB connected.', chalk.green('✔'));
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req,res,next) => {
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,X-Request-With, Content-Type, Accept");
    res.setHeader(
      "Access-Control-Allow-Headers","*");
    res.setHeader("Access-Control-Allow-Methods","GET,POST,PUT,UPDATE,DELETE,OPTIONS,PATCH");
  next();

});
app.use('/api/city',city)
app.use(homeRoute)




module.exports = app;
