const express = require('express');
const router = express.Router();
const multer = require('multer')
const path = require('path')
const { use } = require('./products');
const session = require('express-session')
const { check, validationResult, body } = require('express-validator');

const usersController = require('../controllers/usersController');

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/users')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

let upload = multer({ storage: storage });

// Ruta de logueo
router.get('/login', usersController.login)

// Ruta de validación de logeo
router.post('/login', [
    check('email').isEmail().withMessage('E-mail no válido'),
    check('password').isLength({min: 8}).withMessage('Contraseña no válida')
], usersController.processLogin)

// Ruta de registo para clientes nuevos
router.get('/register', usersController.register)
router.post('/register', upload.any(), usersController.storeUser)

module.exports = router;