const Article = require('./article');
const Comment = require('./comment');
const User = require('./user');

User.hasMany(Article, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

Article.hasOne(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Article.hasMany(Comment, {
    foreignKey: 'article_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(Article, {
    foreignKey: 'article_id',
    onDelete: 'CASCADE'
})

Comment.hasOne(Article, {
    foreignKey: 'article_id'
});


module.exports = { 
    Article, 
    Comment,
    User, 
};

