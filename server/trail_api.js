var server = require('../server')
var pool = server.pool_connection

//get trail names by search params
exports.searchTrail = function(req, res) {
    var search_param = '%' + req.query.param + '%'
    pool.query("SELECT id, name, length, is_countryside FROM trails WHERE lower(name) like lower($1) limit(10)",[search_param], function(err, client) {
        if(err)
            res.status(500).send(err.message || err)
        else {
            res.send(client.rows)
        }
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
