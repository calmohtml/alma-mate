const express = require('express');
const router = express.Router();
const multer = require('multer')
const path = require('path')
const { use } = require('./products');
const session = require('express-session')
const middlewareValidation = require('../middlewares/validationMiddleware')
const { check, validationResult, body } = require('express-validator');
const logDBMiddleware = require('../middlewares/logDBMiddleware')
const guestMiddleware = require('../middlewares/guestMiddleware')

const usersController = require('../controllers/usersController');
const validationMiddleware = require('../middlewares/validationMiddleware');

// el metodo storage de multer guarda la foto del avatar de cada usuario en una carpeta
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
router.get('/login', guestMiddleware, usersController.login)

// Ruta de validación de logeo
router.post('/login', [
    check('email').isEmail().withMessage('E-mail no válido'),
    check('password').isLength({min: 8}).withMessage('Contraseña no válida')
], usersController.processLogin)

// Ruta de registo para clientes nuevos
router.get('/register', guestMiddleware, usersController.register)
router.post('/register', logDBMiddleware, upload.any(), validationMiddleware, usersController.storeUser)

router.get('/avatar', usersController.avatar)

// Ruta que lista los usuarios
router.get('/list', usersController.listar)

// Ruta que elimina usuarios
router.delete('/delete/:id', usersController.destroy)

module.exports = router;