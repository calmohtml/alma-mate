module.exports = (sequelize,DataTypes )=>{
    const product = sequelize.define(
        'Product',
        {
            name: DataTypes.STRING,
            price: DataTypes.INTEGER,
            id_category: DataTypes.INTEGER,
            discount: DataTypes.INTEGER,
            description: DataTypes.STRING,
            id_brand: DataTypes.INTEGER,
            image: DataTypes.STRING,
        },
        {
            timestamps: false
        },
);
        return product
}