// SYNCS DB AND STARTS EXPRESS SERVER
// ALSO WHERE TO SEED

const { db } = require('./db');
const app = require('./app');
const port = process.env.PORT || 3000;

db.sync()
  .then(function() {
    app.listen(port, function() {
      console.log(`Listening on port ${port}`)
    })
  });

// app.listen(port, function() {
//   console.log(`Listening on port ${port}`)
// });
