import React from 'react';
import PostCollection from '../collections/PostCollection'; 
import user from '../models/User.js';

export default React.createClass({
	getInitialState: function() {
		return {postcollection: PostCollection};
	},

	componentDidMount: function() {
		this.state.postcollection.on('change update', () => {
			this.setState({postcollection: PostCollection});

		});
	},

	render: function() {
		return (
			<div className='row'>
				<div className='offset-by-one ten columns'>
					<form class='postform' onSubmit={this.savePost}>
						<textarea className='postentry' 
								placeholder="Describe your visit" 
								ref="travelpost" 
								name="travelpost" 
								cols="80" 
								rows="10"></textarea>
						<button type='submit'>Save</button>
					</form>
				</div>
			</div>
			);

	},

	savePost: function(e) {
		e.preventDefault();
		
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





