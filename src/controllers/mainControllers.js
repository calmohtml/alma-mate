const fs = require('fs');
const path = require('path');

const mainController = {
  index: (req, res) => {
    res.render('index')
  },

  aboutUs: (req, res) => {
    res.render('aboutUs')
  },

  contact: (req, res) => {
    res.render('contact')
  },
  sendEmail: (req, res) => {
    res.render('sendEmail')
  }
};

module.exports = mainController;