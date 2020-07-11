module.exports = (sequelize,DataTypes )=>{
    const cart = sequelize.define(
        'Cart',
        {
            id_user: DataTypes.INTEGER,
            id_product: DataTypes.INTEGER,
            total_price:DataTypes.INTEGER,
        },
        {
            timestamps: false
        },
);
        return cart
}