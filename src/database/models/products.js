module.exports = (sequelize, DataTypes) => {
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
            deleted_at: DataTypes.DATE
        },
        {
            timestamps: false
        },
    );
    product.associate = (models) => {
        product.belongsTo(models.Category, {
            as: 'category',
            foreignKey: 'id_category',
        });
        product.belongsTo(models.Brand, {
            as: 'brand',
            foreignKey: 'id_brand',
        });
    }
    return product
}