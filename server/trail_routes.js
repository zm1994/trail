var server = require('../server')
var pool = server.pool_connection
// var app = server.app


exports.searchTrail = function(req, res) {
    var search_param = '%' + req.params.search + '%'
    console.log(pool)
    pool.query("SELECT id, name FROM trails WHERE lower(name) like $1",[search_param], function(err, client) {
        if(err) 
            res.send(err.message || err)
        else {
            res.send(client.rows)
        }
    })
}


// app.get("/api/search/:search", function(req, res) {
//   var search_param = '%' + req.params.search + '%'
//     pool.query("SELECT id, name FROM trails WHERE lower(name) like $1",[search_param], function(err, client) {
//         if(err) 
//             res.send(err.message || err)
//         else {
//             res.send(client.rows)
//         }
//     })
// });
