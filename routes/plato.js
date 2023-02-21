const express = require("express")
const router = express.Router()
const controllerPlato = require("../controller/platoController")

const {validarID} = require("../middleware/validarId")
const {validarDescuento} = require("../middleware/validarDescuento")
const {validarCampos} =require("../middleware/validarCampos")

router.get('/ver/:id', validarID, controllerPlato.listarPlatoIndividual)
router.get('/vertodos', controllerPlato.listarPlatos)
router.post('/crear',validarDescuento,validarCampos,controllerPlato.guardarPlato)

router.put('/editar/:id',validarID,validarDescuento,validarCampos,controllerPlato.editarPlato)

router.delete('/eliminar/:id', validarID, controllerPlato.eliminarPlato)



module.exports = router