/**
 * Created by user on 15.02.17.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DirectionWithTransfers  = new Schema({
  departure_id_airport: Number,
  transfers_id: Array,
  arrival_id_airport: Number
});

module.exports = mongoose.model('DirectionWithTransfers', DirectionWithTransfers);
