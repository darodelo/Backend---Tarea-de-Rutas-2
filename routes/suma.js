const express = require("express")
const sumaRouter = express.Router()
const { suma } = require("../controllers/sumaController")


sumaRouter.get('/sumar/:num1/:num2', suma)


module.exports = sumaRouter