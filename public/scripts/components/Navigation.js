import React from 'react';
import {Link} from 'react-router';
import $ from 'jquery';
//import user from '../models/user';
import {browserHistory} from 'react-router';
//import PlanetCollection from './../collections/PlanetCollection.js';


export default React.createClass({
	render: function () {

//if user is logged in should only see logout 
//if user is logged out should see logout and register
		if(this.state.user.get('id')) {
			return (<nav>
			<Link to="/planets"></Link>
			<a href="#" className="nav-links" onClick={this.logout}>Logout</a>
			</nav>);
		} else {
		return (<nav>
			<Link className="nav-links" to='/contact'>Login/Register</Link>		
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
















