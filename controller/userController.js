const { User } = require("../models/user")
const {validationResult} = require("express-validator")


module.exports = {
    async guardarUser (req, res) {
        try {
            const err = validationResult(req)
            if (err.isEmpty()) {
                const user = new User(req.body)
                await user.save()
                res.status(201).json(user)
            } else {
                res.status(501).json(err)
            }
        } catch (error) {
            console.log(error)
            res.status(501).json(error)
        }
    },
    async listUsers (req, res) {
        const users = await User.find()//Todos los Usuarios
        res.status(200).json({users})
    },
    
    async listSingleUser (req, res) {
        const user = await User.findById(req.params.id)//busca por el id
        res.status(200).json(user)
    },
    async editarUsuario  (req, res) {
        try {
            const err = validationResult(req)
            if (err.isEmpty()) {
                await User.findByIdAndUpdate(req.params.id,req.body)
                res.status(201).json({msg: "Usuario Actualizado"})
            } else {
                res.status(501).json(err)
            }
        } catch (error) {
            res.status(501).json(error)
        }
    },
    async eliminarUsuario (req, res){
        try {
            const err = validationResult(req)
            console.log ("error:", err)
            if (err.isEmpty()) {
                const usuario = await User.findByIdAndDelete(req.params.id)
                res.status(200).json({msg: `Usuario Eliminado ${usuario.nombre}`})
            } else {
                res.status(501).json(err)
            }
        } catch (error) {
            res.status(501).json(error)
        }
    }
}