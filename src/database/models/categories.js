module.exports = (sequelize, DataTypes) => {
    const category = sequelize.define(
        'Category',
        {
            name: DataTypes.STRING,
            deleted_at: DataTypes.DATE
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