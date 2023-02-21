const { Plato } = require("../models/plato")

const validarDescuento = async(req, res, next)=>{
            const item= req.body
            if (item.precio < item.precioConDcto){
                res.status(500).json({msg: `el Precio: ${item.precio} es menor al precio con descuento: ${item.precioConDcto}`})
            }
            else {
                next()
            }
}
module.exports = {validarDescuento}