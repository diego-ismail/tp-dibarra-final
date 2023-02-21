const mongoose = require("mongoose")

const Schema = mongoose.Schema
const schema = new Schema({
    plato:{
        type: String,
        required: true,
        unique: true
    },
    descripcion:{
        type: String,
        required: true
    },
    precio:{
        type: Number,
        required: true
    },
    precioConDcto: {
        type: Number,
        required: true,
    },
    AptoCeliaco: {
        type: Boolean,
        required: true
    },
    AptoVegano: {
        type: Boolean,
        required: true       
    }
})
const Plato = mongoose.model("Plato", schema)
module.exports = { Plato }