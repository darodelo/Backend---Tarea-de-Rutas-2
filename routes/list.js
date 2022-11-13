const express = require("express")
const listaRouter = express.Router()
const { lista } = require("../controllers/listaController")


listaRouter.get('/', lista)


module.exports = listaRouter