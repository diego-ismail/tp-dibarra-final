const express = require("express")
const router = express.Router()
const controllerNutri = require("../controller/nutriController")


router.get('/ver/:name', controllerNutri.mostrarListado)




module.exports = router