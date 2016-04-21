/**
 * Import modules
 */
var express               = require('express');
var router                = express.Router();
var path                  = require('path');
var passport              = require('passport');
var authenticationHelpers = require('./authenticationHelpers');

// Import all other route modules
var api     =  require('./api');

/**
 * Make sure the "use" of any other route modules comes before
 * any index route definitions, aka route definitions from root '/'
 */
router.use('/api', api);

/* GET home page. */
router.get('/', authenticationHelpers.isAuthOrRedirect, function(req, res, next) {
  console.log("Purest route");
  res.render('index');
});

/* GET login page. */
router.get('/login', authenticationHelpers.isNotAuthOrRedirect, function(req, res, next) {
  res.render('index');
});

/* GET logout page. */
router.get('/logout', authenticationHelpers.isAuthOrRedirect, function(req, res, next) {
  //res.sendFile(path.resolve('./index.html'));
  req.logout();
  res.redirect('/login');
});

/**
 * Authorization route for google provider
 */
router.get('/authorize/google',
  passport.authenticate('google', { scope: ['email'], accessType: 'offline'}
));

/**
 * Authorization route for twitter provider
 */
router.get('/authorize/twitter',
  passport.authenticate('twitter'));
 
/**
 * Define our google callback endpoint and success/failure methods 
 */
router.get('/callback/google', 
	passport.authenticate('google', { 
		successRedirect: '/',
		failureRedirect: '/login'
}));

/**
 * Define our twitter callback endpoint and success/failure methods 
 */
router.get('/callback/twitter', 
	passport.authenticate('twitter', { 
		successRedirect: '/',
		failureRedirect: '/login'
}));

/**
 * Anything else under root route '/'
 * The main purpose of this is to facilitate the Angular 2 HTML 5 routing
 * It is imperative that this goes below absolutely every route definition since
 * this is the index.js, and if it came before say, the route.use('/api', api), everything
 * that would call /api would be read as /*
 */
router.get("/*", authenticationHelpers.isAuthOrRedirect, function(req, res, next) {
  res.render('index');
});

module.exports = router;
