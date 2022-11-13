
const division = (req, res) =>  {
    
    let dividendo = Number(req.params.dividendo)
    let divisor = Number(req.params.divisor)
    let resultado = dividendo / divisor

    if (divisor == 0) {
        res.status(200).json({
            error: "No se puede dividir por cero"
        })
    } else {
        res.status(200).json({
        resultado: `${resultado}`
        })
    }
}

module.exports = { division }