import React from 'react';
//import Planet from '../components/Planet.js';
import PlanetImage from './PlanetImage';

/*component to render a picture and all data on the particular planet that was clicked
on the HomeGalaxy page.  This is displayed on PlanetPage */


export default React.createClass({
	
getInitialState: function(){
		console.log(this.props.params.id);
		return{id: this.props.params.id};
	},
	componentDidMount: function(){
		this.state.planetcollection.on('change update', () => {
			this.setState({id: id});

		});
		this.state.id.fetch();

	},

	render: function(){
			return(
				<section>
					<h1>This is where my planet data will go</h1>
					<PlanetImage />
					<h2>Name:{this.props.name}</h2>
					<h2>Climate:</h2>
					<h2>Diameter:</h2>
					<h2>Population:</h2>
				</section> 
				);
	}	
});
















	
