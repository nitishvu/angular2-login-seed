/**
 * Configure all Passport login here so we don't have to keep it in app.js
 */

/**
 * Import modules
 */
var config          = require('config');
var User            = require('../models').User;
var passport        = require('passport');
var GoogleStrategy  = require('passport-google-oauth2').Strategy;
var TwitterStrategy = require('passport-twitter').Strategy;
var requestPromise  = require('request-promise');
 
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

passport.use(

  new GoogleStrategy({
    clientID         : config.get('oauthCredentials.google.id'),
    clientSecret     : config.get('oauthCredentials.google.secret'),
    callbackURL      : config.get('oauthCallbacks.googleCallbackUrl'),
    passReqToCallback: true
  },
    
  function(request, accessToken, refreshToken, profile, done) {
    process.nextTick(function() {
      /**
       * Build attributes object containing
       * authentication data that will be stored in database
       */
      
      var attributes = {
        access_token  : accessToken,
        refresh_token : refreshToken
      };
      /**
       * Find or create user with the unique information provided as well
       * as attributes object so it can update or create user with
       * the authentication information we got
       */
      
      return findOrCreateUser('google', profile.id, profile, attributes).then(function(user) {
        return done(null, user);
      }).catch(function(error) {
        console.log("Error in passport.js configuration file");
        console.log(error);
        return done(null);
      }); // end findOrCreateUser()

    }); // end process.newTick()

  }) // end function(request...) & new google strategy

); // end passport.use()

passport.use(new TwitterStrategy({
    consumerKey: config.get('oauthCredentials.twitter.id'),
    consumerSecret: config.get('oauthCredentials.twitter.secret'),
    callbackURL: config.get('oauthCallbacks.twitterCallbackUrl')
  },
  function(accessToken, accessTokenSecret, profile, done) {
    process.nextTick(function() {
      /**
       * Build attributes object containing
       * authentication data that will be stored in database
       */
      
      var attributes = {
        access_token       : accessToken,
        access_token_secret: accessTokenSecret
      };
      /**
       * Find or create user with the unique information provided as well
       * as attributes object so it can update or create user with
       * the authentication information we got
       */
      
      return findOrCreateUser('twitter', profile.id, profile, attributes).then(function(user) {
        return done(null, user);
      }).catch(function(error) {
        console.log("Error in passport.js configuration file");
        console.log(error);
        return done(null);
      }); // end findOrCreateUser()
    
    }); // end process.nextTick()
  
  }) // end function(request...) & new twitter strategy

); // end passport.use()


/**
 * Used to findOrCreateUser for any provider. Utilizes the buildUpdatedAttributes
 * so we can either create or update a user with updated attributes
 */
function findOrCreateUser(provider, social_id, profile, attributes) {
  return User.findOne({where: {provider: provider, social_id: social_id}}).then(function(user) {
    if (user) {
      /**
       * User exists, build updated attributes object and
       * update the user in the database
       */
      
      attributes = buildUpdatedAttributes(provider, social_id, profile, user, attributes);
      return user.update(attributes).then(function(updatedUser) {
        return updatedUser;
      }).catch(function(error) {
        throw error;
      });
    
    } else {
      /**
       * User does not exist, build complete attributes
       * object and create user in the database
       */
      attributes = buildCompleteAttributes(provider, social_id, profile, user, attributes);
      return User.create(attributes).then(function(newUser) {
        return newUser;
      }).catch(function(error) {
        throw error;
      });
    }
    // User exists
  }).catch(function(error) {
    throw error;
  });
}

/**
 * Utility function to build updated list of attributes that
 * a logged in user will need to be updated with
 * Works for any provider
 */
function buildUpdatedAttributes(provider, social_id, profile, user, attributes) {
  var updatedUserAttributes;
  if(provider == 'google') {
    updatedUserAttributes = {
      profile_picture: profile.photos[0].value.split("?")[0],
      last_active: Math.trunc(Date.now()/1000),
      access_token: attributes.access_token,
      access_token_exp: user.access_token_exp,
      refresh_token: attributes.refresh_token || user.refreshToken
    };
  } else if(provider == 'twitter') {
    updatedUserAttributes = {
      profile_picture: profile.photos[0].value,
      last_active: Math.trunc(Date.now()/1000),
      access_token: attributes.access_token,
      access_token_secret: attributes.access_token_secret
    };
  }
  
  return updatedUserAttributes;
}

/**
 * Utility function to build complete list of attributes that
 * a logged in user will need to be created with
 * Works for any provider
 */
function buildCompleteAttributes(provider, social_id, profile, user, attributes) {
  var updatedUserAttributes;
  if(provider == 'google') {
    updatedUserAttributes = {
      social_id: social_id,
      name: profile.displayName,
      username: profile.email.split("@")[0],
      email: profile.email,
      profile_picture: profile.photos[0].value.split("?")[0],
      provider: provider,
      last_active: Math.trunc(Date.now()/1000),
      access_token: attributes.access_token,
      refresh_token: attributes.refresh_token
    };
  } else if(provider == 'twitter') {
    updatedUserAttributes = {
      social_id: social_id,
      name: profile.displayName,
      username: profile.username,
      email: null,
      profile_picture: profile.photos[0].value,
      provider: provider,
      last_active: Math.trunc(Date.now()/1000),
      access_token: attributes.access_token,
      access_token_secret: attributes.access_token_secret
    };
  }
  
  return updatedUserAttributes;
}