var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Brand = require('./brand');

var ShoeSchema = new Schema({
  brandName: {type: Schema.Types.ObjectId, ref: 'Brand'},
  name: String,
  colorway: String,
  price: String,
  releaseDate: String,
  type: [ String ],
  dropLocation: [String],
  editor: String,
});

var Shoe = mongoose.model('Shoe', ShoeSchema);
module.exports = Shoe;
