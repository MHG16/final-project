import React from 'react';
import PostCollection from '../collections/PostCollection'; 
import IndivPost from './IndivPost';

export default React.createClass({
	getInitialState: function() {
		return {postcollection: PostCollection};
	},

	updatePosts: function () {
			this.setState({postcollection: PostCollection});
			//console.log('update');
			// let unfetchedPlanets = planetcollection.filter(planet => !planet.get('name'));
			// console.log(unfetchedPlanets.length);
			// if(unfetchedPlanets.length === 0) {
			
			// }
		},


	componentDidMount: function() {
		//console.log('componentDidMount');
		this.state.postcollection.on('change update', this.updatePosts); 
			//this.setState({postcollection: this.state.postcollection});

		
		

		//need to use where: {planetId: this.props.planetId} here so that each planet page only
		//displays the blog entries on that page.  
		this.state.postcollection.fetch({
			data: {
				where: {
					planetId: this.props.planetId
				}
			}
		});	
	},

	componentWillUnmount: function () {
		this.state.postcollection.off('change update', this.updatePosts);
	},



	render: function() {
		//console.log(this.state.postcollection);

		//want the latest entry to display first below the form
		//entries should display with newest first so we use reverse()

		let reversedArray = this.state.postcollection.models.reverse();
		let listOfPosts = reversedArray.map((value, i, arr) => {
			return (
					<IndivPost
					key = {i}
					id = {value.get('id')}
					body = {value.get('body')} />
				);
			});

		return (
			<section>
					{listOfPosts}
			</section>
			);

	}	

});



