const adminMiddleware = (req, res, next) => {
    if (req.session.userId == undefined) {
        next();
    } else {
        res.render('/products/add')
    }
}

module.exports = adminMiddleware;


