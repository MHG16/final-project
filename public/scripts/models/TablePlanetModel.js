import Backbone from 'backbone';

export default Backbone.Model.extend({
	defaults:{
		planetName:'',
		image:'',
		createdAt: null,
		updatedAt: null,
		deletedAt: null
	},
	idAttribute: 'id',
	urlRoot: '/api/v1/planet'

});