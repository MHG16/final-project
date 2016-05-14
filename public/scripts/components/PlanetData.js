import React from 'react';
//import Planet from '../components/Planet.js';

/*component to render a picture and all data on the particular planet that was clicked
on the HomeGalaxy page.  This is displayed on PlanetPage */
export default React.createClass({

	render: function(){
			return(
				<section>
					<p className='data'>{this.props.name}</p>
					<img src={this.props.image}/> 
					<h2>Climate:{this.props.climate}</h2>
					<h2>Terrain:{this.props.terrain}</h2>
					<h2>Surface Water:{this.props.surface_water}</h2>
					<h2>Diameter:{this.props.diameter}</h2>
					<h2>Population:{this.props.population}</h2>
					<h2>Gravity:{this.props.gravity}</h2>
					<h2>Orbital Period:{this.props.orbital_period}</h2>
					<h2>Rotation Period:{this.props.rotation_period}</h2>
				</section> 
				);
	}	
});
















	
