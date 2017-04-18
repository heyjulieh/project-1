var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Brand = require('./brand');
var BrandSchema = new Schema({
  name: String,
  establishDate: String,
  location: [String],
  image: String
});

var Brand = mongoose.model('Brand', BrandSchema);
module.exports = Brand;
