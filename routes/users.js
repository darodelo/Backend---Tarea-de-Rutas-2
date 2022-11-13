const express = require("express")
const usersRouter = express.Router()
const { users } = require("../controllers/usersController")


usersRouter.get('/nombre/:nombre/apellido/:apellido', users) 

module.exports = usersRouter