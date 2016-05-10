
exports.seed = function(knex, Promise) {
  return knex('planets').del().then(() => {
      Promise.join(
        // Inserts seed entries
        knex('planets').insert({id: 1, planetName: 'Tatooine', image: '/images/Planet_Images/Tatooine.jpg'}),
        knex('planets').insert({id: 2, planetName: 'Alderaan', image: '/images/Planet_Images/Alderaan.jpg'}),
        knex('planets').insert({id: 3, planetName: 'Yavin', image: '/images/Planet_Images/Yavin.png'}),
        knex('planets').insert({id: 4, planetName: 'Hoth', image: '/images/Planet_Images/Hoth.jpg'}),
        knex('planets').insert({id: 5, planetName: 'Dagobah', image: '/images/Planet_Images/Dagobah.jpg'}),
        knex('planets').insert({id: 6, planetName: 'Bespin', image: '/images/Planet_Images/Bespin.png'}),
        knex('planets').insert({id: 7, planetName: 'Endor', image: '/images/Planet_Images/Endor.png'}),
        knex('planets').insert({id: 8, planetName: 'Naboo', image: '/images/Planet_Images/Naboo.png'}),
        knex('planets').insert({id: 9, planetName: 'Coruscant', image: '/images/Planet_Images/Coruscant.png'}),
        knex('planets').insert({id: 61, planetName: 'Jakku', image: '/images/Planet_Images/Jakku.jpg'})
  	);
  });
};