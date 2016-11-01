"use strict";

var Sequelize = require("sequelize");
var bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    id:{
        type:          Sequelize.INTEGER(11),
        field:         'id',
        allowNull:     false,
        primaryKey:    true,
        autoIncrement: true
    },
    social_id:{
        type:      Sequelize.STRING(64),
        field:     'social_id',
        allowNull: true
    },
    name:{
        type:      Sequelize.STRING(64),
        field:     'name',
        allowNull: false
    },
    username:{
        type:      Sequelize.STRING(64),
        field:     'username',
        allowNull: false
    },
    email:{
        type:         Sequelize.STRING(64),
        field:        'email',
        allowNull:    true,
        defaultValue: null
    },
    password:{
        type:         Sequelize.STRING(64),
        field:        'password',
        allowNull:    true,
        defaultValue: null
    },
    profile_picture:{
        type: Sequelize.STRING(256),
        field: 'profile_picture',
        allowNull: false
    },
    provider:{
        type: Sequelize.STRING(64),
        field: 'provider',
        allowNull: false
    },
    last_active:{
        type: Sequelize.INTEGER(11),
        field: 'last_active',
        allowNull: true,
        defualtValue: null
    },
    access_token:{
        type: Sequelize.STRING(256),
        field: 'access_token',
        allowNull: true,
        defualtValue: null
    },
    access_token_secret:{
        type: Sequelize.STRING(256),
        field: 'access_token_secret',
        allowNull: true,
        defualtValue: null
    },
    refresh_token:{
        type: Sequelize.STRING(128),
        field: 'refresh_token',
        allowNull: true,
        defualtValue: null
    }
  },  
  {
    // don't add the timestamp attributes (updatedAt, createdAt)
    timestamps: false,

    // don't delete database entries but set the newly added attribute deletedAt
    // to the current date (when deletion was done). paranoid will only work if
    // timestamps are enabled
    paranoid: true,

    // don't use camelcase for automatically added attributes but underscore style
    // so updatedAt will be updated_at
    underscored: true,

    // disable the modification of tablenames; By default, sequelize will automatically
    // transform all passed model names (first parameter of define) into plural.
    // if you don't want that, set the following
    freezeTableName: true,

    // define the table's name
    tableName: 'users',
    
    classMethods: {
      generateHash: function(password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
      }
    },
    instanceMethods: {
      verifyPassword: function(password) {
          return bcrypt.compareSync(password, this.password);
      }
    }
  });
  return User;
};