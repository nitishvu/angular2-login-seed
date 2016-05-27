/**
 * Trim a full user object into a "public safe"
 * user object. The logic is housed here so when
 * the database grows more complex, we can manage
 * trimming a user in one place
 */
module.exports = function(userAttributes) {
  return {
    "name": userAttributes.name,
    "username": userAttributes.username,
    "profile_picture": userAttributes.profile_picture,
    "last_active": userAttributes.last_active
  }
}