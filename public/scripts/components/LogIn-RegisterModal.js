import React from 'react';
import $ from 'jquery';
import Rayon from 'rayon';
import Login from './Login.js';
import Register from './Register.js';
import user from '../models/User.js';

export default React.createClass({
	getInitialState: function() {
		return {
			errors: {},
			user: user
			
		};
	},

    

	render: function() {
		console.log(this.props.closeModal);
		return (
                 	<Rayon isOpen={this.props.modalVisible}>
							<label className="add-user-label">You Have Successfully Registered</label>
							<Login />
							<Register />
						<footer>
                        	<button onClick={this.props.closeModal}>Close</button>
                    	</footer>
                 	</Rayon>  
			);
	}

});















