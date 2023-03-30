const express = require('express')
const { createNote, getNote, deleteNote, updateNote } = require('../controller/noteController')
const auth = require('../middleware/auth')
const noteRouter = express.Router()
noteRouter
	.route("/")
	.get(auth, getNote)
noteRouter
	.route("/")
	.post(auth, createNote)
noteRouter
	.route("/:id")
	.delete(auth, deleteNote)
noteRouter
	.route("/:id")
	.put(auth, updateNote)



module.exports = noteRouter