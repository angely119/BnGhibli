const Sequelize = require('sequelize');

// if(process.env.DATABASE_URL) {
//   config.dialectOptions = {
//     ssl: {
//       rejectUnauthorized: false
//     }
//   };
// }
// heroku config:set PGSSLMODE=no-verify

// const db = new Sequelize('postgres://localhost:5432/ghiblinb', {
//   logging: false
// });

const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/ghiblinb', {
  logging: false
});

module.exports = db;
