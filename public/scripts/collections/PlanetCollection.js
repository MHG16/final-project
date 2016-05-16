import Backbone from 'backbone';
import $ from 'jquery';
import PlanetModel from './../models/PlanetModel.js';

const PlanetCollection = Backbone.Collection.extend({
	model: PlanetModel,
	url: '//swapi.co/api/planets/',

	//we are redefining fetch here as the data needed is in the results 
	fetch: function(options={}) {

		const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 61];

		let models = ids.map(id => {
			return new PlanetModel({id: id});
		});

		let loadedModels = 0;

		models.forEach(model => model.fetch({
			complete: (data) => {
				loadedModels++;
				if(loadedModels == models.length) {
					$.ajax('/api/v1/planet', {success: (planets) => {
						this.reset(models);
						this.set(planets);
						this.trigger('update');
					}} );
				}
			}
		}));


	}
});

export default new PlanetCollection();