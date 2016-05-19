import React from 'react';
import PostCollection from '../collections/PostCollection'; 
import user from '../models/User.js';

export default React.createClass({
	getInitialState: function() {
		return {postcollection: PostCollection};
	},

	updatePosts: function () {
			this.setState({postcollection: postcollection});
			//console.log('update');
			// let unfetchedPlanets = planetcollection.filter(planet => !planet.get('name'));
			// console.log(unfetchedPlanets.length);
			// if(unfetchedPlanets.length === 0) {
			
			// }
		},

	componentDidMount: function() {
		this.state.postcollection.on('change update', this.updatePlanets);
			this.setState({postcollection: PostCollection});

		
	},


	componentWillUnmount: function () {
		this.state.postcollection.off('change update', this.updatePosts);
	},

	render: function() {
		return (
			<div className='row'>
				<div className='offset-by-one ten columns'>
					<form className='postform' onSubmit={this.savePost}>
						<textarea className='postentry' 
								placeholder="Please describe your visit to this planet." 
								ref="travelpost" 
								name="travelpost"  
								rows="15"></textarea>
						<div className='row'>		
							<div className='offset-by-ten one columns'>
								<button className='save' type='submit'>Save</button>
							</div>
						</div>
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
		//console.log('I was successful in posting!');
		this.state.postcollection.set(loggedArg);

		
	},
	error: (errorArg) => {
			//console.log('There was an error in posting');
			this.setState({errors: errorArg.responseJSON});
		}
		
	


});





