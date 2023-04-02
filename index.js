const express = require('express')
const noteRouter = require('./src/routes/noteRoute')
const userRouter = require('./src/routes/userRout')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const cors = require('cors')
const port = process.env.PORT
const mongoose = require('mongoose')
app.use(express.json())


app.use(cors(
	{
		"origin": "*",
		"optionsSuccessStatus": 204
	}
))

app.use('/user', userRouter)
app.use('/note', noteRouter)


app.get('/', (req, res) => {
	res.send("notesApi")
})

mongoose.connect(process.env.MONGO_URL)
	.then(() => {
		app.listen(port, () => {
			console.log("server started: " + `http://localhost:${port}`);
		})
		console.log("mongoose connected")
	})
	.catch((err) => {
		console.log(err);
	})
