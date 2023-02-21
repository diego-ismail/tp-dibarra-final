const {check, validationResult} = require('express-validator');

exports.validarCampos =
    [
        check("plato").not().isEmpty().withMessage("El campo plato es requerido"),
        check("descripcion").not().isEmpty().withMessage("El campo descripcion es requerido"),
        check("precio").not().isEmpty().withMessage("El campo precio es requerido"),
        check("precioConDcto").not().isEmpty().withMessage("El campo precioConDcto es requerido"),
        check("aptoCeliaco").not().isEmpty().withMessage("El campo aptoCeliaco es requerido"),
        check("aptoVegano").not().isEmpty().withMessage("El campo aptoVegano es requerido"),
    ];
