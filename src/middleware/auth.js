const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()
const auth = async (req, res, next) => {
	try {
		let token = req.headers.authorization;
		console.log(token);
		if (token) {
			token = token.split(" ")[1];
			let user = await jwt.verify(token, process.env.SECRET_KEY)
			req.userId = user.id
		}
		else {
			return res.status(401).json({ message: "unauthorized user" })
		}
		next()
	} catch (error) {
		console.log(error);
		res.status(401).json({ message: "unauthorized user" })


	}
}
module.exports = auth;