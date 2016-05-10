import React from 'react';
import PlanetData from '../PlanetData.js';
import Post from '../Post.js';
import Model from '../../models/PlanetModel.js';
import tableplanetmodel from '../../models/TablePlanetModel.js';

export default React.createClass({
	
	getInitialState: function () {
	  	
		return {
			planet: new Model({id: this.props.params.planetId}),
			tableplanet: new tableplanetmodel({id: this.props.params.planetId})
		};
	 },

	componentDidMount: function () {

		this.state.planet.fetch();
		this.state.planet.on('change', this.modelChange); 
		this.state.tableplanet.fetch();
		this.state.tableplanet.on('change', this.modelChange); 
		
	},

	componentWillUnmount: function () {
		this.state.planet.off('change', this.modelChange);
		this.state.tableplanet.off('change', this.modelChange);

	},

	modelChange: function (updatedPlanet) {
		this.setState({planet: updatedPlanet});
	},

	render: function() {
				
		return(
			<section>
				<PlanetData 
					name={this.state.planet.get('name')} 
					image={this.state.tableplanet.get('image')}
					climate={this.state.planet.get('climate')}
					diameter={this.state.planet.get('diameter')}
					population={this.state.planet.get('population')}
					terrain={this.state.planet.get('terrain')}
					surface_water={this.state.planet.get('surface_water')}
					gravity={this.state.planet.get('gravity')}
					orbital_period={this.state.planet.get('orbital_period')}
					rotation_period={this.state.planet.get('rotation_period')}
					/>
				<Post />
			</section>
			);	

		}
});






