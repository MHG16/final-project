import $ from 'jquery';
import Backbone from 'backbone';
import React from 'react';
import ReactDOM from 'react-dom';

import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import HomeGalaxy from './components/pages/HomeGalaxy';
import PlanetPage from './components/pages/PlanetPage';


// function requireAuth(nextState, replace) {
// 	  if (!user.get('id')) {
// 	    replace({
// 	      pathname: '/login'
// 	    });
// 	}
// }

const router = (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={HomeGalaxy}/>
			<Route path="/planets" component={PlanetPage}/>
		</Route>
	</Router>
);

ReactDOM.render(router, document.getElementById('app'));
