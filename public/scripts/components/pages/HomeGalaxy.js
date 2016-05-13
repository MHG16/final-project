import React from 'react';
import planetcollection from '../../collections/PlanetCollection.js';
import Planet from '../../components/Planet.js';
import $ from 'jquery';

export default React.createClass({
	
	getInitialState: function(){
		console.log('getInitialState');
		return{planetcollection: planetcollection};
	},
	
	componentDidMount: function(){
		console.log('I mounted Planet!');
		this.state.planetcollection.on('change update', () => {
			this.setState({planetcollection: planetcollection});
			console.log('testing');
		});
		$.ajax('/api/v1/planet', {success: (planets) => {
			planetcollection.set(planets);
		}} );
		this.state.planetcollection.fetch();
	
	},

	render: function(){
			let planets = this.state.planetcollection.map(
				function(value, index, array) {
					return (
					<div>
						<Planet 
						key={value.get('id')}
						id={value.get('id')}
						name={value.get('name')} 
						top ={value.get('top')}
						left={value.get('left')}/>
						<br/>
					</div>
					);
				});

			return(
				<section>
					{planets}
				</section>
				);
	}	
});







