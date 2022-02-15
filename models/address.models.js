const mongoose = require("mongoose");

const  CategorySchema = new mongoose.Schema(
	{
		 country: { type: String,required: true },
		city: { type: String },
		rue: { type: String },
		codePostal: { type: String ,required: true},

		
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Address", CategorySchema);