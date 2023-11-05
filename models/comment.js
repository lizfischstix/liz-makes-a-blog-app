const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./User');
const Article = require('./BlogPosts');
const BlogPosts = require('./BlogPosts');

class Comment extends Model { }

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
        },
        comment: {
            type: DataTypes.TEXT(500),
            allowNull: false,
            references: {
                model: BlogPosts,
                key: Post_id,
            }
        },
        author: {
            //pull from user id...need to figure out how to do this.
            type: DataTypes.TEXT,
            references: {
                model: User,
                key: UserName,
            }
        },
    },
    {
        sequelize,
        modelName: 'Comment', 
    }
);

module.exports = Comment;