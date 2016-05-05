import Backbone from 'backbone';

export default Backbone.Model.extend({
	defaults:{
		name:'',
		climate:'',
		diameter:'',
		population:'',
		createdAt: null,
		updatedAt: null,
		deletedAt: null
	},
	idAttribute: 'id',
	urlRoot: 'http://swapi.co/api/planets/'

});





