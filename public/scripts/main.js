import $ from 'jquery';
import Backbone from 'backbone';
import React from 'react';
import ReactDOM from 'react-dom';
import planetcollection from './collections/PlanetCollection';
import planetModel from './models/PlanetModel'

const Planet = React.createClass ({
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
		
		return (
			<section>
		{/*need to map over a model here in order to get what we are looking for*/}
				<h1>{this.state.planetcollection.get('name')}</h1>
			}
			</section>
			);

	}	
});

ReactDOM.render(<Planet />, document.querySelector('.app'));



