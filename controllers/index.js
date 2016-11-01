var getUserPublic = require('./getUserPublic');
var getAllUsersPublic = require('./getAllUsersPublic');
var truncateUserObject = require('./truncateUserObject');
var registerUser = require('./registerUser');
var userExists = require('./userExists');

module.exports = {
  getUserPublic: getUserPublic,
  getAllUsersPublic: getAllUsersPublic,
  truncateUserObject: truncateUserObject,
  registerUser: registerUser,
  userExists: userExists
}