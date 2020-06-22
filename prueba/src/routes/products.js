const express = require('express');
const router = express.Router();

/* GET users listing. */
const productController = require("../controllers/productsController")

// Rutas de creación y guardado de productos
router.get('/add', productController.add);
router.post('/add', productController.store)

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