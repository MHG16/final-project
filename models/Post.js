require('./User');
require('./Planet');
module.exports = bookshelf.model('Post', {
	tableName: 'posts',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt'],
	user: function() {
		this.hasMany('User', 'userId');
	},
	planet: function() {
		this.hasMany('Planet', 'planetId');
	}
});