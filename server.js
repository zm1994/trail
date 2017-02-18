var express = require("express");
var bodyParser = require("body-parser");
var pg = require('pg')

var app = express();
app.use(bodyParser.json());

// Create link to Angular build directory
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

var Pool = pg.Pool;
pg.defaults.ssl = true;
var pool = new Pool({
  user: 'mofzahpwmufqhp',
  password: 'edf3e099ef1a17e5b6171e9c135b08f4ac88911f1bc0073422ccaf961cebcd9c',
  host: 'ec2-107-22-223-6.compute-1.amazonaws.com',
  database: 'd4pftr4b939hds',
  max: 10, // max number of clients in pool
  idleTimeoutMillis: 2000, // close & remove clients which have been idle > 1 second
});

pool.connect(function(err, client) {
  if(err) {
    throw err;
  }
  console.log(client);
  var server = app.listen(process.env.PORT || 8080, function () {
  var port = server.address().port;
    console.log("App now running on port", port);
  });
})


// var pg = require('pg');

// pg.defaults.ssl = true;
// console.log(process.env.DATABASE_URL);
// pg.connect(process.env.DATABASE_URL || connection_string
// , function(err, client) {
//   if (err) {
//     console.log(process.env)
//     console.log(process.env.DATABASE_URL);
//     throw err;
//   } 
//   console.log('Connected to postgres! Getting schemas...');

//  console.log(client)
//  var server = app.listen(process.env.PORT || 8080, function () {
//     var port = server.address().port;
//     console.log("App now running on port", port);
//   });
// });



app.get("/api/test", function(req, res) {
  pool.query('SELECT *FROM countries', function(err, result) {
    if(err)
      res.send(err.message || error)
    else 
      res.send(result)
  });
});

