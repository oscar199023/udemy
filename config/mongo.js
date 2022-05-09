//declaracion de la constante del paquete de mongoose
const mongoose = require("mongoose");

//declaracion de la funcion de la conexion
const dbConnect = ()  => {

    //declaracion  de una constante para traer las credenciales de .env
    const DB_URI = process.env.DB_URI;

    //pedimos la conexion y a la constante de DB_URI que contiene las credenciales
    mongoose.connect( DB_URI,

        {
            //esta es una funcion que nos devolvera una funcion callBack
            useNewUrlParser:true,
            useUnifiedTopology:true,
        },
        //recibimos un error o una respuesta
    (err, res) => {

        //si no existe un error
        if(!err){
            console.log('**** CONEXION CORRECTA *****')

        //si existe un error
        }else{
            console.log('**** CONEXION INCORRECTA ****')
        }
    });

};

//exportamos la dbconnect de app.js
module.exports = dbConnect
