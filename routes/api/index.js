/**
 * Routing module for handling all routes under /api
 */

/**
 * Import core modules
 */
var express = require('express');
var router  = express.Router();
var authenticationHelpers = require('../authenticationHelpers');
var users   =  require('./users');

router.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,HEAD,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

/* TODO: Remove this */
router.get('/cookieTest', function(request, response, next) {
  response.setHeader('Set-Cookie', 'my=test; Path=/; HttpOnly');
  response.json({"cookie": "set"});
});

router.use('/users', users);

router.get('/authenticated', authenticationHelpers.isAuth, function(req, res, next) {
  res.json({"authenticated": true});
});

router.get('/', function(request, response) {
  response.json({"made it": "ok"});
});

router.get('/heroes', function(request, response) {
  response.json(
    [
      { "id": 11, "name": "Mr. Nice" },
      { "id": 12, "name": "Narco" },
      { "id": 13, "name": "Bombasto" },
      { "id": 14, "name": "Celeritas" },
      { "id": 15, "name": "Magneta" },
      { "id": 16, "name": "RubberMan" },
      { "id": 17, "name": "Dynama" },
      { "id": 18, "name": "Dr IQ" },
      { "id": 19, "name": "Magma" },
      { "id": 20, "name": "Dman" },
      { "id": 11, "name": "Mr. Nice" },
      { "id": 12, "name": "Narco" },
      { "id": 13, "name": "Bombasto" },
      { "id": 14, "name": "Celeritas" },
      { "id": 15, "name": "Magneta" },
      { "id": 16, "name": "RubberMan" },
      { "id": 17, "name": "Dynama" },
      { "id": 18, "name": "Dr IQ" },
      { "id": 19, "name": "Magma" },
      { "id": 20, "name": "Dman" }
    ]
  );
});

module.exports = router;