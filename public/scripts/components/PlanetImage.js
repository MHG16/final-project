import React from 'react';
import tableplanetmodel from './models/TablePlanetModel.js';


//component to render a planet picture 
export default React.createClass({
 	getInitialState: function () {
	  	
		return {
			tableplanet: new tableplanetmodel({id: this.props.params.planetId})
		};
	 },

	componentDidMount: function () {

		this.state.tableplanet.fetch();
		this.state.tableplanet.on('change', this.modelChange); 
		
	},

	componentWillUnmount: function () {
		this.state.tableplanet.off('change', this.modelChange);

	},

	modelChange: function (updatedPlanet) {
		this.setState({tableplanet: updatedPlanet});
	},

	render: function () {
	return(
			<img src="{this.props.image}"/> 
		);
	}
});








