
exports.up = function(knex, Promise) {
	return knex.schema.createTable('posts', function(t) {
  		t.increments('id').unsigned().primary();
		t.dateTime('createdAt').notNull();
		t.dateTime('updatedAt').nullable();
		t.dateTime('deletedAt').nullable();

		t.text('body').notNull();
		t.integer('planetId')
			.unsigned()
			.notNull()
			.references('id')
			.inTable('planets')
			.onDelete('CASCADE');

		t.integer('userId')
			.unsigned()
			.notNull()
			.references('id')
			.inTable('users')
			.onDelete('CASCADE');

   });
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts');
};
