var server = require('../server')
var pool = server.pool_connection

//get trail names by search params
exports.searchTrail = function(req, res) {
    var search_param = '%' + req.query.param + '%'
    pool.query("SELECT id, name FROM trails WHERE lower(name) like lower($1)",[search_param], function(err, client) {
        if(err)
            res.send(err.message || err)
        else {
            res.send(client.rows)
        }
    })
}
