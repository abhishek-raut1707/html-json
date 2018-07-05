var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var cors = require('cors');
var logger = require('morgan');

var app = express();
var port = process.env.PORT || 7000;

// var dbConfig = require('./config/db.config.js');


// mongoose.Promise = global.Promise;

// mongoose.connect(dbConfig.url);

// mongoose.connection.on('error',(err) => {
// 	console.log(err);
// 	process.exit();
// });

// mongoose.connection.on('open', () => {
// 	console.log('We are live on db');
// });


app.use(session({
	secret: 'My-Secret',
	resave: false,
	saveUninitialized: false,
	uset: 'destroy',
	credential: true
}));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cors());
app.options('*', cors());

require('./routes/routes.js')(app);

app.listen(port, () => {
	console.log(`We're are live on ${port}`);
});

