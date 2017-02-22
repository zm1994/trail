var server = require('../server')
var pool = server.pool_connection

//get trail names by search params
//req.query.complex - is parameter for search not only trails but countries regions, continents
exports.searchTrail = function(req, res) {
    pool.query('SELECT * From search_trail($1, $2) order by name asc limit(10)',
         [req.query.param, !!req.query.complex], function(err, client) {
        if(err)
            res.status(500).send(err.message || err)
        else
            res.send(client.rows)
    })
}


exports.getCountries = function(req, res){
  pool.query("Select *from show_countries", function(err, client) {
    if(err)
      res.status(500).send(err.message || err)
    else {
      res.send(client.rows)
    }
  })
}
