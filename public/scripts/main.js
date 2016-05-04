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
import PlanetModel from './../../PlanetModel';


const Planet = React.createClass ({
	getInitialState: function(){
		console.log('getInitialState');
		return{Planets: Planets};
	},
	componentDidMount: function(){
		console.log('I mounted Planet!');
		Planets.fetch();
		Planets.on('update', this.updatePlanets);
		Planets.fetch();
	},
	// componentWillUnmount: function() {
	// 	Stories.off('update', this.updateStories);
	//},
	updatePlanets: function() {
		this.setState({Planets: Planets});
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



