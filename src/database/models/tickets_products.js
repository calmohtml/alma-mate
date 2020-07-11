module.exports = (sequelize,DataTypes )=>{
    const detail = sequelize.define(
        'Detail',
        {
            id_ticket: DataTypes.INTEGER,
            id_product: DataTypes.INTEGER,
            price: DataTypes.INTEGER,
            quantity: DataTypes.INTEGER,
        },
        {
            timestamps: false
        },
);
        return detail
}