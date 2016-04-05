var express = require('express');
var router = express.Router();

router.get('/', function(request, response) {
  response.send('V1 Users Endpoint');
});

module.exports = router;
