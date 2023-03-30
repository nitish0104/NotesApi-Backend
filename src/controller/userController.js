const userModel = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()
const signup = async (req, res) => {

	const { usename, email, password } = req.body
	console.log(req.body);
	console.log(usename);
	try {
		//existing user
		const existinguser = await userModel.findOne({ email: email })
		if (existinguser) {
			return res.status(400).json({ message: "user already exist" })
		}
		//hashed password
		const hashpassword = await bcrypt.hash(password, 10)
		//userCreation
		const result = await userModel.create({
			username: usename,
			email: email,
			password: hashpassword
		})
		//token
		const token = jwt.sign({ email: result.email, id: result._id }, process.env.SECRET_KEY)
		res.status(201).json({ user: result, token: token })
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "something went wrong" })
	}
}
const signin = async (req, res) => {
	const { email, password } = req.body
	try {
		const existinguser = await userModel.findOne({ email: email })
		if (!existinguser) {
			return res.status(404).json({ message: "user not found" })
		}

		const matchpassword = await bcrypt.compare(password, existinguser.password)
		if (!matchpassword) {
			return res.status(400).json({ message: "invalid credentials" })
		}

		const token = jwt.sign({ email: existinguser.email, id: existinguser._id }, SECRET_KEY)
		res.status(201).json({ user: existinguser, token: token })


	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "something went wrong" })
	}
}

module.exports = { signin, signup }