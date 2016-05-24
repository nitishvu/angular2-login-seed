var Promise = require('bluebird');
var User = require('../models').User;

module.exports = Promise.method(function registerUser(userAttributes) {
  userAttributes.provider = 'local';
  userAttributes.profile_picture = 'https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg';
  userAttributes.password = User.generateHash(userAttributes.password);
  
  return User.create(userAttributes).then(function(newUser) {
    return newUser;
  }).catch(function(error) {
    console.log(error);
    throw error;
  });

});