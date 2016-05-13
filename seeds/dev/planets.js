
exports.seed = function(knex, Promise) {
  return knex('planets').del().then(() => {
      return Promise.join(
        // Inserts seed entries
        knex('planets').insert({id: 1, planetName: 'Tatooine', image: '/images/Planet_Images/Tatooine.png',
          top: 20, left: 20, createdAt: new Date()}),

        knex('planets').insert({id: 2, planetName: 'Alderaan', image: '/images/Planet_Images/Alderaan.jpg',
          top: 20, left: 20, createdAt: new Date()}),
        
        knex('planets').insert({id: 3, planetName: 'Yavin', image: '/images/Planet_Images/Yavin.png',
          top: 20, left: 20, createdAt: new Date()}),
        
        knex('planets').insert({id: 4, planetName: 'Hoth', image: '/images/Planet_Images/Hoth.jpg',
          top: 20, left: 20, createdAt: new Date()}),
        
        knex('planets').insert({id: 5, planetName: 'Dagobah', image: '/images/Planet_Images/Dagobah.jpg',
          top: 20, left: 20, createdAt: new Date()}),
        
        knex('planets').insert({id: 6, planetName: 'Bespin', image: '/images/Planet_Images/Bespin.png',
          createdAt: new Date()}),
        
        knex('planets').insert({id: 7, planetName: 'Endor', image: '/images/Planet_Images/Endor.png',
          createdAt: new Date()}),
        
        knex('planets').insert({id: 8, planetName: 'Naboo', image: '/images/Planet_Images/Naboo.png',
           createdAt: new Date()}),
        
        knex('planets').insert({id: 9, planetName: 'Coruscant', image: '/images/Planet_Images/Coruscant.png',
           createdAt: new Date()}),
        
        knex('planets').insert({id: 61, planetName: 'Jakku', image: '/images/Planet_Images/Jakku.jpg',
          createdAt: new Date() })
  	);
  });
};