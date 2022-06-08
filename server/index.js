// SYNCS DB AND STARTS EXPRESS SERVER
// const db = require('./db/db');
const app = require('./app');
const port = process.env.PORT || 3000;

// db.sync()
//   .then(function() {
//     app.listen(port, function() {
//       console.log(`Listening on port ${port}`)
//     })
//   });

app.listen(port, function() {
  console.log(`Listening on port ${port}`)
});
