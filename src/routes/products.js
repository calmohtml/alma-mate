const express = require('express');
const path = require('path');
const multer = require('multer')
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware')

/* GET users listing. */
const productController = require("../controllers/productsController")

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/products')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

let upload = multer({ storage: storage });

// Rutas de creación y guardado de productos
router.get('/add', authMiddleware, productController.add);
router.post('/add', upload.any(), productController.store)

// Ruta del carrito
router.get('/cart/:id', productController.cart);

// Ruta para borrar productos
router.delete('/delete/:id', productController.destroy)

// Ruta del detalle de cada producto
router.get('/detail/:id', productController.detail)

// Rutas de edición y guardado de productos
router.get('/edit/:id', productController.edit)
router.put('/edit/:id', productController.update)

// Ruta para ver todos los productos (listar)
router.get('/kit', productController.kit)

module.exports = router;