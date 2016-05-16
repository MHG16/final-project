import Backbone from 'backbone';

import PlanetModel from './../models/PlanetModel.js';

const PlanetCollection = Backbone.Collection.extend({
	model: PlanetModel,
	url: '//swapi.co/api/planets/',

	//we are redefining fetch here as the data needed is in the results 
	fetch: function(options) {

		const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 61];

		let models = ids.map(id => {
			return new PlanetModel({id: id});
			// model.fetch({
			// 	success: () => {
			// 		this.trigger('update');
			// 		console.log('fetch success');
			// 	}
			// });
			// return model;
		});

		this.reset([]);
		this.add(models);

		models.forEach(model => model.fetch({
			success: (data) => {
				if(options.success) {
					options.success(data);
				}
			}
		}));


	}
});

export default new PlanetCollection();