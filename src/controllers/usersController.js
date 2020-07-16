const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const session = require('express-session')
const { check, validationResult, body } = require('express-validator');

// linkeo nuestra base de datos
const DB = require('../database/models')
const { sequelize } = require('../database/models')
const OP = DB.Sequelize.Op

// antigua base de datos
const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const usersController = {
    login: (req, res) => {
        res.render('login')
    },

    register: (req, res) => {
        res.render('register')
    },
    
    // este controlador es el q va a guardar la info en la base de datos
    storeUser: async (req, res, next) => {
        let validation = validationResult(req)
        let errors = validation.errors
        // return res.send(errors)
        if (errors != '') {
            res.render('register', {errors})
        }
        const newUser = {
            name :req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            avatar: req.files !== [] ? req.files[0].filename : null
        }
        try {
            await DB.User.create(newUser)
            return res.redirect('/')
        } catch (error) {
            res.send(error)
        }
    },

    // este controlador va a hacer las validaciones del usuario para saber si ya esta registrado y luego loguearse y quedar en sesion
    processLogin: (req, res) => {
        let validation = validationResult(req);
        let errors = validation.errors;
        if (errors == "") {
            let user = users.find(userToLog => userToLog.email == req.body.email);
            if (user != undefined) {
                if (bcrypt.compareSync(req.body.password, user.password)) {
                    req.session.userId = user.id;
                    res.redirect('/')
                }
            }
        }
        return res.render('login', {errors})
    }
}

module.exports = usersController;


