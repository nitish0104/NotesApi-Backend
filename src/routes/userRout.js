const express = require('express')
const { signin, signup } = require('../controller/userController')
const userRouter = express.Router()
userRouter
	.route("/signup")
	.post(signup)
userRouter
	.route("/signin")
	.post(signin)

// function signup(req, res) {
// 	res.send("Signup")
// }
// function signin(req, res) {
// 	res.send("signin")
// }

module.exports = userRouter

// pass- 8sX2UnVpH8QcL4VP

// mongodb+srv://nitish1dalvi:<password>@notes.nlr5jay.mongodb.net/?retryWrites=true&w=majority