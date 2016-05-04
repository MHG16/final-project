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
import PlanetModel from '';
// import {Router, Route, browserHistory, IndexRoute} from 'react-router';
// import App from './components/App';








