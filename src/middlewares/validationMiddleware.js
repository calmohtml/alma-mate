let { body, check, validationResult } = require('express-validator');
module.exports = [
        check('email').isEmail().withMessage('E-mail no válido'),
        check('password').isLength({min: 8}).withMessage('Contraseña no válida'),
        check('repeatpassword').isLength({min: 8}).withMessage('Ambas contraseñas deben ser iguales')
    ];