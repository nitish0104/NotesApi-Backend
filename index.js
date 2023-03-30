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


app.use(cors())
// app.use((req, res, next) => {
// 	console.log("http method" + req.method + "url" + req.url);
// 	next()
// })
app.use('/user', userRouter)
app.use('/note', noteRouter)


app.get('/', (req, res) => {
	res.send("notesApi")
})
app.get('/shradha', (req, res) => {
	res.send("hello shradha nitish  dalvi")
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
