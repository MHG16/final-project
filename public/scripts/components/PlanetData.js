import React from 'react';
//import Planet from '../components/Planet.js';

/*component to render a picture and all data on the particular planet that was clicked
on the HomeGalaxy page.  This is displayed on PlanetPage */
export default React.createClass({

	render: function(){
			return(
				<section className='planetdata'>
					<div className='row'>
						<div className='offset-by-one four columns'>
							<h1 className='planetname'>{this.props.name}</h1>
							<img src={this.props.image} width='95%' height='auto' className='planetpic'/>
						</div>
						<div className='four columns'>
							<ul>
								<li><h2 className='category'>Climate:</h2><h3 className='data'>{this.props.climate}</h3></li>
								<li><h2 className='category'>Terrain:</h2><h3 className='data'>{this.props.terrain}</h3></li>
								<li><h2 className='category'>Surface Water:</h2><h3 className='data'>{this.props.surface_water}</h3></li>
								<li><h2 className='category'>Diameter:</h2><h3 className='data'>{this.props.diameter}</h3></li>
								<li><h2 className='category'>Population:</h2><h3 className='data'>{this.props.population}</h3></li>
								<li><h2 className='category'>Gravity:</h2><h3 className='data'>{this.props.gravity}</h3></li>
								<li><h2 className='category'>Orbital Period:</h2><h3 className='data'>{this.props.orbital_period}</h3></li>
								<li><h2 className='category'>Rotation Period:</h2><h3 className='data'> {this.props.rotation_period}</h3></li>
							</ul>	
						</div>
					</div>
				</section> 
				);
	}	
});
















	
