import React from 'react';
import PostCollection from '../collections/PostCollection'; 
import IndivPost from './IndivPost';

export default React.createClass({
	getInitialState: function() {
		return {postcollection: PostCollection};
	},

	componentDidMount: function() {
		//console.log('componentDidMount');
		this.state.postcollection.on('change update', () => {
			this.setState({postcollection: this.state.postcollection});

		});
		console.log('test', {
			data: {
				where: {
					planetId: this.props.planetId
				}
			}
		});

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

	render: function() {
		//console.log(this.state.postcollection);

		//want the latest entry to display first below the form
		//entries should display with newest first so we use reverse()

		let reversedArray = this.state.postcollection.models.reverse();
		let listOfPosts = reversedArray.map((value, i, arr) => {
			return (
					<IndivPost
					key = {value.get('id')}
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



