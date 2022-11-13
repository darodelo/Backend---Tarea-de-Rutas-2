const express = require("express")
const divisionRouter = express.Router()
const { division } = require("../controllers/divisionController")


divisionRouter.get('/dividir/:dividendo/:divisor', division) 


module.exports = divisionRouter