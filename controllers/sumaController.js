
const suma = (req, res) =>  {
    
    let num1 = Number(req.params.num1)
    let num2 = Number(req.params.num2)
    let resultado = num1 + num2

    if (resultado < 0) {
        res.status(200).json({
            msg: "No se puede enviar el resultado"
        })
    } else {
        res.status(200).json({
        resultado: `${resultado}`
        })
    }
}

module.exports = { suma }

