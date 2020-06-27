const guestMiddleware = (req, res, next) => {
    if (req.session.userId != undefined) {
        next();
    } else {
        res.send('SERVICIO EN MANTENIMIENTO')
    }
}

module.exports = guestMiddleware;