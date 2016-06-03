/**
 * Trim a full user object into a "public safe"
 * user object. The logic is housed here so when
 * the database grows more complex, we can manage
 * trimming a user in one place. This can even be
 * role-based trimming based off of the user attributes
 *
 * @param {Object} full list of user attributes from database
 * 
 * @return {Object} "trimmed" user object containing publically accessible attributes
 */
module.exports = function(userAttributes) {
  return {
    "name": userAttributes.name,
    "username": userAttributes.username,
    "profile_picture": userAttributes.profile_picture,
    "last_active": userAttributes.last_active
  }
}