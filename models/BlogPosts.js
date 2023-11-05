const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
//const { User } = require('./models.js');

class BlogPosts extends Model {}

BlogPost.init(
    {
        post_id: {
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
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
            defaultValue: 'post content goes here'
        },
        author: {
            type: DataTypes.TEXT,
            references: {
                model: User,
                key: id
            }
        }
    },
    {
        sequelize,
        underscored: true,
        modelName: 'BlogPosts'
    }
);

    module.exports = BlogPosts;