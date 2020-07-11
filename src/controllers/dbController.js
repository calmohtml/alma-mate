const DB = require('../database/models') 
const { sequelize } = require('../database/models')
const OP = DB.Sequelize.Op

const dbController ={
    listar: (req, res)=>{
        sequelize.query('SELECT * FROM products')
            .then((resultados)=>{
                let productos = resultados[0]
                res.send(productos)
            })
    },
}

module.exports = dbController