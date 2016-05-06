import Backbone from 'backbone';

const UserModel = Backbone.Model.extend ({
	defaults:{
		firstName: '',
		lastName: '',
		email: '',
		rebel: '',
		createdAt: null,
		updatedAt: null,
		deletedAt: null
		
	},
	
	idAttribute: 'id'

});


 export default new UserModel(window.user);