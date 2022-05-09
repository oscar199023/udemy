//para manejar las rutas usaremos express como el proveedor del servicio web
const express = require("express");
const res = require("express/lib/response");
//funcion de express para manejar las rutas
const router = express.Router();

// Hacer http://localhost/tracks GET, POST, DELETE, PUT


//crear una rita con el tipo get
router.get("/", (req, res) => {

    const data = ["Hola", "Mundo"]

    res.send({data})
})

module.exports = router