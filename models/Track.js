var mongoose = require("mongoose");

// Each Track (Song) Object will have the Following: 
/*
	The Track ID
	The Track Title (Name)
	The Track description
	DateAdded
	REF Creator:
		Creator ID
		Creator Name
		Creator Description
	REF Album: 
		Album ID
		Album Title
		Album Genre
*/
var trackSchema = new mongoose.Schema({
	trackTitle: String,
	TrackDescr: String
});

module.exports = mongoose.model("track" , trackSchema);