module.exports = (sequelize, DataTypes) => {
    const brand = sequelize.define(
        'Brand',
        {
            name: DataTypes.STRING,
            deleted_at: DataTypes.DATE
        },
        {
            timestamps: false
        },
    );
    brand.associate = (models) => {
        brand.hasMany(models.Product, {
            as: "products",
            foreignKey: 'id_brand'
        })
    }
    return brand
}