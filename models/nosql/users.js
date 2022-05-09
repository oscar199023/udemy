//constante de mongoose
const mongoose = require("mongoose")

//declaramos nuestro esquema o estructura
const UserScheme = new mongoose.Schema(
    {
        name:{
            type:String
        },
        age:{
            type:Number
        },
        email:{
            type:String,
            unique:true
        },
        password:{
            type:String
        },
        role:{
            type:["user", "admin"],
            default:"user"
        }
    },
    {
        //esto nos crea la fecha de crreacion y la fecha de actualizacion
        timestamps: true,
        versionKey: false
    }
);

//exportamos un modelo de mongoose
module.exports = mongoose.model("users", UserScheme);