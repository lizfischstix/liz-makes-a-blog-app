const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./User');
const Article = require('./Article')

class Comment extends Model { }

Comment.init(
    {
        body: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        // comment_id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     autoIncrement: true,
        // },
        // comment: {
        //     type: DataTypes.TEXT(500),
        //     allowNull: false,
        //     references: {
        //         model: Article,
        //         key: article_id,
        //     }
        // },
        // author: {
        //     //pull from user id...need to figure out how to do this.
        //     type: DataTypes.TEXT,
        //     references: {
        //         model: User,
        //         key: UserName,
        //     }
        // },
    },
    {
        sequelize,
        // freezeTableName: true,
        // underscored: true,
        // modelName: 'Comment', 
    }
);

module.exports = Comment;