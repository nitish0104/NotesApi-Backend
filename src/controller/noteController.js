const noteModel = require("../models/nots");
const user = require("../models/user");

// const path = require('path')

const createNote = async (req, res) => {
	const { note } = req.body
	try {
		const newNote = new noteModel({
			note: note,
			userId: req.userId
		})
		res.status(201).json({ note: newNote })
		newNote.save()
		console.log({ note: newNote });
	} catch (error) {
		console.log(error);
		res.status(500).json(error + "something went Wrong")

	}

	// res.sendFile(path.join(__dirname, "../../public/index.html"))
}
const updateNote = async (req, res) => {
	const { note } = req.body
	const id = req.params.id
	console.log(id);

	const updatedNote = {
		note: note,
		userId: req.userId
	}
	try {
		await noteModel.findByIdAndUpdate(id, updatedNote, { new: true })
		res.status(201).send(updatedNote)
	} catch (error) {
		console.log(error);

		res.status(500).json(error + "somethinf went Wrong")
	}
}
const deleteNote = async (req, res) => {
	const id = req.params.id
	console.log(id);
	try {
		const deletedNote = await noteModel.findByIdAndDelete(id)
		res.status(202).json({ message: "note deleted sucessfully", deletedNote })
	} catch (error) {
		console.log(error);
		res.status(500).json(error + "something went Wrong")
	}
}
const getNote = async (req, res) => {
	try {
		console.log(req.userId);
		// console.log(user);
		const notes = await noteModel.find({ userId: req.userId })
		res.status(201).json(notes)
		console.log(notes);

	} catch (error) {
		res.status(500).json(error + "somethinf went Wrong")

	}
}

module.exports = {
	createNote,
	updateNote,
	deleteNote,
	getNote
}