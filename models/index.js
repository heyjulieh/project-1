mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/sneakerhub" );
var mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost/sneakerhub");

module.exports.Shoe = require('./shoe');
module.exports.Brand = require('./brand');

// mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/sneakerhub" );