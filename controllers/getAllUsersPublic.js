var Promise = require('bluebird');
var User = require('../models').User;
var truncateUserObject = require('./truncateUserObject');

module.exports = Promise.method(function getAllUsersPublic(offset, limit, desc) {
  offset*=1; // ensure value is a number in the case where it is not automatically
  limit*=1;  // ^
  var idOrder = (desc) ? ['id', 'DESC'] : ['id', 'ASC'];
  return User.findAll({order: [idOrder], offset: offset, limit:limit}).then(function(users) {
    for (var i = 0; i < users.length; ++i) {
      users[i] = truncateUserObject(users[i]);
    }
    console.log(users);
    return users;
  }).catch(function(error) {
    console.log(error);
    return error;
  });
});