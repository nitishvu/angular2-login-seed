var Promise = require('bluebird');
var User = require('../models').User;
var truncateUserObject = require('./truncateUserObject');

module.exports = Promise.method(function getUserPublic(id) {
  return User.findOne({where: { id: id } }).then(function(user) {
    console.log(user);
    return truncateUserObject(user);
  }).catch(function(error) {
    console.log(error);
    return error;
  });
});