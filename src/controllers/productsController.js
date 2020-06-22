const fs = require('fs');
const path = require('path');

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
      image: req.body.image
    }
    let newDB = [...products, storeProducts]
    fs.writeFileSync(productsFilePath, JSON.stringify(newDB, null, ' '))
    res.redirect('/products/kit')
  },

  cart: (req, res) => {
    let productCart = products.find(product =>
      product.id == req.params.id
    )
    res.render('productCart', {productCart})
  },

  destroy: (req, res) => {
    let productId = req.params.id
    let productToDelete = products.filter(product => product.id != productId)

    let productToDeleteJSON = JSON.stringify(productToDelete)
    fs.writeFileSync(productsFilePath, productToDeleteJSON)

    res.redirect('/products/kit')
  },

  detail: (req, res) => {
    let productDetail = products.find(product =>
      product.id == req.params.id
    )
    res.render('productDetail', {productDetail})
  },

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

  kit: (req, res) => {
    res.render('armaTuKit', {products})
  },
}

module.exports = productsController;