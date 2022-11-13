
const esPar = (req, res) => {
    
    let num = Number(req.query.num)

    if(num % 2 != 0 || num == 0) {
        res.status(200).send("No autorizado")
    } else {
        res.status(200).send("Autorizado")
    }
}

module.exports = { esPar }