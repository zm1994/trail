var express = require("express");
var bodyParser = require("body-parser");
// var pg = require('pg');
var pgp = require('pg-promise')();

var app = express();
app.use(bodyParser.json());

// Create link to Angular build directory
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

// // Create a database variable outside of the database connection callback to reuse the connection pool in your app.
// var connection = {
//     host: 'ec2-107-22-223-6.compute-1.amazonaws.com', // 'localhost' is the default;
//     port: 5432, // 5432 is the default;
//     database: 'd4pftr4b939hds',
//     user: 'mofzahpwmufqhp',
//     password: 'edf3e099ef1a17e5b6171e9c135b08f4ac88911f1bc0073422ccaf961cebcd9c'
// };

//pgp.pg.defaults.ssl = true;
// console.log(process.env.DATABASE_URL)
// //crteate connection
// var db = pgp(process.env.DATABASE_URL);
var pg = require('pg');

//pg.defaults.ssl = true;
console.log(process.env.DATABASE_URL);
pg.connect(process.env.DATABASE_URL
, function(err, client) {
  if (err) {
    console.log(process.env)
    console.log(process.env.DATABASE_URL);
    throw err;
  } 
  console.log('Connected to postgres! Getting schemas...');

 console.log(client)
 var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
});

// db.connect().then(function (obj) {
//   obj.done(); // success, release the connection;
//   // Save database object from the callback for reuse.
//   db = database;
//   console.log("Database connection ready");

//   // Initialize the app.
//   var server = app.listen(process.env.PORT || 8080, function () {
//     var port = server.address().port;
//     console.log("App now running on port", port);
//   });
// })
// .catch(function (error) {
//   console.log(process.env.DATABASE_URL)
//         console.log("ERROR:", error.message || error);
//         process.exit(1);
// });