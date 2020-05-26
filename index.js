/*******************************************************************************
 * Feel free to remove this comment block and all other comments after pulling. 
 * They're for information purposes only.
 * 
 * This layout is provided to you for an easy and quick setup to either pull
 * or use to correct yours after working at least 1 hour on Team Activity 02.
 * Throughout the course, we'll be using Express.js for our view engines.
 * However, feel free to use pug or handlebars ('with extension hbs'). You will
 * need to make sure you install them beforehand according to the reading from
 * Udemy course. 
 * IMPORTANT: Make sure to run "npm install" in your root before "npm start"
 *******************************************************************************/
// Our initial setup (package requires, port number setup)
const path = require('path');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  family: 4
};

const MongoDBStore = require('connect-mongodb-session')(session);
const csrf = require('csurf');
const flash = require('connect-flash');
const MONGODB_URL = process.env.MONGODB_URL || "mongodb+srv://nstratford_test:Brandnewrules76@cluster0-hi2mo.mongodb.net/shop";
const store = new MongoDBStore({
  url: MONGODB_URL,
  collection: 'sessions'
});




const PORT = process.env.PORT || 5000; // So we can run on heroku || (OR) localhost:5000
const cors = require('cors'); 
const User = require('./models/user');
const csrfProtection = csrf();
const corsOptions = {
  origin: "https://prove-02.herokuapp.com/",
  optionsSuccessStatus: 200
};

  



// Route setup. You can implement more in the future!
const ta01Routes = require('./routes/teamRoutes/ta01');
const ta02Routes = require('./routes/teamRoutes/ta02');
const ta03Routes = require('./routes/teamRoutes/ta03'); 
const ta04Routes = require('./routes/teamRoutes/ta04'); 


const prove01 = require('./routes/proveRoutes/prove01/prove01');
const prove02 = require('./routes/proveRoutes/prove02/prove02');
const prove03 = require('./routes/proveRoutes/prove03/prove03'); 
const prove04 = require('./routes/proveRoutes/prove04/shop'); 

//const controllers = require('./controllers/w03/team-jsonEngine');
const adminRoutes = require('./routes/proveRoutes/prove04/admin');
const shopRoutes = require('./routes/proveRoutes/prove04/shop');
const authRoutes = require('./routes/proveRoutes/prove04/auth')
// app.use((req, res, next) => {
  
// });


app.use(
  session({
    secret: 'my secret', 
    resave: false, 
    saveUninitialized: false,
    store: store
   })
 );

 app.use(csrfProtection);
app.use(flash());

app.use((req, res, next) => {
  if (!req.session.user) {
    return next();
  }
  User.findById(req.session.user._id)
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

app.use((req, res, next) => {
  res.locals.isAuthenticated = req.session.isLoggedIn;
  res.locals.csrfToken = req.csrfToken();
  next();
});

// app.use((req, res, next) => {
//   User.findById('5ec459b58eb7961d84742737')
//     .then(user => {
//       req.user = user;
//       console.log("This is the user info: " + req.user);
//       next();
//     })
//     .catch(err => console.log(err));
// });



app.use(express.static(path.join(__dirname, 'public')))
   .use(bodyParser({extended: false}))
   .set('views', path.join(__dirname, 'views'))
   .set('view engine', 'ejs')
   // For view engine as Pug
   //.set('view engine', 'pug') // For view engine as PUG. 
   // For view engine as hbs (Handlebars)
   //.engine('hbs', expressHbs({layoutsDir: 'views/layouts/', defaultLayout: 'main-layout', extname: 'hbs'})) // For handlebars
   //.set('view engine', 'hbs')
    // For parsing the body of a POST
   .use('/ta01', ta01Routes)
   .use('/ta02', ta02Routes) 
   //.use('/ta03', ta03Routes) 
   .use('/ta04', ta04Routes)


   .use('/prove01', prove01)
   .use('/prove02', prove02) 
   .use('/prove03', prove03) 
   .use('/prove04', prove04)
   .use('/admin', adminRoutes)
   .use(shopRoutes)
   .use(authRoutes)
   
  //  .use((req, res, next) => {

  //     User.findById('5ec459b58eb7961d84742737')
  //     .then(user => {
  //       req.user = user;
  //       next();
  //     })
  //     .catch(err => console.log(err));
  //    })
   .get('/', (req, res, next) => {
     // This is the primary index, always handled last. 
     res.render('pages/index', {title: 'Welcome to my CSE341 repo', path: '/'});
    })
   .use((req, res, next) => {
     // 404 page
     res.render('pages/404', {title: '404 - Page Not Found', path: req.url})
   })

   
   
  app.use(cors(corsOptions));
  
 

  
  
  mongoose
    .connect(
      MONGODB_URL, options
    )
    .then(result => {
      // This should be your user handling code implement following the course videos
      // User.findOne().then(user => {
      //   if (!user) {
      //     const user = new User({
      //       name: 'Nathan',
      //       email: 'nathan@test.com',
      //       cart: {
      //         items: []
      //       }
      //     });
      //     user.save();
      //   }
      // });
      app.listen(PORT);
    })
    .catch(err => {
      console.log(err);
    });

   
