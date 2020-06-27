const fs = require('fs')

const adminMiddleware = (req, res, next) => {
    if (req.query.user == 'Ada' req.query.user == 'Greta' req.query.user == 'Vim' || req.query.user == 'Tim') {
        res.send('Bienvenido admin ' + req.query.user)
    } else {
        res.send('Ups! no se encontro al admin')
    }
}


module.exports = adminMiddleware;