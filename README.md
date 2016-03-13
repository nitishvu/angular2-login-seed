#angular2-login-seed

[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)
[![Dependency Status](https://david-dm.org/domfarolino/angular2-login-seed.svg)](https://david-dm.org/domfarolino/angular2-login-seed)
[![devDependency Status](https://david-dm.org/domfarolino/angular2-login-seed/dev-status.svg)](https://david-dm.org/domfarolino/angular2-login-seed#info=devDependencies)

A seed application for developers to get started building applications with Node.js, Angular 2, and Polymer web components supporting user login via PassportJS and OAuth.

[![angular2-login-seed](./logo.png)](https://github.com/domfarolino/angular2-login-seed)

## Table of Contents

  1. [Demo](#demo)
  1. [Technologies](#technologies)
  1. [TL;DR Get started now](#tldr-get-started-now)
  1. [Build Philosophy](#build-philosophy)
  1. [Angular Component Tree](#angular-component-tree)
  1. [Directory Structure](#directory-structure)
  1. [Contributing](#contributing)
  1. [Todo](#todo)

## Demo
Check this site out live [here](https://angular2-login-seed.herokuapp.com)

## Technologies
Some of the open source technologies used in this application are listed below
  1. [Node.js](https://nodejs.org/)
  1. [Express](http://expressjs.com/)
  1. [Angular 2](https://angular.io/)
  1. [Polymer Web Components](https://www.polymer-project.org/1.0/)
  1. [Bower](http://bower.io/)
  1. [Passport](http://passportjs.org/)
  1. [Sequelize](http://docs.sequelizejs.com/en/latest/)

## TL;DR Get started now

```sh
# Fork or clone this repo
git clone git@github.com:domfarolino/angular2-login-seed.git
bower install
npm install
```
Next, either input your Google and Twitter application's OAuth credentials in the `config/default.json` file, or follow [this](https://domfarolino.github.io/Registering-An-OAuth-App/) guide to set up an OAuth application with Google and Twitter.

You'll need either a local or production database which the application will use to store `users`. The structure of this database is defined in the `dbStructure.sql` file found in the root folder. Execute its sql contents on a database to create a users table to house your users.

> To learn about how the npm package `config` works click [here](https://www.npmjs.com/package/config)

Next fill out either the `config/default.json`, `config/production.json` or both with database credentials so that `Sequelize` knows how to connect to your database when you're in development or production mode. You'll also want to fill out the `oauthCallbacks` object with callback URLs for your app.
The finished product should look something like this:

```javascript
{  
  "database-configuration": {
    "host": "localhost",
    "user": "user",
    "pass": "pass",
    "name": "dbName"
  },
  
  "oauthCredentials": {
    "twitter": {
        "id": "<>",
        "secret": "<>"
    },
    "google": {
        "id": "<>",
        "secret": "<>"
    }
  },
  
  "oauthCallbacks": {
    "googleCallbackUrl"  : "http://localhost:5000/callback/google",
    "twitterCallbackUrl" : "http://localhost:5000/callback/twitter",
    "facebookCallbackUrl": "http://localhost:5000/callback/facebook"
  }
}
```

Your `config/production.json` should only contain data that will overwrite any of the default data when you're in production mode.

Then type one of the following commands into the terminal:
```sh
npm run # run in production mode, uses default.json values unless they're overridden in production.json
```
Or
```sh
npm run dev # run in development mode, uses default.json values only
```

That should be it! Just browse to `http://localhost:5000` to see the app.

### Further development
For further development, open a new terminal window and type `npm run front`. This will transpile and "watch" all of your typescript files for any changes.


## Build Philosophy
Polymer web components can handle quite a bit of logic and have features such as `dom-repeat` to iterate and display a number of elements in a `for-each` fashion. In this project however, I am using Angular 2 for most of the logic and template iteration with [structural directives](https://angular.io/docs/ts/latest/guide/structural-directives.html), while Polymer is utilized to replace some standard DOM elements so I (and you) don't have to write custom styles accross the board to meet material design standards. So in short, Angular 2 is being leveraged to display components, data, and templates, and each component template is comprised of a number of standard DOM elements and Polymer web components for display.

Essentially the only time polymer is used as a main display for elements and data to be inserted into is the main custom polymer component `<page-shell>` which is used to house the main view of the app. This element can be found in `/client/assets/custom_components/page-shell/page-shell.html`. It is used in the `home-root` template, found in `client/home-root/home-root.component.html`. Everything in the `home-root` component gets injected into `<page-shell>`'s content insertion points. The `<page-shell>` polymer component consists of a `<paper-drawer-panel>` which houses a `<paper-header-panel>` (as the side-menu) and a `<paper-scroll-header-panel>` whose inner `<div class="content"></div>` is where our main content insertion point lies. Angular 2 `<router-outlet>` views are injected here.


## Angular Component Tree
![app-component-tree](./app-component-tree.png)

## Directory Structure
The goal is here is to keep as flat of a directory structure as possible for all of the Angular components. Reasons for this, as well as grouping files by bounded context can be found [here](https://github.com/mgechev/angular2-style-guide#directory-structure).

```
.
├─routes
│   ├─api
│   │   ├─users.js
│   │   ├─index.js
│   ├─authenticationHelpers.js
│   ├─index.js
├─client
│   ├─login
│   │   ├─login.component.css
│   │   ├─login.component.js.map
│   │   ├─login.component.js
│   │   ├─login.component.html
│   │   ├─login.component.ts
│   ├─heroes
│   │   ├─heroes.component.js.map
│   │   ├─heroes.component.js
│   │   ├─heroes.component.ts
│   │   ├─heroes.component.css
│   │   ├─heroes.component.html
│   ├─app
│   │   ├─app.component.js
│   │   ├─app.component.css
│   │   ├─app.component.ts
│   │   ├─app.component.html
│   │   ├─app.component.js.map
│   ├─main.js.map
│   ├─map
│   │   ├─map.component.ts
│   │   ├─map.component.html
│   │   ├─map.component.js
│   │   ├─map.component.js.map
│   ├─home-root
│   │   ├─home-root.component.css
│   │   ├─home-root.component.js.map
│   │   ├─home-root.component.js
│   │   ├─home-root.component.html
│   │   ├─home-root.component.ts
│   ├─hero-detail
│   │   ├─hero-detail.component.js.map
│   │   ├─hero-detail.component.html
│   │   ├─hero-detail.component.css
│   │   ├─hero-detail.component.js
│   │   ├─hero-detail.component.ts
│   ├─users
│   │   ├─users.component.css
│   │   ├─users.component.ts
│   │   ├─users.component.js.map
│   │   ├─users.component.js
│   │   ├─users.component.html
│   ├─dashboard
│   │   ├─dashboard.component.html
│   │   ├─dashboard.component.ts
│   │   ├─dashboard.component.js.map
│   │   ├─dashboard.component.js
│   ├─shared
│   │   ├─services
│   │   │   ├─hero
│   │   │   │   ├─hero.service.js.map
│   │   │   │   ├─hero.service.ts
│   │   │   │   ├─hero.service.js
│   │   │   │   ├─hero.js.map
│   │   │   │   ├─hero.js
│   │   │   │   ├─hero.ts
│   │   │   ├─user
│   │   │   │   ├─user.js
│   │   │   │   ├─user.service.ts
│   │   │   │   ├─user.service.js.map
│   │   │   │   ├─user.ts
│   │   │   │   ├─user.js.map
│   │   │   │   ├─user.service.js
│   │   ├─components
│   │   │   ├─quick-card
│   │   │   │   ├─quick-card.component.js
│   │   │   │   ├─quick-card.component.html
│   │   │   │   ├─quick-card.component.ts
│   │   │   │   ├─quick-card.component.js.map
│   │   │   │   ├─quick-card.component.css
│   ├─main.js
│   ├─main.ts
│   ├─assets
│   │   ├─favicon.ico
│   │   ├─custom_components
│   │   │   ├─sidebar-item
│   │   │   │   ├─sidebar-item.html
│   │   │   ├─page-shell
│   │   │   │   ├─page-shell.html
│   │   ├─img
│   │   │   ├─menu_bg.jpg
│   │   │   ├─bg.png
│   │   │   ├─background.jpg
├─Procfile
├─app.js
├─views
│   ├─index.ejs
│   ├─error.ejs
│   ├─login.ejs
├─logo.png
├─app-component-tree.png
├─models
│   ├─user.js
│   ├─index.js
├─.bowerrc
├─config
│   ├─default.json
│   ├─production.json
│   ├─passport.js
├─bower.json
├─bin
│   ├─www
├─package.json
├─.gitignore
├─typings
│   ├─browser.d.ts
│   ├─browser
│   │   ├─ambient
│   │   │   ├─es6-shim
│   │   │   │   ├─es6-shim.d.ts
│   ├─main.d.ts
│   ├─main
│   │   ├─ambient
│   │   │   ├─es6-shim
│   │   │   │   ├─es6-shim.d.ts
├─typings.json
├─tsconfig.json
├─LICENSE
├─dbStructure.sql
├─README.md

```


## Contributing
Angular 2 is very new and in beta as I write, there are few established design practices for using it with other front end libraries such as Polymer 1.0. Please feel free to contribute to this project to help build better define practices we can use to build larger Angular 2 web applications. PRs are welcome!

## Todo
 1. Unit testing
 1. Add a way to set custom user background images
 1. Socket.IO realtime chat component
