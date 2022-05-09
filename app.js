require("dotenv").config()
const express = require("express")
const cors = require("cors")

//traemos la funcion de mongo en una constante
const dbConnect = require('./config/mongo')
const app = express()

app.use(cors())

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})

//invocamos la funcion 
dbConnect()