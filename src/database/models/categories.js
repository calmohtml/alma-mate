module.exports = (sequelize, DataTypes) => {
    const category = sequelize.define(
        'Category',
        {
            name: DataTypes.STRING,
        },
        {
            timestamps: false
        },
    );
    category.associate = (models) => {
        category.hasMany(models.Product, {
            as: "products",
            foreignKey: 'id_category'
        })
    }
    return category
}