const fs = require('fs');
const path = require('path');

const logDBMiddleware = (req, res, next)=>{
       fs.appendFileSync('logDB.txt', 'Se creo un registro al ingresar en la pagina' + req.url + '\n')
       next()
}

module.exports = logDBMiddleware