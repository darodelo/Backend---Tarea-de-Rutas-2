
const users = (req, res) => {
    res.status(200).json({
        msg: `Hola, ${req.params.nombre} ${req.params.apellido}`
    })
}

module.exports = { users }