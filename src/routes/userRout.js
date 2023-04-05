const express = require('express')
const { signin, signup } = require('../controller/userController')
const userRouter = express.Router()
userRouter
	.route("/signup")
	.post(signup)
userRouter
	.route("/signin")
	.post(signin)

// Router.post("/signup", signup)
// Router.post("/login", signin)


module.exports = userRouter

// pass- 8sX2UnVpH8QcL4VP

// mongodb+srv://nitish1dalvi:<password>@notes.nlr5jay.mongodb.net/?retryWrites=true&w=majority