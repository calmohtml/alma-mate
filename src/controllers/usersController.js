const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const session = require('express-session')
const { validationResult } = require('express-validator');

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

    processLogin: (req, res) => {
        let validation = validationResult(req)
        let errors = validation.errors
        if (errors != '') {
            res.render('login', {errors})
        } else {
            let userToLog = getUserByEmail(req.body.email);
            res.send('Bienvenido' + userToLog)
        }

        
        // if (userToLog != undefined) {
        //     if(bcrypt.compareSync(req.body.password, userToLog.password)) {
        //         res.redirect(`/profile/${userToLog.id}`)
        //     } else{
        //         res.render('Credenciales erróneas')
        //     }
        // } else {
        //     Si no hay un usuario con ese e-mail
        // }
    }
}

module.exports = usersController;