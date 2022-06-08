// USER MODEL
const Sequelize = require('sequelize');
const db = require('../database');

const User = db.define('user', {
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  profileImageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://pbs.twimg.com/media/EZKcz5aUEAEWm6R?format=jpg&name=360x360'
  },
  bio: {
    type: Sequelize.TEXT
  }
});

module.exports = User;
