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
  idleTimeoutMillis: 15000 // close & remove clients which have been idle > 1 second
});

pool.connect(function(err, client) {
  if(err) {
    throw err;
  }
  console.log(client);
  //create server if connection with database success
  var server = app.listen(process.env.PORT || 8080, function () {
  var port = server.address().port;
    console.log("App now running on port", port);
  });
});

exports.pool_connection = pool;
exports.handleResponse = function(err, client, res) {
  if(err)
    res.status(500).send(err.message || err)
  else
    res.send(client.rows)
}

var trail = require('./server/trail_api')

app.get("/api/search/", trail.searchTrail);

app.get('/api/countries', trail.getCountries);

app.get('/api/trail/', trail.getTrails);
