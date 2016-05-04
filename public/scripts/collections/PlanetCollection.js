import Backbone from 'backbone';

import PlanetModel from './../models/PlanetModel.js';

const PlanetsCollection = Backbone.Collection.extend({
	model: PlanetModel,
	url: 'http://swapi.co/api/planets/1/'
});



export default new PlanetsCollection();