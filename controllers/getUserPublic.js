var Promise = require('bluebird');
var User = require('../models').User;

module.exports = Promise.method(function getUserPublic(id) {
  return User.findOne({where: { id: id } }).then(function(user) {
    user = {
      "name": user.name,
      "username": user.username,
      "profile_picture": user.profile_picture,
      "last_active": user.last_active
    };
    console.log(user);
    return user;
  }).catch(function(error) {
    console.log(error);
    return error;
  });
});