const express = require("express");
//constante de faild system
const fs = require("fs");
const router = express.Router();

const PATH_ROUTES = __dirname;

// remueve la extension .js de la rutas
const removeExtension = (fileName) => {
    
    return fileName.split('.').shift()
}

fs.readdirSync(PATH_ROUTES).filter((file)=> {

    const name = removeExtension(file)
    if(name !== 'index'){        
        router.use(`/${name}`, require(`./${file}`))
    }
}) 

module.exports = router