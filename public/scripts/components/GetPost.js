import React from 'react';
import postcollection from '../collections/PostCollection'; 
import IndivPost from './IndivPost';

export default React.createClass({
	getInitialState: function() {
		return {postcollection: new postcollection()};
	},

	componentDidMount: function() {
		console.log('componentDidMount');
		this.state.planetcollection.on('change update', () => {
			this.setState({planetcollection: planetcollection});

		});
		planetcollection.fetch({data: {}});
	},

	render: function() {
		console.log('render');

		let listOfPosts = this.state.planetcollection.map((value, i, arr) => {
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



