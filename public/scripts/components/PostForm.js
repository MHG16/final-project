import React from 'react';
import postcollection from '../collections/PostCollection'; 
import user from '../models/User.js';

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
					<textarea placeholder="Descibe your visit" ref="travelpost" name="travelpost" cols="60" rows="10"></textarea>
					<button type='submit'>Save</button>
				</form>
			</div>
			);

	},

	savePost: function(e) {
		e.preventDefault();
		//want the latest entry to display first below the form
		

		//then want the latest post to save to the collection
		this.state.postcollection.create({
			planetId: this.props.planetId,
			userId: user.get('id'),
			body: this.refs.travelpost.value 

		});

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





