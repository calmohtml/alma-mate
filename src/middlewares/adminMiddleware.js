const adminMiddleware = (req, res, next) => {
    if (req.session.userId == undefined) {
        next();
    } else {
        res.send('USTED ES MI CREADOR')
    }
}

module.exports = adminMiddleware;


