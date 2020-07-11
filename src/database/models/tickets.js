module.exports = (sequelize,DataTypes )=>{
    const ticket = sequelize.define(
        'Ticket',
        {
            id_user: DataTypes.INTEGER,
            date:{
                type: DataTypes.DATE,
                defaultValue: Date.now(),
            },
            id_payment:DataTypes.INTEGER,
        },
        {
            timestamps: false
        },
);
        return ticket
}