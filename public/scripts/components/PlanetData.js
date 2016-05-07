import React from 'react';
import planetcollection from '../collections/PlanetCollection.js';
import Planet from '../../components/Planet.js';

/*component to render a picture and all data on the particular planet that was clicked
on the HomeGalaxy page.  This is displayed on PlanetPage */


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
			return(
				<section>
					<h1>This is where my planet data will go</h1>
					<Planet name={value.get('name')} />
				</section> 
				);
	}	
});
















	
