//para manejar las rutas usaremos express como el proveedor del servicio web
const express = require("express");
const res = require("express/lib/response");
//funcion de express para manejar las rutas
const router = express.Router();

const { getItems, getItem, createItem } = require("../controllers/tracks")




//crear una ruta con el tipo get
router.get("/", getItems);
router.post("/", createItem);

module.exports = router;