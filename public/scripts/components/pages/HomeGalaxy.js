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
		this.state.planetcollection.on('change update', () => {
			this.setState({planetcollection: planetcollection});
			console.log('testing');
		});
		this.state.planetcollection.fetch();
	
	},

	render: function(){
			let planets = this.state.planetcollection.map(
				function(value, index, array) {
					return (
					<div>
						<Planet name={value.get('name')} id={value.get('id')} />
						<br/>
					</div>
					);
				});

			return(
				<section>
					{/*<img src="/images/galaxy.jpg"/>*/}
					{planets}
				</section>
				);
	}	
});







