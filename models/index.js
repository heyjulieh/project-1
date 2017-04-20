var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/sneakerhub");

module.exports.Shoe = require('./shoe');
module.exports.UserShoe = require('./shoe');
module.exports.Brand = require('./brand');
