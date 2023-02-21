const mongoose = require("mongoose")

const Schema = mongoose.Schema
const schema = new Schema({
    nombre:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    sexo: {
        type: String,
        required: true,
        enum: ['M','F']
    }
})
const User = mongoose.model("User", schema)
module.exports = { User }