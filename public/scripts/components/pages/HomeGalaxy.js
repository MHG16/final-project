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
				<section className='galaxy'>
					<div className="row">
						<div className="ten columns">
							 <img src='../images/sw_galaxy.png' width='85%' height='auto'/>
							{planets}
						</div>
						<div className="two columns">
							<ul className='mapindex'>
							  <li className='routes'>1 Perlemian Trade Route</li>
							  <li className='routes'>2 Corellian Run</li>
							  <li className='routes'>3 Corellian Trade Spine</li>
							  <li className='routes'>4 Rima Trade Spine</li>
							  <li className='routes'>5 Hydian Way</li>
							</ul>
						</div> 
					</div>
					<div className='maptitle'>The Galaxy</div>
				</section>
				);
	}	
});







