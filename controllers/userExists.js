var Sequelize = require("sequelize");
var Promise = require('bluebird');
var User = require('../models').User;

/**
 * This server controller is designed to determine
 * whether a user with a given set of attributes
 * "exists" in the database
 * 
 * @param {userAttributes} object can contain any user field
 *
 * userAttributes = {
 *   username: "domfarolino",
 *   email: "domfarolino@gmail.com"
 * }
 * 
 * The business logic in the `User.findOne(...)` method explained
 * below lays out what constitutes a unique `local` user in
 * the database
 */
module.exports = Promise.method(function userExists(userAttributes) {

  /**
   * Look for user with provider=local, and
   * username OR email matching the ones provided
   * in the userAttributes to determine if a user
   * does in fact exist. These are the only attributes
   * we consider unique right now
   */
  return User.findOne({where: Sequelize.and({provider: 'local'}, Sequelize.or({username: userAttributes.username}, {email: userAttributes.email}))}).then(function(user) {
    console.log(user);
    if (!user) return false;
    return true;
  }).catch(function(error) {
    console.log(error);
    throw error;
  });

});