//constante de mongoose
const mongoose = require("mongoose")

//declaramos nuestro esquema o estructura
const TracksScheme = new mongoose.Schema(
    {
        name:{
            type: String,
        },
        album:{
            type: String,
        },
        cover:{
            type: String,
            validate: {
                validator: (req) => {
                    return true;
                },
                message: "ERROR_URL",
            },
        },
        artist:{
            name:{
                type: String,
            },
            nickname: {
                type: String,
            },
            nationality: {
                type: String,
            },
        },
        duration:{
            start:{
                type: Number,
            },
            end:{
                type: Number,
            },
            mediaId:{
                type: mongoose.Types.ObjectId,
            },
        },
    },
    {
        //esto nos crea la fecha de crreacion y la fecha de actualizacion
        timestamps: true,
        versionKey: false,
    },
);

//exportamos un modelo de mongoose
module.exports = mongoose.model("tracks", TracksScheme);