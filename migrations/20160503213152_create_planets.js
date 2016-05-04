
exports.up = function(knex, Promise) {
	return knex.schema.createTable('planets', function(t) {
  		t.increments('id').unsigned().primary();
		t.dateTime('createdAt').notNull();
		t.dateTime('updatedAt').nullable();
		t.dateTime('deletedAt').nullable();

		t.string('planetName').nullable();
		t.string('image').nullable();

   });
};

exports.down = function(knex, Promise) {
  	return knex.schema.dropTable('planets');
};
