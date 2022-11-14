const express = require("express")
const router = express.Router()
const { users, division, suma, esPar, lista, metodoPost } = require("../controllers/indexController")


router.get('/users/nombre/:nombre/apellido/:apellido', users) 

router.get('/maths/dividir/:dividendo/:divisor', division) 

router.get('/maths/sumar/:num1/:num2', suma)

router.get('/maths/espar', esPar)

router.get('/list', lista)

router.post('/post', metodoPost)

module.exports = router