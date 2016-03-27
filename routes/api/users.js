/**
 * Routing module for handling all routes under /users
 */

/**
 * Import core modules
 */
var express = require('express');
var router  = express.Router();
var models  = require('../../models');
var authenticationHelpers = require('../authenticationHelpers');

// /users/me
router.get('/me', authenticationHelpers.isAuth, function(req, res, next) {
  res.json({
    "me": {
      "name": req.session.passport.user.name,
      "username": req.session.passport.user.username,
      "profile_picture": req.session.passport.user.profile_picture,
      "last_active": req.session.passport.user.last_active 
    } 
  });
});

// /users
router.get('/', authenticationHelpers.isAuth, function(request, response) {
  /**
   * Get user count and then calculate our
   * offset as the count - offset
   */
  return models.User.count().then(function(count) {
    var offset = request.query.offset || count;
    /**
     * Get the last 'offset' users
     * in the database.
     * TODO: Make this a cleaner implementation *temporary* 
     */
      models.User.findAll({
        offset: count-offset
      }).then(function(users) {
        var returnUsers = [];
        /**
         * Prune users object for public display
         * TODO: break this out to some sort of data logic utility
         * function for seamless reusability
         */
        users.forEach(function(user, i) {
          user = {
            "name": user.name.split(" ")[0],
            "username": user.username,
            "profile_picture": user.profile_picture,
            "last_active": user.last_active
          }
          returnUsers.push(user);
        });
    
        response.json(returnUsers); // set response
      
      }).catch(function(error) {
        console.log(error);
        response.json(error);
      });
  
  }).catch(function(error) {
      
  });

});

// /users/:id
var getUserPublicController = require('../../controllers').getUserPublic;
router.get('/:id', authenticationHelpers.isAuth, function(request, response) {
  
  getUserPublicController(request.params.id).then(function(user) {
    response.json(user);
  }).catch(function(error) {
    response.json(error);
  });

});

module.exports = router;