import React from 'react';
import user from '../../models/User.js';
import $ from 'jquery';
import Rayon from 'rayon';
import Login from './Login.js';
import Register from './Register.js';


export default React.createClass({
	getInitialState: function() {
		return {
			errors: {},
			user: user,
			modalVisible: false
		};
	},

    closeModal: function() {
        this.setState({
            modalVisible: false
        });
    },

	render: function() {
		return (
			<section> 
				<Login />
				<Register />
                 	<Rayon isOpen={this.state.modalVisible} onClose={this.closeModal}>
							<label className="add-user-label">You Have Successfully Registered</label>
						<footer>
                        	<button onClick={this.closeModal}>Close</button>
                    	</footer>
                 	</Rayon>
			</section>  
			);
	}

});















