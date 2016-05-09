import React from 'react';
import PlanetData from '../PlanetData.js';
import Blog from '../Blog.js';

import Model from '../../models/PlanetModel.js';

export default React.createClass({
	
	getInitialState: function () {
	  	
		return {planet: new Model({id: this.props.id})};
	 },

	componentDidMount: function () {

		this.state.planet.fetch();
		this.state.planet.on('change', this.modelChange); 
		
	},

	componentWillUnmount: function () {
		this.state.planet.off('change', this.modelChange);

	},

	modelChange: function (updatedPlanet) {
		this.setState({planet: updatedPlanet});
	},

	render: function() {
			// return (
			// 		<div>
			// 			<Planet
			// 			key = {value.get('id')}
			// 			name={value.get('name')} 
			// 			id={value.get('id')} />
			// 			<br/>
			// 		</div>
			// 		);
				
		return(
			<section>
				<PlanetData />
				<Blog />
			</section>
			);	

		}
});






