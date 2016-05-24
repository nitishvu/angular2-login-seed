/**
 * Routing module for handling all routes under /authorize
 */

/**
 * Import core modules
 */
var express               = require('express');
var router                = express.Router();
var passport              = require('passport');
var authenticationHelpers = require('../authenticationHelpers');

/**
 * Authorization route for google provider
 */
router.get('/google',
  passport.authenticate('google', { scope: ['email'], accessType: 'offline'}
));

/**
 * Authorization route for twitter provider
 */
router.get('/twitter',
  passport.authenticate('twitter'));

/**
 * Authorization route for local provider
 */
var getUserPublicController = require('../../controllers').getUserPublic;
router.post('/local', function(request, response, next) {
  passport.authenticate('local', function(error, user, info) {
    if (!user) {
      response.status(401);
      response.json({"reason": "Invalid credentials"});
    } else {
      
    
    /**
     * "Login" user officially, and return proper response
     * if there is an error logging the user in (500)
     */
    request.logIn(user, function(error) {
      if (error) {
        response.status(500);
        response.json({"error": "Server error"});
      }
    });
    
    /**
     * Here, request.user is our full user object, production
     * information/details and all. What we want to do is 'truncate'
     * the user object into a public user object as per the standards
     * that make a user object public worthy. This is defined in our
     * getUserPublic controller
     */
    return getUserPublicController(user.id).then(function(user) {
      return response.json(user);
    }).catch(function(error) {
      return response.json(error);
    });
    
    }
  })(request, response, next);
});

module.exports = router;