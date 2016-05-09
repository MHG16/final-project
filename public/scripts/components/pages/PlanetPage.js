import React from 'react';
import PlanetData from '../PlanetData.js';
import Blog from '../Blog.js';

import Model from '../../models/PlanetModel.js';

export default React.createClass({
	
	getInitialState: function () {
	  	
		return {
			planet: new Model({id: this.props.params.planetId})
		};
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
				
		return(
			<section>
				<PlanetData 
					name={this.state.planet.get('name')} 
					climate={this.state.planet.get('climate')}
					diameter={this.state.planet.get('diameter')}
					population={this.state.planet.get('population')}/>
				<Blog />
			</section>
			);	

		}
});






