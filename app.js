const express = require("express")
const logger = require ("morgan")
const cors = require("cors")
require("dotenv").config()

const app = express()
const indexRouter = require("./routes/index")
const platoRouter = require("./routes/plato")
const nutriRouter = require("./routes/nutri")
const {connect} = require("./db/db")

app.use(logger("dev"))
app.use(cors())
app.use(express.json())

app.use( "/", indexRouter )
app.use("/platos", platoRouter);
app.use("/nutricion", nutriRouter);
//

connect()

module.exports = app