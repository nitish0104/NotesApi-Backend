const express = require('express')
const { createNote, getNote, deleteNote, updateNote } = require('../controller/noteController')
const auth = require('../middleware/auth')
const Router = express.Router();

Router.get('/', auth, getNote)

Router.post('/', auth, createNote)
Router.put('/:id', auth, updateNote)
Router.delete('/:id', auth, deleteNote)




module.exports = Router