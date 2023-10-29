const Article = require('./article');
const Comment = require('./comment');
const Title = require('./title');
const User = require('./user');
const Password = require('./password');

Password.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Article.hasOne(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(Article, {
    foreignKey: 'article_id',
    onDelete: 'CASCADE'
})

Article.hasMany(Comment, {
    foreignKey: 'article_id',
    onDelete: 'CASCADE'
})

Comment.hasOne(Article, {
    foreignKey: 'article_id'
})

Title.belongsTo(Artice, {
    foreignKey: 'article_id'
})

Article.hasOne(title, {
    foreignKey: 'article_id'
})

module.exports = { 
    Article, 
    Comment,
    Title,
    User,
    Password 
};

