var mongoose = require("mongoose");

// Each Album Object will have each of the following: 
/*
	The Albums ID - mongooose does this! 
	THe Albums Title 
	The Albums Genre
	REF Creator: 
		The Albums Creator ID 
		The Albums Creator Name
*/
var albumSchema = new mongoose.Schema({
	albumTitle: String,
	albumGenre: String,
	albumArtist: {
		artistId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Artist"
		}, 
		artistName: {
			type: mongoose.Schema.Types.String,
			ref: "Artist"
		}
	}
});

module.exports = mongoose.model("Album" , albumSchema);