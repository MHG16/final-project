import React from 'react';
import {Link} from 'react-router';
import $ from 'jquery';
import user from '../models/User.js';
import {browserHistory} from 'react-router';
import LoginRegisterModal from './Login-RegisterModal.js';

export default React.createClass({
	getInitialState: function() {
		console.log('Navigation getInitialstate');
		return {
			user: user,
			modalVisible: false
		};
			
	},

	componentDidMount: function() {
		console.log('Navigation componentDidMount');
		this.state.user.on('change', () => {
			this.setState({
				user: user
			});
		});
	},

	openModal: function(e) {
		e.preventDefault();
		this.setState({
			modalVisible: true
		});
	},


	closeModal: function() {
		console.log('Im in closeModal');
        this.setState({
            modalVisible: false
        });
    },

	render: function () {

//if user is logged in should only see links to logout and home 
//if user is logged out should see links to sign-in/register and home  
		if(!this.state.user.get('id')) {
			console.log(this.state.modalVisible, 'User is NOT signed in. I want to see a modal');
			return (<nav>
			<LoginRegisterModal modalVisible={this.state.modalVisible} closeModal={this.closeModal}/>
			<a href="#" className="nav-links" onClick={this.openModal}>Login/Register</a>
			<a href="#" className="nav-links">Home</a>
			</nav>);
		} else {
			console.log('User is logged in, should be able to create blog posts');
		return (<nav>
			<Link onClick={this.logout} to="/" className="nav-links">Sign Out</Link>
			<Link to="/planet/:planetId/planetpage" className="nav-links"></Link>
		</nav>);
		};

	},

	logout: function(e) {
		e.preventDefault();
		this.state.user.clear();
		$.ajax({
			type: 'POST',
			url: '/auth/logout'
		});
		browserHistory.push('/');
	}

});
















