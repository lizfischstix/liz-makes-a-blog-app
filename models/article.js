const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const { User } = require('./user');

class Artice extends Model {}

Artice.init(
    {
        article_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING(200),
            allowNull: false,
            defaultValue: 'post title',
        },
        content: {
            type: DataTypes.BLOB('long'),
            allowNull: false,
            defaultValue: Buffer.from('blog post contents', 'binary'),
        },
        author: {
            //pull from user id...need to figure out how to do this.
            type: DataTypes.TEXT,
            references: {
                model: User,
                key: UserName,
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'article',
    }
);

    module.exports = Artice;