var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AirportSchema = new Schema({
  code_airport: String,
  id_airport: Number,
  location: {
    lat: Number,
    lon: Number
  }
}, { collection: 'airports' });

module.exports = mongoose.model('Airport', AirportSchema);
