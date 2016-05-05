import React from 'react';
import planetcollection from './collections/PlanetCollection';
import planetmodel from './models/PlanetModel';
import planet from './Planet.js';


const Planet = React.createClass ({
	getInitialState: function(){
		console.log('getInitialState');
		return{planetcollection: planetcollection};
	},
	componentDidMount: function(){
		console.log('I mounted Planet!');
		this.state.planetcollection.fetch();
		this.state.planetcollection.on('update', () => {
			this.setState({planetcollection: planetcollection});
			console.log('testing');
		});
	
	},

	
	render: function(){
			let planets = this.state.planetcollection.map(
				function(value, index, array) {
					return <planetmodel name={value.get('name')} />;
				});

			return (
				<section>
					{planets}
				</section>
				);

	}	
});