const { Plato } = require("../models/plato")
const {validationResult} = require("express-validator")


module.exports = {
    async guardarPlato (req, res) {
        try {
            const err = validationResult(req)
            if (err.isEmpty()) {
                const plato = new Plato(req.body)
                await plato.save()
                res.status(201).json(plato)
            } else {
                res.status(501).json(err)
            }
        } catch (error) {
            console.log(error)
            res.status(501).json(error)
        }
    },
    async listarPlatos (req, res) {
        const platos = await Plato.find()//Todos los Platos del menú
        res.status(200).json({platos})
    },
    
    async listarPlatoIndividual (req, res) {
        const plato = await Plato.findById(req.params.id)//busca por el id
        res.status(200).json(plato)
    },
    async editarPlato  (req, res) {
        try {
            const err = validationResult(req)
            if (err.isEmpty()) {
                await Plato.findByIdAndUpdate(req.params.id,req.body)
                res.status(201).json({msg: "Plato Actualizado"})
            } else {
                res.status(501).json(err)
            }
        } catch (error) {
            res.status(501).json(error)
        }
    },
    async eliminarPlato (req, res){
        try {
            const err = validationResult(req)
            console.log ("error:", err)
            if (err.isEmpty()) {
                const plato = await Plato.findByIdAndDelete(req.params.id)
                res.status(200).json({msg: `Plato Eliminado ${plato.nombre}`})
            } else {
                res.status(501).json(err)
            }
        } catch (error) {
            res.status(501).json(error)
        }
    }
}