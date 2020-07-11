module.exports = (sequelize,DataTypes )=>{
    const tickets_products = sequelize.define(
        'Ticket_Products',
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
        return tickets_products
}