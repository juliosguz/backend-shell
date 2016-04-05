var subdomain = require('express-subdomain');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();

/**
 * General middlewares
 */
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'frontend/public')));

/**
 * Subdomains
 */
var api = require('./api/v1/index');
app.use(subdomain('api', api));

/**
 * Root
 */
var frontend = require('./frontend/routes/index');
app.use('/', frontend);

/**
 * Listen
 */
app.listen(8080);

/**
 * Validate errors
 */
app.use(function(request, response, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send(err.message);
});
