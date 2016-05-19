
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import App from './components/App';
import HomeGalaxy from './components/pages/HomeGalaxy';
import PlanetPage from './components/pages/PlanetPage';
import Planet from './components/Planet.js';

$.ajaxSetup({
	headers: {
		Accept: 'application/json'
	}
});

const router = (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={HomeGalaxy}/>
			<Route path="/planet" component={Planet}/>
			<Route path="/planet/:planetId/planetpage" component={PlanetPage}/>
		</Route>
	</Router>
);

ReactDOM.render(router, document.getElementById('app'));
