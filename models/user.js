const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// const User = require('./');

class User extends Model {}

User.init(
    {
        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    }
);

    module.exports = User;