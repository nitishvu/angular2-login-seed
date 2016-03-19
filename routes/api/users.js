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
router.get('/:id', authenticationHelpers.isAuth, function(request, response) {
  models.User.findAll({
    where: {
      id: request.params.id
    }
  }).then(function(user) {
    user = {
      "name": user[0].name,
      "username": user[0].username,
      "profile_picture": user[0].profile_picture,
      "last_active": user[0].last_active
    }
    response.json(user);
  }).catch(function(error) {
    console.log(error);
    response.json(error);
  });
});

module.exports = router;