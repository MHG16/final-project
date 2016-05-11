import React from 'react';
import PostCollection from '../collections/PostCollection'; 
import IndivPost from './IndivPost';

export default React.createClass({
	getInitialState: function() {
		return {postcollection: PostCollection};
	},

	componentDidMount: function() {
		console.log('componentDidMount');
		this.state.postcollection.on('change update', () => {
			this.setState({postcollection: this.state.postcollection});

		});
		console.log(this.state.postcollection);
		this.state.postcollection.fetch({data: {}});
	},

	render: function() {
		console.log(this.state.postcollection);

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



