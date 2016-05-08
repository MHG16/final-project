import React from 'react';
import Planetdata from '../PlanetData.js';
// import Blog from '../Blog.js';

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
		return (
			<section>
				<h1>Planet page:</h1>
					<h2>Name:{this.props.name}</h2>
					<h2>Climate:{this.props.climate}</h2>
					<h2>Diameter:{this.props.diameter}</h2>
					<h2>Population:{this.props.population}</h2>
				{/*<Blog />*/}
			</section>
		);
	}
});






