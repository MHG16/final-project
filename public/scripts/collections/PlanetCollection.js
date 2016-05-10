import Backbone from 'backbone';
import $ from 'jquery';


import PlanetModel from './../models/PlanetModel.js';

const PlanetCollection = Backbone.Collection.extend({
	model: PlanetModel,
	url: 'http://swapi.co/api/planets/',

	//we are redefining fetch here as the data needed is in the results 
	fetch: function() {

		const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 61];

		let models = ids.map(id => {
			let model = new PlanetModel({id: id});
			model.fetch();
			return model;
		});

		this.reset([]);
		this.add(models);


	}
});

export default new PlanetCollection();