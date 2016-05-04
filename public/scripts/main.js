import $ from 'jquery';
import Backbone from 'backbone';
import {sync, errorHandler} from './ajax';
Backbone.sync = sync;
$.ajaxSetup({
	headers: {
		Accept: 'application/json'
	},
	beforeSend: function(xhr) {
		let error = this.error;
		if(error) {
			this.error = function(xhr) {
				errorHandler(xhr, error);
			};
		}
	}
});

import React from 'react';
import ReactDOM from 'react-dom';
import Model from './../../PlanetModel';


const Planet = React.createClass ({
	getInitialState: function(){
		console.log('getInitialState');
		return{Planets: new Model};
	},
	componentDidMount: function(){
		console.log('I mounted Planet!');
		this.state.Planets.fetch();
		this.state.Planets.on('change', (updatedPlanets) => {
			this.setState({Planets: updatedPlanets});
		});
	
	},
	
	render: function(){
		return (
			<section>
				<h1>{this.state.story.get('name')}</h1>
			</section>
			);

	}	
});

ReactDOM.render(<Planet />, document.querySelector('.app'));



