const express = require('express');
const router = express.Router();

/* GET home page. */
const mainController = require('../controllers/mainControllers')
const dbController = require('../controllers/dbController')

// Home de Alma-Mate
router.get('/', mainController.index);

// Ruta de "Sobre nosotros"
router.get('/aboutus', mainController.aboutUs)

// Ruta de "Contacto"
router.get('/contact', mainController.contact)

//Ruta del formulario de Contacto
router.get('/sendemail', mainController.sendEmail)

// prueba vinculacion de sequelize
router.get('/list', dbController.listar)

module.exports = router;
