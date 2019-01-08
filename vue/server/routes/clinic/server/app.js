let express = require('express');
let path = require('path');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let session = require('express-session');
let serveStatic = require('serve-static');
let history = require('connect-history-api-fallback');
let MongoStore = require('connect-mongo')(session);

// Set up default mongoose connection
let mongoDB = 'mongodb://admin:admin@ds145275.mlab.com:45275/testmongo-restore';
mongoose.connect(mongoDB, {useMongoClient: true});
// Get the default connection
let db = mongoose.connection;
// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

let index = require('./routes/index');
let admin = require('./routes/admin/index');
let patient = require('./routes/patient/index');
let doctor = require('./routes/doctor/index');

let app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use(history());
app.use(serveStatic(__dirname + '/dist'));

// db accessible
app.use(function(req, res, next) {
  req.db = db;
  next();
});

// Advanced usage
app.use(session({
  secret: 'keyboard cat',
  saveUninitialized: false, // don't create session until something stored
  resave: false // don't save session if unmodified
}));

app.use('/api', index);
app.use('/api/admin', admin);
app.use('/api/patient', patient);
app.use('/api/doctor', doctor);

module.exports = app;
