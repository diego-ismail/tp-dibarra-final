const express = require("express")
const router = express.Router()
const controllerUser = require("../controller/userController")
const {check} = require("express-validator")
const {validarID} = require("../middleware/validarId")

// su metodo / su exprecion  / su funcion
router.get('/ver/:id', validarID, controllerUser.listSingleUser)
router.get('/vertodos', controllerUser.listUsers)
router.post('/crear',[
    check("nombre").not().isEmpty().withMessage("El campo nombre es requerido"),
    check("email").not().isEmpty().withMessage("El campo email es requerido"),
    check("password").not().isEmpty().withMessage("El campo password es requerido"),
    check("sexo").not().isEmpty().withMessage("El campo sexo es requerido"),
],controllerUser.guardarUser)
router.put('/editar/:id',validarID,[
    check("nombre").not().isEmpty().withMessage("El campo nombre es requerido"),
    check("email").not().isEmpty().withMessage("El campo email es requerido"),
    check("password").not().isEmpty().withMessage("El campo password es requerido"),
    check("sexo").not().isEmpty().withMessage("El campo sexo es requerido"),
],controllerUser.editarUsuario)
router.delete('/eliminar/:id', validarID, controllerUser.eliminarUsuario)



module.exports = router