const express = require('express');
const router = express.Router();

/* GET home page. */
const mainController = require('../controllers/mainControllers')

// Home de Alma-Mate
router.get('/', mainController.index);

// Ruta de "Sobre nosotros"
router.get('/aboutus', mainController.aboutUs)

module.exports = router;
