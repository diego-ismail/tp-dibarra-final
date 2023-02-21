const { Plato } = require("../models/plato")
const validarID = async(req, res, next)=>{
    try {
        const item = await Plato.findById(req.params.id)
        if (item !== null) {
            next()
        } else {
            res.status(500).json({msg: "el id es invalido"})
        }  
    
    } catch (error) {
        res.status(501).json(error)
    } 
}


module.exports = {validarID}