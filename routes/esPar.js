const express = require("express")
const esParRouter = express.Router()
const { esPar } = require("../controllers/esParController")


esParRouter.get('/espar', esPar)


module.exports = esParRouter