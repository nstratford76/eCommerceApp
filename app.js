const fs = require("fs");
const ejs = require("ejs");

const express = require("express");
var jsonEngine = require('./jsonEngine.js.js');
const jsonResponse;
var app = express();

// web server setup
app.set('port', process.env.PORT || 5000)
  .use(express.static(__dirname + '/public'))
  .set('views', __dirname + '/views')
  .set('view engine', 'ejs')
  .get('/', jsonEngine.processJson)
  .listen(app.get('port'), function() {
  	console.log('Listening on port: ' + app.get('port'));
  });

  const cors = require('cors') // Place this with other requires (like 'path' and 'express')

const corsOptions = {
    origin: "https://prove-02.herokuapp.com/",
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    family: 4
};

const MONGODB_URL = process.env.MONGODB_URL || "mongodb+srv://nstratford76:nstratford76@cse341cluster-3dwlw.mongodb.net/test?retryWrites=true&w=majority";

mongoose
  .connect(
    MONGODB_URL, options
  )
  .then(result => {
     // This should be your user handling code implement following the course videos
    app.listen(PORT);
  })
  .catch(err => {
    console.log(err);
  });
