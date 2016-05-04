import Backbone from 'backbone';

export default Backbone.Model.extend({
	defaults:{
		name:'',
		cliamate:'',
		diameter:'',
		population:'',
		createdAt: null,
		updatedAt: null,
		deletedAt: null
	},
	idAttribute: 'id'
});





