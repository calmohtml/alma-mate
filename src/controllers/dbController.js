const DB = require('../database/models') 
const { sequelize } = require('../database/models')
const OP = DB.Sequelize.Op

const dbController ={
    listar: (req, res)=>{
        sequelize.query('SELECT * FROM users')
            .then((resultados)=>{
                let usuario = resultados[0]
                res.send(usuario)
            })
    },
}

module.exports = dbController