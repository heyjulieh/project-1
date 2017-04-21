var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Brand = require('./brand');

var ShoeSchema = new Schema({
  // brandName: [Brand.Schema],
  // brand: {
  // 	type: Schema.Types.ObjectId,
  // 	ref: 'Brand'
  // },
  brand: String,
  name: {
    type: String,
    required: true
  },
  colorway: String,
  price: String,
  releaseDate: String,
  type: [ String ],
  dropLocation: [String],
  editor: String,
  images: String,
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  username: String
});

var Shoe = mongoose.model('Shoe', ShoeSchema);
module.exports = Shoe;
