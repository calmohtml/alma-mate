const express = require('express');
const router = express.Router();

/* GET home page. */
const mainController = require('../controllers/mainControllers')

// Home de Alma-Mate
router.get('/', mainController.index);

// Ruta de "Sobre nosotros"
router.get('/aboutus', mainController.aboutUs)

// Ruta de "Contacto"
router.get('/contact', mainController.contact)

//Ruta del formulario de Contacto
router.get('/sendemail', mainController.sendEmail)

module.exports = router;
