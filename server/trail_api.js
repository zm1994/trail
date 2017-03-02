var server = require('../server');
var pool = server.pool_connection
var handleResponse = server.handleResponse
var upload = server.upload

//get trail names by search params
//req.query.complex - is parameter for search not only trails but countries regions, continents
exports.searchTrail = function (req, res) {
  pool.query('SELECT * From search_trail($1, $2) order by name asc limit(5)',
    [req.query.param, !!req.query.complex], function (error, client) { handleResponse(error, client, res) })
}

//get countries with continents and regions
exports.getCountries = function (req, res) {
  pool.query("Select * from show_countries_extended", function (error, client) { handleResponse(error, client, res) })
}

exports.getTrails = function (req, res) {
  if (!!req.query.featured)
    getFeaturedTrails(req, res);
  else {
    console.log(req.query.id)
    pool.query('Select * from show_trails where id=$1 limit(1)', [req.query.id],
      function (error, client) { handleResponse(error, client, res) })
  }
}

function getFeaturedTrails(req, res) {
  pool.query("Select * from show_trails where is_featured=$1 offset($2) limit($3)",
    [req.query.featured, req.query.offset, req.query.count],
    function (error, client) { handleResponse(error, client, res) })
};

exports.getCountTrails = function (req, res) {
  pool.query("Select COUNT(*) from trails where is_featured=$1", [req.query.featured],
    function (error, client) { handleResponse(error, client, res) })
}

exports.uploadFile = function (req, res) {
  upload(req, res, function (err) {
    if (err) {
      res.json({ error_code: 1, err_desc: err });
      return;
    }
    pool.query("Select * from upload_photo_trail($1, $2)", [req.body.id, req.file.filename],
      function (error, client) { handleResponse(error, client, res) });
  })
};
