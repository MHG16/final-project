
module.exports = bookshelf.model('Planet', {
	tableName: 'planets',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt']
	
});