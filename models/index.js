
var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/sneakerhub" );

module.exports.Shoe = require('./shoe');
module.exports.Brand = require('./brand');

