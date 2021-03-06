import React from 'react';
import $ from 'jquery';
import {browserHistory} from 'react-router';
import user from '../models/user';

export default React.createClass({
	getInitialState: function() {
		//console.log('getInitialState');
		return {
			errors: {},
			user: user
		};
	},
	

	render: function() {
		//console.log('render');
		return (
			<section>
				<h1>Register</h1>
				<form onSubmit={this.register}>
					<input type="text" placeholder="First Name" ref="firstName"/>
					<input type="text" placeholder="Last Name" ref="lastName"/>
					<input type="text" placeholder="Email" ref="email"/>
					<input type="password" placeholder="Password" ref="password" />
					<div className="error">{this.state.errors.email ? this.state.errors.email.message : null}</div>
					<div ref='whichSide'>
						<h4 className='choose'>Which side are you on?</h4>
						<label>
							<input 
									type='radio'
									name='side'
									className='radio'
									value="true"
									defaultChecked="checked" 
									/>
						Rebellion
						</label>
						<label>
							<input 
								
									type='radio'
									name='side'
									className='radio'
									value="false"
									/>
						Empire
						</label>
					</div>
					<div className="error">{this.state.errors.password ? this.state.errors.password.message : null}</div>
					<button type="submit">Register</button>
				</form>
			</section>
		);
	},
	register: function(e) {
		//console.log('register');
		e.preventDefault();
		var whichSide = this.refs.whichSide.querySelector('input:checked').value;
		//console.log(whichSide);
		if (whichSide === 'true') {
			whichSide = true;
		} else {
			whichSide = false;
		}


		$.ajax({
			url: '/auth/register',
			type: 'POST',
			data: {
				email: this.refs.email.value,
				password: this.refs.password.value,
				firstName: this.refs.firstName.value,
				lastName: this.refs.lastName.value,
				rebel: whichSide
			},
			// dataType: 'json',
			headers: {
				Accept: 'application/json'
			},
			success: (registeredUser) => {
				//console.log('success');
				//console.log(registeredUser);
				this.state.user.set(registeredUser);
				//console.log(this.state.user);
				//now need to close the modal
				this.props.closeModal();
				//direct to the home page
				browserHistory.push('/');
			},
			error: (errorArg) => {
				//console.log('error');
				//console.log(errorArg);
				this.setState({errors: errorArg.responseJSON});
			}
		});
	}

	// editWhichSide: function (e) {
	// 	console.log(e.target.value);
	// 	this.state.user.set('whichSide', e.target.value);
	// }

});