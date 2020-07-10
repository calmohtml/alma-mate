module.exports = (sequelize,DataTypes )=>{
    const brand = sequelize.define(
        'Brand',
        {
            name: DataTypes.STRING,
        },
        {
            timestamps: false
        },
);
    
        return brand
}