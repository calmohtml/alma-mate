const fs = require('fs');
const path = require('path');

// linkeo nuestra base de datos -----------------------------------------------------
const DB = require('../database/models') 
const { sequelize } = require('../database/models')
const OP = DB.Sequelize.Op
// -------------------------------------------------------------------------------------

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productsController = {
  add: (req, res) => {
    res.render('productAdd')
  },

  store: (req, res) => {
    let storeProducts = {
      id: products[products.length - 1].id + 1,
      name: req.body.name,
      price: req.body.price,
      category: req.body.category,
      discount: req.body.discount,
      description: req.body.description,
      image: req.files[0].filename,
    }
    let newDB = [...products, storeProducts]
    fs.writeFileSync(productsFilePath, JSON.stringify(newDB, null, ' '))
    res.redirect('/products/kit')
  },

  // este controlador agrega el producto al carrito ----------------------------
  cart: (req, res) => {
    DB.Product.findByPk(req.params.id)
        .then((productCart)=>{
            res.render('productCart', {productCart: productCart})
        })
        .catch((error)=>{
            res.send(error)
        })
  },
  // ---------------------------------------------------------------------------

  destroy: (req, res) => {
    let productId = req.params.id
    let productToDelete = products.filter(product => product.id != productId)

    let productToDeleteJSON = JSON.stringify(productToDelete)
    fs.writeFileSync(productsFilePath, productToDeleteJSON)

    res.redirect('/products/kit')
  },

  // este controlador va a mostrar el detalle de casa producto----------------
  detail: (req, res) => {
    DB.Product.findByPk(req.params.id)
        .then((productDetail)=>{
            res.render('productDetail', {productDetail: productDetail})
        })
        .catch((error)=>{
            res.send(error)
        })
  },
  // -------------------------------------------------------------------------

  edit: (req, res) => {
    let productFound = products.find(product =>
      product.id == req.params.id
    )
    res.render('productEdit', {productFound})
  },

  update: (req, res)=>{
    let productId = req.params.id
    let productToEdit = []
      products.forEach(product => {
        if (product.id == productId) {
          product.name = req.body.name
			    product.price = req.body.price
			    product.discount = req.body.discount
			    product.category = req.body.category
			    product.description = req.body.description
          product.image = req.body.image
		  	  productToEdit.push(product)
        } else {
          productToEdit.push(product)
        }
      });
      fs.writeFileSync(productsFilePath, JSON.stringify(productToEdit, null, ' '))
      res.redirect('/products/kit')
  },

  // este controlador va a listar todos los productos -----------------------------------
  kit: (req, res) => {
    DB.Product.findAll()
        .then((listado)=>{
            res.render('armaTuKit',{listado: listado})
        })
        .catch((error)=>{
            res.send(error)
        })
  },
  // -------------------------------------------------------------------------------------
}

module.exports = productsController;