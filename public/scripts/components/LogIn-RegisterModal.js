import React from 'react';
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
		// console.log('this.props.closeModal:', this.props.closeModal);
		return (
                 	<Rayon isOpen={this.props.modalVisible}>
							<Login closeModal={this.props.closeModal}/> 
							<Register closeModal={this.props.closeModal}/>
						<footer>
                        	<button onClick={this.props.closeModal}>Close</button>
                    	</footer>
                 	</Rayon>  
			);
	}

});















