var Promise = require('bluebird');
var User = require('../models').User;

module.exports = Promise.method(function getAllUsersPublic(offset, limit, desc) {
  offset*=1;
  limit*=1;
  console.log(desc);
  console.log(desc);
  console.log(desc);
  console.log(desc);
  console.log(desc);
  console.log(desc);
  console.log(desc);
  console.log(desc);
  console.log(desc);
  var idOrder = (desc) ? ['id', 'DESC'] : ['id', 'ASC'];
  return User.findAll({order: [idOrder], offset: offset, limit:limit}).then(function(users) {
    for (var i = 0; i < users.length; ++i) {
      users[i] = {
        "name": users[i].name,
        "username": users[i].username,
        "profile_picture": users[i].profile_picture,
        "last_active": users[i].last_active
      };
    }
    console.log(users);
    return users;
  }).catch(function(error) {
    console.log(error);
    return error;
  });
});