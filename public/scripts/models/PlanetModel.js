import Backbone from 'backbone';

export default Backbone.Model.extend({
	defaults:{
		name:'',
		climate:'',
		diameter:'',
		terrain:'',
		surface_water:'',
		population:'',
		gravity:'',
		orbital_period:'',
		rotation_period:'',
		createdAt: null,
		updatedAt: null,
		deletedAt: null
	},
	idAttribute: 'id',
	url: function() {
		return 'http://swapi.co/api/planets/'+this.id+'/';
	}
});