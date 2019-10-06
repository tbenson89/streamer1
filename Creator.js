var mongoose = require("mongoose");

var creatorSchema = new mongoose.Schema({
	creatorName: String,
	creatorGenre: String,
	creatorBIO: String,
	creatorIMG: String
});

module.exports = mongoose.model("creators" , creatorSchema);