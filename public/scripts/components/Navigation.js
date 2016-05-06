import React from 'react';
import {Link} from 'react-router';
import $ from 'jquery';
import user from '../models/User.js';
import {browserHistory} from 'react-router';

export default React.createClass({
	getInitialstate: function() {
		console.log('Navigation getInitialstate');
		return (
			{user: user}

			);
	},

	componentDidMount: function() {
		console.log('Navigation componentDidMount');
		this.state.user.on('change', () => {
			this.setState({
				user: user
			});
		});
	},

	render: function () {

//if user is logged in should only see links to logout and home 
//if user is logged out should see links to sign-in/register and home  
		if(!this.state.user.get('id')) {
			return (<nav>
			<a href="#" className="nav-links">Login/Register</a>
			<a href="#" className="nav-links">Home</a>
			</nav>);
		} else {
		return (<nav>
			<a href="#" className="nav-links">Sign Out</a>
			<Link to="/HomeGalaxy" className="nav-links">Sign Out</Link>

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
















