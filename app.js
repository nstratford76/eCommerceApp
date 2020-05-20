const fs = require("fs");
const ejs = require("ejs");

const express = require("express");
//var jsonEngine = require('./controllers/w03/team-jsonEngine.js');
// Place this with other requires (like 'path' and 'express')


const PORT = process.env.PORT || 5000;
var app = express();

// web server setup
// app.set('port', process.env.PORT || 5000)
//   .use(express.static(__dirname + '/public'))
//   .set('views', __dirname + '/views')
//   .set('view engine', 'ejs')
//   .get('/', jsonEngine.processJson);


//  .use((req, res, next) => {

  //   // User.findById('5bab316ce0a7c75f783cb8a8')
  //   // .then(user => {
  //   //   req.user = user;
  //   //   next();
  //   // })
  //   .catch(err => console.log(err));
  //  })
