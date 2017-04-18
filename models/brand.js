var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Shoe = require('./brand');
var BrandSchema = new Schema({
  name: String,
  establishDate: String,
  location: [String],
});

var Shoe = mongoose.model('Shoe', ShoeSchema);
module.exports = Shoe;
