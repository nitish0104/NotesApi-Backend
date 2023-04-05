const mongoose = require('mongoose')

const notesSchema = mongoose.Schema({
	note: {
		type: String,
		required: true
	},
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "user",
		required: true
	}
}, { timestamps: true })

module.exports = mongoose.model("note", notesSchema)