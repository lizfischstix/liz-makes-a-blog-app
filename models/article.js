const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Artice extends Model {}

Artice.init(
    {
        article_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        }

    }
)