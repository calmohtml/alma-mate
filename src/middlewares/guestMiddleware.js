const guestMiddleware = (req, res, next) => {
    if (req.session.userId == undefined) {
        next();
    } else {
        res.render('/')
    }
}

module.exports = guestMiddleware;