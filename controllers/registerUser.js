var Promise = require('bluebird');
var User = require('../models').User;
var userExistsController = require('./userExists');
var truncateUserObject = require('./truncateUserObject');

/**
 * This server controller is designed to register
 * a user by creating them in the database.
 * 
 * @param {userAttributes} object should contain all user attributes
 * in key value pairs
 */
module.exports = Promise.method(function registerUser(userAttributes) {
  /**
   * Set some defaults
   */
  userAttributes.provider = 'local';
  userAttributes.profile_picture = 'https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg';
  console.log(userAttributes.password);
  userAttributes.password = User.generateHash(userAttributes.password);
  
  return userExistsController(userAttributes).then(function(userExists) {
    if (userExists) throw new Error("User already exists");
      
      return User.create(userAttributes).then(function(newUser) {
        return truncateUserObject(newUser);
      }).catch(function(error) {
        console.log(error);
        throw error;
      });
    
  }).catch(function(error) {
    console.log(error);
    throw error;
  });

});