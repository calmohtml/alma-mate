module.exports = (sequelize,DataTypes )=>{
    const user = sequelize.define(
        'User',
        {
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            avatar: DataTypes.STRING,
            deleted_at: DataTypes.DATE
        },
        {
            timestamps: false
        },
);
        return user
}