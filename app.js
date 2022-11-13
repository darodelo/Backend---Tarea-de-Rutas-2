const express = require('express')
const app = express()
const logger = require("morgan")

const usersRouter = require("./routes/users")
const divisionRouter = require("./routes/division")
const sumaRouter = require("./routes/suma")
const esParRouter = require("./routes/esPar")
const listaRouter = require('./routes/list')

app.use(logger("dev"))
app.use(express.json())

app.use("/users", usersRouter)
app.use("/maths", divisionRouter)
app.use("/maths", sumaRouter)
app.use("/maths", esParRouter)
app.use("/list", listaRouter)

module.exports = app