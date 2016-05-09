import React from 'react';
//import Planet from '../components/Planet.js';
import PlanetImage from './PlanetImage';

/*component to render a picture and all data on the particular planet that was clicked
on the HomeGalaxy page.  This is displayed on PlanetPage */


export default React.createClass({

	render: function(){
			return(
				<section>
					<h1>This is where my planet data will go</h1>
					<PlanetImage />
					<h2>Name:{this.props.name}</h2>
					<h2>Climate:{this.props.climate}</h2>
					<h2>Diameter:{this.props.diameter}</h2>
					<h2>Population:{this.props.population}</h2>
				</section> 
				);
	}	
});
















	
