const express = require("express")
const router = express.Router()
const controllerPlato = require("../controller/platoController")
const {check} = require("express-validator")
const {validarID} = require("../middleware/validarId")


router.get('/ver/:id', validarID, controllerPlato.listarPlatoIndividual)
router.get('/vertodos', controllerPlato.listarPlatos)
router.post('/crear',[
    check("plato").not().isEmpty().withMessage("El campo plato es requerido"),
    check("descripcion").not().isEmpty().withMessage("El campo descripcion es requerido"),
    check("precio").not().isEmpty().withMessage("El campo precio es requerido"),
    check("precioConDcto").not().isEmpty().withMessage("El campo precioConDcto es requerido"),
    check("aptoCeliaco").not().isEmpty().withMessage("El campo aptoCeliaco es requerido"),
    check("aptoVegano").not().isEmpty().withMessage("El campo aptoVegano es requerido"),
],controllerPlato.guardarPlato)
router.put('/editar/:id',validarID,[
    check("plato").not().isEmpty().withMessage("El campo plato es requerido"),
    check("descripcion").not().isEmpty().withMessage("El campo descripcion es requerido"),
    check("precio").not().isEmpty().withMessage("El campo precio es requerido"),
    check("precioConDcto").not().isEmpty().withMessage("El campo precioConDcto es requerido"),
    check("aptoCeliaco").not().isEmpty().withMessage("El campo aptoCeliaco es requerido"),
    check("aptoVegano").not().isEmpty().withMessage("El campo aptoVegano es requerido"),
],controllerPlato.editarPlato)
router.delete('/eliminar/:id', validarID, controllerPlato.eliminarPlato)



module.exports = router