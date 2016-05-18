import React from 'react';
import $ from 'jquery';
import {browserHistory} from 'react-router';
import user from '../models/User';


export default React.createClass({
		getInitialState: function() {
		return {
			errors: {},
			user: user
		};
	},

	render: function() {
		return (
			<section className="page-login container">
				<div className="offset-by-four four columns">
					<form onSubmit={this.login} className="login-box"> <h1>Login</h1>
						<input className="u-full-width" type="text" placeholder="email" ref='email' title="Should be a valid email address" required="required"/>
						<div className="error">{this.state.errors.email ? this.state.errors.email.message : null} </div> 
						<input className="u-full-width" type="password" placeholder="password" ref='password' title="Password is required and cannot left blank" required="required"/>
						<div className="error">{this.state.errors.password ? this.state.errors.password.message : null}</div>
						<button className="button-primary" type='submit'> Login </button>
					</form>
				</div>
			</section>
		);
	},
	login: function(e) {
		//console.log('login', this.props);
	e.preventDefault();
	$.ajax({
		url: '/auth/login',
		type: 'POST',
		data: {
			email: this.refs.email.value,
			password: this.refs.password.value
		},

		success: (loggedArg) => {
			user.set(loggedArg);
			console.log('successful login request', user.toJSON(), user.cid);

			//now need to close the modal
			// console.log(this.props.closeModal);
			this.props.closeModal();
			//direct to the home page
			browserHistory.push('/');
		},
		error: (errorArg) => {
				

				this.setState({errors: errorArg.responseJSON});
			}
		});
	}
});



