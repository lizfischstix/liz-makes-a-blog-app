const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./user');
const Article = require('./article')

class Comment extends Model {}

Comment.init(
   {
    comment_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
    },
    comment: {
        type: DataTypes.TEXT(500),
        allowNull: false,
        references: {
            model: Artice,
            key: article_id,
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
        freezeTableName: true,
        underscored: true,
        modelName: 'comment', 
   } 
);

module.exports = Comment;