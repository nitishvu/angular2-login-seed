#angular2-login-seed

[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)
[![Dependency Status](https://david-dm.org/domfarolino/angular2-login-seed.svg)](https://david-dm.org/domfarolino/angular2-login-seed)
[![devDependency Status](https://david-dm.org/domfarolino/angular2-login-seed/dev-status.svg)](https://david-dm.org/domfarolino/angular2-login-seed#info=devDependencies)
[![Angular2 Style Guide](https://camo.githubusercontent.com/495f5e3a82030e6bd99569430828c46591cfe8bf/68747470733a2f2f6d6765636865762e6769746875622e696f2f616e67756c6172322d7374796c652d67756964652f696d616765732f62616467652e737667)](https://camo.githubusercontent.com/495f5e3a82030e6bd99569430828c46591cfe8bf/68747470733a2f2f6d6765636865762e6769746875622e696f2f616e67756c6172322d7374796c652d67756964652f696d616765732f62616467652e737667)

A seed application for developers to get started building applications with Angular2. The application's backend is in Node.js featuring user login via PassportJS and OAuth.

[![angular2-login-seed](./logo_post_polymer.png)](https://github.com/domfarolino/angular2-login-seed)

## Table of Contents

  1. [Demo](#demo)
  1. [Technologies](#technologies)
  1. [Overview](#overview)
  1. [TL;DR Get started now](#tldr-get-started-now)
  1. [Customizing Express server](#customizing-express-server)
  1. [Angular Component Tree](#angular-component-tree)
  1. [Directory Structure](#directory-structure)
  1. [Contributing](#contributing)
  1. [Todo](#todo)

## Demo
Check this site out live [here](https://chinocode.com/angular2-login-seed)

## Technologies
Some of the open source technologies used in this application are listed below
  1. [Angular 2](https://angular.io/)
  1. [Angular CLI](https://cli.angular.io/)
  1. [Angular Material2](https://material.angular.io/)
  1. [Node.js](https://nodejs.org/)
  1. [Express](http://expressjs.com/)
  1. [PassportJS](http://passportjs.org/)

## Overview

This repository contains code for *two* applications:

 - The Angular app which gets served by the [angular-cli](https://github.com/angular/angular-cli) via `npm start` on `localhost:4200`
 - The Express server on which the Angular app depends which is served via `npm run express-dev` or `npm run express-prod` on `localhost:5000`

**It is only necessary to run the Angular app locally** to get up and running. This is because by default the Angular app depends on the
remote Express server which has been deployed on Heroku. There is no need for you worry about setting up OAuth accounts, SQL Databases, or
remote servers. This stuff is only necessary if you wish to change the API to be your own. Steps for this can be found in the [Customizing Express server](#customizing-express-server) section. 

## TL;DR Get started now

Make sure you have `angular-cli` installed globally `npm install -g angular-cli`.

```sh
# Fork or clone this repo
git clone git@github.com:domfarolino/angular2-login-seed.git
npm install
npm start
```

Navigate to `localhost:4200` and you should see the following application served:

![login-screenshot](./login-screenshot.png)

## Customizing Express server

I've tried to make it easy to customize your the Express server to make it your own. Only the following steps need completed:

 - Create OAuth appliations with Google and Twitter. You can follow my [guide here](https://chinocode.com/Registering-An-OAuth-App/)
 - Input the application credentials in the `config/default.json` configuration file
 - Create a local or production database in which the application will store the `users`.
 - Execute the contents of `angular2-login-seed.sql` on the database to create a useres table with proper fields
 - Fill out `config/default.json`, `config/production.json`, or both with db credentials to that `Sequelize` knows how to connect when you're in development or production mode
 - Change the production OAuth callbacks found in `config/production.json`

> To learn about how the npm package `config` works with Node environment variables click [here](https://www.npmjs.com/package/config)

```sh
npm run express-dev # runs express server in development mode with development specified credentials
npm run express-prod # runs express server in production mode using credentials overwritten in production.json
```

I've tried to make it as easy as possible to add more OAuth providers to this app to keep it flexible.
If you think it can be done better please submit a PR to improve the maintainability of the app.
To add support for another OAuth provider 4 things need to be done:

##### 1. Add authorization and callback routes for the provider (edit `/routes/index.js`)
```
/**
 * Authorization route for <provider> provider
 */
router.get('/authorize/provider',
  passport.authenticate('provider'));

/**
 * Define our provider callback endpoint and success/failure methods 
 */
router.get('/callback/provider', 
	passport.authenticate('provider', { 
		successRedirect: '/',
		failureRedirect: '/provider'
}));
```
##### 2. Add your OAuth credentials to the `/config/default.json` file. You'll use these in `/config/passport.js` which you'll edit next

##### 3. Setup/use PassportJS strategy in `/config/passport.js`
```
passport.use(new ProviderStrategy({....
```

##### 4. Update the attribute utility functions at the end of `/config/passport.js` to support your provider

This entails basically examining the JSON payload you get back from your provider and seeing
under what keys, the information you need to insert into the database exists under. If any database/model
changes need made modify the database appropriately and update the User model `/models.js`

## Angular Component Tree
![app-component-tree](./app-component-tree.png)

## Directory Structure
The goal is to keep as flat of a directory structure as possible for all of the Angular components. Reasons for this, as well as grouping files by bounded context can be found [here](https://github.com/mgechev/angular2-style-guide#directory-structure).

```
.
├─routes
│   ├─api
│   │   ├─users.js
│   │   ├─index.js
│   ├─authenticationHelpers.js
│   ├─index.js
│   ├─authorize
│   │   ├─index.js
├─e2e
│   ├─app.po.ts
│   ├─typings.d.ts
│   ├─app.po.js
│   ├─app.e2e.ts
│   ├─app.e2e.js.map
│   ├─app.e2e.js
│   ├─tsconfig.json
│   ├─app.po.js.map
├─144.png
├─Procfile
├─app.js
├─views
│   ├─error.ejs
├─login-screenshot.png
├─controllers
│   ├─getAllUsersPublic.js
│   ├─truncateUserObject.js
│   ├─userExists.js
│   ├─registerUser.js
│   ├─index.js
│   ├─getUserPublic.js
├─directoryStructure.txt
├─angular-cli.json
├─tslint.json
├─logo.png
├─.editorconfig
├─app-component-tree.png
├─public
├─angular-cli-build.js
├─logo_post_polymer.png
├─models
│   ├─user.js
│   ├─index.js
├─manifest.json
├─src
│   ├─app
│   │   ├─angular2-login-seed.component.spec.ts
│   │   ├─login
│   │   │   ├─login.component.css
│   │   │   ├─login.component.js.map
│   │   │   ├─login.component.js
│   │   │   ├─index.ts
│   │   │   ├─login.component.html
│   │   │   ├─login.component.ts
│   │   ├─heroes
│   │   │   ├─heroes.component.js.map
│   │   │   ├─heroes.component.js
│   │   │   ├─heroes.component.ts
│   │   │   ├─heroes.component.css
│   │   │   ├─heroes.component.html
│   │   ├─unauthenticated.guard.ts
│   │   ├─angular2-login-seed.component.css
│   │   ├─register
│   │   │   ├─register.component.js
│   │   │   ├─index.ts
│   │   │   ├─register.component.js.map
│   │   │   ├─register.component.ts
│   │   │   ├─register.component.css
│   │   │   ├─register.component.html
│   │   ├─home-root
│   │   │   ├─home-root.guard.ts
│   │   │   ├─home-root.component.css
│   │   │   ├─index.ts
│   │   │   ├─home-root.component.js.map
│   │   │   ├─home-root.routes.ts
│   │   │   ├─home-root.component.js
│   │   │   ├─home-root.component.html
│   │   │   ├─home-root.component.ts
│   │   ├─hero-detail
│   │   │   ├─hero-detail.component.js.map
│   │   │   ├─hero-detail.component.html
│   │   │   ├─hero-detail.component.css
│   │   │   ├─hero-detail.component.js
│   │   │   ├─hero-detail.component.ts
│   │   ├─users
│   │   │   ├─user-badge.component.html
│   │   │   ├─users.component.css
│   │   │   ├─users.component.ts
│   │   │   ├─user-badge.component.css
│   │   │   ├─index.ts
│   │   │   ├─users.component.js.map
│   │   │   ├─users.component.js
│   │   │   ├─users.component.html
│   │   │   ├─user-badge.component.js
│   │   │   ├─user-badge.component.ts
│   │   │   ├─user-badge.component.js.map
│   │   ├─environment.ts
│   │   ├─index.ts
│   │   ├─dashboard
│   │   │   ├─dashboard.component.html
│   │   │   ├─dashboard.component.ts
│   │   │   ├─dashboard.component.js.map
│   │   │   ├─dashboard.component.js
│   │   ├─shared
│   │   │   ├─services
│   │   │   │   ├─hero
│   │   │   │   │   ├─hero.service.js.map
│   │   │   │   │   ├─hero.service.ts
│   │   │   │   │   ├─hero.service.js
│   │   │   │   │   ├─hero.js.map
│   │   │   │   │   ├─hero.js
│   │   │   │   │   ├─hero.ts
│   │   │   │   ├─user
│   │   │   │   │   ├─user-status-codes.js.map
│   │   │   │   │   ├─user.js
│   │   │   │   │   ├─user-status-codes.ts
│   │   │   │   │   ├─user.service.ts
│   │   │   │   │   ├─user.service.js.map
│   │   │   │   │   ├─user.ts
│   │   │   │   │   ├─user.js.map
│   │   │   │   │   ├─username-email-validator.ts
│   │   │   │   │   ├─username-email-validator.js.map
│   │   │   │   │   ├─user.service.js
│   │   │   │   │   ├─username-email-validator.js
│   │   │   │   │   ├─user-status-codes.js
│   │   │   ├─components
│   │   │   │   ├─quick-card
│   │   │   │   │   ├─quick-card.component.js
│   │   │   │   │   ├─quick-card.component.html
│   │   │   │   │   ├─quick-card.component.ts
│   │   │   │   │   ├─quick-card.component.js.map
│   │   │   │   │   ├─quick-card.component.css
│   │   ├─angular2-login-seed.component.ts
│   │   ├─angular2-login-seed.component.html
│   │   ├─angular2-login-seed.routes.ts
│   ├─typings.d.ts
│   ├─system-config.ts
│   ├─favicon.ico
│   ├─index.html
│   ├─main.ts
│   ├─tsconfig.json
│   ├─assets
│   │   ├─favicon.ico
│   │   ├─img
│   │   │   ├─space_bg.jpg
│   │   │   ├─menu_bg.jpg
│   │   │   ├─menu_bg_small.jpg
│   │   │   ├─bg.png
│   │   │   ├─background.jpg
├─config
│   ├─default.json
│   ├─production.json
│   ├─karma-test-shim.js
│   ├─environment.js
│   ├─passport.js
│   ├─environment.dev.js
│   ├─environment.prod.js
│   ├─environment.dev.ts
│   ├─environment.dev.js.map
│   ├─environment.prod.ts
│   ├─karma.conf.js
│   ├─protractor.conf.js
│   ├─environment.prod.js.map
├─bin
│   ├─www
├─index.html
├─package.json
├─.gitignore
├─96.png
├─typings.json
├─tsconfig.json
├─sw.js
├─LICENSE
├─192.png
├─.clang-format
├─angular2-login-seed.sql
├─README.md
```

## Contributing
Please feel free to contribute to this project to help build more defined practices we can use in larger Angular 2 web
applications. PRs are welcome!

## Todo
 1. User 'profile' page
 1. Progressive Web App - Service Worker Caching
 1. Progressive Web App - [Push Notification](https://developers.google.com/web/updates/2016/03/web-push-encryption?hl=en) support with [encrypted payload](https://github.com/GoogleChrome/web-push-encryption)
 1. RxJS websocket integration for realtime user status
 1. More extensive tests
