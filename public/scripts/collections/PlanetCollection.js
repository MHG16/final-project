import Backbone from 'backbone';
import $ from 'jquery';


import PlanetModel from './../models/PlanetModel.js';

const PlanetCollection = Backbone.Collection.extend({
	model: PlanetModel,
	url: 'http://swapi.co/api/planets/',

	//we are redefining fetch here as the data needed is in the results 
	fetch: function() {
		$.ajax({
			type: 'GET',
			url: this.url,
			success: (data) => {
				this.reset(data.results);
				//here we are triggering an update so that the component is re-rendered
				this.trigger('update');
			}
		});
	}
});



export default new PlanetCollection();