const DB = require('../database/models') 
const { sequelize } = require('../database/models')
const OP = DB.Sequelize.Op

const dbController ={
    listar: (req, res)=>{
        sequelize.query('SELECT * FROM brands')
            .then((resultados)=>{
                let marcas = resultados[0]
                res.send(marcas)
            })
    },
}

module.exports = dbController