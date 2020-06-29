const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const session = require('express-session')
const { check, validationResult, body } = require('express-validator');

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const usersController = {
    login: (req, res) => {
        res.render('login')
    },
    register: (req, res) => {
        res.render('register')
    },
    // este controlador es el q va a guardar la info en la base de datos en json
    storeUser: (req, res, next) => {
        let validation = validationResult(req)
        let errors = validation.errors
        if (errors != '') {
            res.render('register', {errors})
        }
        storeUser = {
        id: users[users.length - 1].id + 1,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        repeatpassword: bcrypt.hashSync(req.body.repeatpassword, 10),
        avatar: req.files[0].filename,
    }
    let newDB = [...users, storeUser]
    fs.writeFileSync(usersFilePath, JSON.stringify(newDB, null, ' '))
    res.redirect('/')
    },

    // este controlador va a hacer las validaciones del usuario para saber si ya esta registrado y luego loguearse y quedar en sesion
    processLogin: (req, res) => {
        let validation = validationResult(req);
        let errors = validation.errors;
        if (errors == "") {
            let usuario = users.find(userLogin => userLogin.email == req.body.email);
            if (usuario != undefined){
                if (bcrypt.compareSync(req.body.password, usuario.password)) {
                    req.session.userId = usuario.id;
                    res.redirect('/')
                } else {
                    res.render('login', {errors})
                }           
            } else {
                res.render('login', {errors})
            }   
        } else {
            res.render('login', {errors})
        }
    }
}

module.exports = usersController;

