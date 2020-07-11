module.exports = (sequelize,DataTypes )=>{
    const user = sequelize.define(
        'User',
        {
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            avatar:DataTypes.STRING,
            detalle_compra: DataTypes.INTEGER,
        },
        {
            timestamps: false
        },
);
        return user
}