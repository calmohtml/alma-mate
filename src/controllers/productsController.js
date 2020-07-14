'use strict'
const fs = require('fs');
const path = require('path');

// linkeo nuestra base de datos --------------------
const DB = require('../database/models')
const { sequelize } = require('../database/models')
const OP = DB.Sequelize.Op
// -------------------------------------------------

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productsController = {
  // este controlador va a listar todos los productos
  kit: (req, res) => {
    DB.Product.findAll()
      .then((listado) => {
        res.render('armaTuKit', { listado: listado })
      })
      .catch((error) => {
        res.send(error)
      })
  },

  // este controlador va a mostrar el detalle de casa producto
  detail: (req, res) => {
    DB.Product.findByPk(req.params.id)
      .then((productDetail) => {
        res.render('productDetail', { productDetail: productDetail })
      })
      .catch((error) => {
        res.send(error)
      })
  },

  // este controlador agrega el producto al carrito
  cart: (req, res) => {
    DB.Product.findByPk(req.params.id)
      .then((productCart) => {
        res.render('productCart', { productCart: productCart })
      })
      .catch((error) => {
        res.send(error)
      })
  },

  // este controlador te lleva al formulario de creacion 
  add: async (req, res) => {
    try {
      const categorias = await DB.Category.findAll()
      const marcas = await DB.Brand.findAll()
      res.render('productAdd', { categorias, marcas })
    } catch (error) {
      res.send(error)
    }
  },

  // este controlador guarda la informacion del producto
  store: async (req, res) => {
    try {
      await DB.Product.create(req.body)
      res.redirect('/products/kit')
    } catch (error) {
      res.send(error)
    }
  },

  // este controlador te lleva al formulario de edicion 
  edit: async (req, res) => {
    try {
      const productFound = await DB.Product.findByPk(req.params.id)
      const categorias = await DB.Category.findAll()
      const marcas = await DB.Brand.findAll()
      res.render('productEdit', { productFound, categorias, marcas })
    } catch (error) {
      res.send(error)
    }
  },

  update: async (req, res) => {
    const productToEdit = await DB.Product.findByPk(req.params.id)
    productToEdit.update(req.body)
    res.redirect('/products/kit')
  },

  // este controlador elimina productos
  destroy: (req, res) => {
    let productId = req.params.id
    let productToDelete = products.filter(product => product.id != productId)

    let productToDeleteJSON = JSON.stringify(productToDelete)
    fs.writeFileSync(productsFilePath, productToDeleteJSON)

    res.redirect('/products/kit')
  },

}

module.exports = productsController;
