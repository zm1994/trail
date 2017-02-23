var server = require('../server')
var pool = server.pool_connection
var handleResponse = server.handleResponse

//get trail names by search params
//req.query.complex - is parameter for search not only trails but countries regions, continents
exports.searchTrail = function(req, res) {
    pool.query('SELECT * From search_trail($1, $2) order by name asc limit(5)',
         [req.query.param, !!req.query.complex], function(error, client){ handleResponse(error, client, res) })
}

//get countries with continents and regions
exports.getCountries = function(req, res){
  pool.query("Select * from show_countries_extended", function(error, client){ handleResponse(error, client, res) })
}


exports.getTrails = function(req, res) {
  if(!!req.query.featured)
    getFeaturedTrails(req, res);
  else {
    console.log(req.query.id)
    pool.query('Select * from show_trails where id=($1) limit(1)',[req.query.id],
      function(error, client){ handleResponse(error, client, res) })
  }

}

getFeaturedTrails = function (req, res) {
  console.log(req.query.featured)
  pool.query("Select * from show_trails where is_featured is ($1) offset($2)", [req.query.featured, req.query.offset],
    function(error, client){ handleResponse(error, client, res) })
};
