//constante de mongoose
const mongoose = require("mongoose")

//declaramos nuestro esquema o estructura
const StorageScheme = new mongoose.Schema(
    {
        url:{
            type: String
        },
        filename:{
            type: Number
        }
    },
    {
        //esto nos crea la fecha de crreacion y la fecha de actualizacion
        timestamps: true,
        versionKey: false
    }
);

//exportamos un modelo de mongoose
module.exports = mongoose.model("storages", StorageScheme);