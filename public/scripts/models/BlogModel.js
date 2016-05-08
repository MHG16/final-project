import Backbone from 'backbone';

export default Backbone.Model.extend({
	defaults:{
		body:'',
		createdAt: null,
		updatedAt: null,
		deletedAt: null
	},
	idAttribute: 'id',
	urlRoot: 'http://small-tiyfe.herokuapp.com/collections/mhgrossmann'

});
