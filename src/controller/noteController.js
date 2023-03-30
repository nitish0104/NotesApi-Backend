const noteModel = require("../models/nots");
const user = require("../models/user");

// const path = require('path')

const createNote = async (req, res) => {
	const { title, discription } = req.body
	console.log(req.body);
	console.log(req.userId);
	const newNote = new noteModel({
		title: title,
		discription: discription,
		userId: req.userId
	})
	console.log(newNote);
	try {
		await newNote.save()
		res.status(201).json(newNote)
	} catch (error) {
		console.log(error);
		res.status(500).json(error + "somethinf went Wrong")

	}
	console.log(req.userId);

	// res.sendFile(path.join(__dirname, "../../public/index.html"))
}
const updateNote = async (req, res) => {
	const { title, discription } = req.body
	const id = req.params.id
	console.log(id);

	const updatedNote = {
		title: title,
		discription: discription,
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
		res.status(202).json({ message: "note deleted sucessfully" })
	} catch (error) {
		console.log(error);
		res.status(500).json(error + "somethinf went Wrong")
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