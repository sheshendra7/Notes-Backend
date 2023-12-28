const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors")

const routes = require('./routes/ToDoRoute')

require('dotenv').config()
const app = express()
const PORT = process.env.port || 5000

app.use(express.json())
app.use(cors())

mongoose
    .connect(process.env.MONOGO_URL)
    .then(() => console.log('Connected to mongo bd'))
    .catch((err) => console.log(err))

app.use(routes)

app.listen(PORT, () => console.log(`listening on: ${PORT}`)) 