import React from 'react';
import planetcollection from '../../collections/PlanetCollection.js';
import Planet from '../../components/Planet.js';


export default React.createClass({
	
	getInitialState: function(){
		console.log('getInitialState');
		return{planetcollection: planetcollection};
	},
	
	componentDidMount: function(){
		// console.log('I mounted Planet!');
		this.state.planetcollection.on('update', () => {
			this.setState({planetcollection: planetcollection});
			console.log('update');
			// let unfetchedPlanets = planetcollection.filter(planet => !planet.get('name'));
			// console.log(unfetchedPlanets.length);
			// if(unfetchedPlanets.length === 0) {
			
			// }
		});
		this.state.planetcollection.fetch();
	
	},

	render: function(){
			let planets = this.state.planetcollection.map(
				function(value, index, array) {
					return (
						<Planet 
						key={value.get('id')}
						id={value.get('id')}
						name={value.get('name')} 
						top ={value.get('top')}
						left={value.get('left')}/>
					);
				});

			return(
				<section className='galaxy'>
					<div className="row">
						<div className="ten columns galaxycontainer">
							 <img src='../images/sw_galaxy.png' width='100%' height='auto'/>
							 <p className='core'>Deep Core</p>
							 <p className='core1'>Core</p>
							 <p className='hutt'>Hutt Space</p>
							 <p className='colonies'>Colonies</p>
							 <p className='outer'>Outer Rim</p>
							 <p className='mid'>Mid Rim</p>
							 <p className='expansion'>Expansion Region</p>
							 <p className='inner'>Inner Rim</p>
							 <p className='western'>Western Reaches</p>
							{planets}
						</div>
						<div className="two columns">
							<ul className='mapindex'>
							  <li className='planet'><div className='sphere'></div>Planet</li>
							  <li className='routes'><div className='num'>1</div>Perlemian Trade Route</li>
							  <li className='routes'><div className='num'>2</div>Corellian Run</li>
							  <li className='routes'><div className='num'>3</div>Corellian Trade Spine</li>
							  <li className='routes'><div className='num'>4</div>Rima Trade Spine</li>
							  <li className='routes'><div className='num'>5</div>Hydian Way</li>
							</ul>
						</div> 
					</div>
					<div className='maptitle'>The Galaxy</div>
				</section>
				);
	}	
});







