module.exports = (sequelize,DataTypes )=>{
    const payment = sequelize.define(
        'Payment',
        {
            card_name: DataTypes.STRING,
        },
        {
            timestamps: false
        },
);
        return payment
}