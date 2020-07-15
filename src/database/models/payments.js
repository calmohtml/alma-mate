module.exports = (sequelize,DataTypes )=>{
    const payment = sequelize.define(
        'Payment',
        {
            card_name: DataTypes.STRING,
            deleted_at: DataTypes.DATE
        },
        {
            timestamps: false
        },
);
        return payment
}