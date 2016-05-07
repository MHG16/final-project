import $ from 'jquery';
import Backbone from 'backbone';
import React from 'react';
import ReactDOM from 'react-dom';

import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import App from './components/App';
import HomeGalaxy from './components/pages/HomeGalaxy';
import PlanetPage from './components/pages/PlanetPage';



const router = (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={HomeGalaxy}/>
			<Route path="/planet/:planetId" component={PlanetPage}/>
		</Route>
	</Router>
);

ReactDOM.render(router, document.getElementById('app'));
