import React from 'react';
import {Link} from 'react-router';
import $ from 'jquery';
import user from '../models/User.js';
import {browserHistory} from 'react-router';
import LoginRegisterModal from './Login-RegisterModal.js';

export default React.createClass({
	getInitialState: function() {
		return {
			user: user,
			modalVisible: false
		};
			
	},

	componentWillMount: function() {
		//console.log('in componentWillMount id is:', user.id);
		user.on('change', () => {
			//console.log('user changed, nav', this.state.user.toJSON());
			this.setState({
				user: user
			});
		});
	},

	openModal: function(e) {
		//console.log('in openModal id is:', user.id);
		e.preventDefault();
		this.setState({
			modalVisible: true
		});
	},


	closeModal: function() {
	//	console.log('in closeModal id is:', user.id);
        this.setState({
            modalVisible: false
        });
    },

	render: function () {

//if user is logged in should only see links to logout and home 
//if user is logged out should see links to sign-in/register and home  
		//console.log('in render id is:', user.id, user.cid);
		if(!this.state.user.get('id')) {
		//	console.log(this.state.modalVisible, 'User is NOT signed in. I want to see a modal');
			return (<nav>
			<LoginRegisterModal modalVisible={this.state.modalVisible} closeModal={this.closeModal}/>
			<a href="#" className="nav-link" onClick={this.openModal}>Login/Register</a>
			<Link to="/" className="nav-link">Home</Link>
			</nav>);
		} else {
			//console.log('User is logged in, should be able to create blog posts, should see sign out and home');
		return (<nav>
			<Link onClick={this.logout} to="/" className="nav-link">Sign Out</Link>
			<Link to="/planet/:planetId/planetpage" className="nav-link"></Link>
			<Link to="/" className="nav-link">Home</Link>
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
















