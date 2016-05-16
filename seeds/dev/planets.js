
exports.seed = function(knex, Promise) {
  return knex('planets').del().then(() => {
      return Promise.join(
        // Inserts seed entries
        knex('planets').insert({id: 1, planetName: 'Tatooine', image: '/images/Planet_Images/Tatooine.png',
          top: 73, left: 73, createdAt: new Date()}),

        knex('planets').insert({id: 2, planetName: 'Alderaan', image: '/images/Planet_Images/Alderaan.jpg',
          top: 20, left: 20, createdAt: new Date()}),
        
        knex('planets').insert({id: 3, planetName: 'Yavin', image: '/images/Planet_Images/Yavin.png',
          top: 20, left: 20, createdAt: new Date()}),
        
        knex('planets').insert({id: 4, planetName: 'Hoth', image: '/images/Planet_Images/Hoth.jpg',
          top: 83, left: 28, createdAt: new Date()}),
        
        knex('planets').insert({id: 5, planetName: 'Dagobah', image: '/images/Planet_Images/Dagobah.jpg',
          top: 20, left: 20, createdAt: new Date()}),
        
        knex('planets').insert({id: 6, planetName: 'Bespin', image: '/images/Planet_Images/Bespin.png',
          top: 81, left:29, createdAt: new Date()}),
        
        knex('planets').insert({id: 7, planetName: 'Endor', image: '/images/Planet_Images/Endor.png',
          top: 71, left:11, createdAt: new Date()}),
        
        knex('planets').insert({id: 8, planetName: 'Naboo', image: '/images/Planet_Images/Naboo.png',
          top: 73, left:54, createdAt: new Date()}),
        
        knex('planets').insert({id: 9, planetName: 'Coruscant', image: '/images/Planet_Images/Coruscant.png',
          top: 35, left:34, createdAt: new Date()}),
        
        knex('planets').insert({id: 61, planetName: 'Jakku', image: '/images/Planet_Images/Jakku.jpg',
          top: 20, left:20, createdAt: new Date() })
  	);
  });
};