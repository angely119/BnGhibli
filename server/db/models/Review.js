// REVIEWS MODEL
const Sequelize = require('sequelize');
const db = require('../database');

const Review = db.define('review', {
  rating: {
    type: Sequelize.INTEGER
  },
  comment: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});

module.exports = Review;
