var mongoose = require("mongoose");

// Each Listener (sub) will have the following: 
/*
	A listener ID
	REF User: 
		User ID
		First and Last Name
		username
		Password (handled with passport later)
		Location (Address or GPS)
		Plan the Users Subscription (Permissions) Listening but no Creation Priveledges 
		An Email
		Phone number 
		Date when the user was created
*/
var listenSchema = new mongoose.Schema({
	// Add references to the other Tables (Models)
});

module.exports = mongoose.model("listener" , listenSchema);