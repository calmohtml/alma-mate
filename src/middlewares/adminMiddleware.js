const adminMiddleware = (req, res, next) => {
    if (req.session.userId == undefined) {
        next();
    } else {
        // res.render('/products/add')
        res.send('ups, no tienes acceso esta ruta')
    }
}

module.exports = adminMiddleware;


