var express = require('express');
var router = express.Router();

var classes = require('./classes');
router.use('/classes', classes);

var users = require('./users');
router.use('/users', users);

router.get('/', function(request, response) {
  response.send('v1 Backend API');
});

module.exports = router;
