import React from 'react';
import postcollection from '../collections/PostCollection'; 

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
		e.preventDefault;
		$.ajax({
		url: '/api/v1/post',
		type: 'POST',
		data: {
			body: this.refs.travelpost.value
		},

	success: (loggedArg) => {
			
		this.state.postcollection.set(loggedArg);
		
	},
	error: (errorArg) => {

			this.setState({errors: errorArg.responseJSON});
		}
		});
	}


});





