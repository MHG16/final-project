import React from 'react';
import postcollection from '../collections/PostCollection'; 
import $ from 'jquery';

export default React.createClass({
	getInitialState: function() {
		return {postcollection: new postcollection()};
	},

	componentDidMount: function() {
		this.state.postcollection.on('change update', () => {
			this.setState({postcollection: postcollection});

		});
	},

	render: function() {
		return (
			<div>
				<form onSubmit={this.savePost}>
					<textarea placeholder="Descibe your visit" ref="travelpost" name="travelpost" cols="80" rows="40"></textarea>
					<button type='submit'>Save</button>
				</form>
			</div>
			);

	},

	savePost: function(e) {
		e.preventDefault();
		$.ajax({
		url: '/api/v1/post',
		type: 'POST',
		headers: {Accept: 'application/JSON'},
		data: {
			body: this.refs.travelpost.value
		},

	success: (loggedArg) => {
		console.log('I was successful in posting!');
		this.state.postcollection.set(loggedArg);
		
	},
	error: (errorArg) => {
			console.log('There was an error in posting');
			this.setState({errors: errorArg.responseJSON});
		}
		});
	}


});





