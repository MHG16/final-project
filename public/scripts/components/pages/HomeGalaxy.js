import React from 'react';
import planetcollection from '../../collections/PlanetCollection.js';
import Planet from '../../components/Planet.js';


export default React.createClass({
	
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
					return (<Planet
					name={value.get('name')} />
					);
				});

			return(
				<section>
					{planets}
				</section>
				);
	}	
});







