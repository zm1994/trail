var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AvailableDirectionSchema  = new Schema({
  departure_id: Number,
  arrival_id: Number
});

module.exports = mongoose.model('AvailableDirection', AvailableDirectionSchema);
