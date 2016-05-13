exports.up = function(knex, Promise) {
	return knex.schema.table('planets', function(t) {
  		
		t.integer('top').nullable();
		t.integer('left').nullable();

   });
};

exports.down = function(knex, Promise) {
  	return knex.schema.dropTable('planets');
};
